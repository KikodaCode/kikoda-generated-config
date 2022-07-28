import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { WebpackConfig } from '../../types';

export interface WebpackConfigFilePluginProps {
  webpackConfig: WebpackConfig;
  cracoConfig: any;
  pluginOptions: any;
  context: {
    env: string;
    paths: any;
  };
}

export const WebpackConfigFilePlugin = (configFileName: string) => ({
  overrideWebpackConfig: ({ webpackConfig }: WebpackConfigFilePluginProps) => {
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      // add an entry in config-manifest.json with the name of config
      // file so we can look it up and load it at runtime
      new WebpackManifestPlugin({
        publicPath: '/',
        fileName: 'config-manifest.json',
        generate: (seed, files) => ({
          files: files.reduce(
            () => ({
              'config.json': configFileName,
            }),
            seed,
          ),
        }),
      }),
    ];

    // Always return the config object.
    return webpackConfig;
  },
});
