let jsPsych = initJsPsych();

let conditions = [
    { word: 'peace', valence: 'positive' },
    { word: 'laugh', valence: 'positive' },
    { word: 'sunny', valence: 'positive' },
    { word: 'addict', valence: 'negative' },
    { word: 'battle', valence: 'negative' },
    { word: 'famish', valence: 'negative' },
];


let conditionsShuffled = jsPsych.randomization.shuffle(conditions)
