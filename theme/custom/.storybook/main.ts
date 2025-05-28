const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-react-i18next',
  ],
  docs: {},

  staticDirs: ['../public'],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
};
export default config;
