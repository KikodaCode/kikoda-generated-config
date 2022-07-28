import { GeneratedConfig } from '../src';

describe('GeneragedConfig', () => {
  it('should throw error with no config file', () => {
    const create = () => {
      new GeneratedConfig({ stage: 'test', servicePath: '' });
    };
    expect(create).toThrow();
  });
});
