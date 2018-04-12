/**
 * Created by ASUS on 11.03.2018.
 */
let m = 0.3;
let k = 1;
let md = 10;
let sumCash = 0;
let sum = 0;
function cashe() {
    //TODO: 100 ni har biriga bulamiz qoldiqsiz Integer bulishi kerak
    for (i = 1; i <= Math.floor(100/md); i++){
        for (j = 1; j <= Math.floor(100/k); j++){
            for (s = 1; s <= Math.floor(100); s++){
                sumCash = i*md + j*k + s*m;
                sum = i + j + s;
                if (sumCash == 100 && sum == 100){
                    console.log("Motherboard is " + i);
                    console.log("Keyboard is " + j);
                    console.log("Mouse is " + s);
                }
            }
            sum = 0;
            sumCash = 0;
        }
    }
}


cashe();
