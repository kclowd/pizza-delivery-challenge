import { Address } from "./address";

export class VisitedAddresses {
    addresses: Array<Address>

    constructor() {
        this.addresses = [];
        this.addresses.push(new Address(0,0));
    }

    public add(address: Address): void {
        const visited = this.addresses.find(a => a.x === address.x && a.y === address.y);
        if (visited == null) {
            this.addresses.push({...address});
        }
    }
}