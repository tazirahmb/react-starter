import express from 'express';
import historyApiFallback from 'connect-history-api-fallback';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { chalkProcessing } from './chalkConfig';
import config from '../webpack.config.dev';

const bundler = webpack(config);
const app = express();
const port = 3333;

app.use(historyApiFallback());
app.use(
  webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath,
    stats: 'minimal',
  })
);

app.use(webpackHotMiddleware(bundler));
app.use(express.static(path.join(__dirname, '../src')));

app.listen(port, () =>
  console.log(chalkProcessing(`App is running on port ${port}`))
);
