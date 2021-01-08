
let valorInput;
let nonumerosArray = [];
let paresArray = [];
let imparesArray = [];
function salir(){
    valorInput = prompt('Ingrese un numero')
    numero = parseInt(valorInput, 10);

   if (isNaN(numero)) {
        nonumerosArray.push(valorInput);

   } else{
        
        if (numero == 0){
            return false;
        }
        if (numero % 2 == 0){
            paresArray.push(numero);
        }
        else{
            imparesArray.push(numero); 
        }
        
    }
    return true;
}


    
while( salir() ){  //si true > infinito ; false > termina

}

console.log("Elementos No Numericos:" + nonumerosArray);
console.log("Elementos Pares:" + paresArray);
console.log("Elementos Impares:" + imparesArray);

console.log('Fin')