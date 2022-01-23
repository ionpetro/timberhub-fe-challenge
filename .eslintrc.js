module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
};
