import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Nuxt 3 マクロ関数を追加
        definePageMeta: "readonly",
        defineNuxtPlugin: "readonly",
        defineNuxtRouteMiddleware: "readonly",
        defineProps: 'readonly',
        useRuntimeConfig: "readonly",
        useRoute: "readonly",
        useRouter: "readonly",
        useState: "readonly",
        useFetch: "readonly",
      },
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: { globals: globals.browser }
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: { js }, extends: ["js/recommended"]
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/recommended"],
  // pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
]);

