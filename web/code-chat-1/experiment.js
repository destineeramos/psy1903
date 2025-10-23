let timeline = [];



// Welcome trial will go here

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1 class='welcomeHeader'>Welcome!</h1> 
    <p>In this experiment, you will be shown a series of words.</p>
    <p>Press the letter <span class='key'>F</span> if the word is positive.</p>
    <p>Press the letter <span class='key'>J</span> if the word is negative.</p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);


// Main trials will go here


for (let condition of conditionsShuffled) {
    let conditionTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<h1>${condition.word}</h1>`,
        choices: ['f', 'j'],
        data: {
            collect: true,
            word: condition.word,
            valence: condition.valence,
        },
        on_finish: function (data) {
            console.log(data.response);
            if (data.response == 'f' && condition.valence == 'positive') {
                data.correct = true;
            } else if (data.response == 'j' && condition.isWord == 'negative') {
                data.correct = true;
            } else {
                data.correct = false;
            }
        }
    }
    timeline.push(conditionTrial);

}


// Debrief trial
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();
        console.log(results);
    }
}
timeline.push(debriefTrial);


jsPsych.run(timeline);