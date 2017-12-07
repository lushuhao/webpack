const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次build前清除dist目录
    new UglifyJSPlugin({
      sourceMap: true
    }), // 压缩工具，可以删除未引用代码
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production') // 定义系统环境变量为production
      }
    }),
    new BundleAnalyzerPlugin() // 分析打包后的代码
  ],
})