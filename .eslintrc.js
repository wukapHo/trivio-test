module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
};
