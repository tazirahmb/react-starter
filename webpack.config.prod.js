import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import MomentLocalesPlugin from 'moment-locales-webpack-plugin';
import * as loaders from './tools/loaders';
import commonConfigs from './webpack.common';
import { merge } from 'webpack-merge';

const buildMode = (process.argv[2] || '').split('--')[1] || 'production';

const GLOBALS = {
  MODE: buildMode,
  __PROD__: process.env.NODE_ENV === 'production',
  __DEV__: process.env.NODE_ENV === 'development',
  __UAT__: process.env.NODE_ENV === 'test',
};

export default merge(commonConfigs, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'assets/js/[name].[chunkhash].js', // using chunks for distributed build
    chunkFilename: 'assets/js/[name].[chunkhash].js',
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
      chunkFilename: 'assets/css/[id].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
      trackJSToken: '',
    }),

    // Copy assets directory
    new CopyWebpackPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] }),

    new MomentLocalesPlugin({
      localesToKeep: ['id'],
    }),

    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      minRatio: 1,
    }),
  ],
});
