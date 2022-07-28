import { BaseCracoConfig } from './base-craco-config';
import { GeneratedConfig, GeneratedConfigProps } from './generated-config';
import {
  WebpackConfigFilePlugin,
  WebpackConfigFilePluginProps,
} from './plugins/webpack-config-file-plugin';

export { BaseCracoConfig, WebpackConfigFilePlugin, GeneratedConfig };

export type { WebpackConfigFilePluginProps, GeneratedConfigProps };

export { DefaultConfigDir } from './generated-config';
