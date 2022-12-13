// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thailand Guide',
  tagline: 'С нами Таиланд откроется в новом свете!',
  url: 'https://thailandguide.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thailandguide', // Usually your GitHub org/user name.
  projectName: 'thailandguide.github.io', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Thailand Guide',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logotype.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'GeneralGuide/Flights',
            position: 'left',
            label: 'Общий гайд',
          },
          {
            type: 'doc',
            docId: 'Bangkok/Bangkok',
            position: 'left',
            label: 'Бангкок',
          },
          {
            type: 'doc',
            docId: 'Phuket/Phuket',
            position: 'left',
            label: 'Пхукет',
          },
          {
            type: 'doc',
            docId: 'Samui/Samui',
            position: 'left',
            label: 'Самуи',
          },
          {
            type: 'doc',
            docId: 'Phangan/Phangan',
            position: 'left',
            label: 'Панган',
          },
          {
            type: 'doc',
            docId: 'Chiangmai/Chiangmai',
            position: 'left',
            label: 'Чиангмай',
          },
          {
            type: 'doc',
            docId: 'EmergencyHelp/EmergencyHelp',
            position: 'left',
            label: 'Экстренная помощь',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
