let jsPsych = initJsPsych();

//Welcome 
let welcomeTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1> Welcome to the Math Response Time Task! </h1>
    <p> In this experiment, you will be shown a series of math questions. </p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press START to begin.</p> 
    `,

    choices: ['START'],

};

timeline.push(welcomeTrial);


for (let condition of conditions) {
    let altAnswer = getRandomNumber(2, 20);
    if (altAnswer == condition.correctAnswer) {
        altAnswer = altAnswer + 1;
    }

    let choices = jsPsych.randomization.shuffle([condition.correctAnswer, altAnswer]); //this code shuffles the order of the buttons and makes it so that the correct answer isn't always on the left


    let mathTrial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>What is ${condition.num1} + ${condition.num2} </p>`,
        choices: choices,
        button_html: (choice, choice_index) => `<button class="jspsych-btn">${choice}</button>`, //this is the code that indicates what the buttons will say. 
        data: {
            collect: true,
        },
        on_finish: function (data) {
            let selectedAnswer = choices[data.response];
            data.num1 = condition.num1;
            data.num2 = condition.num2;
            data.correctAnswer = condition.correctAnswer;
            data.altAnswer = altAnswer;
            data.answer = selectedAnswer;
            data.correct = selectedAnswer == condition.correctAnswer;
        }
    };

    timeline.push(mathTrial);
}

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline);



//Trials 

// let randomNumbernew;

// for (let condition of conditions) {
//     randomNumbernew = getRandomNumber(2, 20);
//     if (randomNumbernew == condition.correctAnswer) {
//         randomNumbernew = randomNumbernew + 1;
//     }
//     // Use randomNumbernew here or save it
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = getRandomNumber;
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }
