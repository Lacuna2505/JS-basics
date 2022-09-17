function sum(a,b){
    let c = a + b
    console.log(c);
}
let d = 1;
let f = 3;
sum(3,10);
sum(d,f);


function sum2(a,b){
    let c = a + b;
    return c;

}
console.log(sum2(3,10));

let num1 = 1;
let num2 = sum2(3,10);
console.log(num1 + num2);
console.log(num1 + sum2(3,10));


function someNameFunction(a,b){
    let c = a + b;
    return c;
}


const anonimFunc = function (a,b){
    let c = a + b;
    return c;

}
console.log(anonimFunc(1,2));


const arrowFunc = (a,b) => {
    let c = a + b;
    return c;
}
console.log(arrowFunc(1,2));

const funcWithDefaultValue = (a, b = 2) => {
    return (a * b)
}
console.log(funcWithDefaultValue(2,5))
console.log(funcWithDefaultValue(2));


const playWithReturnFunc = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);
        if(i === 6){
            return
        }
        
    }
}
playWithReturnFunc();

console.log(Date());

const myRequastWithDAte = (filed1, addedAT = Date()) => {
    let requestBody = {
        someDate: 1,
        someDate2: 2,
        timestamp: ''
    }
    requestBody.someDate = filed1;
    requestBody.timestamp = addedAT;

    return requestBody;

}
console.log(myRequastWithDAte('some changes'));
console.log(myRequastWithDAte('some changes', 'some data'));



function someFunc(){
    console.log('hello')
}
setTimeout(someFunc, 5000); // 5 сек будет ждать


console.log(1)

function someFunc(){
    console.log(2)
}
setTimeout(someFunc, 5000);

console.log(3);



function first(){
    setTimeout(function(){
        console.log('first')
    }, 2000)
}

function second(){
    console.log('second');
}
first();
second();



function someFuncWithCallback(param1, callbackFunc){
    console.log(`Here is my param1 ${param1}`);
    callbackFunc();
}
someFuncWithCallback('updated param1', function(){
    console.log('Here is log from callback func')
});


function it(testDescription, testActions){
    console.log(`test descr: ${testDescription}`);
    testActions();
}
it('Search google', () =>{
});



sum22(1,2);


function sum22(a, b){
    let c = a + b;
    console.log(c);
} // именная функция видит свои значения до и после функции

const sum33 = (a, b) => {
    let c = a + b;
    console.log(c);
} // безимянная функция видет свои значеня только после самой функции

sum33(1,2);