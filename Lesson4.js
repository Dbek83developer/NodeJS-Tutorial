/**
 * Created by ASUS on 24.03.2018.
 */
/*
const arr = [
    {
        id: 1,
        name: 'Bob',
        age: 21
    },
    {
        id: 2,
        name: 'Amy',
        age: 18
    },
    {
        id: 3,
        name: 'Ali',
        age: 23
    }
];

arr.forEach(el =>{
    console.log('age is', el.age);
})

// array filter, returns new array
const filtered = arr.filter(el => {
    return el.age >20;
})
// array map, returns new array
const mapped = arr.map(el => {
    return el.age *2;
})

const reduced = [1,2,3,4,5,6].reduce(function (prev, next) {
    return prev +next;
},0);

const arrayOf = Array.of(1,2,'dbvdf',4,5,6);
const find = [1,5,10,20,30,50].find(function (el) {
 return el >30;
});

const findIndex = [1,5,10,20,30,50].findIndex(function (el) {
    return el >30;
});

console.log('filtered', filtered);
console.log('mapped', mapped);
console.log('reduced', reduced);
console.log('arrayOf', arrayOf);
console.log('find', find);
console.log('findIndex', findIndex);*/
/*class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        // private qilish uchun _ qushiladi lekin uzgartirsa buladi js da
        /!*this._name = name;
        this._age = age;*!/
    }
    printPerson(){
        console.log('Name :', this.name);
        console.log('Age :', this.age);
    }

    static methodName(){
        console.log('Static method');
    }
}*/
const {Person} = require('./Modul/Person');
class Calc {
    constructor(){
        this.answer = 0;
    }
    add(num1, num2=this.answer){
        //if (!num2==)
        this.answer = num1 + num2;
        return this;
    }
    multply(num1, num2=this.answer){
        //if (!num2==)
        this.answer = num1 * num2;
        return this;
    }

    div(num1, num2=this.answer){
        //if (!num2==)
        this.answer = num1 / num2;
        return this;
    }
    minus(num1, num2=this.answer){
        //if (!num2==)
        this.answer = num1 - num2;
        return this;
    }
    printAnswer(){
        console.log(this.answer);
    }
}
class Student extends Person{
    constructor(name, age, university){
        super(name,age);
        this.university = university;
    }
    study(){
        console.log(this.name + ' is study')
    }
    printPerson(){
        super.printPerson();
        console.log('Study at the ' ,this.university);
    }
}

class Worker extends Person{
    constructor(name, age, work_place){
        super(name,age);
        this.work_place = work_place;
    }
    work(){
        console.log(this.name + ' is working')
    }
    printPerson(){
        super.printPerson();
        console.log('Working place ' ,this.work_place);

    }
}

class Modul extends Calc{
    mod(num1,num2 = this.answer){
        this.answer = num1%num2;
        return this;
    }
}

class Sqrt extends Calc{
    sqrt(num1){
        this.answer = Math.sqrt(num1);
        return this;
    }
}
// static method example yaratmasdan class ni uzidan chaqiradi. static method class bilan ishlaydi
/*
Person.methodName();

const person = new Person("John", 21);
person.printPerson();*/
/*
const calc = new Calc();
calc.add(1,2).printAnswer();
calc.minus(2,2).printAnswer();
calc.multply(1,2).printAnswer();
calc.div(1,2).printAnswer();
*/
const student = new Student('John', 21, 'Inha');
const worker = new Worker('Ali', 33, 'NewMax');
student.study();
worker.work();
student.printPerson();
worker.printPerson();

const modExample = new Modul();
const sqrtExample = new Sqrt();
modExample.mod(6,4).printAnswer();
sqrtExample.sqrt(25).printAnswer();

// overloop.js dan metodlarni chaqirib olyapmiz
const functions = require('./Modul/overloop');

console.log(functions.printB());
console.log(functions.printA());