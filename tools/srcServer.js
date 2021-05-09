// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// import config from '../webpack.config.js';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const bundler = webpack(config);
// const app = express();
const port = 3333;

new WebpackDevServer(bundler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: true,
  stats: 'minimal',
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(`Serving your awesome project at port ${port}`);
});
