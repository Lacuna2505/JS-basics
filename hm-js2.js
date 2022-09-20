// 1.
function food (humburger, fries){
    if(humburger >= 4 && fries === 1){
        return('Ми поїли')
    }
    else{
      return('Ми йдемо в інше кафе')
    }
    
 }
 console.log (food(5, 1));
 
// 2.
function midPrice (price) {
   if(price > 999 && price < 1901){
return('Ціна між 1000 та 1900')
}
}
console.log(midPrice(1900));

// 3.
function midPrice2 (price2){
if(price2 > 999 && price2 < 1901){
    return('Error')
}
else {
    return('Ok')
}
}
console.log(midPrice2(500));

// 4. 
function season (season1, season2, season3,season4){
if(season1){
    console.log('Літо')
} if (season2) {
    console.log('Осінь')
} if (season3) {
    console.log('Зима')
} if (season4) {
    console.log('Весна')
};
}
console.log(season());

// 5.

function middleNum (a, b, c){
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
}
middleNum(10, 8, 5);

// 6.
function week (weekDay){
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
}
week(5);

// 7.
function mathemat (d, e, operator2){
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
}
mathemat(10, 5, '+')

// 8. 


function text (text1){
const text1 = 'regular expression';
const noVowels = text1.replace(/[aeiou]/gi, '');
console.log(noVowels);
}
text(text1);




