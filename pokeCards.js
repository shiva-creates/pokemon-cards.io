const card = document.getElementById('bg-card');
const pokeNum = 25;

const typeColor = {
  bug: '#26de81',
  dragon: '#ffeaa7',
  electric: '#fed330',
  fairy: '#FF0069',
  fighting: '#30336b',
  fire: '#f0932b',
  flying: '#81ecec',
  grass: '#00b894',
  ground: '#EFB549',
  ghost: '#a55eea',
  ice: '#74b9ff',
  normal: '#95afc0',
  poison: '#6c5ce7',
  psychic: '#a29bfe',
  rock: '#2d3436',
  water: '#0190FF',
};

//looping through id
const fetchPokemons = async () => {
  for (let i = 1; i <= pokeNum; i++) {
    await getPokemon(i);
  }
};

//Fetching the Data
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const result = await fetch(url);
  const pokemon = await result.json();
  generateCard(pokemon);
};

fetchPokemons();

//generate Card
let generateCard = (pokemon) => {
  const pokemonElemnt = document.createElement('div');
  pokemonElemnt.classList.add('pokemon-container');
  //name
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  //types
  const pokeType = pokemon.types.map((el) => el.type.name);
  const type = pokeType[0];

  //card color
  const themeColor = typeColor[pokemon.types[0].type.name];
  console.log(themeColor);
  //stats
  const pokeStat = pokemon.stats.map((el) => el.base_stat);
  const hp = pokeStat[0];
  const attack = pokeStat[1];
  const defence = pokeStat[2];
  //ability
  const pokeAbility = pokemon.abilities.map((el) => el.ability.name);
  const ability = pokeAbility[0];
  //moves
  const pokeMoves = pokemon.moves.map((el) => el.move.name);
  const move = pokeMoves[0];

  const pokeInnerHTML = `  
  <div class="pokemon-card" id="pokemonCard">   
  <div class="poke-img-container" style = "background-color : ${themeColor}">
  <img
    class="pokemon-image"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
    alt="img"
  />
</div>
<p class="poke-id">#${pokemon.id.toString().padStart(3, '0')}</p>
<h3 class="poke-name">${name}</h3>
<div class="poke-type">
  <span style = "background-color : ${themeColor}">${type}</span>
</div>
<div class="poke-powers">
  <p>Ability: ${ability}</p>
  <p>Moves: ${move}</p>
</div>
<div class="poke-stats" style = "background-color : ${themeColor}">
  <div class="border">
    <div >
      <h4 class="hp">HP</h4>
      <p>${hp}</p>
    </div>
  </div>
  <div class="border">
    <div>
      <h4>Attack</h4>
      <p>${attack}</p>
    </div>
  </div>

  <div>
    <h4>Defence</h4>
    <p>${defence}</p>
  </div>
</div>
</div> `;
  pokemonElemnt.innerHTML = pokeInnerHTML;
  card.appendChild(pokemonElemnt);
};
