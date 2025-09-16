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


let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
if (age >= 12 && age <= 17) {
    alert('Teenager');
}
if (age >= 18) {
    alert('Adult');
}