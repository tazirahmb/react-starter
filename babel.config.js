const alias = {
  '~': './src',
};

module.exports = {
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            extensions: ['.js', '.json'],
            alias,
          },
        ],
      ],
    },
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: 9,
            },
            forceAllTransforms: true,
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            extensions: ['.js', '.json'],
            alias,
          },
        ],
      ],
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            extensions: ['.js', '.json'],
            alias,
          },
        ],
      ],
    },
  },
};