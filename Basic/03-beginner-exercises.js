/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//R= Comentario de una sola linea

// 2. Escribe un comentario en varias líneas

/* 
Este es un comentaria
de
varias lineas
jejejej
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos


//String
let myName = "Alan"
//Number
let myAge = 22
//Booleano
let isProgrammer = true
//Symbol
let oneSymbol = Symbol("thisSymbol")
//Undefine
let thisUndefine 
// Null
let thisNull = null
//BigInt
let thisBigInt = BigInt(128319219381237139121392n)
let thisBigIntv2 = 128319219381237139121392n
// 4. Imprime por consola el valor de todas las variables

console.log(myName)
console.log(myAge)
console.log(isProgrammer)
console.log(oneSymbol)
console.log(thisUndefine)
console.log(thisNull)
console.log(thisBigInt)
console.log(thisBigIntv2)
// 5. Imprime pocnoa el tipo de todas las variables
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof isProgrammer)
console.log(typeof oneSymbol)
console.log(typeof thisUndefine)
console.log(typeof thisNull)
console.log(typeof thisBigInt)
console.log(typeof thisBigIntv2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
//String
myName = "Alexis"
//Number
myAge = 23
//Booleano
isProgrammer = false
//Symbol
oneSymbol = Symbol("theSymbolIsNone")
//Undefine
thisUndefine 
// Null
thisNull = null
//BigInt
thisBigInt = BigInt(1283192193812371391213921241321n)
thisBigIntv2 = 128319219381237139121392123131231n   
console.log(myName)
console.log(myAge)
console.log(isProgrammer)
console.log(oneSymbol)
console.log(thisUndefine)
console.log(thisNull)
console.log(thisBigInt)
console.log(thisBigIntv2) 

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 24
//Number
myAge = false
//Booleano
isProgrammer = "Alexis"
//Symbol
oneSymbol = null
//Undefine
thisUndefine = BigInt(21321312312312)
// Null
thisNull
//BigInt
thisBigInt = Symbol("this_Symbol") 

console.log(myName)
console.log(myAge)
console.log(isProgrammer)
console.log(oneSymbol)
console.log(thisUndefine)
console.log(thisNull)
console.log(thisBigInt)
console.log(thisBigIntv2)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
//String
const myName1 = "Alan"
//Number
const myAge1 = 22
//Booleano
const isProgrammer1 = true
//Symbol
const oneSymbol1 = Symbol("thisSymbol")

//Undefine
//const thisUndefine1 

// Null
const thisNull1 = null
//BigInt
const thisBigInt1 = BigInt(128319219381237139121392n)
const thisBigIntv2_1 = 128319219381237139121392n

console.log(myName1)
console.log(myAge1)
console.log(isProgrammer1)
console.log(oneSymbol1)
//console.log(thisUndefine1)
console.log(thisNull1)
console.log(thisBigInt1)
console.log(thisBigIntv2_1)
// 9. A continuación, modifica los valores de las constantes
/*
//String
const myName1 = "Alexis"
//Number
const myAge1 = 26
//Booleano
const isProgrammer1 = false
//Symbol
const oneSymbol1 = Symbol("ourSymbols")
//Undefine
const thisUndefine1 
// Null
const thisNull1 = null
//BigInt
const thisBigInt1 = BigInt(128319219381237139121392123132131n)
const thisBigIntv2_1 = 12831921938123713912139212313121n

console.log(myName1)
console.log(myAge1)
console.log(isProgrammer1)
console.log(oneSymbol1)
console.log(thisUndefine1)
console.log(thisNull1)
console.log(thisBigInt1)
console.log(thisBigIntv2_1)
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse