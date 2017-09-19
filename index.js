// Pokemon type info

'use strict';
const Alexa = require('alexa-sdk');


const APP_ID = 'amzn1.ask.skill.3557413d-4325-4af9-8760-ca1d13a43eb9'; // come back to and fill from aws

const SKILL_NAME = 'Pokemon Query';
const GET_FACT_MESSAGE = 'Pokemon is of type';
const HELP_MESSAGE = 'You can ask me what type a Pokemon is, or you can ask me to give you info on a random pokemon';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Smell ya later!';

var Normal =    "normal";
var Fire =      "fire";
var Water =     "water";
var Electric =  "electric";
var Grass =     "grass";
var Ice =       "ice";
var Fighting =  "fighting";
var Poison =    "poison";
var Ground =    "ground";
var Flying =    "flying";
var Psychic =   "psychic";
var Bug =       "bug";
var Rock =      "rock";
var Ghost =     "ghost";
var Dragon =    "dragon";
var Dark =      "dark";
var Steel =     "steel";
var Fairy =     "fairy";

function whatTypesBeat(PokeType)
{
    if (PokeType == Normal)
    {
        return [Fighting];
    }
    if (PokeType == Fire)
    {
        return [Water, Ground, Rock];
    }
    if (PokeType == Water)
    {
        return [Electric, Grass];
    }
    if (PokeType == Electric)
    {
        return [Ground];
    }
    if (PokeType == Grass)
    {
        return [Fire, Ice, Poison, Flying, Bug];
    }
    if (PokeType == Ice)
    {
        return [Fire, Fighting, Rock, Steel];
    }
    if (PokeType == Fighting)
    {
        return [Flying, Psychic, Fairy];
    }
    if (PokeType == Poison)
    {
        return [Ground, Psychic];
    }
    if (PokeType == Ground)
    {
        return [Water, Grass, Ice];
    }
    if (PokeType == Flying)
    {
        return [Electric, Ice, Rock];
    }
    if (PokeType == Psychic)
    {
        return [Bug, Ghost, Dark];
    }
    if (PokeType == Bug)
    {
        return [Fire, Flying, Rock];
    }
    if (PokeType == Rock)
    {
        return [Water, Grass, Fighting, Ground, Steel];
    }
    if (PokeType == Ghost)
    {
        return [Ghost, Dark];
    }
    if (PokeType == Dragon)
    {
        return [Ice, Dragon, Fairy];
    }
    if (PokeType == Dark)
    {
        return [Fighting, Bug, Fairy];
    }
    if (PokeType == Steel)
    {
        return [Fire, Fighting, Ground];
    }
    if (PokeType == Fairy)
    {
        return [Poison, Steel];
    }
    return [];
}

// Pokemon Info
var bulbasaur = {
    id: 1,
    name: "Bulbasaur",
    primaryType: Grass,
    secondaryType: Poison,
    evolvesInto: "Ivysaur"
}
var ivysaur = {
    id: 2,
    name: "Ivysaur",
    primaryType: Grass,
    secondaryType: Poison,
    evolvesInto: "Venusaur"
}
var venusaur = {
    id: 3,
    name: "Venusaur",
    primaryType: Grass,
    secondaryType: Poison
}
var charmander = {
    id: 4,
    name: "Charmander",
    primaryType: Fire,
    evolvesInto: "Charmeleon"
}
var charmeleon = {
    id: 5,
    name: "Charmeleon",
    primaryType: Fire,
    evolvesInto: "Charizard"
}
var charizard = {
    id: 6,
    name: "Charizard",
    primaryType: Fire,
    secondaryType: Flying
}
var squirtle = {
    id: 7,
    name: "Squirtle",
    primaryType: Water,
    evolvesInto: "Wartortle"
}
var wartortle = {
    id: 8,
    name: "Wartortle",
    primaryType: Water,
    evolvesInto: "Blastoise"
}
var blastoise = {
    id: 9,
    name: "Blastoise",
    primaryType: Water,
}
var caterpie = {
    id: 10,
    name: "Caterpie",
    primaryType: Bug,
    evolvesInto: "Metapod"
}
var metapod = {
    id: 11,
    name: "Metapod",
    primaryType: Bug,
    evolvesInto: "Butterfree"
}
var butterfree = {
    id: 12,
    name: "Butterfree",
    primaryType: Bug,
    secondaryType: Flying
}
var weedle = {
    id: 13,
    name: "Weedle",
    primaryType: Bug,
    secondaryType: Poison,
    evolvesInto: "Kakuna"
}
var kakuna = {
    id: 14,
    name: "Kakuna",
    primaryType: Bug,
    secondaryType: Poison,
    evolvesInto: "Beedrill"
}
var beedrill = {
    id: 15,
    name: "Beedrill",
    primaryType: Bug,
    secondaryType: Poison
}
var pidgey = {
    id: 16,
    name: "Pidgey",
    primaryType: Normal,
    seconaryType: Flying,
    evolvesInto: "Pidgeotto"
}
var pidgeotto = {
    id: 17,
    name: "Pidgeotto",
    primaryType: Normal,
    secondaryType: Flying,
    evolvesInto: "Pidgeot"
}
var pidgeot = {
    id: 18,
    name: "Pidgeot",
    primaryType: Normal,
    secondaryType: Flying
}
var rattata = {
    id: 19,
    name: "Rattata",
    primaryType: Normal,
    evolvesInto: "Raticate"
}
var raticate = {
    id: 20,
    name: "Raticate",
    primaryType: Normal
}

