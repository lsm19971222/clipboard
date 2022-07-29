const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    library: {
      name: 'Clipboard',
      type: 'umd'
    },
    globalObject: 'globalThis'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: "./index.html",
    //   inject: 'body'
    // }),

    new MiniCssExtractPlugin({
      filename: 'styles/index.css'
    })
  ],

  // devServer: {
  //   static: './dist '
  // },

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  }
}