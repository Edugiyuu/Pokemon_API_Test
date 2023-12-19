var express = require("express");
var router = express.Router();

const pokemons = [
    {
        id: 1,
        name: 'Pikachu',
        image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
        skills: ['Thunder Wave ','Thunder Shock ','Double Team ', 'Electro Ball ', 'Quick Attack'],
        type: 'Eletrico',
        type2: ''
    },
    {
        id: 2,
        name: 'Charmander',
        image: 'https://img.pokemondb.net/artwork/large/charmander.jpg',
        skills: ['Ember ','Smokescreen ','Fire Fang'],
        type: 'Fogo',
        type2: ''
    },
    {
        id: 3,
        name: 'Bulbassauro',
        image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
        skills: ['Vine Whip ','Leech Seed ','Poison Powder'],
        type: 'Planta',
        type2: 'Venenoso'
    },
    {
        id: 4,
        name: 'Squirtle',
        image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg',
        skills: ['Vine Whip ','Leech Seed ','Poison Powder'],
        type: 'Água',
        type2: ''
    },
    {
        id: 5,
        name: 'Charmander',
        image: 'https://th.bing.com/th/id/OIP.kf3rbDAdmf-urpG-Z05n-gHaH8?rs=1&pid=ImgDetMain'
    }
];

router.get("/", function(req, res, next) {
    res.json({ pokemons });
});


module.exports = router;