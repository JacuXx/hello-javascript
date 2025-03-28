/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let value = 5;
if (value == 5) {
  console.log("My name is Alan");
} else {
  console.log("Valor incorrecto");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let username = "JacuXx";
let password = "haloreach2002";

if (username == "JacuXx" && password == "haloreach2002") {
  console.log("Succesfull");
} else {
  console.log("Failed");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num1 = 0;

if (num1 == 0) {
  console.log("Your number is zero");
} else if (num1 > 0) {
  console.log("Your numbre is positive");
} else {
  console.log("Your numbrer is negative");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 18;
if (age >= 18) {
  console.log("Is of legal age");
} else {
  console.log("Is a minor");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

const survey = age >= 18 ? "Is of legal age" : "Is a minor";
console.log(survey);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = "February";
if (month == "March" || month == "Abril" || month == "May") {
  console.log("It´s Spring");
} else if (month == "June" || month == "July" || month == "August") {
  console.log("It´s Summer");
} else if (month == "September" || month == "October" || month == "November") {
  console.log("It´s Autumn");
} else {
  console.log("It´s Winter");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  month == "January" ||
  month == "March" ||
  month == "May" ||
  month == "July" ||
  month
) {
  console.log("This month has 31 days");
} else if ((month = "February")) {
  console.log("This month has 28 days");
} else {
  console.log("This month has 30 days");
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "Italy";
let greeting;

switch (language) {
  case "Español":
    greeting = "Hola";
    break;
  case "English":
    greeting = "Hello";
    break;
  case "Germany":
    greeting = "Hallo";
    break;
  case "Italy":
    greeting = "Ciao";
    break;
  default:
    console.log("Idioma no reconocido");
}
console.log(greeting);
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month_with_switch = "February";
let season;
switch (month_with_switch) {
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;
  case "September":
  case "October":
  case "November":
    season = "Autumn";
    break;
  default:
    season = "Invalid month"; // Opcional: para manejar valores inesperados
}
console.log(season);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let day_for_months;
switch (month_with_switch) {
  case "February":
    day_for_months = "Yor month has 28 days";
    break;
  case "January":
  case "March":
  case "May":
  case "July":
    day_for_months = "Your month has 31 days";
    break
    default:
        day_for_months = "Your month has 30 days"
}
console.log(day_for_months)
