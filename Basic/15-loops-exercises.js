/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++ ) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let i = 1
let resultado = 0
while(i <= 100) {
    resultado += i
    i++
}
console.log(resultado)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
i = 1
do{
    if (i % 2 == 0){
        console.log(i)  
    }    
    i++
    
} while(i < 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let namesArray = ["Alan", "Alexis", "Rosa", "Alejandro"]
for (let value of namesArray) {
    console.log(value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let text = "Hola Mundo";
let vocales = 0;
let indice = 0;

while (indice < text.length) {
    let caracter = text[indice].toLowerCase(); // Convertir a minúscula para comparar
    if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
        vocales++;
    }
    indice++;
}

console.log("Vocales encontradas:", vocales); // Devuelve 4
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myNumbers = [1, 3, 4, 6];
let product = 1; // Inicializar en 1 para multiplicación

for (let i = 0; i < myNumbers.length; i++) {
    product *= myNumbers[i];
}

console.log(product); // Resultado: 72 (1*3*4*6)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let a = 1
indice = 0
while(a <= 10){
    let multiplicación = 5 * a
    console.log("5 X", a,"=", multiplicación)
    a++
}

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10