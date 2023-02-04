module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:astro/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "quotes": [
      "error",
      "double",
    ],
    "indent": [
      "error",
      2,
    ],
    "max-len": [
      "error",
      120,
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "arrow-parens": [
      "error",
      "always",
    ],
    "semi": [
      "error",
      "never",
    ],
    "space-before-function-paren": [
      "error",
      {
        asyncArrow: "always",
        anonymous: "never",
        named: "never",
      },
    ],
    "no-trailing-spaces": "error",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
}