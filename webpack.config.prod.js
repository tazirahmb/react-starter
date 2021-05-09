import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const buildMode = (process.argv[2] || '').split('--')[1] || 'production';

const GLOBALS = {
  MODE: buildMode,
  __PROD__: process.env.NODE_ENV === 'production',
  __DEV__: process.env.NODE_ENV === 'development',
  __UAT__: process.env.NODE_ENV === 'test',
};

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  target: 'web',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js', // using chunks for distributed build
    publicPath: '/',
  },
  plugins: [
    new webpack.EnvironmentPlugin(GLOBALS),

    new webpack.HotModuleReplacementPlugin(),
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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
