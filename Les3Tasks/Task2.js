/**
 * Created by ASUS on 23.03.2018.
 */
function printArray(arr1) {
    let lengthOfArrElm = [];
    let son = arr1[0].length;
    //console.log(son);
    /*massivni har elementini uzunligini yangi massivga qushyapmiz*/
    for (let i = 0; i < arr1.length; i++){
       lengthOfArrElm.push(arr1[i].length);
    }

    /*eng uzun elementini aniqlab oldik*/
    let length = maxOfArr(lengthOfArrElm) + 4;
    let ramka = '';
    /*ramka chizib olamiz*/
    for (let i = 0; i < length; i++)
        ramka+='*';
    console.log(ramka);
    for (let i = 0; i < arr1.length; i++){
        let add = '';
        /*probellarni qushamiz*/
        if (lengthOfArrElm[i]<length-4)
            for (let j = 0; j < length-4-lengthOfArrElm[i]; j++)
                add+=' ';
        /*print string*/
        console.log('* ' + arr1[i] + add +' *');
    }
    console.log(ramka);
}

function maxOfArr(arrInt) {
    let max = arrInt[0];
    for (let i = 1; i < arrInt.length; i++){
        if (max < arrInt[i]){
            max = arrInt[i];
        }
    }
    return max;
}

printArray(["Hello", "World", "in", "a", "frame"]);
printArray(["Hello hello", "World", "in Tashkent", "a", "frame da qoldi"]);