/**
 * Created by ASUS on 25.03.2018.
 */
/*callback*/
/*
function getData(params, callback) {
    callback(1, string);
}

getData({}, function (result) {
    console.log(result, string);
});
*/
const fs = require('fs');
fs.readFile('./Lesson4.js', 'utf-8', readFileCb /*(err, data)=>{
    /!*if (err) return console.log('Kodda xatolik');
   console.log(data); *!/
}*/);

function readFileCb(err, data) {
    if (err) return console.log('Kodda xatolik');
    console.log(data);
    fs.writeFile('./output.js', data, writeFileCb);
    fs.writeFile('./output2.js', data, writeFileCb);
}

function writeFileCb(err) {
    if (err) return console.log('file saqlanmadi xatolik');
    console.log('Fayl saqlandi');
}

console.log('end line');