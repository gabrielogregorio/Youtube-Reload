module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    cy: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:sonarjs/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'spellcheck', 'cypress', 'sonarjs', 'import', 'no-null', 'canonical-vocabulary'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'canonical-vocabulary/canonical-vocabulary': [
      'error',
      [
        {
          words: ['Reboot', 'Recharge'],
          fixTo: 'reload',
          message: '🚨 Not use <word>, use <fixTo>. 😉',
        },
        {
          words: ['Enjoy', 'Admire', 'gostei', 'Appreciate', 'Approve', 'Prefer'],
          fixTo: 'like',
        },
        {
          words: ['NãoGostei', 'naoGostei', 'Disapprove', 'Hate', 'Detest', 'Loathe', 'Despise', 'Reject', 'Resent'],
          fixTo: 'Unlike',
        },
        {
          words: ['Tracklist', 'Mixtape', 'Setlist', 'Compilation', 'Queue', 'SongList', 'Album', 'ListaDeMusicas'],
          fixTo: 'playlist',
        },
      ],
    ],
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'no-shadow': 'off',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'id-length': [
      2,
      {
        min: 3,
        properties: 'never',
        exceptions: ['id', 'on', 'config'],
      },
    ],
    'react/require-default-props': [
      2,
      {
        functions: 'defaultArguments',
      },
    ],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'max-lines': [
      'error',
      {
        max: 250,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-depth': ['error', 3],
    'max-lines-per-function': [
      'error',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-params': [
      'error',
      {
        max: 4,
      },
    ],
    'no-alert': 'error',
    'no-console': 'error',
    'no-delete-var': 'error',
    'no-const-assign': 'error',
    'no-unreachable': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
      },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Za-z]',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: 'Enum$',
          match: true,
        },
      },
    ],
    'spellcheck/spell-checker': [
      1,
      {
        comments: false,
        strings: false,
        templates: false,
        identifiers: true,
        lang: 'en_US',
        skipWords: [
          'youtube',
          'enum',
          'unlikes',
          'checkbox',
          'fieldset',
          'readonly',
          'href',
          'bdd',
          'dsn',
          'integrations',
          'emojis',
          'axe',
          'Sao',
          'Paulo',
          'Bundler',
          'Esbuild',
          'Gmt',
        ],
        minLength: 3,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.ts'],
      rules: {
        'no-magic-numbers': ['off'],
      },
    },
    {
      files: ['./cypress/**/*.ts'],
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
};
