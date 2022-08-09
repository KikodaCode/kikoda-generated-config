import { existsSync } from 'fs';
import { tmpdir } from 'os';
import { v4 as uuid } from 'uuid';
import { GeneratedConfig } from '../src/generated-config';

describe('GeneratedConfig', () => {
  beforeAll(() => {
    process.env.DEBUG = 'true';
  });

  test('config writes to file when outDir provided', () => {
    const outDir = uuid();
    const configToFile = new GeneratedConfig({
      stage: 'unitTest',
      srcPath: tmpdir(),
      outDir,
    });

    expect(existsSync(`${tmpdir()}/${outDir}/${configToFile.fileName}`)).toBe(true);
  });

  describe('supported config extensions', () => {
    type InheritedConfig = {
      baseConfigValue?: boolean;
      stageConfigValue?: boolean;
      additionalConfig?: object;
    };

    test('json files', () => {
      const inheritedJSONConfig = new GeneratedConfig<InheritedConfig>({
        stage: 'unitTestInheritedJson',
        srcPath: __dirname,
        configDir: 'config',
        baseConfigFileName: 'base.config.json',
        additionalConfig: {
          hasValue: true,
        },
      });

      expect(inheritedJSONConfig.config.baseConfigValue).toBe(true);
      expect(inheritedJSONConfig.config.stageConfigValue).toBe(true);
      expect(inheritedJSONConfig.config.additionalConfig).not.toBeNull();
    });

    test('JS files', () => {
      const inheritedJSConfig = new GeneratedConfig<InheritedConfig>({
        stage: 'unitTestInheritedJs',
        srcPath: __dirname,
        configDir: 'config',
        baseConfigFileName: 'base.config.js',
        additionalConfig: {
          hasValue: true,
        },
      });

      expect(inheritedJSConfig.config.baseConfigValue).toBe(true);
      expect(inheritedJSConfig.config.stageConfigValue).toBe(true);
      expect(inheritedJSConfig.config.additionalConfig).not.toBeNull();
    });

    test('TS files', () => {
      const inheritedTSConfig = new GeneratedConfig<InheritedConfig>({
        stage: 'unitTestInheritedTs',
        srcPath: __dirname,
        configDir: 'config',
        baseConfigFileName: 'base.config.ts',
        additionalConfig: {
          hasValue: true,
        },
      });

      expect(inheritedTSConfig.config.baseConfigValue).toBe(true);
      expect(inheritedTSConfig.config.stageConfigValue).toBe(true);
      expect(inheritedTSConfig.config.additionalConfig).not.toBeNull();
    });
  });

  test('still returns base config when no stage config present', () => {
    type OnlyBaseConfig = {
      baseConfigValue?: boolean;
      additionalConfig: {
        hasValue: boolean;
      };
    };

    const nonExistentStageConfig = new GeneratedConfig<OnlyBaseConfig>({
      stage: 'nonExistentStage',
      srcPath: __dirname,
      configDir: 'config',
      baseConfigFileName: 'base.config.ts',
      additionalConfig: {
        hasValue: true,
      },
    });

    expect(nonExistentStageConfig.config.baseConfigValue).toBe(true);
    expect(nonExistentStageConfig.config.additionalConfig.hasValue).toBe(true);
  });
});
