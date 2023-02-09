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
    defaultLocale: 'ru',
    locales: ['ru'],
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
            'https://github.com/thailandguide/thailandguide.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          alt: 'Ultimative guide to Thailand',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'general-guide/Overview',
            position: 'left',
            label: 'Общий гайд',
          },
          {
            type: 'doc',
            docId: 'Bangkok/Housing',
            position: 'left',
            label: 'Бангкок',
          },
          {
            type: 'doc',
            docId: 'Phuket/Housing',
            position: 'left',
            label: 'Пхукет',
          },
          {
            type: 'doc',
            docId: 'Samui/Overview',
            position: 'left',
            label: 'Самуи',
          },
          {
            type: 'doc',
            docId: 'Phangan/Overview',
            position: 'left',
            label: 'Панган',
          },
          {
            type: 'doc',
            docId: 'Chiangmai/Housing',
            position: 'left',
            label: 'Чиангмай',
          },
          {
            type: 'doc',
            docId: 'emergency-help',
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
                label: 'Telegram',
                href: 'https://t.me/thailanddao',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Thailand guide, DAO. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
