let habilidades: string[] = ['Hola','Adios'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Fernando',
    hp: 100,
    habilidades: ['C++','JavaScript']
}

personaje.puebloNatal = 'SLP';

console.table(personaje);