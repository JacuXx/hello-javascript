/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let sum1 = 5
let sum2 = 4
console.log(sum1 + sum2)
let res1 = 5
let res2 = 4
console.log(res1 - res2)
let mul1 = 5
let mul2 = 4
console.log(mul1 * mul2)
let div1 = 5
let div2 = 4
console.log(div1 / div2)
let mod1 = 5
let mod2 = 4
console.log(mod1 % mod2)
let pot1 = 5
let pot2 = 4
console.log(pot1 ** pot2)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let VariableEqual = 5

let VariableIncrease = 2 
VariableIncrease += 2

let VariableDecrease = 8
VariableDecrease -= 8

let VariableMultiply = 6
VariableMultiply *= 6

let VariableDiv = 11
VariableDiv /= 11

let VariableMod = 3
VariableMod %= 3

let VariablePot = 10
VariablePot **= 10

//Hasta aqui son para complementar conocimientos
let VariableLeft = 4
VariableLeft <<= 4

let VariableRigth = 4
VariableRigth >>= 4

let VariableRigthWithOutSign = 5
VariableRigthWithOutSign >>>= 5

let VariableAndBit = 4
VariableAndBit &= 4

let VariableXorBit = 7
VariableXorBit ^= 7

let VariableOrBit = 7
VariableOrBit |= 7

let VariableAndLogic =13
VariableAndLogic &&= 13

let VariableOrLogic = 13
VariableOrLogic ||= 13

let VariableAnnularLogic = 5
VariableAnnularLogic ??= 5




// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(7 > 5)
console.log(7 >= 5)
console.log(5 != 6)
let num1 = 6
let num2 = "6"
console.log(num1 !== num2)
console.log(num1 <= num2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(num1 === num2)
console.log(7 < 6)
console.log(7 != 7)
let a = 7
console.log ( a <= "5")
console.log (5 > 10)



// 5. Utiliza el operador lógico and
console.log(5 >= 5 && 6 >5)

// 6. Utiliza el operador lógico or
console.log(1 < 3 || 10 > 15)

// 7. Combina ambos operadores lógicos
console.log(5 >= 2 && 6 >5 || 1 < 3 || 10 > 15 )

// 8. Añade alguna negación

console.log(!true)
console.log(!5 >= 5 && 6 >5)

// 9. Utiliza el operador ternario

const HarryPotter = true  
HarryPotter ? console.log( "Va a Hogwarts" ) :  console.log( "Es muggle" )
// 10. Combina operadores aritméticos, de comparáción y lógicas


let d = 5
let c = 3
let f = 5
console.log(f != d || f < d && f + c)
console.log(d == f &&  c != f || c / f % d)
console.log(a + f < 15 && d != f)