import { LayeredConfig } from '../src';

describe('Layered Config', () => {
  class TestConfig {
    public readonly config: LayeredConfig;

    constructor({ base, layer }: { base: any; layer: any }) {
      this.config = new LayeredConfig(base, layer);
    }
  }

  /**
   * Stage must expose the custom type config.
   */
  test('Layers configuration objects in order', () => {
    const testConfig = new TestConfig({
      base: {
        components: {
          componentOne: {
            globalConfigValue: true,
            shouldBeOverwritten: false,
          },
        },
      },
      layer: {
        components: {
          componentOne: {
            stageConfigValue: true,
            shouldBeOverwritten: true,
          },
        },
      },
    });

    expect(testConfig.config).toStrictEqual({
      components: {
        componentOne: {
          globalConfigValue: true,
          stageConfigValue: true,
          shouldBeOverwritten: true,
        },
      },
    });
  });
});
