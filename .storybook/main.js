module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-styling", {
    name: '@storybook/addon-postcss', 
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  },],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};