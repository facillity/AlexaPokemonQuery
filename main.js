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
      "name": "PokemonQueryIntent",
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
    }
  ],
  "prompts": [
    {
      "id": "Elicit.Intent-PokemonQueryIntent.IntentSlot-pokemon",
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
        "name": "PokemonQueryIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "pokemon",
            "type": "Pokemon",
            "elicitationRequired": true,
            "confirmationRequired": false,
            "prompts": {
              "elicit": "Elicit.Intent-PokemonQueryIntent.IntentSlot-pokemon"
            }
          }
        ]
      }
    ]
  }
}
