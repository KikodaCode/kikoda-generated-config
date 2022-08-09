import { WebpackPluginInstance } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

export interface WebpackConfig {
  plugins: WebpackPluginInstance[];
}

export interface ConfigManifestPluginProps {
  webpackConfig: WebpackConfig;
}

/**
 * This is a CRACO plugin that generates a config-manifest.json in build artifacts file that
 * can be used to load a generated config file with a filename that is generated at build time based
 * on the contents of the config file.
 *
 * @param configFileName The filename of the generated config file. This is mapped to the `config.json` key in the manifest.
 */
export const ConfigManifestPlugin = (configFileName: string) => ({
  overrideWebpackConfig: ({ webpackConfig }: ConfigManifestPluginProps) => {
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
