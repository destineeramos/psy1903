// //console.log('Hello from Week 4')

// let response = 10;
// let responseTime = 2.33;
// let feedback = 'correct';

// console.log('You answered ' + response + ' in' + responseTime +' seconds. Your answer was ' + feedback);

// console.log(`You answered ${response} in ${responseTime} seconds. Your answer was ${feedback}. `);

// //Part 1. Functions 

// let num1 = getRandomNumber(1, 10);
// let num2 = getRandomNumber(0, 100);

// console.log(num1);
// console.log(num2)

// displayRandomNumber();

// function getRandomNumber(min, max) {
//     let randomNumber = Math.floor(Math.random() * max) + min;
//     return randomNumber;
// }

// function displayRandomNumber() {
//     alert(getRandomNumber(1, 10));
// }

// //Scalar data types 

// letname = 'James'; //String
// let age = 15; //Number
// let adult = false; //Boolean

// // An Array of Numbers
// let ages = [45, 23, 28, 35, 35];

// // An Array of Strings
// //.............0.......1........2.......3
// let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
// names[1] = 'Bob';
// names.unshift('Sara');
// console.log(names);
// console.log(names[4]) // Sara



// // An Array can contain other Arrays
// let numbers = [1, 2, 3, [8, 9, 10]];

// // An Array of mixed data types
// let mixed = ['a', 'b', 1, 2, [true, 'bar']];

// //Part 3. Loops

// let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];

// let namesThatStartWithA = [];

// for (let name of names) {
//     if (name.charAt(0) == 'A') {
//         namesThatStartWithA.push(name);
//     }

// }

// console.log(namesThatStartWithA);

// //Part 4. Numerical for loops 
// let results = [];

// for (let i = 0; i < 3; i++) {
//     let num1 = getRandomNumber(1, 10);
//     let num2 = getRandomNumber(1, 10);
//     let start1 = Date.now();
//     let response = prompt(`What is ${num1} + ${num2} ?`);
//     let end1 = Date.now();
//     let result1 = ((end1 - start1) / 1000);
//     if (response == num1 + num2) {
//         feedback = 'correct';
//     } else {
//         feedback = 'incorrect';
//     }

//     results.push([feedback, result1]);

//     alert(`You answered ${response} in ${result1} seconds. This is ${feedback}`)
// }

// console.log(results);

// function getRandomNumber(min, max) {
//     let randomNumber = Math.floor(Math.random() * max) + min;
//     return randomNumber;
// }

//Part 5. Objects

// //Arrays: Store multiple ememebers, acessed via numerical indexes

// let participantA = ['Alice', 21, true];

// let participantB = {
//     name: 'Alice',
//     age: 21,
//     consent: true
// }
// participantB.consent = false;
// participantB.startTime = '2:00pm';
// delete participantB.age;
// console.log(participantB);

// if (participantA[2]) {
//     //...
// }

// if (participantB.consent) {
//     //...
// }

// let person = {
//     // Strings
//     firstName: 'Elliot',
//     lastName: 'Brown',

//     // Number
//     age: 30,

//     // Array
//     hobbies: ['reading', 'gaming', 'hiking'],

//     // Nested Object
//     address: {
//         street: '324 Western Ave',
//         city: 'Cambridge',
//         zipCode: '02139'
//     },

//     // Functions
//     // Observe how the keyword *this* is used in functions to reference other properties within this object
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     greet: function () {
//         return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
//     },

//     getAddress: function () {
//         return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
//     },

//     getHobbies: function () {
//         return `My hobbies include ${this.hobbies.join(', ')}`;
//     }
// };

// console.log(person.getAddress());

// document.getElementById()

// console.log()


let results = [];

for (let i = 0; i < 3; i++) {
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let start1 = Date.now();
    let response = prompt(`What is ${num1} + ${num2} ?`);
    let end1 = Date.now();
    let time = ((end1 - start1) / 1000);
    let answer = num1 + num2;
    if (response == answer) {
        feedback = 'correct';
    } else {
        feedback = 'incorrect';
    }


    results.push({
        response: response,
        answer: answer,
        feedback: feedback,
        time: time
    });

    alert(`You answered ${response} in ${time} seconds. This is ${feedback}`)
}

console.log(results)
c