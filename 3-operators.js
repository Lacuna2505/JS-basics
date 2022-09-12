console.log('arr' + '- object');
console.log(2 + 2);
console.log('2' + 2);
console.log(2 + + '2');

let incr = 10,
    decr = 10;

//incr++
//decr--
console.log(incr++);
console.log(decr--); // добавляние и уменьшение значения

console.log(--incr);
console.log(++decr); // добавляние и уменьшение значения

console.log(5 > 2);
console.log(5 < 2); // <= >= ==
console.log(2 == 2); // нормальное сравнение будет равно
console.log('2' === 2); //супер четкое сравнение, не будет равно

console.log(2 != 2); //не равно
console.log('2' != 2);

// && значение и 

let isChecked = true,
    isClosed = false;

    console.log(isChecked && isClosed);

    // || знаечние или . хотя бы одно значение тру
    console.log(isChecked || isClosed);

    console.log(isChecked && !isClosed); // отрицание 
    console.log(isChecked || !isClosed); //меняет значение потому что отрицание
    console.log(!isChecked || isClosed); 

    const humburger = true;
    const fries = true; 
    console.log(humburger && fries); //есть то и то и я наелся( будет в домашке)

    const humburger1 = 5;
    const fries1 = 1;
    
    if(humburger1 && fries1){
        console.log('Я сыт')
    } // есть то и то и вывело значение, я сыт а если нет, то null, '', undefined, 0, NAN - всегда false

   // хотим либо 3 гамбургера и одну колу, либо 2 наггетса и 2 картошки 
    const humburger2 = 5;
    const fries2 = 1;
    const naggets = 1;
    const cocaCola = 1; 

    if(humburger2 >= 3 && cocaCola || naggets >= 2 && fries2 === 2){
        console.log('Я сыт')
    }


