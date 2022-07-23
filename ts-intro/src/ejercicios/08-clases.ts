class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal{
    // private alterEgo: string;
    // public edad: number;
    // static nombreReal: number;

    constructor(
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string
    ) {
        super( nombreReal, 'NY' );
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony')

console.log(ironman);