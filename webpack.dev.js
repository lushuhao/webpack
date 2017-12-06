const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge'); // 合并配置文件
const common = require('./webpack.common');

module.exports = merge(common, {
  //devtool: "cheap-source-map", // 追踪错误至源文件
  devServer: {
    contentBase: path.join(__dirname, "dist"), // 服务器根目录
    hot: true, // 热替换
    compress: true, // 使用gzip压缩
    port: 8080,
  },
  plugins: [
    // new webpack.NamedModulesPlugin(), // 搭配热替换，显示模块的相对路径，路径显示会很长，不好用
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
  ]
})