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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CNCF Contributors',
  tagline: 'Learn, connect, and contribute—the CNCF way',
  favicon: 'img/favicon.ico',

  future: {
    // v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://contribute.cncf.io',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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

            if (p.startsWith('techdocs/analyses/')) {
              return `${TECHDOCS_ANALYSES_EDIT_BASE}/${p.replace(/^techdocs\/analyses\//, '')}`;
            }

            if (p.startsWith('techdocs/')) {
              return `${TECHDOCS_EDIT_BASE}/${p.replace(/^techdocs\//, '')}`;
            }

            return `${LOCAL_EDIT_BASE}/${p}`;
          },
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          exclude: ['**/README.md'],
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
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
  ],
  scripts: [
    {
      src: 'https://www.cncf.io/wp-content/themes/cncf-twenty-two/source/js/on-demand/hello-bar-embed.js',
      async: true,
    },
  ],
};

export default config;