let jsPsych = initJsPsych();

//Welcome 
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1 class='title'> Welcome to the Math Response Time Task! </h1>
    <p> In this experiment, you will be shown a series of math questions. </p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
    `,

    choices: [' '],

};

timeline.push(welcomeTrial);

//Survey Trial 
let likert_scale = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree"
];

let surveyTrial = {
    type: jsPsychSurveyLikert,
    questions: [
        { prompt: "I enjoy solving math problems.", name: 'Enjoy', labels: likert_scale },
        { prompt: "I find math easy.", name: 'Easy', labels: likert_scale },
    ],
};

timeline.push(surveyTrial);

//Math Trial 
for (let condition of conditions) {
    // let choices = jsPsych.randomization.shuffle([condition.correctAnswer, condition.altAnswer]); //this code shuffles the order of the buttons and makes it so that the correct answer isn't always on the left

    let mathTrial = {
        type: jsPsychSurveyHtmlForm,
        preamble: `<p class = 'equation'> What is <span class = 'numbers'>${condition.num1}</span> + <span class = 'numbers'>${condition.num2}</span> </p>`,
        html: `<p><input type='text' name='answer' id='answer'></p>`,
        autofocus: 'answer', // id of the field we want to auto-focus on when the trial starts
        button_label: 'Submit Answer',
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.num1 = condition.num1;
            data.num2 = condition.num2;
            data.answer = data.response.answer;
            data.correctAnswer = condition.correctAnswer;
            if (data.response.answer == condition.correctAnswer) {
                data.correct = true;
            } else {
                data.correct = false;
            }
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
