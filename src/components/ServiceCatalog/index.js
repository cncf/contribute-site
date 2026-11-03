import React, { useEffect, useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import { useHistory, useLocation } from '@docusaurus/router';
import services from '@site/src/data/project-services.json';
import {
  CATEGORIES,
  MATURITY_LABELS,
  REQUEST_METHODS,
  SERVICE_DESK_URL,
} from './categories.mjs';
import {
  EMPTY_FILTERS,
  MATURITY_LEVELS,
  filterServices,
  filtersFromSearch,
  filtersToSearch,
} from './filter.mjs';
import styles from './styles.module.css';

const requestLabel = Object.fromEntries(
  REQUEST_METHODS.map(({ id, label }) => [id, label]),
);
const categoryLabel = Object.fromEntries(
  CATEGORIES.map(({ id, label }) => [id, label]),
);
const categoryOrder = Object.fromEntries(
  CATEGORIES.map(({ id }, index) => [id, index]),
);

function eligibility(maturity) {
  if (MATURITY_LEVELS.every((level) => maturity.includes(level))) {
    return 'All projects';
  }
  return MATURITY_LEVELS.filter((level) => maturity.includes(level))
    .map((level) => MATURITY_LABELS[level])
    .join(', ');
}

function HowToGet({ service }) {
  const href =
    service.requestUrl ||
    (service.request === 'service-desk' ? SERVICE_DESK_URL : null);
  const label = requestLabel[service.request];
  return (
    <>
      {href ? <Link to={href}>{label}</Link> : label}
      {service.detailsUrl && (
        <>
          <br />
          <Link to={service.detailsUrl}>Details</Link>
        </>
      )}
    </>
  );
}

function ServiceRow({ service }) {
  const nameHref = service.url || service.detailsUrl;
  return (
    <tr>
      <td>
        <Link to={nameHref}>{service.name}</Link>
      </td>
      <td>{categoryLabel[service.category]}</td>
      <td>{service.description}</td>
      <td>{eligibility(service.maturity)}</td>
      <td>
        <HowToGet service={service} />
      </td>
    </tr>
  );
}

export default function ServiceCatalog() {
  const location = useLocation();
  const history = useHistory();
  // Render the full list on the server; apply query-string filters after hydration.
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFilters(filtersFromSearch(location.search));
    setHydrated(true);
    // Only read the query string on first load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const search = filtersToSearch(filters);
    if (search !== location.search) {
      history.replace({ search, hash: location.hash });
    }
  }, [hydrated, filters, history, location.hash, location.search]);

  const results = useMemo(() => filterServices(services, filters), [filters]);
  const rows = useMemo(
    () =>
      [...results].sort(
        (a, b) => categoryOrder[a.category] - categoryOrder[b.category],
      ),
    [results],
  );
  const update = (patch) => setFilters((prev) => ({ ...prev, ...patch }));
  const toggleMaturity = (level) =>
    update({
      maturity: filters.maturity.includes(level)
        ? filters.maturity.filter((l) => l !== level)
        : [...filters.maturity, level],
    });

  return (
    <div className={styles.catalog}>
      <form
        className={styles.filters}
        role="search"
        aria-label="Filter project services"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={styles.search}>
          <span className={styles.label}>Search</span>
          <input
            type="search"
            className={styles.input}
            placeholder="Search services…"
            value={filters.q}
            onChange={(event) => update({ q: event.target.value })}
          />
        </label>
        <label>
          <span className={styles.label}>Category</span>
          <select
            className={styles.input}
            value={filters.category}
            onChange={(event) => update({ category: event.target.value })}
          >
            <option value="">All categories</option>
            {CATEGORIES.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className={styles.label}>How to get it</span>
          <select
            className={styles.input}
            value={filters.request}
            onChange={(event) => update({ request: event.target.value })}
          >
            <option value="">Any method</option>
            {REQUEST_METHODS.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <fieldset className={styles.maturity}>
          <legend className={styles.label}>Eligible maturity level</legend>
          {MATURITY_LEVELS.map((level) => (
            <label key={level} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filters.maturity.includes(level)}
                onChange={() => toggleMaturity(level)}
              />
              {MATURITY_LABELS[level]}
            </label>
          ))}
        </fieldset>
        <div className={styles.status}>
          <span aria-live="polite">
            Showing {results.length} of {services.length} services
          </span>
          <button
            type="button"
            className="button button--secondary button--sm"
            onClick={() => setFilters(EMPTY_FILTERS)}
          >
            Reset
          </button>
        </div>
      </form>

      {results.length === 0 && (
        <p>
          No services match your filters. Need something not listed here? Ask
          CNCF staff through the{' '}
          <Link to={SERVICE_DESK_URL}>CNCF Service Desk</Link>.
        </p>
      )}

      {rows.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Eligible</th>
              <th scope="col">How to get it</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
