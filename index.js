// Pokemon type info

'use strict';
const Alexa = require('alexa-sdk');


const APP_ID = 'amzn1.ask.skill.3557413d-4325-4af9-8760-ca1d13a43eb9'; // come back to and fill from aws

const SKILL_NAME = 'Pokemon Query';
const GET_FACT_MESSAGE = 'Pokemon is of type';
const HELP_MESSAGE = 'You can ask me what type a Pokemon is, or you can ask me to give you info on a random pokemon';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Smell ya later!';



// Pokemon Info
var bulbasaur = {
    id: 1,
    name: "Bulbasaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    evolvesInto: "Ivysaur"
}

var ivysaur = {
    id: 2,
    name: "Ivysaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    evolvesInto: "Venusaur"
}

var venusaur = {
    id: 3,
    name: "venusaur",
    primaryType: "Grass",
    secondaryType: "Poison"
}

var charmander = {
    id: 4,
    name: "charmander",
    primaryType: "Fire",
    evolvesInto: "Charmeleon"
}

const pokedex = [
    bulbasaur,
    ivysaur,
    venusaur,
    charmander
    ]


function GetPokemonID(pokemonName) {
    var num = 0;
    for (var position = 0; position != pokedex.length; position++)
    {
        if(pokedex[num].name.toLowerCase() === pokemonName)
        {
            return num;
        }
        num++;
    }
    return -1;
}

// Handlers

const handlers = {
    'LaunchRequest': function () {
        this.emit('PokemonQueryIntent');
    },
    'PokemonQueryIntent': function () {
        var speechOutput = "";
        speechOutput = "Ask me about a pokemon! I can give you info on its type, its ID, or general info.";
        
        const test = "Ask me about a pokemon!";
        this.response.cardRenderer(SKILL_NAME, test);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'PokemonTypeQueryIntent': function () {
        const pokemonName = this.event.request.intent.slots.pokemon.value;
        const pokemonID = GetPokemonID(pokemonName);
        const pokemonInfo = pokedex[pokemonID];
        
        var speechOutput = "";
        
        if (pokemonID != -1){
            speechOutput = pokemonName + " is of type: " + pokemonInfo.primaryType;
            if (pokemonInfo.secondaryType != undefined)
            {
                speechOutput = speechOutput + " and " + pokemonInfo.secondaryType;
            }
        }
        else{
            speechOutput = "Sorry, " + pokemonName + " is not in my database!";
        }
        this.response.cardRenderer(SKILL_NAME, pokemonName);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'GeneralInfoQueryIntent': function () {
        const pokemonName = this.event.request.intent.slots.pokemon.value;
        const pokemonID = GetPokemonID(pokemonName);
        const pokemonInfo = pokedex[pokemonID];
        
        var speechOutput = "";
        
        if (pokemonID != -1){
            speechOutput += pokemonName + " is number " + pokemonInfo.id + " in the national Pokedex. "
            speechOutput += pokemonName + " is of type: " + pokemonInfo.primaryType;
            if (pokemonInfo.secondaryType != undefined)
            {
                speechOutput = speechOutput + " and " + pokemonInfo.secondaryType;
            }
            
            if (pokemonInfo.evolvesInto != undefined) {
            speechOutput += " ." + pokemonName + " evolves into " + pokemonInfo.evolvesInto;
            }
            else {
            speechOutput += " ." + pokemonName + " is the final stage in its line of evolution.";
            }
        }
        else {
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
