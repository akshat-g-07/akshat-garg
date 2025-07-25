/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  jsxSingleQuote: false,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "",
    "^@/components/ui/(.*)$",
    "^@/components/markdown/(.*)$",
    "^@/components/(.*)$",
    "",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
