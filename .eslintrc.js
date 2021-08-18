module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'off', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/camelcase': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-confusing-arrow': 'off',
    'no-underscore-dangle': 'off', // __
    'function-paren-newline': 'off'
  }
}
