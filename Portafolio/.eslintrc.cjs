/* eslint-env node */

module.exports = {
  env: { 
    browser: true, 
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: { 
    react: { 
      version: 'detect' 
    } 
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/no-unescaped-entities': 'off'
  },
}
