import recommendedReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: recommendedReactConfig,
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      "no-extra-semi": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-unused-vars": "off",
      "object-curly-spacing": ["error", "always"],
    },
  },
];
