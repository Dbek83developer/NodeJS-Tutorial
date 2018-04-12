/**
 * Created by ASUS on 11.03.2018.
 */
let operation = '*';

let a = 1;
let b = 4;
/*

/!*plus*!/
if (operation === '+'){
    console.log(a+b)
}
/!*Minus*!/
if (operation === '-'){
    console.log(a-b)
}
/!*multiply*!/
if (operation === '*'){
    console.log(a*b)
}
/!*division*!/
if (operation === '/'){
    console.log(a/b)
}*/
//let c = [1,2,3,4,5,6]
/*
// for orqali summa
let summ = 0;
for (let i =0; i <= 50; i++){
    summ += i;

}
console.log(summ);*/
/*

function getData(id) {
    return{id, title: "title"}
}

console.log(getData(1))*/

/*
let getData = function (id) {
    console.log(id)
}

getData = function (id) {
    console.log("Edited");
}

getData();
*/
/*
let getData = (id) => console.log(id)
getData(555);*//*
let getData = (id) => namedFunc("Bahodir aka");
console.log(getData(999));*/
/*plus function*/
function plus(a, b) {
    return a+b;
}
/*minus*/
function minus(a, b) {
    return a-b;
}
/*multiply*/
function multiply(a, b) {
    return a*b;
}
/*division*/
function divide(a, b) {
    return a/b;
}

/* if statement for operation*/

 /*if (operation === '+'){
 console.log(plus(2,4));
 }

 if (operation === '-'){
 console.log(minus(6,4));
 }

 if (operation === '*'){
 console.log(multiply(2,4));
 }

 if (operation === '/'){
 console.log(divide(8,4));
 }*/
/*console.log(plus(2,4));
console.log(minus(6,3));
console.log(multiply(2,4));
console.log(divide(8,4));*/

function calculate(a, b, operation = '+') {
    if (operation === '+'){
        console.log(plus(a,b));
    }

    if (operation === '-'){
        console.log(minus(a,b));
    }

    if (operation === '*'){
        console.log(multiply(a,b));
    }

    if (operation === '/'){
        console.log(divide(a,b));
    }
}

calculate(5, 2, operation);
calculate(5, 2);