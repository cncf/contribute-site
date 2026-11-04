import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

import {
  EMPTY_FILTERS,
  filterServices,
  filtersFromSearch,
  filtersToSearch,
} from '../src/components/ServiceCatalog/filter.mjs';
import {
  CATEGORIES,
  REQUEST_METHODS,
} from '../src/components/ServiceCatalog/categories.mjs';

const SERVICES = [
  {
    id: 'fossa',
    name: 'CNCF FOSSA',
    category: 'security',
    description: 'License scanning',
    maturity: ['sandbox', 'incubating', 'graduated'],
    request: 'service-desk',
  },
  {
    id: 'credly',
    name: 'Credly badges',
    category: 'community',
    description: 'Digital badges for contributors',
    maturity: ['graduated'],
    request: 'form-email',
  },
  {
    id: 'blog',
    name: 'CNCF blog',
    category: 'marketing',
    description: 'Submit LICENSE-free posts',
    maturity: ['incubating', 'graduated'],
    request: 'none',
  },
];

const ids = (list) => list.map((s) => s.id);

describe('filterServices', () => {
  it('returns everything with empty filters', () => {
    assert.deepEqual(ids(filterServices(SERVICES, EMPTY_FILTERS)), [
      'fossa',
      'credly',
      'blog',
    ]);
  });

  it('searches name and description case-insensitively', () => {
    const f = { ...EMPTY_FILTERS, q: '  license ' };
    assert.deepEqual(ids(filterServices(SERVICES, f)), ['fossa', 'blog']);
    assert.deepEqual(
      ids(filterServices(SERVICES, { ...EMPTY_FILTERS, q: 'credly' })),
      ['credly'],
    );
  });

  it('matches any checked maturity level', () => {
    const f = { ...EMPTY_FILTERS, maturity: ['sandbox'] };
    assert.deepEqual(ids(filterServices(SERVICES, f)), ['fossa']);
    const g = { ...EMPTY_FILTERS, maturity: ['sandbox', 'incubating'] };
    assert.deepEqual(ids(filterServices(SERVICES, g)), ['fossa', 'blog']);
  });

  it('combines category, request, and search', () => {
    const f = {
      q: 'badge',
      category: 'community',
      maturity: [],
      request: 'form-email',
    };
    assert.deepEqual(ids(filterServices(SERVICES, f)), ['credly']);
    assert.deepEqual(
      ids(filterServices(SERVICES, { ...f, request: 'vendor' })),
      [],
    );
  });
});

describe('query string', () => {
  it('round-trips filters and drops unknown maturity levels', () => {
    const f = {
      q: 'ci runners',
      category: 'ci-infra',
      maturity: ['sandbox', 'graduated'],
      request: 'service-desk',
    };
    assert.deepEqual(filtersFromSearch(filtersToSearch(f)), f);
    assert.deepEqual(filtersFromSearch('?maturity=bogus,sandbox').maturity, [
      'sandbox',
    ]);
    assert.equal(filtersToSearch(EMPTY_FILTERS), '');
  });
});

describe('project-services.json', () => {
  const data = JSON.parse(
    readFileSync(
      new URL('../src/data/project-services.json', import.meta.url),
      'utf8',
    ),
  );
  const categories = new Set(CATEGORIES.map((c) => c.id));
  const methods = new Set(REQUEST_METHODS.map((m) => m.id));

  it('has valid, unique entries', () => {
    assert.equal(new Set(data.map((s) => s.id)).size, data.length);
    for (const s of data) {
      assert.ok(s.name && s.description, `${s.id}: name and description`);
      assert.ok(categories.has(s.category), `${s.id}: category ${s.category}`);
      assert.ok(methods.has(s.request), `${s.id}: request ${s.request}`);
      assert.ok(s.maturity.length > 0, `${s.id}: maturity`);
      assert.ok(s.url || s.detailsUrl, `${s.id}: url or detailsUrl`);
    }
  });

  it('links internal detailsUrl values to existing pages and headings', () => {
    const root = new URL('../', import.meta.url);
    const resolve = (path) => {
      const blog = path.match(/^\/blog\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/);
      const candidates = blog
        ? [`blog/${blog[1]}-${blog[2]}-${blog[3]}-${blog[4]}.md`]
        : [`docs${path}.md`, `docs${path}/index.md`];
      return candidates.map((c) => new URL(c, root)).find((u) => existsSync(u));
    };
    const slug = (text) =>
      text
        .trim()
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s_-]/gu, '')
        .replace(/\s/g, '-');
    const headingIds = (file) =>
      readFileSync(file, 'utf8')
        .split('\n')
        .filter((line) => /^#{1,6}\s/.test(line))
        .map((line) => {
          const text = line.replace(/^#+\s+/, '');
          const explicit = text.match(/\{#([^}]+)\}\s*$/);
          return explicit ? explicit[1] : slug(text);
        });

    for (const s of data.filter((x) => x.detailsUrl?.startsWith('/'))) {
      const [path, anchor] = s.detailsUrl.split('#');
      const file = resolve(path);
      assert.ok(file, `${s.id}: no page for ${path}`);
      if (anchor) {
        assert.ok(
          headingIds(file).includes(anchor),
          `${s.id}: no heading #${anchor} in ${path}`,
        );
      }
    }
  });
});
