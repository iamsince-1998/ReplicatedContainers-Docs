// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Replicated Containers Docs',
  tagline: 'Documentation for the Replicated Containers plugin',
  favicon: 'img/logo.svg',

  // GitHub Pages URL — update these with your GitHub username and repo name
  url: 'https://iamsince-1998.github.io',
  baseUrl: '/Plugins-Docs/',

  // GitHub Pages deployment config
  organizationName: 'iamsince-1998', // Your GitHub username
  projectName: 'Plugins-Docs',                   // Your GitHub repo name
  // GitHub Pages serves folder-based routes more reliably than `.html` routes.
  // Keeping trailing slashes enabled prevents deep-link 404s on refresh.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',  // Docs at root, no /docs prefix
          editUrl: 'https://github.com/iamsince-1998/Plugins-Docs/edit/main/',
        },
        blog: false, // Disable blog
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
        title: 'Replicated Containers Docs',
        logo: {
          alt: 'Replicated Containers Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/iamsince-1998/Plugins-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/' },
              { label: 'Replicated Containers', to: '/replicated-containers/overview' },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/iamsince-1998/Plugins-Docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Replicated Containers Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml', 'python', 'typescript'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
