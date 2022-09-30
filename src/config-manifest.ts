export interface IConfigManifest {
  readonly files: {
    [key: string]: string;
  };
}

export class ConfigManifest implements IConfigManifest {
  /**
   * The key in the config-manifest.json file that contains the filename of the config file.
   */
  static readonly CONFIG_FILE_KEY = 'config.json';
  /**
   * The filename of the Config Manfiest file.
   */
  static readonly CONFIG_MANIFEST_FILENAME = 'config-manifest.json';

  readonly files: {
    [key: string]: string;
  };

  constructor(generatedConfigFileName: string) {
    this.files = {
      [ConfigManifest.CONFIG_FILE_KEY]: generatedConfigFileName,
    };
  }
}
