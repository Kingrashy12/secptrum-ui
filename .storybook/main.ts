import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"], // stories file pattern
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        options: {
          fsCache: true,
          lazyCompilation: true,
        },
      },
    },
  },
  webpackFinal: async (config) => {
    // Ensure TypeScript files are handled properly
    config?.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: false, // Enable faster builds by transpiling only
          },
        },
      ],
    });

    // Ensure all relevant extensions are resolved
    config.resolve = {
      ...config.resolve,
      extensions: [...(config.resolve?.extensions || []), ".ts", ".tsx"],
    };

    return config;
  },
};

export default config;
