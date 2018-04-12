/**
 * Created by ASUS on 23.03.2018.
 */
function mergeArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

let arr3 = mergeArrays(['a','b','c'], [1,2,3]);
console.log(arr3);