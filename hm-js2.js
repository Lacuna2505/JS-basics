// 1.
function food (humburger = 5, fries = 1){
    if(humburger >= 4 && fries === 1){
        return('Ми поїли')
    }
    else{
      return('Ми йдемо в інше кафе')
    }
    
 }
 console.log(food());
 
// 2.
function midPrice (price = 1900) {
   if(price > 999 && price < 1901){
return('Ціна між 1000 та 1900')
}
}
console.log(midPrice());

// 3.
function midPrice2 (price2 = 500){
if(price2 > 999 && price2 < 1901){
    return('Error')
}
else {
    return('Ok')
}
}
console.log(midPrice2());

// 4. 
function season (season1 = 1, season2 = 2, season3 = 3,season4 = 4){

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

function middleNum (a = 10, b = 8, c = 5){
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
return(middleNum());

// 6.
function week (weekDay = 5){
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
return(week());

// 7.
function mathemat (d = 10, e = 5, operator2 = "+"){
    
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
return(mathemat())

// 8. 
function text (text1 = 'regular expression'){
const noVowels = text1.replace(/[aeiou]/gi, '');
console.log(noVowels);}
return(text());
