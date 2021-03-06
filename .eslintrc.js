module.exports = {
  extends: [
    './node_modules/gts',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'jest',
    'import',
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/ban-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    eqeqeq: [2, 'allow-null'],
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
