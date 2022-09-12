if (4 === 4){
    console.log('Result')
};

const humburger2 = 5;
const fries2 = 1;
const naggets = 1;
const cocaCola = 1; 

if(humburger2 === 3 && cocaCola || naggets === 2 && fries2 === 2){
    console.log('Я сыт')
} else{
    console.log('Я все еще голодная')
};

if(0){
    console.log('Я сыт')
} else{
    console.log('Я все еще голодная')
};

let num = 140;
if(num < 49){
    console.log('Меьнше 49')
} else if (num > 100){
    console.log('Больше 100')
} else {
    console.log('Ok')
};

(num == 50) ? console.log('ok') : console.log('error') // Если значение 50, то ок, а если нет, то ошибка


let number = 50;
switch(number){
    case 49:
        console.log('Значение 49')
        break;
    case 50:
        console.log('Значение 50')
        break;
    case 51:
        console.log('Значение 51')
        break;
    case 52:
        console.log('Значение 52')
        break;
}; // разные кейсы