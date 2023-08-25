import webpack from 'webpack';
import path from 'path';
import Dotenv from 'dotenv-webpack';
import WorkboxPlugin from 'workbox-webpack-plugin';

const buildMode = (process.argv[2] || '').split('--')[1] || 'development';

const GLOBALS = {
  MODE: buildMode,
  __PROD__: process.env.NODE_ENV === 'production',
  __DEV__: process.env.NODE_ENV === 'development',
  __UAT__: process.env.NODE_ENV === 'test',
};

const MODE = GLOBALS.MODE === 'local' ? 'development' : GLOBALS.MODE;

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  entry: [
    path.resolve(__dirname, 'src/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
  },
  plugins: [
    new webpack.EnvironmentPlugin(GLOBALS),
    new Dotenv({
      path: `./.env.local.${MODE}`,
      systemvars: true,
    }),
 new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      title: 'CODEX | Your Are Offline',
      template: 'src/offline.ejs',
      filename: 'offline.html',
      chunks: ['offlinePage'],
      inject: true,
      cache: true
        }),
    new WorkboxPlugin.InjectManifest({
      // These are some common options, and not all are required.
      // Consult the docs for more info.
      // exclude: [/.../, '...'],
      maximumFileSizeToCacheInBytes: 30000,
      swSrc: path.resolve(__dirname, 'sw.js'),
      swDest: 'sw.js'
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
