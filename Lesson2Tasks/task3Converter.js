/**
 * Created by ASUS on 11.03.2018.
 */
let fahrenheit = 0;
let kelvin = 0;
let celcius = 0;

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin(value) {
    const cTemp =value;
    const fTemp = (cTemp*(9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheit = roundNum(fTemp);
    kelvin = roundNum(kTemp);
    return "fahrenheit = " + fahrenheit + " kelvin = " + kelvin;
}

function fahrenheitToCelciusAndKelvin(value) {
    const fTemp =value;
    const cTemp = (fTemp-32)*(5/9) ;
    const kTemp = (fTemp +459.67)*5/9;
    celcius = roundNum(cTemp);
    kelvin = roundNum(kTemp);
    return "celcius = " + celcius + " kelvin = " + kelvin;
}

function kelvinToFahrenheitAndCelcius(value) {
    const kTemp =value;
    const fTemp = 9/5*(kTemp-273) +32;
    const cTemp = kTemp - 273.15;
    fahrenheit = roundNum(fTemp);
    celcius = roundNum(cTemp);
    return "fahrenheit = " + fahrenheit + " celcius = " + celcius;
}

console.log(celciusToFahrenheitAndKelvin(100));
console.log(fahrenheitToCelciusAndKelvin(100));
console.log(kelvinToFahrenheitAndCelcius(100));