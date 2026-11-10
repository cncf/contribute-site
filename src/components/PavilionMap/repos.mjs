// Looks up each project in the CNCF landscape
// (https://github.com/cncf/landscape, landscape.yml): its main repository
// (`repo_url`), maturity (`project`: graduated, incubating, sandbox) and
// description. Used by scripts/sync-pavilion-kiosks.mjs; the result is saved
// in src/data/pavilion-kiosks.json so the browser doesn't fetch the landscape.

// Every item in a parsed landscape.yml.
export function landscapeItems(landscape) {
  const items = [];
  for (const category of landscape?.landscape ?? []) {
    for (const subcategory of category.subcategories ?? []) {
      for (const item of subcategory.items ?? []) items.push(item);
    }
  }
  return items;
}

// "Headlamp (SIG)" and "headlamp" compare equal.
export function normalizeName(name) {
  return String(name)
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9]/g, '');
}

// Collapses whitespace and line breaks in a landscape description.
function cleanText(text) {
  const clean = String(text ?? '')
    .replace(/\s+/g, ' ')
    .trim();
  return clean || undefined;
}

// Finds directory projects in the landscape.
// - A name matches a CNCF project (an item with a `project` maturity) of
//   the same normalized name.
// - `aliases` maps a directory name to the landscape item name to use when
//   the two differ ("Envoyproxy" -> "Envoy"); an alias may name any item.
// - `repos` gives a repository URL directly for names the landscape
//   doesn't list.
// Returns { projects: { name: { repo, maturity?, description? } },
// missing: [names without a repository] }.
export function matchProjects(names, items, { aliases = {}, repos = {} } = {}) {
  const projects = new Map();
  const all = new Map();
  for (const item of items) {
    if (!item.repo_url) continue;
    const key = normalizeName(item.name);
    if (!all.has(key) || (item.project && !all.get(key).project)) {
      all.set(key, item);
    }
    if (item.project && !projects.has(key)) projects.set(key, item);
  }
  const result = {};
  const missing = [];
  for (const name of names) {
    if (repos[name]) {
      result[name] = { repo: repos[name] };
      continue;
    }
    const item =
      aliases[name] != null
        ? all.get(normalizeName(aliases[name]))
        : projects.get(normalizeName(name));
    if (!item) {
      missing.push(name);
      continue;
    }
    result[name] = {
      repo: item.repo_url,
      maturity: item.project || undefined,
      description: cleanText(item.description),
    };
  }
  return { projects: result, missing };
}

// "https://github.com/helm/helm" -> "helm/helm", or null for other hosts.
export function githubRepo(url) {
  const match = /^https:\/\/github\.com\/([^/]+\/[^/#?]+)/.exec(url ?? '');
  return match ? match[1].replace(/\.git$/, '') : null;
}
