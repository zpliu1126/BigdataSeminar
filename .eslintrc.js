module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    require: true,
    module: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  rules: {}
}
