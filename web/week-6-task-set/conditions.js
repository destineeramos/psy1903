let timeline = [];
let conditions = [];

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

for (let i = 0; i < 5; i++) {
    let num1 = getRandomNumber(1, 10)
    let num2 = getRandomNumber(1, 10)
    let correctAnswer = num1 + num2;


    // // Generate a random alternative answer
    // let altAnswer = getRandomNumber(1, 10) + getRandomNumber(1, 10);

    // // Option A to make sure correctAnswer and altAnswer don’   t match
    // while (altAnswer == correctAnswer) {
    //     altAnswer = getRandomNumber(1, 10) + getRandomNumber(1, 10);
    // }

    conditions.push({
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
        // altAnswer: altAnswer,

    })
}

// console.log(conditions);
