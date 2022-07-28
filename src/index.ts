import { BaseCracoConfig } from './base-craco-config';
import { GeneratedConfig, GeneratedConfigProps } from './generated-config';
import {
  useConfig,
  loadConfig,
  ConfigProviderOptions,
  asyncWithConfigProvider,
} from './hooks/configProvider';
import {
  WebpackConfigFilePlugin,
  WebpackConfigFilePluginProps,
} from './plugins/webpack-config-file-plugin';

export {
  BaseCracoConfig,
  WebpackConfigFilePlugin,
  GeneratedConfig,
  asyncWithConfigProvider,
  useConfig,
  loadConfig,
};

export type { WebpackConfigFilePluginProps, GeneratedConfigProps, ConfigProviderOptions };

export { DefaultConfigDir } from './generated-config';
