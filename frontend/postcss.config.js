const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const purgecss = require('@fullhuman/postcss-purgecss')({

  extensions: ['html', 'js', 'php', 'vue'],

  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/**/*.vue',
    './src/**/**/**/*.vue',
    './src/**/**/**/**/*.vue',
    './src/**/*.js'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

  whitelistPatterns: [
    //For vue transitions
    /^slide-enter-active/,
    /^slide-leave-active/,
    /^slide-enter/,
    /^slide-leave-to/,
  ]

})

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    autoprefixer(),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
};