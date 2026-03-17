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



