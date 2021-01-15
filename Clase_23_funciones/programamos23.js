function pideUnNumero(){
    return parseInt(prompt("Ingrese numero : "))
}

function calcularDiametro(numero){
    return numero*2
}

function calcularPerimetro(numero){
    const pi = 3.1415927
    return calcularDiametro(numero) * pi
}

function isBiggerThan(numero, value){
    if (numero > value) {
        return true;
    }else{
        return false;
    }
}
  

function validarCondiciones(numero){

    if(isBiggerThan(numero, 10)){  //es mayor a 10
  
        if (isBiggerThan(pideUnNumero(), 100)){ //es mayor a 100
            console.log("A")
        }else{
            console.log("B")    
        }
    }else{
    
        if (isBiggerThan(pideUnNumero(), 1000)){ //es mayor a 1000
            console.log("C")
        }else{
            console.log("D")  
        } 
    }
}



let numero = pideUnNumero()
validarCondiciones(numero)
console.log(numero)
console.log('El perimetro de un circulo de radio ' +  numero + '  es: ' + calcularPerimetro(numero))


