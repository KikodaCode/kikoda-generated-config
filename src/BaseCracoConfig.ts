import { WebpackConfigFilePlugin } from './plugins/WebpackConfigFilePlugin';
import { WebpackConfig } from './types';

export const BaseCracoConfig = (options: {
  /** Tell webpack what filename to use for pointer in the config-manifest file */
  generatedConfigFileName: string;
  /** Add any webpack externals config you need. ex. { react: 'React' } */
  webpackExternals?: any;
}) => ({
  webpack: {
    configure: (config: WebpackConfig): WebpackConfig => {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      config.externals = options.webpackExternals;

      return config;
    },
  },
  plugins: [
    {
      plugin: WebpackConfigFilePlugin(options.generatedConfigFileName),
    },
  ],
});
