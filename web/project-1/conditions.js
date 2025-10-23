
// --- Setup---
let jsPsych = initJsPsych({
    on_finish: () => {
        jsPsych.data.displayData();
    }
});


let timeline = [];
let block1Array = [];
let block2Array = [];
let allBlocks = [block1Array, block2Array];



// Words
let positive = ['Freedom', 'Happy', 'Honest', 'Fairness', 'Joy', 'Trustworthy', 'Peace', 'Generous'];
let posPractice = ['Brilliant', 'Cheerful', 'Comfort', 'Perfect'];
let negative = ['Evil', 'Corrupt', 'Cowardly', 'Terrible', 'Nasty', 'Cruel', 'Dishonest', 'Greed'];
let negPractice = ['Agony', 'Abuse', 'Mean', 'Hurt'];
let democrat = ['Biden', 'DEI', 'Obama', 'Blue', 'Kamala', 'Medicaid', 'Welfare', 'Climate Change'];
let demPractice = ['Liberal', 'Left-wing', 'Pro-choice', 'Gun Contorl'];
let republican = ['GOP', 'Trump', 'Conservative', 'Red', 'MAGA', 'Right-Wing', 'NRA', 'Fox News'];
let repPractice = ['Pro-life', 'Tax cuts', 'RNC', 'State Rights'];


let positiveShuffled = jsPsych.randomization.shuffle(positive)
let posPracticeShuffled = jsPsych.randomization.shuffle(posPractice)
let negativeShuffled = jsPsych.randomization.shuffle(negative)
let negPracticeShuffled = jsPsych.randomization.shuffle(negPractice)
let democratShuffled = jsPsych.randomization.shuffle(democrat)
let demPracticeShuffled = jsPsych.randomization.shuffle(demPractice)
let republicanShuffled = jsPsych.randomization.shuffle(republican)
let repPracticeShuffled = jsPsych.randomization.shuffle(repPractice)

//Practice 1 

let practice1 = [
    ...posPracticeShuffled.slice(0, 2),
    ...negPracticeShuffled.slice(0, 2),
    ...demPracticeShuffled.slice(0, 2),
    ...repPracticeShuffled.slice(0, 2),
]

let practice1Shuffled = jsPsych.randomization.shuffle(practice1)

// Block 1
let block1 = [
    ...positiveShuffled.slice(0, 4),
    ...negativeShuffled.slice(0, 4),
    ...democratShuffled.slice(0, 4),
    ...republicanShuffled.slice(0, 4),
]


let block1Shuffled = jsPsych.randomization.shuffle(block1)

//Practice 2 

let practice2 = [
    ...posPracticeShuffled.slice(0, 2),
    ...negPracticeShuffled.slice(0, 2),
    ...demPracticeShuffled.slice(0, 2),
    ...repPracticeShuffled.slice(0, 2),
]

let practice2Shuffled = jsPsych.randomization.shuffle(practice2)


// Block 2
let block2 = [
    ...positiveShuffled.slice(4, 8),
    ...negativeShuffled.slice(4, 8),
    ...democratShuffled.slice(4, 8),
    ...republicanShuffled.slice(4, 8),
]


let block2Shuffled = jsPsych.randomization.shuffle(block2)




