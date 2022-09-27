// 1.

const Func = () => {
    return "hello world"
    
}
console.log(Func());


// 2.

const Func1 = () => {
    console.log('Hello world')
}
setTimeout(Func1, 5000);

// 3.
let person1 = {
    name1:'Vlada', 
    surname: 'Shypalenko', 
    favoriteNumber: 0
}
function vladaIsTheBestAgain (newData) {
    newData.age = 29
    return newData;
};
vladaIsTheBestAgain(person1)
console.log(`My name is ${person1.name1} ${person1.surname} I am ${person1.age} years old and my favorite number is ${person1.favoriteNumber}`);  
 



// 4.


let massive = [ 7, " ", 'Hello']
const massiveChange = (vladaTheBest) =>{
    vladaTheBest[0] = 'hi'
    return (vladaTheBest)
} 
massiveChange(massive)
console.log(massive)
// let eivorVarion = [true, 'hello']
// massiveChange(eivorVarion)
// console.log(eivorVarion)




// 5.

function myFn(){
    console.log('hello from myFn')
}
setTimeout(myFn, 2000);

// 6.

let cars = [{
    carBrand: 'Mazda',
    price: 25000,
    isAvailableforSale: true
},
{
    carBrand: 'Mazda2',
    price: 25000,
    isAvailableforSale: true
},
{
    carBrand: 'Mazda3',
    price: 25000,
    isAvailableforSale: true
}];
function forSale (nadoelodelathm){
    let oneItem = nadoelodelathm[0]
    oneItem.carBrand = 'Bentley',
    oneItem.price = 1,
    oneItem.isAvailableforSale = false
    nadoelodelathm.push(oneItem)
    return nadoelodelathm
    }
    
forSale(cars)
console.log(cars)

// 7.
const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN
}
function exersiceSeven (seven){
    for(const a in seven){
        if (a == 'key3'){
         console.log(seven[a])
        }
        else if (a == 'key10'){
            console.log(seven[a])
        }
    } 
    
}
exersiceSeven(myObject);

// 8.
const products = [{
    productId: 1355,
    name: 'phone'
},
{
    productId: 5131,
    name: 'laptop'
},
{
    productId: 6134,
    name: 'tablet'
}
    
];
function findProductById(firstParam, secondParam){
   console.log(secondParam)
   console.log(firstParam)
}
findProductById(products[0].productId, products)

// Тут не совсем ясно мне условие, подскажите, пожалуйста, какие два параметра должна принимать функция 




