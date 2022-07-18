module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules', '.cache', 'public'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        doubleQuote: true,
        trailingComma: 'es5',
        semi: false,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'lf',
      },
    ],
  },
}
