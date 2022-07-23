function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy( 100 )
let soyArreglo = queTipoSoy([1,2,2,2])

let soyExplicito = queTipoSoy<number>(200)