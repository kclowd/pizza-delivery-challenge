import { testFunction } from '../src/project';

describe('Step 1 testing', () => {
    test('Single direction', () => {
      expect(testFunction('arg')).toBe(0);
    });
  });