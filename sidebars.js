/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Home',
    },
    {
      type: 'category',
      label: '🧩 Plugin Docs',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Replicated Containers',
          items: [
            'replicated-containers/overview',
            'replicated-containers/installation',
            'replicated-containers/quickstart-blueprint',
            'replicated-containers/quickstart-cpp',
            'replicated-containers/api-reference',
            'replicated-containers/how-it-works',
            'replicated-containers/dedicated-server',
            'replicated-containers/rules-and-gotchas',
            'replicated-containers/troubleshooting',
            'replicated-containers/changelog',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Site Docs',
      collapsed: true,
      items: [
        'guides/getting-started',
        'guides/installation',
        'guides/configuration',
        'api/overview',
        'api/authentication',
        'api/endpoints',
        'api/errors',
      ],
    },
  ],
};

module.exports = sidebars;
