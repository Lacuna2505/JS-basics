let num = 80;
while(num < 90){
    console.log(num)
    num++
}; // пока цифра меньше 90, то всегда выводить эту цифру и добавлять по 1

let num2 = 80;
do{
    console.log(num2)
    num++
    
}while(num2 < 90)

for( let i = 1; i < 8; i++){
    console.log(i)
};

let number = 80;
for(let i = 1; i < 8; i++){
    console.log(number)
    number++;
};

let number2 = 10;
for(let i = 1; i < 8; i++){
    if(number2 === 15){
        break;
    }
    console.log(number2);
    number2++;
};//должно дойти до 18 но на 15 остановится

for(let i = 1; i < 8; i++){
    if(i === 4){
        continue;
    }
    console.log(i)
};

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`)
    }
};
