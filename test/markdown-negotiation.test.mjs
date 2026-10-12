import { afterEach, describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';

import handler, {
  config,
  markdownPathFor,
  prefersMarkdown,
} from '../netlify/edge-functions/markdown-negotiation.mjs';

describe('config', () => {
  it('runs only for GET requests that mention text/markdown', () => {
    assert.equal(config.path, '/*');
    assert.deepEqual(config.method, ['GET']);
    assert.ok(config.header.accept);
  });

  // Netlify matches header values as case-sensitive regular expressions, but
  // media types are case-insensitive (RFC 9110 §8.3.1).
  it('gates on text/markdown in any letter case', () => {
    const gate = new RegExp(config.header.accept);
    for (const accept of [
      'text/markdown',
      'Text/Markdown',
      'TEXT/MARKDOWN',
      'text/html;q=0.9, text/markdown',
    ]) {
      assert.ok(gate.test(accept), `${accept} should invoke the function`);
    }
    for (const accept of ['text/html', 'text/plain, */*', '*/*']) {
      assert.ok(!gate.test(accept), `${accept} should not invoke the function`);
    }
  });

  it('never runs for the twins themselves or static assets', () => {
    assert.ok(config.excludedPath.includes('/*.md'));
    assert.ok(config.excludedPath.includes('/*.txt'));
    assert.ok(config.excludedPath.includes('/favicons/*'));
    for (const path of [config.path, ...config.excludedPath]) {
      assert.ok(path.startsWith('/'), `${path} must start with /`);
    }
  });

  it('fails open so an error still serves the HTML page', () => {
    assert.equal(config.onError, 'bypass');
  });

  // LOCKED: regression for cncf/contribute-site#428 (Netlify deploy 6abad885):
  // the Edge Functions manifest validator rejects any method outside this list,
  // and `HEAD` failed the whole deploy.
  it('lists only methods the Netlify manifest validator accepts', () => {
    const allowed = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];
    for (const method of config.method) {
      assert.ok(allowed.includes(method), `${method} is rejected by Netlify`);
    }
  });
});

describe('prefersMarkdown', () => {
  it('is false without an Accept header', () => {
    assert.equal(prefersMarkdown(null), false);
    assert.equal(prefersMarkdown(''), false);
  });

  it('is false when markdown is not listed', () => {
    assert.equal(prefersMarkdown('text/html'), false);
    assert.equal(prefersMarkdown('*/*'), false);
    assert.equal(prefersMarkdown('text/*'), false);
  });

  it('is true when markdown is listed alone', () => {
    assert.equal(prefersMarkdown('text/markdown'), true);
    assert.equal(prefersMarkdown('Text/Markdown'), true);
  });

  it('is true when markdown and html are listed with equal weight', () => {
    assert.equal(prefersMarkdown('text/markdown, text/html'), true);
    assert.equal(prefersMarkdown('text/html, text/markdown'), true);
    assert.equal(prefersMarkdown('text/markdown;q=0.9, text/html;q=0.9'), true);
    assert.equal(prefersMarkdown('text/markdown, */*;q=0.1'), true);
  });

  it('is false when markdown has lower weight than html', () => {
    assert.equal(prefersMarkdown('text/markdown;q=0.9, text/html'), false);
    assert.equal(prefersMarkdown('text/html, text/markdown; q=0.8'), false);
  });

  // The site serves text/html or text/markdown, never XHTML, so an
  // application/xhtml+xml entry says nothing about the HTML page.
  it('ignores application/xhtml+xml when weighing html', () => {
    assert.equal(
      prefersMarkdown(
        'application/xhtml+xml, text/markdown;q=0.9, text/html;q=0.8',
      ),
      true,
    );
    assert.equal(
      prefersMarkdown('text/markdown;q=0.5, application/xhtml+xml'),
      true,
    );
    assert.equal(
      prefersMarkdown('text/html, application/xhtml+xml, text/markdown;q=0.9'),
      false,
    );
  });

  it('is false when markdown is listed with weight zero', () => {
    assert.equal(prefersMarkdown('text/markdown;q=0'), false);
    assert.equal(prefersMarkdown('text/markdown;q=0, text/html'), false);
  });

  // RFC 9110 §12.5.1: the most specific matching range sets a type's weight.
  it('weighs html through text/* and */* when it is not listed exactly', () => {
    assert.equal(prefersMarkdown('text/markdown;q=0.5, text/*;q=0.9'), false);
    assert.equal(prefersMarkdown('text/markdown;q=0.5, */*'), false);
    assert.equal(prefersMarkdown('text/markdown, */*'), true);
    assert.equal(prefersMarkdown('text/markdown;q=0.8, */*;q=0.8'), true);
  });

  it('lets an exact html weight override a broader wildcard', () => {
    assert.equal(
      prefersMarkdown('text/html;q=0.3, text/*;q=0.9, text/markdown;q=0.5'),
      true,
    );
    assert.equal(
      prefersMarkdown('text/html;q=0, */*, text/markdown;q=0.1'),
      true,
    );
  });

  // RFC 9110 §5.6.4: a quoted parameter value may contain the delimiters.
  it('keeps quoted commas and semicolons inside a parameter value', () => {
    assert.equal(
      prefersMarkdown(
        'text/markdown;profile="alpha,beta";q=0.1, text/html;q=0.9',
      ),
      false,
    );
    assert.equal(
      prefersMarkdown('text/markdown;variant="a;b";q=0.1, text/html;q=0.9'),
      false,
    );
    assert.equal(
      prefersMarkdown('text/html;profile="a,b";q=0.1, text/markdown;q=0.9'),
      true,
    );
  });

  it('treats a backslash-escaped quote as part of the quoted value', () => {
    assert.equal(
      prefersMarkdown('text/markdown;variant="a\\",b";q=0.1, text/html;q=0.9'),
      false,
    );
  });
});

