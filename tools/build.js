// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../webpack.config.prod';
import {
  chalkError,
  chalkSuccess,
  chalkWarning,
  chalkProcessing,
} from './chalkConfig';
import cleanDist from './cleanDist';

const mode = (process.argv[2] || '').split('--')[1] || 'production';

console.log(chalkProcessing('Cleaning /dist...'));

cleanDist('/dist');

console.log(
  chalkProcessing('Generating minified bundle. This will take a moment...')
);

webpack(config).run((error, stats) => {
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.errors.length > 0) {
    // so a fatal error occurred. Stop here.
    jsonStats.errors.map((error) => console.log(chalkError(error)));
    return 1;
  }

  if (jsonStats.warnings.length > 0) {
    console.log(chalkWarning('Files generated with warnings: '));
    jsonStats.warnings.map((warning) => console.log(chalkWarning(warning)));
  }

  // if we got this far, the build succeeded.
  console.log(
    chalkSuccess(
      `Build files using ${mode} mode are ready at /dist! It's Time to roll!!`
    )
  );

  return 0;
});
