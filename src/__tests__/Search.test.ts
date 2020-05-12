import { Search } from '../index';

test('my search', () => {
  expect(Search('jay')).toBe('Searching for jay');
})