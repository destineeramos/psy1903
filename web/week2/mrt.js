//alert with experiment instructions
//prompt first equation
//alert you answered [insert thier answer] 
//Repeat 2 more times 
//alert with thank you message 

//NEW 
//Date.now 
//store current time 
//capture time again after 
//subtract end from start 

alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can");


let start1 = Date.now();
let answer = prompt('What is 1+1');
let end1 = Date.now();
console.log(answer);
let result1 = ((end1 - start1) / 1000);
console.log(result1);
alert("You answered " + answer + " in " + result1 + " seconds")

let start2 = Date.now();
let answer2 = prompt('What is 2+2');
let end2 = Date.now();
console.log(answer2);
let result2 = ((end2 - start2) / 1000);
console.log(result2);
alert("You answered " + answer2 + " in " + result2 + " seconds")

let start3 = Date.now();
let answer3 = prompt('What is 3+3');
let end3 = Date.now();
console.log(answer3);
let result3 = ((end3 - start3) / 1000);
alert("You answered " + answer3 + " in " + result3 + " seconds")

alert("Thank you for your participation!")
