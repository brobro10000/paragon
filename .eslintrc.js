const path = require('path');

module.exports = {
  extends: [
    '@edx/eslint-config',
    'plugin:import/typescript',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: true,
    babelOptions: {
      configFile: path.resolve(__dirname, './babel.config.json'),
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.jsx',
          'src/setupTest.ts',
          '**/*.test.jsx',
          '**/*.test.js',
          'config/*.js',
          '*.config.ts',
          '*.config.*.js',
          '**/*.config.js',
          'component-generator/**',
          'generate-changelog.js',
        ],
      },
    ],
    'import/no-relative-packages': [2, { ignore: ['icons'] }],
    'import/no-unresolved': [2, { ignore: ['axios'] }],
    'react/jsx-no-constructed-context-values': 0,
    'no-restricted-exports': [0, { restrictedNamedExports: ['default'] }],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'jsx-a11y/label-has-for': [2, {
      components: ['label'],
      required: 'id',
      allowChildren: false,
    }],
    'no-param-reassign': [2, { props: false }],
  },
  env: {
    jest: true,
  },
  globals: {
    newrelic: false,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: 'airbnb-typescript',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['**/*.json'],
      plugins: ['jsonc'],
      extends: ['plugin:jsonc/recommended-with-json'],
      rules: {
        'jsonc/indent': ['error', 2],
        'jsonc/quote-props': ['error', 'always'],
        'jsonc/quotes': ['error', 'double'],
        'jsonc/no-octal': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/no-bigint-literals': 'error',
      },
    },
  ],
};
