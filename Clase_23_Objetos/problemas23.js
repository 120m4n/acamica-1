// inicializa variables
var misPerros = []
let msg_adopcion = `Ingresa el estado de adopcion segun opcion:`;
let opciones = ['adopcion', 'en adopcion', 'adoptado'];



class Perro 
{
    constructor(nombre, adopcion){
        this.nombre = nombre;
        this.adopcion = adopcion;
    }

    set name(value){
        this.nombre = value;
    }

    get name(){
        return this.nombre;
    }

    set estadoAdopcion(value){
        this.adopcion = value; 
    }

    get estadoAdopcion(){
        return this.adopcion;
    }
}

function isCheckValidInput(msg, options_menu){
    let msg_prompt = msg + "\n";
    let numberOfOptions = options_menu.length;
    let numericOption = -1 ;

    options_menu.forEach(function(item, index){
        msg_prompt += index + ": " + item + "\n"; 
    });
    
    do {
        inputData = prompt(msg_prompt);
        numericOption = parseInt(inputData);
    }
    while (typeof numericOption == "undefined" || !((numericOption > -1) && (numericOption < numberOfOptions)) || isNaN(numericOption))

    return numericOption;
}


function processInput(){
    
    let nombre = prompt('Ingrese nombre del perro');

    
    let adopcion = isCheckValidInput(msg_adopcion, opciones);

    let myPerro = new Perro();
    myPerro.name = nombre;
    myPerro.estadoAdopcion = adopcion;
    misPerros.push(myPerro);


    let checkContinue = confirm("¿Desea ingrear otro registro?");

    return checkContinue;

    
}

function checkAdopcion(perro){
    return perro.estadoAdopcion === 0;
}

function checkEnProcesoAdopcion(perro){
    return perro.estadoAdopcion === 1;
}

function checkAdoptado(perro){
    return perro.estadoAdopcion === 2;
}

while( processInput() ){  //si true > infinito ; false > termina

}

// Muestra los datos en consola

console.log("Todos los perros :")
misPerros.forEach(function(perro, idx){
    console.log(idx + ' _Nombre: ' + perro.nombre + '  _Estado Adopcion: ' +  opciones[perro.adopcion]);
});


// crea un nuevo array filtrando los perros en estado: adopcion
let perrosEnAdopcion =  misPerros.filter(checkAdopcion)

console.log("Todos los perros en adopcion:" )
perrosEnAdopcion.forEach(function(perro, idx){
    console.log(idx + ' _Nombre: ' + perro.nombre + '  _Estado Adopcion: ' +  opciones[perro.adopcion]);
});

// crea un nuevo array filtrando los perros en estado: en proceso de adopcion
let perrosEnProceso = misPerros.filter(checkEnProcesoAdopcion)

console.log("Todos los perros en proceso de adopcion:" )
perrosEnProceso.forEach(function(perro, idx){
    console.log(idx + ' _Nombre: ' + perro.nombre + '  _Estado Adopcion: ' +  opciones[perro.adopcion]);
});

 // crea un nuevo array filtrando los perros en estado: adoptado
 let perrosAdoptado = misPerros.filter(checkAdoptado)

console.log("Todos los perros adoptados:" )
perrosAdoptado.forEach(function(perro, idx){
    console.log(idx + ' _Nombre: ' + perro.nombre + '  _Estado Adopcion: ' +  opciones[perro.adopcion]);
});
