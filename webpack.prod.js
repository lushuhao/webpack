const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map', // 生产环境使用，服务器配置不能让普通用户访问源文件
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次build前清除dist目录
    new UglifyJSPlugin({
      sourceMap: true
    }), // 压缩工具，可以删除未引用代码
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production') // 定义系统环境变量为production
      }
    })
  ],
})