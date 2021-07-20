const themeConfig = require("./themeConfig.js")
const plugins = require("./plugins.js")
const head = require("./head.js")
module.exports = {
  base: '/docs/',
  title: '草莓牛奶', // 设置网站标题
  description: '一个笔记本',
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  head,
  plugins,
  themeConfig
}
