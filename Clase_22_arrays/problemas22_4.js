/* Ingresar mediante prompt cualquier carácter hasta
el ingreso de un 0 (cero).
Almacenar cada ingreso en una posición del array.
Al finalizar dividir la cantidad de elementos en 3
arrays iguales

    Si sobra un elemento eliminar el primero
    Si sobran dos elementos eliminar el primero
    y el último 
*/

let valorInput;
let valoresArray = [];
let numero = 0;
function salir(){
    valorInput = prompt('Ingrese un numero')
    numero = parseInt(valorInput, 10); // busca el 0 para salir 

    if (numero == 0){
        return false;
    }
    valoresArray.push(valorInput);
    
    return true;
}

function dividirArray(inputArray){
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let tamaño = inputArray.length;
    let nuevotamaño = Math.trunc(tamaño/3);
    let sobrante = tamaño % 3;

    if (sobrante == 1) {
        //elimina un elemento al inicio
        inputArray.shift();

    }else if (sobrante == 2){
        //elimina un elemento al iniciio y un elemento al finalizar
        inputArray.shift();
        inputArray.pop();
    }

    array1 = inputArray.slice(0, nuevotamaño*1);
    array2 = inputArray.slice(nuevotamaño*1, nuevotamaño*2);
    array3 = inputArray.slice(nuevotamaño*2, nuevotamaño*3);

    
    return [array1, array2, array3];
}

while( salir() ){  //si true > infinito ; false > termina

}

console.log("Elementos Originales:" + valoresArray)
console.log("Total elementos: " + valoresArray.length);
a = dividirArray(valoresArray);
console.log("Array 1: " + a[0]);
console.log("Array 2: " + a[1]);
console.log("Array 3: " + a[2]);

console.log('Fin')