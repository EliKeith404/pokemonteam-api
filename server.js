const express = require('express');
const app = express();

const PORT = 8000;

let pokemonTeams = [
    // team 1
    {
        id: '1',
        teamName: 'The Lil Bois',
        favorited: false,
        party: [{
            slot: 1,
            name: 'Smolive',
            nickname: 'Olivia',
            ability: 'Overgrowth',
            heldItem: 'Citrus Berry',
            level: 10,
            move1: 'Tackle',
            move2: '',
            move3: '',
            move4: ''
        },
        {
            slot: 2,
            name: 'Lechonk',
            nickname: 'Pierre',
            ability: 'Thick Skin',
            heldItem: 'Eviolite',
            level: 11,
            move1: 'Tackle',
            move2: 'Fake Tears',
            move3: '',
            move4: ''
        }]
    },
    // team 2
    {
        id: '2',
        teamName: 'Favorites',
        favorited: true,
        party: [{
            slot: 1,
            name: 'Noivern',
            nickname: 'AAAAAA',
            ability: '',
            heldItem: 'Citrus Berry',
            level: 83,
            move1: 'Supersonic',
            move2: 'Dragon Claw',
            move3: 'Extreme Speed',
            move4: ''
        }]
    }
];

function getPokemonTeam(req){
    const id = req.params.id;
    const team = pokemonTeams.find(obj => obj.id === id);
    return team;
}

function getPokemonAtSlot(req){
    const slot = Number(req.params.slot);
    const pokemon = getPokemonTeam(req).party.find(obj => obj.slot === slot);
    return pokemon;
}

app.get('/', (req, res) => {
    res.send('<h1>Build Your Dream Pokemon Team Here!</h1>');
});

app.get('/teamBuilder', (req, res) => {
    res.json(pokemonTeams);
});

app.get('/teamBuilder/:id', (req, res) => {
    const team = getPokemonTeam(req);

    team ? res.json(team) : res.status(404).end();
});

app.get('/teamBuilder/:id/:slot', (req, res)=>{
    const pokemon = getPokemonAtSlot(req);

    pokemon ? res.json(pokemon) : res.status(404).end();
})

app.listen(prosses.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}! WOOOO`);
});