describe('markdownPathFor', () => {
  it('maps the home page to /index.md', () => {
    assert.equal(markdownPathFor('/'), '/index.md');
  });

  it('maps a route to its .md twin, with or without a trailing slash', () => {
    assert.equal(markdownPathFor('/contributors'), '/contributors.md');
    assert.equal(markdownPathFor('/contributors/'), '/contributors.md');
    assert.equal(
      markdownPathFor('/maintainers/community/vendor-neutrality/'),
      '/maintainers/community/vendor-neutrality.md',
    );
  });

  it('maps a route whose slug contains a dot to its .md twin', () => {
    assert.equal(markdownPathFor('/kubernetes-1.35'), '/kubernetes-1.35.md');
    assert.equal(markdownPathFor('/releases/v1.2/'), '/releases/v1.2.md');
  });
});

describe('handler', () => {
  const ORIGIN = 'https://example.test';

  function request(path, { accept = 'text/markdown', method = 'GET' } = {}) {
    const headers = accept ? { accept } : {};
    return new Request(`${ORIGIN}${path}`, { method, headers });
  }

  function stubFetch(status, body = '', headers = {}) {
    return mock.method(
      globalThis,
      'fetch',
      async () =>
        new Response(status === 404 ? null : body, { status, headers }),
    );
  }

  afterEach(() => mock.restoreAll());

  it('bypasses without fetching when the client does not want markdown', async () => {
    const fetchMock = stubFetch(200, '# Nope');
    assert.equal(
      await handler(request('/contributors/', { accept: null })),
      undefined,
    );
    assert.equal(
      await handler(request('/contributors/', { accept: 'text/html' })),
      undefined,
    );
    assert.equal(fetchMock.mock.callCount(), 0);
  });

  it('serves the twin for a route whose slug contains a dot', async () => {
    const fetchMock = stubFetch(200, '# Kubernetes 1.35\n');
    const response = await handler(request('/kubernetes-1.35/'));
    assert.equal(
      String(fetchMock.mock.calls[0].arguments[0]),
      `${ORIGIN}/kubernetes-1.35.md`,
    );
    assert.equal(response.status, 200);
  });

  it('serves the markdown twin when it exists', async () => {
    const fetchMock = stubFetch(200, '# Contributors\n', {
      etag: '"abc"',
      'cache-control': 'public, max-age=0, must-revalidate',
      'content-encoding': 'gzip',
      'content-length': '999',
    });

    const response = await handler(request('/contributors/'));

    const [url, init] = fetchMock.mock.calls[0].arguments;
    assert.equal(String(url), `${ORIGIN}/contributors.md`);
    assert.equal(init.method, 'GET');
    assert.equal(response.status, 200);
    assert.equal(await response.text(), '# Contributors\n');
    assert.equal(
      response.headers.get('content-type'),
      'text/markdown; charset=utf-8',
    );
    assert.equal(response.headers.get('vary'), 'Accept');
    assert.equal(response.headers.get('etag'), '"abc"');
    assert.equal(
      response.headers.get('cache-control'),
      'public, max-age=0, must-revalidate',
    );
    assert.equal(response.headers.get('content-encoding'), null);
    assert.equal(response.headers.get('content-length'), null);
  });

  it('maps the home page to /index.md', async () => {
    const fetchMock = stubFetch(200, '# Home\n');
    const response = await handler(request('/'));
    assert.equal(
      String(fetchMock.mock.calls[0].arguments[0]),
      `${ORIGIN}/index.md`,
    );
    assert.equal(response.status, 200);
  });

  it('bypasses when the twin does not exist so the HTML route still answers', async () => {
    stubFetch(404);
    assert.equal(await handler(request('/no-such-page/')), undefined);
  });

  it('forwards HEAD requests as HEAD', async () => {
    const fetchMock = stubFetch(200, '');
    const response = await handler(
      request('/contributors/', { method: 'HEAD' }),
    );
    assert.equal(fetchMock.mock.calls[0].arguments[1].method, 'HEAD');
    assert.equal(response.status, 200);
  });

  it('drops the query string when fetching the twin', async () => {
    const fetchMock = stubFetch(200, '# Contributors\n');
    await handler(request('/contributors/?utm_source=agent'));
    assert.equal(
      String(fetchMock.mock.calls[0].arguments[0]),
      `${ORIGIN}/contributors.md`,
    );
  });

  // LOCKED: regression for cncf/contribute-site#428 (review r4127994310): a
  // path starting with // was resolved as a network-path URL, so the twin
  // fetch left our origin and re-served third-party content as our own.
  it('keeps the twin fetch on the request origin for double-slash paths', async () => {
    for (const path of [
      '//example.com/page',
      '/\\example.com/page',
      '//example.com/',
    ]) {
      const fetchMock = stubFetch(404);
      assert.equal(await handler(request(path)), undefined);
      const fetched = new URL(fetchMock.mock.calls[0].arguments[0]);
      assert.equal(fetched.origin, ORIGIN, `${path} must stay on ${ORIGIN}`);
      mock.restoreAll();
    }
  });
});
