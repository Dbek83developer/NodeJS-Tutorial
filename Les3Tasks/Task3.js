/**
 * Created by ASUS on 23.03.2018.
 */
function reverseArray(arr1) {
    let revArr = [];
    for (let i = arr1.length-1; i >= 0; i--){
        revArr.push(arr1[i]);
    }
    return revArr;
}

let arr3 = reverseArray([1,2,3,4,5,6,7]);
console.log(arr3);