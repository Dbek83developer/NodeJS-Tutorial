/**
 * Created by ASUS on 24.03.2018.
 */
function printA() {
    return 'A';
}
function printB() {
    return 'B';
}

// exporting functions
module.exports.printA = printA;
module.exports.printA = printB;

// exporting functions
module.exports = {
    printA, printB
}