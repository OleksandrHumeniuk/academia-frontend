/**
 * ESLint configuration:
 * http://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
  ],
  parserOptions: {
    project: ['./tsconfig.app.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/lines-between-class-members': 'off',
    'no-console': 'off',
    'radix': 'off',
    'prettier/prettier': ['error'],
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/function-component-definition': 'off',
    'react/default-props-match-prop-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'object', 'type'],
    }],
    "jsx-a11y/anchor-is-valid": "off",
  },
};

