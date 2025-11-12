// .eslintrc.js
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
    'jsx-a11y/alt-text': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'dist/',
    'public/',
    'build/',
    '.env',
  ],
};
