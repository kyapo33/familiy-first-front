module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/hooks, src/models'],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": "module",
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": 0,
    'no-useless-escape': 0,
    "react/no-unknown-property": ['error', { ignore: ['css'] }],
    "react/no-unescaped-entities": "off",
    "react/display-name": "off"
  },
}
