//Не задания
for (let i =0; i<5; i++){
    console.log(i);
}

let count =0;
while (count<3){
    console.log("Count:", count);
    count++;
}

let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while(doValue<3);

for (let i=0; i<10; i++){
    if (i==5){
        break;
    }
    console.log(i);
}

for (let i=1; i<=3; i++){
    for (let j=1;j<=3; j++){
        console.log("i=${i}, j=${j}");
    }
}

function sum(a,b){
    return a+b;
}
console.log(sum(3,5));

function sayHello(name){
    console.log("Helli, ${name}");
}
sayHello("Тимофей")

function greet (name="Гость"){
    console.log("Привет," +name);
}
greet();
greet("Анастасия")

const add = function(a,b){
    return a+b;
};
console.log(add(2,3));

function makeCounter(){
    let count =0;
    return function(){
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

function sumFunc(a,b){
    return a+b;
}

const sumFunc2 = (a,b)=> a+b;

const double =x=> x*2;

const sumFun3 = (a,b) => a+b;

const sayGreeting = ()=> console.log("Hello");

const square =x =>x*x;

const calculate =(a,b) =>{
    let result = a+b;
    return result*2;
}
//задания
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
//
let number = 5;
while (number >= 0) {
    console.log(number);
    number--;
}
console.log("Сумма чисел от 1 до 10:", sum);
//
console.log("Чётные числа");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    if (i === 8) {
        break; 
    }
    console.log(i);
}
//
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
function multiply(a, b) {
    return a * b;
}
console.log("Произведение 4 и 5:", multiply(4, 5));
//
function printInfo(name, age) {
    console.log(`Имя: ${name}, Возраст: ${age}`);
}
printInfo("Мария", 25);
//
function calculateDiscount(price, discount = 10) {
    return price - (price * discount) / 100;
}
console.log("Цена со скидкой (по умолчанию 10%):", calculateDiscount(1000));

