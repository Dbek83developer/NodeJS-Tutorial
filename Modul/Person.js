/**
 * Created by ASUS on 24.03.2018.
 */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        // private qilish uchun _ qushiladi lekin uzgartirsa buladi js da
        /*this._name = name;
         this._age = age;*/
    }
    printPerson(){
        console.log('Name :', this.name);
        console.log('Age :', this.age);
    }

    static methodName(){
        console.log('Static method');
    }
}
module.exports.Person = Person;