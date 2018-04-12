/**
 * Created by ASUS on 24.03.2018.
 */
const {Person} = require('./Person');
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

const fs = require('fs');
fs.readFile('./overloop.js', 'utf-8',(err, data) => {
    console.log("Error", err);
    console.log("1");
    let file = data;
    console.log(file);
});
const stud = new Student('Ali', 18,'Inha');
stud.printPerson();