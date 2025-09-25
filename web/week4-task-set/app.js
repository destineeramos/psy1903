// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 1.8) + 32;
//     return fahrenheit;
// }
// console.log(celsiusToFahrenheit(10)); // Expected output: 50
// console.log(celsiusToFahrenheit(-5)); // Expected output: 23


// function convertTemp(temp, convertTo) {
//     if (convertTo == 'c') {
//         return (temp - 32) / 1.8;
//     } else if (convertTo == 'f') {
//         return (temp * 1.8) + 32;
//     }

// }

// console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
// console.log(convertTemp(10, 'f')); // Expected output: 50

// function getWordLengths(words) {
//     let lengths = [];
//     for (let word of words) {
//         lengths.push(word.length);
//     }
//     return lengths;
// }

// let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
// console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]



// function getLongestWord(words) {
//     let longestWord = '';
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }


// let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
// console.log(getLongestWord(words)); // Expected output: banana

// function getOddNumbers(numbers) {
//     let oddNumber = [];
//     for (let number of numbers) {
//         if (number % 2 == 1) {
//             oddNumber.push(number);
//         }
//     }
//     return oddNumber;
// }

// console.log(getOddNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5]
// console.log(getOddNumbers([12, 45, 10, 11, 61])); // Expected output: [45, 11, 61]


// function filterNumbers(numbers, evenOrOdd) {
//     let result = [];
//     for (let number of numbers) {
//         if (evenOrOdd == 'even' && number % 2 == 0) {
//             result.push(number)
//         }
//         if (evenOrOdd == 'odd' && number % 2 == 1) {
//             result.push(number)
//         }
//     }
//     return result;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 'even')); // Expected output: [2, 4]
// console.log(filterNumbers([1, 2, 3, 4, 5], 'odd')); // Expected output: [1, 3, 5]
// console.log(filterNumbers([45, 10, 11, 61], 'even')); // Expected output: [10]
// console.log(filterNumbers([45, 10, 11, 61], 'odd')); // Expected output: [45, 11, 61]


alert(`Welcome to the even/odd response time task. 

You are about to see a series of numbers. 

If the number you see is EVEN, type the letter "e".
If the number you see is ODD, type the letter "o". 

Please answer as quickly and accurately as possible.`)

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

let results = [];

for (let i = 0; i < 5; i++) {
    let number = getRandomNumber(1, 20);
    let start1 = Date.now();
    let response = prompt(`Number: ${number}. 

Type the letter "e" for EVEN 

Type the letter "o" for ODD`);
    let correct = null
    if (number % 2 == 0 && response == 'e') {
        correct = true;
    }
    else if (number % 2 == 1 && response == 'o') {
        correct = true;
    }
    else {
        correct = false;
    };
    let end1 = Date.now();
    let responseTime = (end1 - start1) / 1000;
    let result = {
        number: number,
        response: response,
        correct: correct,
        responseTime: responseTime,
    };
    results.push(result);
}

console.log(results);

alert('Thank you for your time')



