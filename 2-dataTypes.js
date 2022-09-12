/*
Типи даних:

Прості або примітиви:
-числа
-текст
-логічний або булевий
-null
-undefined
-Symbol
-BigInt

Обєкти:
-масиви
-функції
-обєкт дати
-регулярні вирази
-помилки
-обєкт

*/

// int числа до 2^53

let number = 4;
let floatNumber = 5.5;

console.log(4/0); //бесконечность
console.log(-4/0); // минус бесконечность
console.log('a' * 5); // не цифра
let text = '4'; // текст
let booleanType = true; // false например: оно закрашено таким-то цветом? да или нет
const a = null; // когда пустота
let b; //тоже пустота

let object = {};

let person = {
    age: 20,
    name: 'Vlada',
    isMarried: true
}
console.log(person.isMarried);
console.log(`Імя ${person.name}, Заміжня ${person.isMarried}` );
console.log('Вік: ' +person.age);

let endpoint = 'help';
console.log(`https://someUrl/${endpoint}`);

//масиви-список
let arr = ['text', 6, {}, []];
console.log(arr[0]);

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};
console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 5000
};

let someArr = [1, 2, 3];
let objArr = {
    0:1,
    1:2,
    2:3
};
console.log(someArr[0]);
console.log(objArr[0]);

let objArr1 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objArr1["a"]);

let num = 1;
console.log(num);
num = 2;
console.log(num);

let objArr2 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objArr2["a"]);

objArr2.a = 5;
console.log(objArr2["a"]);

let objArr3 = {
    a: 1,
    b: 2,
    c: {
        someKey: {
            someKey: 12
        }
    },
    d: {
        someKey2: [1, 2, 3]
    }
};
console.log(objArr3.c.someKey.someKey); 
console.log(objArr3.d.someKey2[0]);

//Властивості
let someText = 'Hello world';
console.log(someText.length); //длина текста
console.log(someText.substring(0,4)); // обрезка текста
console.log(someText.toLowerCase()); // все буквы маленькие
console.log(someText.toLocaleUpperCase()); // все буквы большие
console.log(someText.indexOf('o')); // покажет букву по счету, отсчет с 0 везде!

console.log(someText.substring(0, someText.length - 4)); // обрезка текста но отнять с конца 4 символа
console.log(someText.slice(0,4)); // обрезка текста
console.log(someText.trim()); // обрезка пробелов начало-конец
console.log(someText.charAt(2)); // покажет букву по счету, отсчет с 0 везде!
console.log(someText[2]); // покажет букву по счету, отсчет с 0 везде!


//-----------------Масиви!!!

let myArr = [];
myArr.push ('Доброго вечора'); //добавление инфы в масив
myArr.push ('Hello'); //добавление инфы в масив
console.log(myArr);
console.log(myArr.length); // длина масива
console.log(myArr.join()); //объединяет все значения масива
console.log(myArr.pop()); //выводит последнее значение масива