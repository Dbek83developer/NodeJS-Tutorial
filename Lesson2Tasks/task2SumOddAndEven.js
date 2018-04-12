/**
 * Created by ASUS on 11.03.2018.
 */
function sumOddAndEven(number) {
    let sumOdd = 0;
    let sumEven = 0;
    let div;
    for(i = 0; i <= number; i++){
        //TODO: qoldiqsiz bo'lishni topish kerak = % bilan bulinadi
        div = i%2;
        if (div == 0){
            sumEven+=i;
        } else {
            sumOdd+=i;
        }
    }
    console.log("Summ of Even numbers = "+sumEven + " Summ of Odd numbers = " + sumOdd);
}

sumOddAndEven(50);