export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Maider',
}

const passenger2: Passenger = {
    name: 'Melissa', 
    children: ['Natalia', 'Ainhoa'],
}

const returnChildrenNumber = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger2);