/**
 * Created by ASUS on 18.03.2018.
 */
// Declaration
let arr = [1,2,3,4,5,6,7,8,9,10];
let intArr = [9,2,4,1,5, 10,7,8,2,3];
let arr1 = new Array(10);

let array = [];
//console.log(arr.join("; "));
/*
let ismArr = ["Boburmirzo","Shaxzoda", "Jaxongirmirzo","Muyassar","Ozoda"]

console.log(ismArr.push("Bek"));
console.log(ismArr.join(", "));
console.log(ismArr.pop());// oxirgi elementni uchirib usha elemantni qaytaradi
console.log(ismArr.join(", "));
console.log(ismArr.unshift("Bahodir")); // boshiga qushadi va length beradi
console.log(ismArr.join(", "));
console.log(ismArr.shift()); // birinchi elementni uchirib length ni beradi
console.log(ismArr.join(", "));

array.concat(arr, ismArr);*/
//console.log(array.join(", "));
/*
function maxOfArr(arrInt) {
    let max = arrInt[0];
    for (let i = 1; i < arrInt.length; i++){
        if (max < arrInt[i]){
            max = arrInt[i];
        }
    }
    console.log(max);
}

function minOfArr(arrInt) {
    let min = arrInt[0];
    for (let i = 1; i < arrInt.length; i++){
        if (min > arrInt[i]){
            min = arrInt[i];
        }
    }
    console.log(min);
}

function averageOfArr(arrInt) {
    let sum = 0;
    for (let i = 1; i < arrInt.length; i++){
        sum+=arrInt[i];
    }
    console.log(sum/arrInt.length);
}
maxOfArr(intArr);
minOfArr(intArr);
averageOfArr(intArr);
averageOfArr(arr);
console.log(intArr.sort());*/
/*

let data ={
    name: "John Doe",
    age: 21,
    lang: ["English", "German"]
};

let service = { getData:()=> "data"}
console.log(data);

let {name} = data.name;
function someFunc({name ="None", email ="s@s", age= "20" }) {
console.log(name);
console.log(email);
console.log(age);
}

someFunc(data);
*/


function createContact({name, lastName = "", email, phone}) {
    if(typeof name !== 'undefined' && typeof email !== 'undefined' && typeof phone !== 'undefined'){
    let contact = {name,lastName,email,phone};
    array.push(contact);
   }
    else console.log("error create contact");
}

function printContactList() {
  //  console.log(array);
    for (let i = 0; i < array.length; i++) {
        console.log(i);
        console.log(array[i].name);
        console.log(array[i].lastName);
        console.log(array[i].email);
        console.log(array[i].phone);
    }
}

function updateContact(id, {name, lastName = "", email, phone}) {
let newContact =({name, lastName, email, phone});
array[id]= newContact;
}

createContact({
    name: "Bahodir",
    lastName: "Daminov",
    email: "11@g",
    phone: "5454665646"
})

createContact({
    name: "Muyassar",
    lastName: "Daminov",
    email: "dfgdf@g",
    phone: "12314646"
})
createContact({
    name: "Boburmirzo",
    lastName: "Daminov",
    email: "uyuyu@g",
    phone: "5454665646"
})

printContactList();
updateContact(1, {name:"Shaxzoda", email:"45@sddfs", phone:545646466})
printContactList();