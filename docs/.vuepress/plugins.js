const plugins = {
  '@vuepress/active-header-links': {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor',
  },
  '@vuepress/back-to-top': true,
  '@vuepress/search': {
    search: true, //默认false
    searchMaxSuggestions: 10, // 默认是5
  },
  'vuepress-plugin-auto-sidebar': {
    title: {
      // 更多选项:
      // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
      mode: 'capitalize',
    },
  },
  '@vuepress/medium-zoom': {
    // selector: 'img.zoom-custom-imgs',
    // // medium-zoom options here
    // // See: https://github.com/francoischalifour/medium-zoom#options
    // options: {
    //   margin: 16
    // }
  }
}
module.exports = plugins
