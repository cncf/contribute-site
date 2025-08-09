// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CNCF Contributors',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
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
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/cncf/contribute-site/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/cncf/contribute-site/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cloud-native-contributors.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Contribute to Cloud Native',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'maintainersSidebar',
            position: 'left',
            label: 'Maintainers'
          },
            {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects'
          },
            {
           type: 'docSidebar',
           sidebarId: 'communitySidebar',
           position: 'left',
           label: 'Community'
         },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources'
          },
           {
            type: 'docSidebar',
            sidebarId: 'eventsSidebar',
            position: 'left',
            label: 'Events'
          },
          {
            type: 'docSidebar',
            sidebarId: 'contributorsSidebar',
            position: 'left',
            label: 'New Contributors',
          },
          {to: '/blog', label: 'Blog', position: 'right'}
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
        copyright: `Copyright © ${new Date().getFullYear()} The CNCF Authors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    require.resolve('docusaurus-plugin-search-local'),
  ],

  scripts: [
    {
      src: 'https://www.cncf.io/wp-content/themes/cncf-twenty-two/source/js/on-demand/hello-bar-embed.js',
      defer: true,
    },
  ],
};

export default config;
