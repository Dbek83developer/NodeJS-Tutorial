/**
 * Created by ASUS on 23.03.2018.
 */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// function return unique array
function uniqueArray(arr) {
    let unique = arr.filter( onlyUnique );
    return unique;
}
/*
function unqArr(arr) {
    let unique = [];
    unique.push(arr[0]);
}*/

let a = ['a', 1, 'a', 2, '1', 'b', 5, 'd', 'b', 7, 5];
//let unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

console.log(uniqueArray(a));