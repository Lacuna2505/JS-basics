// 1.
const humburger = 5;
const fries = 1;
 

if(humburger >= 4 && fries === 1){
    console.log('Ми поїли')
}
else{
console.log('Ми йдемо в інше кафе')
};

// 2.

let price = 1900;
if(price > 999 && price < 1901){
console.log('Ціна між 1000 та 1900')
};


// 3.
let price2 = 500;
if(price2 > 999 && price2 < 1901){
    console.log('Error')
}
else {
    console.log('Ok')
};

let price3 = 1900;
(price3 >= 1000 && price3 <= 1900 ) ? console.log('error') : console.log('ok');




// 4.
let season = 1;
let season1 = 2;
let season2 = 3;
let season3 = 4;
if(season){
    console.log('Літо')
} if (season1) {
    console.log('Осінь')
} if (season2) {
    console.log('Зима')
} if (season1) {
    console.log('Весна')
};

// 5.

let a = 10, b = 8, c = 5;
if (a > b & b > c) {
    console.log(b);
}
else if (a > c & c > b) {
    console.log(c);
}
    else if (c > a & a > b) {
    console.log(a);
}
else if (b > a & b < c) {
    console.log(b);
}
else {
    console.log('there is no correct number')
};

//6.

let weekDay = 5;
switch(weekDay){
case 1:
    console.log('Monday')
    break;
case 2:
    console.log('Tuesday')
    break;
case 3:
    console.log('Wednesday')
    break;
case 4:
    console.log('Thursday')
    break;
case 5:
    console.log('Friday')
    break;

};

// 7.
let d = 10;
let e = 5;
let operator2 = "+";

switch(operator2){
case "+":
    console.log(d + e);
    break;
case "-":
    console.log(d - e);
    break;
case "*":
    console.log(d * e);
    break;
case "/":
    console.log(d / e);
    break;
default:
    console.log('Error');
};


// 8.

let result;
let operator = ('+');
let number1 = 10;
let number2 = 5;
switch(operator) {
case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
case '/':
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

};

// 8.
//let text = 'regular expression';
//const noVowels = text.replace(/[aeiou]/gi, '');
//console.log(noVowels);

let text = 'те саме українською мовою';
const noVowels = text.replace(/[еауїою]/gi, '');
console.log(noVowels);


// 9.

