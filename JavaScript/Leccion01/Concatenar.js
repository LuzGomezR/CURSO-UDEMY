var nombre = "Luz Estela";
var apellido = "Gomez Romero";
console.log(nombre + ' ' + apellido);

var x = 5;
var y = 15
console.log(x + y);

// la variable x se convierte en una cadena por lo que primero esta el string
console.log(nombre + x+y);
console.log(x+y+nombre); // Se toma el primer valor que es number

//Se ejecuta primero el parentesis
console.log(nombre + (x+y));

