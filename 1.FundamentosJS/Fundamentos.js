//#region  Declaracion de variables

// Constantes (variables que no van a ser reasignadas)
const name = 'CrazyJMB';

// Variable local al bloque actual de codigo
let x = 1;

//#region Ejemplo let

if (x === 1) {
    let x = 2;
    console.log("Dentro del IF: " + x);
    // Valor esperado: 2
}
console.log("Fuera del IF:" + x);
// Valor esperado: 1

//#endregion

// Variable global
var x = 1;

//#region Ejemplo var

if (X === 1) {
    let x = 2;
    console.log("Dentro del IF: " + x);
    // Valor esperado: 2
}
console.log("Fuera del IF:" + x);
// Valor esperado: 2

//#endregion

//#endregion

//#region Estructura de datos

//#endregion

