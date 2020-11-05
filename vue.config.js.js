// 项目部署基础
// const publicPath = process.env.NODE_ENV === 'production' ? '/newpc/' : '/renshufan'
const path = require("path");

module.exports = {
  // 应用程序将部署在域的根目录
  // publicPath: publicPath,
  // 打包后输出的文件夹名称
  outputDir: 'newpc',
  // 一个目录（相对于outputDir），用于在其下嵌套生成的静态资产（js，css，img，字体）
  assetsDir: 'renshufan' + new Date(),
  // 是否启用 ESline
  lintOnSave: false,
  // 如果您不需要用于生产的源映射，则将此设置为可以加快生产构建
  productionSourceMap: false,
  devServer: {
    port: 5555,
    open: true,
    overlay: true,
    proxy: {
      '/dev-api': {
        target: 'http://192.168.200.3:8101',
        // target: 'http://192.168.5.38:80',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/dev-api': '' }
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          "HelloWorld": path.resolve(__dirname, 'src/components/HelloWorld'),
          "sideTabBar": path.resolve(__dirname, 'src/components/home-main/sideTabBar'),
        }
      }
    }
    // before: require('./mock/mock-server.js')
  },
}
