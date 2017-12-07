const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  entry: {
    app: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: "[name].[chunkhash].js", // 使用chunkhash来优化缓存，根据module.id生成。
    chunkFilename: "[name].[chunkhash].js", // 决定非入口chunk的名称
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次build前清除dist目录
    new webpack.HashedModuleIdsPlugin(), // 默认基于解析顺序，现在基于模块相对路径，生成一个hash选取前4位作为module.id。
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // 将第三方库提取到单独的vendor
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 将公共的依赖模块提取到一个已有或新生成的chunk，指定公共chunk的name
    }),
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