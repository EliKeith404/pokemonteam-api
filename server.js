const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.static(__dirname + '/public'));

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
        },
        {
            slot: 3,
            name: 'Joltik',
            nickname: 'Henry',
            ability: '',
            heldItem: 'Eviolite',
            level: 11,
            move1: 'Tackle',
            move2: 'Thunderwave',
            move3: '',
            move4: ''
        },
        {
            slot: 3,
            name: 'Minccino',
            nickname: 'Walter',
            ability: '',
            heldItem: 'Eviolite',
            level: 14,
            move1: 'Tackle',
            move2: 'Double Slap',
            move3: 'Tail Whip',
            move4: ''
        },
        {
            slot: 4,
            name: 'Cubone',
            nickname: 'Marcus',
            ability: '',
            heldItem: 'Eviolite',
            level: 11,
            move1: 'Bonemerang',
            move2: 'Bone Club',
            move3: 'Headbutt',
            move4: ''
        },
        {
            slot: 5,
            name: 'Pichu',
            nickname: 'Linus',
            ability: '',
            heldItem: 'Eviolite',
            level: 11,
            move1: 'Tackle',
            move2: 'Shockwave',
            move3: 'Iron Tail',
            move4: ''
        },
        {
            slot: 6,
            name: 'Inkay',
            nickname: 'Harold',
            ability: 'Thick Skin',
            heldItem: 'Eviolite',
            level: 9,
            move1: 'Surf',
            move2: 'Waterfall',
            move3: 'Brine',
            move4: 'Hidden Power'
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
        },
        {
            slot: 2,
            name: 'Bisharp',
            nickname: 'AkimboSlice',
            ability: '',
            heldItem: 'Metal Plate',
            level: 90,
            move1: 'Dark Pulse',
            move2: 'Metal Claw',
            move3: 'Swords Dance',
            move4: ''
        },
        {
            slot: 3,
            name: 'Breloom',
            nickname: 'Jerome',
            ability: '',
            heldItem: 'Eviolite',
            level: 53,
            move1: 'Bullet Punch',
            move2: 'Grass Knot',
            move3: 'Spore',
            move4: ''
        },
        {
            slot: 4,
            name: 'Gengar',
            nickname: 'Gary',
            ability: 'Thick Skin',
            heldItem: 'Eviolite',
            level: 26,
            move1: 'Shadow Ball',
            move2: 'Dark Pulse',
            move3: 'Shadow Sneak',
            move4: 'Hidden Power'
        },
        {
            slot: 5,
            name: 'Nidoking',
            nickname: 'Bradley',
            ability: 'Thick Skin',
            heldItem: 'Eviolite',
            level: 87,
            move1: 'Drain Punch',
            move2: 'Earthquake',
            move3: 'Poison Jab',
            move4: 'Rock Slide'
        },
        {
            slot: 6,
            name: 'Mimikyu',
            nickname: 'Wayne',
            ability: 'Disguise',
            heldItem: 'Eviolite',
            level: 66,
            move1: 'Shadow Sneak',
            move2: 'Pursuit',
            move3: '',
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
    
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/teamBuilder', (req, res) => {
    res.json(pokemonTeams);
});

app.get('/api/teamBuilder/:id', (req, res) => {
    const team = getPokemonTeam(req);

    team ? res.json(team) : res.status(404).end();
});

app.get('/api/teamBuilder/:id/:slot', (req, res)=>{
    const pokemon = getPokemonAtSlot(req);

    pokemon ? res.json(pokemon) : res.status(404).end();
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}! WOOOO`);
});