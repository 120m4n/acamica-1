
let valorInput;
let elementosArray = [];
function salir(){
    valorInput = prompt('Ingrese un numero')

   if (isNaN(valorInput)) {
       if (valorInput === "Stop"){
           return false;
       }

   } else{
        elementosArray.push(parseInt(valorInput, 10));
    }
    return true;
}

while( salir() ){  //si true > infinito ; false > termina

}

console.log("Elementos:" + elementosArray)
console.log('Fin')