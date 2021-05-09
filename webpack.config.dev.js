import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const buildMode = (process.argv[2] || '').split('--')[1] || 'development';

const GLOBALS = {
  MODE: buildMode,
  __PROD__: process.env.NODE_ENV === 'production',
  __DEV__: process.env.NODE_ENV === 'development',
  __UAT__: process.env.NODE_ENV === 'test',
};

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'eval-cheap-source-map',
  entry: [
    // must be first entry to properly set public path
    './tools/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web',
  // mode development and production
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.EnvironmentPlugin(GLOBALS),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
