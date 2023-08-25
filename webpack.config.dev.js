import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as loaders from './tools/loaders';
import commonConfigs from './webpack.common';
import { merge } from 'webpack-merge';

export default merge(commonConfigs, {
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  devtool: 'eval-cheap-source-map',
  entry: [
    // must be first entry to properly set public path
    './tools/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
  ],
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  output: {
    publicPath: 'http://localhost:4000/', // to use module federation, change the port to your active port
    filename: 'bundle.js',
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],

});
