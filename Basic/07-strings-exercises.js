/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let text1 = "Hogwarts"
let text2 = "Legacy"

console.log(`${text1} ${text2}`)
// 2. Muestra la longitud de una cadena de texto
let greeting = "Hi!, good morning, how are you today?"
console.log(greeting.length)
// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[36])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let textLong = ` this is a 
a long text in a varible,
thanks
`
console.log(textLong)
// 6. Interpola el valor de una variable en un string
let Name = "Alan"

console.log (`My name is ${Name}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let career = "I'm study computers systems"
console.log (career.replaceAll(" ","-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
let career2 = "I'm study laws"
console.log(career2.includes("study"))
// 9. Comprueba si dos strings son iguales
let phrase1 = "Hola mundo"
let phrase2 = "Hola mundo"

console.log(phrase1 && phrase2 == "Hola mundo")
console.log(phrase1 === phrase2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(phrase1.length == phrase2.length)

