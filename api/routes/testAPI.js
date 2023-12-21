var express = require("express");
var router = express.Router();
//Mudar o type2 para type secundario e mudar o type para Primario
const pokemons = [
    {
        id: 1,
        name: 'Pikachu',
        image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
        skills: ['Thunder Wave ','Thunder Shock ','Double Team ', 'Electro Ball ', 'Quick Attack'],
        type: 'Elétrico',
        type2: '',
        peso: '6.0 kg'
    },
    {
        id: 2,
        name: 'Charmander',
        image: 'https://img.pokemondb.net/artwork/large/charmander.jpg',
        skills: ['Ember ','Smokescreen ','Fire Fang'],
        type: 'Fogo',
        type2: '',
        peso: '8.5 kg'
    },
    {
        id: 3,
        name: 'Bulbassauro',
        image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
        skills: ['Vine Whip ','Leech Seed ','Poison Powder'],
        type: 'Grama',
        type2: 'Venenoso',
        peso: '6.9 kg'
    },
    {
        id: 4,
        name: 'Squirtle',
        image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg',
        skills: ['Water Gun ','Rain Dance ','Bite'],
        type: 'Água',
        type2: '',
        peso: '9.0 kg'
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