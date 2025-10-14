
// --- Setup---
let jsPsych = initJsPsych({
    on_finish: () => {
        jsPsych.data.displayData();
    }
});


let timeline = [];


// Words
let positive = ['Freedom', 'Happy', 'Honest', 'Fairness', 'Joy', 'Trustworthy', 'Peace', 'Generous'];
let negative = ['Evil', 'Corrupt', 'Cowardly', 'Terrible', 'Nasty', 'Cruel', 'Dishonest', 'Greed'];
let democrat = ['Biden', 'DEI', 'Obama', 'Blue', 'Kamala', 'Medicaid', 'Welfare', 'Climate Change'];
let republican = ['GOP', 'Trump', 'Conservative', 'Red', 'MAGA', 'Right-Wing', 'NRA', 'Fox News'];


let positiveShuffled = jsPsych.randomization.shuffle(positive)
let negativeShuffled = jsPsych.randomization.shuffle(negative)
let democratShuffled = jsPsych.randomization.shuffle(democrat)
let republicanShuffled = jsPsych.randomization.shuffle(republican)


// Block 1
let block1 = [
    ...positiveShuffled.slice(0, 4),
    ...negativeShuffled.slice(0, 4),
    ...democratShuffled.slice(0, 4),
    ...republicanShuffled.slice(0, 4),
]


let block1Shuffled = jsPsych.randomization.shuffle(block1)


// Block 2
let block2 = [
    ...positiveShuffled.slice(4, 8),
    ...negativeShuffled.slice(4, 8),
    ...democratShuffled.slice(4, 8),
    ...republicanShuffled.slice(4, 8),
]


let block2Shuffled = jsPsych.randomization.shuffle(block2)




