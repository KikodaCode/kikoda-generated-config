export interface ConfigManifestContents {
  files: {
    'config.json': string;
  };
}

export class ConfigManifest {
  fileName: string;
  contents: ConfigManifestContents;

  constructor(generatedConfigFileName: string) {
    this.fileName = 'config-manifest.json';

    this.contents = {
      files: {
        'config.json': generatedConfigFileName,
      },
    };
  }
}
