const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonImage = document.getElementById("pokemon-image");
const pokemonName = document.getElementById("pokemon-name");
const reloadButton = document.getElementById("reload-button");

const randomPokemonId = () => Math.floor(Math.random() * 151) + 1;

const fetchPokemon = () => {
  fetch(`${apiUrl}${randomPokemonId()}`)
    .then(response => response.json())
    .then(data => displayPokemon(data))
    .catch(error => console.error("Error fetching Pokémon data:", error));
};

function displayPokemon(pokemon) {
  pokemonImage.src = pokemon.sprites.front_default || "placeholder.png";
  pokemonName.textContent = capitalize(pokemon.name);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

reloadButton.addEventListener("click", fetchPokemon);

fetchPokemon();
