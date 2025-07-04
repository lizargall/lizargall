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
  
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'k1qcZWgLmNpiwsIkdJiK_Ra66dDxon77PSqpaDj7_fE',  // <-- Your verification code here
      },
    },
  ],

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
          blogSidebarTitle: 'All posts',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
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
    ({    algolia: {
      // The application ID provided by Algolia
      appId: 'WM5BCONW0N',

      // Public API key: it is safe to commit it
      apiKey: '2078d3cef0a7a70ed5b62bf0e8a84a21',

      indexName: 'lizargallio',

      // Optional: see doc section below
      contextualSearch: true,

      // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // // Optional: Algolia search parameters
      // searchParameters: {},

      // // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: 'search',

      // // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,

      //... other Algolia params
    },
      // Replace with your project's social card
      metadata: [
        {name: 'keywords', content: 'liz argall, elizabeth argall, technical writing, technical writer'},
        {name: 'author', content: 'Liz Argall'},
        {name: 'description', content: 'Technical writing portfolio, documentation samples, and conference presentations by Liz Argall.'}
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
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'},
          {
            to: '/work',
            label: 'Work With Me',
            position: 'left',
          },
          {
            href: 'https://mailchi.mp/520551e04a4d/documentarians-rock',
            label: 'Subscribe',
            position: 'right'
          },
         {
            href: 'https://github.com/lizargall',
            label: 'GitHub',
            position: 'right',
          },  
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
            title: 'External Examples',
            items: [
              {
                label: 'HOT3D README Commit',
                href: 'https://github.com/facebookresearch/hot3d/commit/a23c9dc4aa1e0679a5089af376e7cbd32434c2f5',
              },
              {
                label: 'Book Review: Past Tense',
                href: 'https://www.graphicmedicine.org/comic-reviews/past-tense-facing-family-secrets-and-finding-myself-in-therapy/',
              },
              {
                label: 'Ngombor Community Development Alliance',
                href: 'https://ngombor.org',
              }
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
                label: 'Subscribe',
                href: 'https://mailchi.mp/520551e04a4d/documentarians-rock'
              },
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
        copyright: `Project Aria content was released under the Apache 2.0 license, the rest is © Liz Argall | If you'd like to license or reuse my content, lets chat! liz@lizargall.com|  Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
