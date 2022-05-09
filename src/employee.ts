import { Address } from './address';

export class Employee {
    address: Address;
    id: number;

    constructor(id: number) {
        this.id = id;
        this.address = new Address(0,0); // Always initialize to starting location
    }

    public move = (direction: string) => {
        switch (direction.toLowerCase()) {
            case '^':
                this.address.y++;
                break;
            case 'v':
                this.address.y--;
                break;
            case '>':
                this.address.x++;
                break;
            case '<':
                this.address.x--;
                break;
            default:
                break;
        }
    }
}