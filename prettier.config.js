// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};

module.exports = config;
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "tailwind.config.js",
  tailwindAttributes: ["myClassList"],
};