const pokedex = [
    bulbasaur,
    ivysaur,
    venusaur,
    charmander,
    charmeleon,
    charizard,
    squirtle,
    wartortle,
    blastoise,
    caterpie,
    metapod,
    butterfree,
    weedle,
    kakuna,
    beedrill,
    pidgey,
    pidgeotto,
    pidgeot,
    rattata,
    raticate
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
            speechOutput = pokemonName + " is a " + pokemonInfo.primaryType;
            if (pokemonInfo.secondaryType !== undefined)
            {
                speechOutput += " " + pokemonInfo.secondaryType;
            }
            speechOutput += " type pokemon."
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
            speechOutput += pokemonName + " is a " + pokemonInfo.primaryType;
            if (pokemonInfo.secondaryType !== undefined)
            {
                speechOutput += " " + pokemonInfo.secondaryType;
            }
            speechOutput += " type pokemon"
            
            if (pokemonInfo.evolvesInto !== undefined) {
            speechOutput += " who " + pokemonName + " evolves into " + pokemonInfo.evolvesInto;
            }
            else {
            speechOutput += " which is the final stage in its line of evolution.";
            }
        }
        else {
            speechOutput = "Sorry, " + pokemonName + " is not in my database!";
        }
    
        
        this.response.cardRenderer(SKILL_NAME, pokemonName);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'RandomPokemonIntent' : function (){
        const RandomPokemonIndex = Math.floor(Math.random() * pokedex.length);
        const pokemonInfo = pokedex[RandomPokemonIndex];
        var speechOutput = "";
        
        speechOutput += pokemonInfo.name + " is number " + pokemonInfo.id + " in the national Pokedex. "
            speechOutput += pokemonInfo.name + " is a " + pokemonInfo.primaryType;
            if (pokemonInfo.secondaryType !== undefined)
            {
                speechOutput += " " + pokemonInfo.secondaryType;
            }
            speechOutput += " type pokemon"
            
            if (pokemonInfo.evolvesInto !== undefined) {
            speechOutput += " who " + " evolves into " + pokemonInfo.evolvesInto;
            }
            else {
            speechOutput += " which is the final stage in its line of evolution.";
            }
        const info = "Information on " + pokemonInfo.name;
        this.response.cardRenderer(SKILL_NAME, info);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'WhatTypesBeatTypeIntent': function (){
        const givenType = this.event.request.intent.slots.type.value;
        const typesThatCounter = whatTypesBeat(givenType);
        var speechOutput = "";
        
        if (typesThatCounter.length == 1)
        {
            speechOutput += givenType + " type pokemon are beaten by " + typesThatCounter[0]  + " type pokemon.";
        }
        else if (typesThatCounter.length > 1)
        {
            speechOutput += givenType + " type Pokemon are beaten by ";
            for (var index = 0; index != typesThatCounter.length-1; index++)
            {
                speechOutput += typesThatCounter[index] + ", ";
            }
            speechOutput += " and " + typesThatCounter[typesThatCounter.length-1] + " type pokemon.";
        }
        else{
            speechOutput += givenType + " is not a valid Pokemon Type.";
        }
        
        this.response.cardRenderer(SKILL_NAME, speechOutput);
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
