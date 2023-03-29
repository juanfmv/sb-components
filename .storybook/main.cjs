// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     // {
//     //   name: '@storybook/addon-postcss',
//     //   options: {
//     //     postcssLoaderOptions: {
//     //       implementation: require('postcss'),
//     //     },
//     //   },
//     // },
    
//   ],
//   "framework": "@storybook/react",
//   "core": {
//     "builder": "@storybook/builder-vite"
//   },
//   "features": {
//     "storyStoreV7": true
//   }
// }
module.exports = {
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: '@storybook/react',
  stories: [
    '../src/**/*.stories.@(js|mdx)', 
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};