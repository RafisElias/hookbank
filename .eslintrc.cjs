module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    // 'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'prefer-const': 'error',
    semi: ['error', 'always'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'error'
    // "@typescript-eslint/no-explicit-any": "error"
  }
};
