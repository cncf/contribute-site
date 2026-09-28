// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const TECHDOCS_EDIT_BASE = 'https://github.com/cncf/techdocs/edit/main/docs';
const TECHDOCS_ANALYSES_EDIT_BASE = 'https://github.com/cncf/techdocs/edit/main/analyses';
const LOCAL_EDIT_BASE = 'https://github.com/cncf/contribute-site/edit/main/docs';
const SITE_URL = 'https://contribute.cncf.io';

// Routes with no standalone content (search, tag/author/archive listings,
// blog pagination). Kept out of the sitemap and of the llms.txt output.
const NON_CONTENT_ROUTES = [
  '/search',
  '/tags/**',
  '/blog/archive',
  '/blog/authors/**',
  '/blog/page/**',
  '/blog/tags/**',
];

// Agent readiness (https://afdocs.dev, cncf/contribute-site#426).
// @signalwire/docusaurus-plugin-llms-txt emits /llms.txt and a Markdown twin
// of every page at /<route>.md. The two helpers below point agents at them:
// a visually hidden block at the top of the HTML <body>, and a blockquote at
// the top of each generated .md file. Wording adapted from Docsy v0.17.0
// (Apache-2.0):
// https://github.com/google/docsy/blob/v0.17.0/theme/layouts/_partials/llms-directive.html
function llmsDirectiveHtml() {
  return {
    name: 'llms-directive-html',
    injectHtmlTags() {
      return {
        preBodyTags: [
          {
            tagName: 'div',
            attributes: { class: 'llms-directive', 'aria-hidden': 'true' },
            innerHTML:
              'For AI agents: a documentation index is available at /llms.txt. Every page has a Markdown version: remove any trailing slash from its URL and append .md (the home page is /index.md).',
          },
        ],
      };
    },
  };
}

// remark plugin run by the llms-txt plugin on each generated .md file.
function llmsDirectiveMarkdown() {
  const text = (value) => ({ type: 'text', value });
  const link = (url, label) => ({ type: 'link', url, children: [text(label)] });
  return (tree) => {
    tree.children.unshift({
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            text('For AI agents: the complete documentation index is at '),
            link(`${SITE_URL}/llms.txt`, 'llms.txt'),
            text(
              '. Every page has a Markdown version: remove any trailing slash from its URL and append ',
            ),
            { type: 'inlineCode', value: '.md' },
            text(' (the home page is '),
            link(`${SITE_URL}/index.md`, '/index.md'),
            text(').'),
          ],
        },
      ],
    });
  };
}

