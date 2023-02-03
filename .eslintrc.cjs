module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:astro/recommended",
  ],
  rules: {
    quotes: [
      "error",
      "double",
    ],
    "indent": [
      "error",
      2,
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "arrow-parens": [
      "error",
      "always",
    ],
    "space-before-function-paren": [
      "error",
      {
        asyncArrow: "always",
        anonymous: "never",
        named: "never",
      },
    ],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
}