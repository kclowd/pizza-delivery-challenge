import { Address } from '../src/address';

describe('address testing', () => {
    test('new address should instantiate', () => {
        const address = new Address(2, -6);
        expect(address.x).toBe(2);
        expect(address.y).toBe(-6);
    });
  });