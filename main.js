{
  "intents": [
    {
      "name": "AMAZON.CancelIntent",
      "samples": []
    },
    {
      "name": "AMAZON.HelpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StopIntent",
      "samples": []
    },
    {
      "name": "GeneralInfoQueryIntent",
      "samples": [
        "Give me info on {pokemon}",
        "What can you tell me about {pokemon}",
        "information on {pokemon}",
        "give me stats on {pokemon}",
        "what is a {pokemon}"
      ],
      "slots": [
        {
          "name": "pokemon",
          "type": "Pokemon",
          "samples": []
        }
      ]
    },
    {
      "name": "PokemonTypeQueryIntent",
      "samples": [
        "What type is {pokemon}",
        "{pokemon} is what type",
        "what type of pokemon is {pokemon}"
      ],
      "slots": [
        {
          "name": "pokemon",
          "type": "Pokemon",
          "samples": [
            "{pokemon}",
            "I would like to learn about {pokemon}"
          ]
        }
      ]
    },
    {
      "name": "RandomPokemonIntent",
      "samples": [
        "Tell me about a random pokemon",
        "Random Pokemon",
        "give me information on a random pokemon",
        "give me a random pokemon"
      ],
      "slots": []
    },
    {
      "name": "WhatTypesBeatTypeIntent",
      "samples": [
        "What Types beat {type}",
        "what beats {type}",
        "who beats {type}",
        "{type} weaknesses",
        "how to beat {type}"
      ],
      "slots": [
        {
          "name": "type",
          "type": "type",
          "samples": []
        }
      ]
    }
  ],
  "types": [
    {
      "name": "Pokemon",
      "values": [
        {
          "id": null,
          "name": {
            "value": "name",
            "synonyms": [
              "names"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "type",
            "synonyms": [
              "typing"
            ]
          }
        }
      ]
    },
    {
      "name": "type",
      "values": [
        {
          "id": null,
          "name": {
            "value": "type",
            "synonyms": [
              "element",
              "normal",
              "fire",
              "water",
              "electric",
              "grass",
              "ice",
              "fighting",
              "poison",
              "ground",
              "flying",
              "psychic",
              "bug",
              "rock",
              "ghost",
              "dragon",
              "dark",
              "steel",
              "fairy"
            ]
          }
        }
      ]
    }
  ],
  "prompts": [
    {
      "id": "Elicit.Intent-PokemonTypeQueryIntent.IntentSlot-pokemon",
      "promptVersion": "1.0",
      "definitionVersion": "1.0",
      "variations": [
        {
          "type": "PlainText",
          "value": "What Pokémon would you like to learn about?"
        },
        {
          "type": "PlainText",
          "value": "Which Pokémon would you like to find typing on?"
        }
      ]
    }
  ],
  "dialog": {
    "version": "1.0",
    "intents": [
      {
        "name": "PokemonTypeQueryIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "pokemon",
            "type": "Pokemon",
            "elicitationRequired": true,
            "confirmationRequired": false,
            "prompts": {
              "elicit": "Elicit.Intent-PokemonTypeQueryIntent.IntentSlot-pokemon"
            }
          }
        ]
      }
    ]
  }
}
