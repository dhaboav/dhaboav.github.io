// @ts-check
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.{js,ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
  },
  prettierConfig,
);
