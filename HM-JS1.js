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

let price = 1000;
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

//let price4 = 500;
//if(!price4 > 999 && !price4 < 1901){
   // console.log('Ok')
//}
//else {
  // console.log('Error')
//};

// 4.
let summer = 1;
let autumn = 2;
let winter = 3;
let spring = 4;
if(1){
    console.log('summer')
} else  {
    console.log('other seasons')
};

// 5.
let numberA = 5;
let numberB = 7;
let numberC = 10;
// что-то тут совсем ничего не приходит в голову



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
let A = 10;
let B = 5;

switch(operator){
case 10:
    console.log(A + B)
    break;
case 5:
    console.log(A - B)
    break;
case 50:
    console.log(A * B)
    break;
case 2:
    console.log(A / B)
    break;
};

// 7.

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
let text = 'regular expression';
const noVowels = text.replace(/[aeiou]/gi, '');
console.log(noVowels);

// 9.

let km = 1
let metr 
if (metr = km / 1000) {
console.log(metr + " Метрів в кілометрі");
};