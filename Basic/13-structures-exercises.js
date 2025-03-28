/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
    let firstArray = ["Vaca", "Pollo", "Toro", "Tigre"]
    console.log(firstArray)
// 2. Añade dos más. Uno al principio y otro al final
    firstArray.unshift("Tiburon") //añade al principio del array
    firstArray.push("Iguana")
    console.log(firstArray)
// 3. Elimina el que se encuentra en tercera posición
    firstArray.splice(2,1)   
    console.log(firstArray)

// 4. Crea un set que almacene cinco libros

    let firstSet = new Set(["Harry potter", "El retrato de dorian grey", "Don Quijote de la mancha", "El principito", "El gato negro"])
    console.log(firstSet)

// 5. Añade dos más. Uno de ellos repetido
    firstSet.add("Harry potter")
    firstSet.add("La divina comedia")
    console.log(firstSet)
// 6. Elimina uno concreto a tu elección
    firstSet.delete("El retrato de dorian grey")
    console.log(firstSet)
// 7. Crea un mapa que asocie el número del mes a su nombre
    let firstMap = new Map([
        [1, "Enero"],
        [2, "Frebrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [6, "Junio"],
        [7, "Julio"],
        [8, "Agosto"],
        [9, "Septiembre"],
        [10, "Octubre"],
        [11, "Noviembre"],
        [12, "Diciembre"],
    ])

    console.log(firstMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
firstMap.has(5)
console.log(firstMap.has(5))
console.log(firstMap.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
firstMap.set("Verano",['Junio','Julio','Agosto'])
console.log(firstMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["Xbox", "Nintendo", "PlayStation"]
console.log(myArray)
let mySet = new Set(myArray)
console.log(mySet)

let myMap = new Map()
myMap.set = ("Consola", mySet)
console.log(myMap)

