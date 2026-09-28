// Serves the Markdown twin of a page to clients that ask for it with
// `Accept: text/markdown` (Claude Code, Cursor, OpenCode, ...). See the
// Agent-Friendly Docs spec, content-negotiation check:
// https://agentdocsspec.com/spec/web/markdown-availability/#content-negotiation
//
// The twins are emitted at build time by @signalwire/docusaurus-plugin-llms-txt
// (see docusaurus.config.js): /<route>.md, and /index.md for the home page.
//
// Netlify only invokes this function when the Accept header mentions
// text/markdown (see `config.header` below), so browser traffic never pays for
// it. Returning `undefined` hands the request back to the normal chain
// (redirects, then static HTML).

export const config = {
  path: '/*',
  excludedPath: [
    '/*.md',
    '/*.txt',
    '/*.xml',
    '/assets/*',
    '/favicons/*',
    '/fonts/*',
    '/images/*',
    '/img/*',
    '/js/*',
    '/social/*',
  ],
  // Netlify's manifest validator accepts only GET, POST, PUT, PATCH, DELETE,
  // and OPTIONS here; HEAD requests are routed like GET at the CDN.
  method: ['GET'],
  // Netlify treats this string as a case-sensitive regular expression, while
  // media types are case-insensitive, so each letter is spelled both ways.
  header: { accept: '[Tt][Ee][Xx][Tt]/[Mm][Aa][Rr][Kk][Dd][Oo][Ww][Nn]' },
  // Progressive enhancement: on error, fall through to the HTML page.
  onError: 'bypass',
};

// Upstream headers worth keeping on the twin. Content-Length and
// Content-Encoding are deliberately dropped: fetch() hands us a decoded body.
const FORWARDED_HEADERS = ['cache-control', 'etag', 'last-modified'];

export default async function handler(request) {
  if (!prefersMarkdown(request.headers.get('accept'))) return undefined;

  // Assigning `pathname` keeps the fetch on our origin. Resolving the path
  // against the origin instead would read a `//host/...` request path as a
  // network-path URL and fetch from that host.
  const twinUrl = new URL(request.url);
  twinUrl.pathname = markdownPathFor(twinUrl.pathname);
  twinUrl.search = '';
  const twin = await fetch(twinUrl, { method: request.method });
  if (!twin.ok) return undefined;

  const headers = new Headers({
    'content-type': 'text/markdown; charset=utf-8',
  });
  for (const name of FORWARDED_HEADERS) {
    const value = twin.headers.get(name);
    if (value) headers.set(name, value);
  }
  headers.set('vary', 'Accept');
  return new Response(twin.body, { status: twin.status, headers });
}

// True when `accept` explicitly lists text/markdown with a weight that is
// non-zero and at least as high as HTML's. Absent or wildcard-only headers are
// false: only an explicit request for markdown gets markdown.
export function prefersMarkdown(accept) {
  if (!accept) return false;
  const weights = parseAccept(accept);
  const markdown = weights.get('text/markdown');
  if (!markdown) return false;
  return markdown >= htmlWeight(weights);
}

// Weight the client gives the HTML page: the most specific range that covers
// text/html (RFC 9110 §12.5.1), or an explicit application/xhtml+xml entry,
// whichever is higher.
function htmlWeight(weights) {
  const html =
    weights.get('text/html') ??
    weights.get('text/*') ??
    weights.get('*/*') ??
    0;
  return Math.max(html, weights.get('application/xhtml+xml') ?? 0);
}

// Path of the Markdown twin for a page route. No guessing about file
// extensions here: `config.excludedPath` keeps known assets away from the
// function, and any other path without a twin 404s and falls through.
export function markdownPathFor(pathname) {
  const trimmed = pathname.replace(/\/+$/, '');
  if (trimmed === '') return '/index.md';
  return `${trimmed}.md`;
}

// Map of lowercased media type -> q weight (default 1). Wildcards are kept as
// written ("*/*", "text/*") so callers can ignore them by exact lookup.
function parseAccept(accept) {
  const weights = new Map();
  for (const entry of accept.split(',')) {
    const [type, ...params] = entry.split(';');
    const mediaType = type.trim().toLowerCase();
    if (!mediaType) continue;
    let q = 1;
    for (const param of params) {
      const [name, value] = param.split('=');
      if (name.trim().toLowerCase() === 'q') {
        const parsed = Number.parseFloat(value);
        q = Number.isNaN(parsed) ? 0 : parsed;
      }
    }
    weights.set(mediaType, q);
  }
  return weights;
}
