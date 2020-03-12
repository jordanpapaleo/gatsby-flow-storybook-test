module.exports = {
  settings: {
    react: {
      version: 'detect',
    }
  },
  extends: ['prettier', 'standard', 'react-app'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'camelcase': ['error', {
      ignoreDestructuring: true,
      properties: 'never'
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
  },
  plugins: ["jsx-a11y", "prettier"]
}
