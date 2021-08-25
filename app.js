const poke_container = document.getElementById('poke_container')
const poke_number = 150; // total number of pokemons
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
// Fetching all the 150 pokemons one by one
const fetchPokemon = async => {
    for(let i =1; i<=poke_number;i++){
        getPokemon(i)
    }
}

// Making request to the api endpoint
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id} `
    // const url = `https://pokeapi.co/api/v2/pokemon/pokemon?limit=10&offset=200`
    const res = await fetch(url)
    const pokemon = await res.json()
    // console.log(pokemon)
    createPokemonCard(pokemon)
}
fetchPokemon()

// How to create HTML elements using the JSON respone received from the server
function createPokemonCard(pokemon){
    // Creating the div card <div></div>
    const pokemonEl = document.createElement('div')

    // Adding class to the created div element <div class = "pokemon"></div>  
    pokemonEl.classList.add('pokemon')
    // console.log(pokemonEl)
    
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    const type = pokemon.types[0].type.name
    const color = colors[type]
    pokemonEl.style.backgroundColor = color
    
    
    const pokeInnerHTML = 
    `<div class="image-container">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt=""/>
    </div>
    <hr class = "line">

    <div class = "info"> 
    <h3>${name}</h3>
    <span>${pokemon.id}</span>
    <div class = "type">Type : ${type}</div>
    </div>
    `
    
    
    pokemonEl.innerHTML = pokeInnerHTML
    poke_container.appendChild(pokemonEl)

}

