import { ConfigManifest } from '../src/config-manifest';

describe('ConfigManifest', () => {
  test('should have a files object with config.json entry', () => {
    const configManifest = new ConfigManifest('random-name.config.json');

    expect(configManifest.files['config.json']).toBe('random-name.config.json');
  });
});
