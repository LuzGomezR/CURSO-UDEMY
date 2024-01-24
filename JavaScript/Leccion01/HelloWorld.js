var palabra = "Hola Mundo";

console.log(palabra);

var numero =1000;
// Se utiliza typeof para que muestre en el codigo el tipo de variable que esta almacenando la variable
console.log(typeof numero);

// Tipo de dato objeto
var objeto = {
    nombre : "Luz",
    apellido: "Gomez",
    Edad: 25,
    Celular: "3164067533"
};
console.log(objeto)

// Tipo de dato booleano
var bandera = true;
console.log(typeof bandera);

// Tipo de dato function
function miFuncion (){

}
console.log(miFuncion);

// Tipo de dato Symbol = VALOR UNICO DE UNA VARIABLE
var simbolo = Symbol("MiSimbolo");
console.log(simbolo);

// DEFINICIÓN DE CLASES, que es una funcion
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(typeof x);

//Tipo de dato null = ausencia de valor = null es un tipo de dato object
var y = null;
console.log(typeof y);

//ARREGLOS = es un tipo de dato object

var marcasVehiculos = ['Volvo', 'Audi', 'BMW']
console.log(marcasVehiculos);
console.log(typeof marcasVehiculos);

//Cadena vacia
var z = '';
console.log(z);
console.log(typeof z);

