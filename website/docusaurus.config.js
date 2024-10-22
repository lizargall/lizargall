// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Liz Argall',
  tagline: 'Creating empowering documentation and processes; where you need it, when you need it.',
  favicon: 'img/favicon.ico',

  // Set the deploy url of your site here
  url: 'https://lizargall.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lizargall', // Usually your GitHub org/user name.
  projectName: 'lizargall.github.io', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      metadata: [
        {name: 'keywords', content: 'liz argall, elizabeth argall, technical writing, documentation, portfolio'},
      ],
      image: 'img/liz_social_card.jpg',
      navbar: {
        title: 'Liz Argall',
        logo: {
          alt: 'Liz Logo',
          src: 'img/pencil-solid.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'creativeSidebar',
          //   position: 'left',
          //   label: 'Creative',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/lizargall/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Case Studies',
            items: [
              {
                label: 'Aria Data Tools',
                to: '/docs/adt',
              },
              {
                label: 'The Pulp Stage',
                to: '/docs/pulp_stage',
              },
              {
                label: 'Project Aria Docs',
                to: '/docs/aria_docs',
              },
              {
                label: 'En Masse Entertainment',
                to: '/docs/enmasse',
              },
            ],
          },
          {
            title: 'Featured Content',
            items: [
              {
                label: 'Project Aria FAQ',
                to: '/docs/aria_docs/faq',
              },
              {
                label: 'MPS Guide - Cloud Services',
                to: '/docs/aria_docs/mps/mps_cli_guide',
              },
              {
                label: 'Acrolinx - an AI Content Governance Tool',
                to: '/docs/acrolinx',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/lizargall/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lizargall',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
