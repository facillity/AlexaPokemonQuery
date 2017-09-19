// Pokemon type info

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.3557413d-4325-4af9-8760-ca1d13a43eb9'; // come back to and fill from aws

const SKILL_NAME = 'Pokemon Query';
const GET_FACT_MESSAGE = 'Pokemon is of type';
const HELP_MESSAGE = 'You can ask me what type a Pokemon is, or you can ask me to give you info on a random pokemon';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Smell ya later!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var pikachu = new Object();
pikachu.name = "pikachu";
pikachu.type = "electric";

const data = [
    pikachu
];

function GetPokemonID(pokemonName) {
    if (pokemonName === "pikachu" || pokemonName === "Pikachū")
    {
        return 0;
    }
    
    // if name isnt in data
    return -1;
}

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('PokemonQueryIntent');
    },
    'PokemonQueryIntent': function () {
        const pokemonName = this.event.request.intent.slots.pokemon.value;
        const pokemonID = GetPokemonID(pokemonName);
        
       // const factArr = data;
        //const factIndex = Math.floor(Math.random() * factArr.length);
        //const randomFact = factArr[factIndex];
        //const speechOutput = GET_FACT_MESSAGE + randomFact;
        
        var speechOutput = "";
        
        if (pokemonID != -1){
            speechOutput = pokemonName + " is of type: " + data[pokemonID].type;
        }
        else{
            speechOutput = "Sorry, " + pokemonName + " is not in my database!";
        }
        this.response.cardRenderer(SKILL_NAME, pokemonName);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
