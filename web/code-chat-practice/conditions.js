let jsPsych = initJsPsych()
// let conditions = []

// let num1 = getRandomNumber(1, 10)
// let num2 = getRandomNumber(1, 10)

// let answer1 = num1 + num2
// let answer2 = getRandomNumber(2, 20)

// for (let i = 0; i < 4; i++) {
//     num1 = getRandomNumber(1, 10);
//     num2 = getRandomNumber(1, 10);
//     correctAnswer = num1 + num2;
//     answer2 = getRandomNumber(2, 20);
//     conditions.push({
//         num1: num1,
//         num2: num2,
//         correctAnswer: correctAnswer,
//         answer2: answer2,
//     })
// }

// for (let i = 0; i < 3; i++) {
//     words = ['dog', 'cat', 'apple', 'strawberry'];
//     let shuffledWords = jsPsych.randomization.shuffle(words);  // Correct shuffle
//     conditions.push({
//         word1: shuffledWords[0],
//     })
// }

let conditions = [
    { word: 'cat', isAnimal: true },
    { word: 'dog', isAnimal: true },
    { word: 'berry', isAnimal: false },
    { word: 'strawberry', isAnimal: false },
];


function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}


