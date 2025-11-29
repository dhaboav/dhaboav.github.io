/** @type {import("prettier").Config} */
module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: 'tailwind.config.js',
    tailwindAttributes: ['class', 'className', 'myClassList'],
}
