export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'iPhone 11',
    precio: 130
}

const tablet: Producto = {
    desc: 'Lenovo',
    precio: 2130
}

export function calculaISV(productos: Producto[]){
    let total = 0;

    productos.forEach( ( { precio } ) =>{
        total += precio
    })

    return [total, total * 0.16];
}

const articulos = [telefono, tablet];

const [total, isv] = calculaISV(articulos)

console.log('Total: ', total);
console.log('ISV: ', isv);