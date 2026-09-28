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
    '/fonts/*',
    '/images/*',
    '/img/*',
    '/js/*',
    '/social/*',
  ],
  method: ['GET', 'HEAD'],
  header: { accept: 'text/markdown' },
  // Progressive enhancement: on error, fall through to the HTML page.
  onError: 'bypass',
};

// Upstream headers worth keeping on the twin. Content-Length and
// Content-Encoding are deliberately dropped: fetch() hands us a decoded body.
const FORWARDED_HEADERS = ['cache-control', 'etag', 'last-modified'];

export default async function handler(request) {
  if (!prefersMarkdown(request.headers.get('accept'))) return undefined;

  const url = new URL(request.url);
  const markdownPath = markdownPathFor(url.pathname);
  if (!markdownPath) return undefined;

  const twin = await fetch(new URL(markdownPath, url.origin), {
    method: request.method,
  });
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
  const html = Math.max(
    weights.get('text/html') ?? 0,
    weights.get('application/xhtml+xml') ?? 0,
  );
  return markdown >= html;
}

// Path of the Markdown twin for a page route, or null when the path already
// names a file (has an extension in its last segment) and so has no twin.
export function markdownPathFor(pathname) {
  const trimmed = pathname.replace(/\/+$/, '');
  if (trimmed === '') return '/index.md';
  const lastSegment = trimmed.slice(trimmed.lastIndexOf('/') + 1);
  if (lastSegment.includes('.')) return null;
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
