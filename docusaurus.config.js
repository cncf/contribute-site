// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
  url: 'https://contribute.cncf.io',
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/cncf/contribute-site/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
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
      announcementBar: {
        id: `hello-bar`,
        content: `KubeCon + CloudNativeCon Europe 2026 · 23-26 March · Amsterdam · <b><a target="_blank" href="https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/?utm_source=cncf&utm_medium=subpage&utm_campaign=18269725-KubeCon-EU-2026&utm_content=hello-bar">REGISTER NOW</a></b>`,
        backgroundColor: 'rgb(1, 117, 228)', // Defaults to `#fff`
        textColor: '#fff', // Defaults to `#000`
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Contribute to Cloud Native',
          src: 'img/logo.svg',
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
  plugins: [[require.resolve('docusaurus-lunr-search'), {
    highlightResult: true,
  }]],
};

export default config;
