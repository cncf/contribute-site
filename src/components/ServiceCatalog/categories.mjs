export const SERVICE_DESK_URL = 'https://servicedesk.cncf.io';

// Display order of category sections.
export const CATEGORIES = [
  { id: 'dev-tools', label: 'Developer & AI tools' },
  { id: 'ci-infra', label: 'CI/CD & infrastructure' },
  { id: 'security', label: 'Security & compliance' },
  { id: 'community', label: 'Community & collaboration' },
  { id: 'program', label: 'Program management & insights' },
  { id: 'legal', label: 'Legal' },
  { id: 'docs-design', label: 'Documentation & design' },
  { id: 'marketing', label: 'Marketing & communications' },
  { id: 'events', label: 'Events' },
  { id: 'training', label: 'Training & certification' },
];

export const REQUEST_METHODS = [
  { id: 'service-desk', label: 'Service Desk' },
  { id: 'vendor', label: 'Apply to vendor' },
  { id: 'form-email', label: 'Form or email' },
  { id: 'none', label: 'No request needed' },
];

export const MATURITY_LABELS = {
  sandbox: 'Sandbox',
  incubating: 'Incubating',
  graduated: 'Graduated',
};
