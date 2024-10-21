import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      // globals.browser,
      globals: {
        // Node.js переменные
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',

        // Webpack переменные
        __webpack_require__: 'readonly',
        __webpack_public_path__: 'readonly',

        // Браузерные переменные
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
      },
    },
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
