export class Person {
    public name: string; //Puedo poner name? para cuando no viene con valor.
    private address: string;

    // Para cuando viene vacío
    /*constructor(){
        this.name = 'Maider';
        this.address = 'NY';
    }*/

    constructor( name: string, address: string){
        this.name = name;
        this.address = address
    }

}

//Otra clase. En el constructor se puede asignar tambien un valor constante
/*
export class Person {
    constructor( public name: string, public address: string){
        this.name = name;
        this.address = address
    }

    o
    constructor( public name: string, public address: string = 'No Address){}
}
*/

/*export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
       super(realName, 'New York');
    }
}*/

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
       this.person = new Person(realName, 'No Address');
    }
}

//Para cuando le vamos a dar valores por defecto dentro del constructor
//const ironman = new Person();

//Para cuando le damos los valores
const ironman = new Person('Maider', 'NY')

//const ironman2 = new Hero('Ironman', '45', 'Tony');

console.log(ironman)