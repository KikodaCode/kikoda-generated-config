export enum ConfigManifestAttribute {
  /**
   * The key in the config-manifest.json file that contains the filename of the config file.
   */
  CONFIG_FILE_KEY = 'config.json',
  /**
   * The filename of the Config Manfiest file.
   */
  CONFIG_MANFIEST_FILENAME = 'config-manifest.json',
}

export interface ConfigManifestContents {
  files: {
    [ConfigManifestAttribute.CONFIG_FILE_KEY]: string;
  };
}

export class ConfigManifest {
  fileName: string;
  contents: ConfigManifestContents;

  constructor(generatedConfigFileName: string) {
    this.fileName = ConfigManifestAttribute.CONFIG_MANFIEST_FILENAME;

    this.contents = {
      files: {
        'config.json': generatedConfigFileName,
      },
    };
  }
}
