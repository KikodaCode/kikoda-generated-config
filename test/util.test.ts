import { debug } from '../src/util';

test('DEBUG = true', () => {
  const spy = jest.spyOn(console, 'log');
  process.env.DEBUG = 'true';
  debug('DEBUG = true');

  expect(spy).toHaveBeenCalledWith('DEBUG = true');
});

test('DEBUG = 1', () => {
  const spy = jest.spyOn(console, 'log');
  process.env.DEBUG = '1';
  debug('DEBUG = 1');

  expect(spy).toHaveBeenCalledWith('DEBUG = 1');
});

test('no DEBUG', () => {
  const spy = jest.spyOn(console, 'log');
  process.env.DEBUG = undefined;
  debug('no DEBUG');

  expect(spy).not.toHaveBeenCalled();
});
