interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Batman',
    edad: 35,
    direccion: {
        calle: 'Main St',
        pais: 'MEX',
        ciudad: 'SLP'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais	
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);