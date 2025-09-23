// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 1.8) + 32;
//     return fahrenheit;
// }
// console.log(celsiusToFahrenheit(10)); // Expected output: 50
// console.log(celsiusToFahrenheit(-5)); // Expected output: 23


function convertTemp(temp, convertTo) {
    if (convertTo == 'c') {
        return (temp - 32) / 1.8;
    } else if (convertTo == 'f') {
        return (temp * 1.8) + 32;
    }

}

console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
console.log(convertTemp(10, 'f')); // Expected output: 50