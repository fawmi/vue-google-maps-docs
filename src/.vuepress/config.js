const { description } = require('../../package.json')

module.exports = {
  title: 'Vue 3 Google maps',
  description: description,
  base: '/',
  head: [
    ['meta', { name: 'theme-color', content: '#000' }],
  ],
  themeConfig: {
    logo: '/assets/logo.jpg',
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Github',
        link: 'https://github.com/fawmi/vue-google-maps'
      },
      {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/@fawmi/vue-google-maps'
      }
    ],
    sidebarDepth: 0,
    collapsable: false,
    sidebar: [
      {
        title: 'Getting started',
        path: '/docs/',
      },
      {
        title: 'Components',
        collapsable: false,
        path: '/components/',
        children: [
          '/components/map',
          '/components/marker',
          '/components/info-window',
          '/components/cluster',
          '/components/circle',
          '/components/polygon',
          '/components/rectangle',
          '/components/autocomplete',
        ]
      },
      {
        title: 'Advanced',
        path: '/advanced/',
        sidebarDepth: 0,
        children: [
          '/advanced/introduction',
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
