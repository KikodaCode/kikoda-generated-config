import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { ConfigManifestPlugin } from '../src';

function defaultWebpackConfig() {
  return {
    plugins: [],
  };
}

describe('ConfigManifestPlugin', () => {
  it('should mutate webpackconfig with WebpackManifestPlugin', () => {
    const configManifestPlugin = ConfigManifestPlugin('random-name.config.json');

    const webpackConfig = configManifestPlugin.overrideWebpackConfig({
      webpackConfig: defaultWebpackConfig(),
    });

    const manifestPlugin = webpackConfig.plugins.find(
      plugin => plugin instanceof WebpackManifestPlugin,
    );

    expect(manifestPlugin).toMatchObject({
      options: {
        fileName: 'config-manifest.json',
        publicPath: '/',
      },
    });

    const manifest = manifestPlugin!.options.generate({}, [{}]);

    expect(manifest).toMatchObject({
      files: {
        'config.json': 'random-name.config.json',
      },
    });
  });
});
