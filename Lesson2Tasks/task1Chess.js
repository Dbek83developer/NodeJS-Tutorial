/**
 * Created by ASUS on 11.03.2018.
 */
function drawChessBoard(rows_num, cols_num) {
    /*@param isOdd = boolean
    * @param str = string*/
    let isOdd = true;
    let str ='';
    /*sikl draw chess*/
    for (i = 1; i <= rows_num; i++){
        for (j = 1; j <= cols_num; j++){
            if (isOdd){
                str+='X';
                isOdd = false;
            }else {
                str+='_';
                isOdd = true;
            }
        }
        /*print str*/
        console.log(str);
        /*str ni tozalaymiz*/
        str = '';
        if(isOdd == false)
            isOdd = true;
        else isOdd = false;
    }
}

drawChessBoard(5, 16);