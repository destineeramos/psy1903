let timeline = [];
let conditions = [];

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

for (let i = 0; i < 6; i++) {
    let num1 = getRandomNumber(1, 10)
    let num2 = getRandomNumber(1, 10)
    let correctAnswer = num1 + num2;

    conditions.push({
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
    })
}

console.log(conditions);