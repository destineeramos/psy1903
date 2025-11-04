let timeline = []


// Intro 

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1> <span class = 'welcome'> Welcome to the My Code Chat </span> </h1>
    <p> In this experiment, you will be shown a series of math questions. </p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
    `,

    choices: [' '],
};

timeline.push(welcomeTrial)

//Trial 
//instructions ur giving js psych, preparing ur stimuli 

// for (let condition of conditions) {
//     let trial1 = {
//         type: jsPsychHtmlButtonResponse,
//         stimulus: `What is ${condition.num1} + ${condition.num2}?`,
//         choices: [condition.correctAnswer, condition.answer2]
//     }
//     timeline.push(trial1)

// }

for (let condition of conditions) {
    let trial1 = {
        type: jsPsychSurveyHtmlForm,
        preamble: `<p> What is a <span class = 'word'>${condition.word}</span> ? </p>`,
        html: `<p><input type="text" id="test-resp-box" name="answer" size="10" /></p>`,
        autofocus: 'test-resp-box',
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.answer = data.response.answer;
            console.log(data.response.answer);
            if (data.response.answer == 'animal' && condition.isAnimal == true) {
                data.correct = true
            } else {
                data.correct = false;
            }
        }
    }
    timeline.push(trial1)
}

// let resultsTrial = {
//     type: jsPsychHtmlKeyboardResponse,
//     choices: ['NO KEYS'],
//     async: false,
//     stimulus: `
//         <h1>Please wait...</h1>
//         <p>We are saving the results of your inputs.</p>
//         `,
// }

// timeline.push(resultsTrial);


//Debreif 

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

timeline.push(debriefTrial)

jsPsych.run(timeline);
