
let valorInput;
let numerosArray = [];
let masAlto = -1000000;
let masBajo =  1000000;
let numero = 0;
function salir(){
    valorInput = prompt('Ingrese un numero')
    numero = parseInt(valorInput, 10);

   if (isNaN(numero)) {
  

   } else{
        
        if (numero == 0){
            return false;
        }
        numerosArray.push(numero);
    }
    return true;
}

function eliminarElementos(elementosArray){
    let idxAlto = -1;
    let idxBajo = -1;
    let tempArray = [];
    for(var i=0; i<elementosArray.length;i++){

        if (elementosArray[i]< masBajo){
            masBajo = elementosArray[i];
            idxBajo = i;
        }
        if (elementosArray[i] > masAlto){
            masAlto = elementosArray[i];
        }

    }

    

    elementosArray.splice(idxBajo, 1)  //cambian los indices despues de borrar el elemento
    idxAlto = elementosArray.indexOf(masAlto);
    elementosArray.splice(idxAlto, 1)
    return elementosArray
}

while( salir() ){  //si true > infinito ; false > termina

}

console.log("Elementos Originales:" + numerosArray)
console.log("Elementos Sin mas Alto y sin mas Bajo: "+ eliminarElementos(numerosArray))
console.log("Elemento mas bajo: " + masBajo);
console.log("Elimento mas alto: " + masAlto);
console.log('Fin')