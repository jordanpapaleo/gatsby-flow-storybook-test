module.exports = {
  presets: [
    '@babel/preset-flow',
    ['babel-preset-gatsby', {
      targets: {
        browsers: [ '>0.25%', 'not dead' ],
      },
    }],
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-react-require',
    ['styled-jsx/babel', { optimizeForSpeed: true }],
    ['babel-plugin-module-resolver', {
      'root': ['./src'],
      'alias': {
        'common': ([, path ]) => `./src/common${path }`,
        'components': ([, path ]) => `./src/components${path }`,
        'styles': ([, path ]) => `./src/styles${path }`,
      },
    }, 'resolve'],
  ],
}
