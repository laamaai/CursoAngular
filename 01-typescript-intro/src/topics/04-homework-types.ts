// Forma 1:
interface SuperHero {
    name: string;
    age: number;
    address: {
        street: string;
        country: string;
        city: string;
    } ;
    showAddress: () => string;
}

// Forma 2:
/*
    interface Address {
        street: string;
        country: string;
        city: string;
    }

    interface SuperHero {
        name: string;
        age: number;
        address: Address;
        showAddress: () => string;
    }
*/

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.street + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log( address );

export {};