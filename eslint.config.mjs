import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  {
    plugins: { prettier: prettierPlugin },
  },
  {
    ignores: ['node-modules', 'dist'],
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js, jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
    },
  },
];
