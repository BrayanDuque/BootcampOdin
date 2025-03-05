//try-catch
//throw
//isNaN, isFinite, isInteger
let namme
//try intenta ejecutar la orden que le dimos y si produce un error entonces pasa al catch 
try {
    if (namme == undefined) {
        throw 'Error: El nombre no puede ser undefined';
    }
} catch (error) {
    console.log(error.message);
}finally { //finally siempre se va a ejecutar si o si 
    console.log('Este codigo siempre se va a ejecutar');

}
//throw
//throw es una palabra reservada que se utiliza para lanzar un error
throw new Error('El nombre no puede ser undefined');
//Ejemplo de uso de throw
let x = 1;

if (x > 5) {
    throw new Error('x no puede ser mayor que 5');
} else {
    console.log('x es menor que 5');
}
//Crear excepciones personalizadas 
