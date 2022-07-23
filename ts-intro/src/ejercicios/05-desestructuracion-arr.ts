interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 3,
    cancion: 'Master of Puppets',
    detalles:{
        autor: 'Metallica',
        anio: 2002
    }
}


const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

// console.log('El volumen es: ', volumen);
// console.log('El segundo es: ', segundo);
// console.log('La cancion es: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[]  = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,c] = dbz;

// console.log('Personaje 1: ', a );
// console.log('Personaje 2: ', b );
console.log('Personaje 3: ', c );