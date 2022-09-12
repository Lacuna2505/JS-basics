"use strict"
let number = 5;
const number1 = 1000;

// camelCase
// snake_case
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase

console.log(number);
console.log(number1);

//Прямих констант не буває
const obj = {
    age: 20
}
obj.age = 18
console.log(obj.age);

//Старий let
var firstName = 'Taras';
firstName = 'Dima';
console.log(firstName);

//Область видимості. Не знайте якщо за дужками
{
    let number2 = 4;
}

let a = 1,
    b = 2,
    c = 'Tima';

    //Змінні повинні бути зрозумілими
    const width = 3000;
    const length = 2000;
    console.log('Ширина: ' + "width" + ', довжина:' + "lenght");