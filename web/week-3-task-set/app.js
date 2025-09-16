//Identify elements on the page we will update 
//let num1 = document.getElementById('num1');
//let num2 = document.getElementById('num2');

//generate random numbers to display on page load 
//let randomNum1 = Math.floor(Math.random() * 10) + 1;
//let randomNum2 = Math.floor(Math.random() * 10) + 1;

//Update elements on the page
//num1.innerHTML = randomNum1;
//num2.innerHTML = randomNum2;


//let response = prompt('What is your name?');
//let count = response.length;
//let firstLetter = response.charAt(0);
//console.log(firstLetter);
//let lastLetter = response.charAt(count - 1);
//console.log(lastLetter);

//let age = 20;
//if (age = 25) {
//console.log("Age is 25");
//}

//let a = 5;
//let b = 10;
//console.log(a > 3 && b < 15);

//let over18 = false;
//let hasGuardianApproval = true;
//console.log(over18 || hasGuardianApproval); 

//let count = 8;
//console.log(count % 2 == 0);

// //Identify elements on the page we will update 
// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');

// //generate random numbers to display on page load 
// let randomNum1 = Math.floor(Math.random() * 10) + 1;
// let randomNum2 = Math.floor(Math.random() * 10) + 1;
// let answer = randomNum1 + randomNum2

// //Update elements on the page
// num1.innerHTML = randomNum1;
// num2.innerHTML = randomNum2;

// //create the prompt for users 
// let response = prompt("What is " + randomNum1 + "+" + randomNum2 + '?');

// let feedback = '';

// if (response == answer) {
//     feedback = 'Correct!';
// } else if (response == answer + 1 || response == answer - 1) {
//     feedback = 'You were close!';
// } else {
//     feedback = 'Incorrect.';
// }
// //create the alert for users 
// alert(feedback + ' The expected answer is ' + answer);


// let age = prompt('How old are you?');
// if (age < 12) {
//     alert('Child');
// }
// if (age >= 12 && age <= 17) {
//     alert('Teenager');
// }
// if (age >= 18) {
//     alert('Adult');
// }

// let number = prompt('Please enter a whole number');
// if (number % 2 == 0) {
//     alert('The number you entered was even')
// }
// if (number % 2 !== 0) {
//     alert('The number you entered was odd')
// }


// //Welcome
// alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can");

// //Question 1
// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;
// let start1 = Date.now();
// let answer1 = prompt("What is " + num1 + "+" + num2);
// let end1 = Date.now();
// let result1 = ((end1 - start1) / 1000);
// if (answer1 == num1 + num2) {
//     alert("You answered " + answer1 + " in " + result1 + " seconds. This is CORRECT")
// }
// else {
//     alert("You answered " + answer1 + " in " + result1 + " seconds. This is INCORRECT")
// }

// //Question 2
// let num1_2 = Math.floor(Math.random() * 10) + 1;
// let num2_2 = Math.floor(Math.random() * 10) + 1;
// let start2 = Date.now();
// let answer2 = prompt("What is " + num1_2 + "+" + num2_2);
// let end2 = Date.now();
// console.log(answer2);
// let result2 = ((end2 - start2) / 1000);
// if (answer2 == num1_2 + num2_2) {
//     alert("You answered " + answer2 + " in " + result2 + " seconds. This is CORRECT")
// }
// else {
//     alert("You answered " + answer2 + " in " + result2 + " seconds. This is INCORRECT")
// }

// //Question 3
// let num1_3 = Math.floor(Math.random() * 10) + 1;
// let num2_3 = Math.floor(Math.random() * 10) + 1;
// let start3 = Date.now();
// let answer3 = prompt("What is " + num1_3 + "+" + num2_3);
// let end3 = Date.now();
// console.log(answer3);
// let result3 = ((end3 - start3) / 1000);
// if (answer3 == num1_3 + num2_3) {
//     alert("You answered " + answer3 + " in " + result3 + " seconds. This is CORRECT")
// }
// else {
//     alert("You answered " + answer3 + " in " + result3 + " seconds. This is INCORRECT")
// }

// //Thank you
// alert("Thank you for your participation!")



// //Welcome
// alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can");

// //Question 1
// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;
// let start1 = Date.now();
// let answer1 = prompt("What is " + num1 + "+" + num2);
// let end1 = Date.now();
// let result1 = ((end1 - start1) / 1000);
// if (answer1 == num1 + num2) {
//     alert("You answered " + answer1 + " in " + result1 + " seconds. This is CORRECT")
// }
// else {
//     alert("You answered " + answer1 + " in " + result1 + " seconds. This is INCORRECT")
// }


//Identify elements on the page we will update 
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

// Create variables to store references to elements on the page
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');

//generate random numbers to display on page load 
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
let answer = randomNum1 + randomNum2;
let start1 = Date.now();


//Update elements on the page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2;

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission 
    event.preventDefault();

    // Collect the response
    let response = form.elements['response'].value;
    let end1 = Date.now();
    let result1 = ((end1 - start1) / 1000);
    if (response == randomNum1 + randomNum2) {
        resultsMessage = 'You answered ' + response + ' in ' + result1 + ' seconds. This is CORRECT';
    } else {
        resultsMessage = 'You answered ' + response + ' in ' + result1 + ' seconds. This is INCORRECT';
    }
    // Report the results
    results.innerHTML = resultsMessage;
    form.style.display = 'none';
});

// results.innerHTML = 'You answered ' + response + '!';

// let start1 = Date.now();
// let answer1 = prompt("What is " + num1 + "+" + num2);
// let end1 = Date.now();
// let result1 = ((end1 - start1) / 1000);
// if (answer1 == num1 + num2) {
//     alert("You answered " + answer1 + " in " + result1 + " seconds. This is CORRECT")
// }
// else {
//     alert("You answered " + answer1 + " in " + result1 + " seconds. This is INCORRECT")
// }