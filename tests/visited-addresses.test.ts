import { Address } from '../src/address';
import { VisitedAddresses } from '../src/visited-addresses';

describe('visited addresses testing', () => {
    test('instantiating a new visited address list should add starting location', () => {
        const visited = new VisitedAddresses();
        expect(visited.addresses.length).toBe(1);
    });

    test('adding a visited address that is not in list should grow the list', () => {
        const visited = new VisitedAddresses();
        visited.add(new Address(1,0));

        expect(visited.addresses.length).toBe(2);
    });

    test('adding a visited address that is already in list should not grow the list', () => {
        const visited = new VisitedAddresses();
        visited.add(new Address(0,0));

        expect(visited.addresses.length).toBe(1);
    });
  });