export const MATURITY_LEVELS = ['sandbox', 'incubating', 'graduated'];

export const EMPTY_FILTERS = Object.freeze({
  q: '',
  category: '',
  maturity: [],
  request: '',
});

export function filterServices(services, filters = EMPTY_FILTERS) {
  const q = (filters.q || '').trim().toLowerCase();
  const maturity = filters.maturity || [];
  return services.filter((service) => {
    if (filters.category && service.category !== filters.category) {
      return false;
    }
    if (filters.request && service.request !== filters.request) {
      return false;
    }
    if (
      maturity.length > 0 &&
      !maturity.some((level) => service.maturity.includes(level))
    ) {
      return false;
    }
    if (
      q &&
      !service.name.toLowerCase().includes(q) &&
      !service.description.toLowerCase().includes(q)
    ) {
      return false;
    }
    return true;
  });
}

export function filtersFromSearch(search) {
  const params = new URLSearchParams(search);
  return {
    q: params.get('q') || '',
    category: params.get('category') || '',
    maturity: (params.get('maturity') || '')
      .split(',')
      .filter((level) => MATURITY_LEVELS.includes(level)),
    request: params.get('request') || '',
  };
}

export function filtersToSearch(filters) {
  const params = new URLSearchParams();
  if (filters.q) params.set('q', filters.q);
  if (filters.category) params.set('category', filters.category);
  if (filters.maturity.length > 0) {
    params.set('maturity', filters.maturity.join(','));
  }
  if (filters.request) params.set('request', filters.request);
  const search = params.toString();
  return search ? `?${search}` : '';
}