// Workaround for https://github.com/signalwire/docusaurus-plugins/issues/32:
// links to index routes that carry a trailing slash (/community/tags/) are
// rewritten to /community/tags/.md instead of /community/tags.md. Fixed
// upstream in 6626e3d but not released on the 1.x line; remove once it is.
// Runs on the Markdown AST, after the plugin's own link rewriting.
function fixIndexMdLinks() {
  const fix = (node) => {
    if (node.type === 'link' && typeof node.url === 'string') {
      node.url = node.url.replace(
        /(^|[^/])(\/[^/]+)\/\.md(?=$|[#?])/,
        '$1$2.md',
      );
    }
    node.children?.forEach(fix);
  };
  return fix;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CNCF Contributors',
  tagline: 'Learn, connect, and contribute—the CNCF way',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    // v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: ({ docPath }) => {
            const p = docPath.replace(/\\/g, '/');

            // docs/techdocs/analyses/** -> cncf/techdocs/analyses/**
            if (p.startsWith('techdocs/analyses/')) {
              return `${TECHDOCS_ANALYSES_EDIT_BASE}/${p.replace(/^techdocs\/analyses\//, '')}`;
            }

            // docs/techdocs/** -> cncf/techdocs/docs/**
            if (p.startsWith('techdocs/')) {
              return `${TECHDOCS_EDIT_BASE}/${p.replace(/^techdocs\//, '')}`;
            }

            // docs/security/** is generated by scripts/generate-security-page.mjs
            // — hide the edit link so nobody hand-edits generated content
            if (p.startsWith('security/')) {
              return undefined;
            }

            // everything else stays local
            return `${LOCAL_EDIT_BASE}/${p}`;
          },
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          exclude: ['**/README.md'], // Exclude README.md files from being rendered as docs
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              const feedItems = await defaultCreateFeedItems({blogPosts, ...rest});
              const postsByPermalink = new Map(
                blogPosts.map((post) => [post.metadata.permalink, post])
              );
              return feedItems.map((item) => {
                const post = postsByPermalink.get(item.link);
                if (!post) return item;
                const description = post.metadata.description;
                return {
                  ...item,
                  ...(description ? {content: description} : {}),
                  category: post.metadata.tags.map((tag) => ({
                    name: tag.label,
                    domain: tag.permalink,
                  })),
                };
              });
            },
          },
          editUrl: 'https://github.com/cncf/contribute-site/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          ignorePatterns: NON_CONTENT_ROUTES,
        },
        googleTagManager: {
          containerId: 'GTM-WJJ7VKZ',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cloud-native-contributors.jpg',
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@CloudNativeFdn' },
        { name: 'twitter:creator', content: '@CloudNativeFdn' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'CNCF Contributors' },
      ],
      navbar: {
        title: '',
        logo: {
          alt: 'Contribute to Cloud Native',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          // Left
          {
            type: 'docSidebar',
            sidebarId: 'maintainersSidebar',
            position: 'left',
            label: 'Maintainers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
          },
          {
            type: 'docSidebar',
            sidebarId: 'techdocsSidebar',
            position: 'left',
            label: 'TechDocs',
          },

          // Right
          {
            type: 'docSidebar',
            sidebarId: 'contributorsSidebar',
            position: 'right',
            label: 'New Contributors',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'right',
            label: 'Resources',
          },
          {
            type: 'docSidebar',
            sidebarId: 'eventsSidebar',
            position: 'right',
            label: 'Events',
          },
          {
            type: 'docSidebar',
            sidebarId: 'securitySidebar',
            position: 'right',
            label: 'Security',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
        ],
      },
      footer: {
        logo: {
          alt: 'CNCF Logo',
          src: 'img/cncf_logo_white.svg',
          href: 'https://www.cncf.io/',
          width: 160,
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Contribute',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cncf/contribute-site',
              },
            ],
          },
        ],
        copyright: `Copyright The CNCF Authors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        highlightResult: true,
      },
    ],
    llmsDirectiveHtml,
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        siteDescription:
          'Guides for contributing to and maintaining CNCF projects: onboarding for new contributors, maintainer resources, project best practices, TAGs and community groups, events, and TechDocs.',
        depth: 2,
        content: {
          includeBlog: true,
          includePages: true,
          relativePaths: false,
          excludeRoutes: ['/404.html', ...NON_CONTENT_ROUTES],
          // First selector to match wins, per page. The home page has no
          // .theme-doc-markdown and its cards sit in separate columns, so the
          // plugin defaults capture only the first card; the leading entry
          // matches the home page alone (the only page with a hero) and takes
          // the hero plus all cards. The rest is the plugin's default list
          // (1.2.2 lib/constants.js DEFAULT_CONTENT_SELECTORS), which the
          // package does not export.
          contentSelectors: [
            '.main-wrapper:has(> .hero)',
            '.theme-doc-markdown',
            'main .container .col',
            'main .theme-doc-wrapper',
            'article',
            'main .container',
            'main',
          ],
          // Section headings in llms.txt; each matches its index page title.
          routeRules: [
            { route: '/blog/**', categoryName: 'Blog' },
            { route: '/community/**', categoryName: 'Community' },
            { route: '/contributors/**', categoryName: 'New Contributors' },
            { route: '/events/**', categoryName: 'Events' },
            { route: '/maintainers/**', categoryName: 'Maintainers' },
            { route: '/projects/**', categoryName: 'CNCF Projects' },
            { route: '/resources/**', categoryName: 'Resources' },
            {
              route: '/security/**',
              categoryName: 'Project Security Contacts',
            },
            { route: '/skills/**', categoryName: 'Agent skills' },
            { route: '/techdocs/**', categoryName: 'CNCF TechDocs' },
          ],
          remarkPlugins: [fixIndexMdLinks, llmsDirectiveMarkdown],
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://www.cncf.io/wp-content/themes/cncf-twenty-two/source/js/on-demand/hello-bar-embed.js',
      async: true,
    },
  ],
};

export default config;
