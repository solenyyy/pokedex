async function loadPokemosWithAsync() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=800");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function selectPokemons(pokemons) {
  try {
    const pokemonList = pokemons.results;
    const randomPokemon =
      pokemonList[Math.floor(Math.random() * pokemonList.length)];
    const response = await fetch(randomPokemon.url);
    const data = await response.json();
    return data;
  } catch (error) {}
}

function showPokemon(pokemon) {
  const selectedDiv = document.querySelector(".pokemon");
  const photoPokemon = document.createElement("img");
  const namePokemon = document.createElement("h1");
  const habilityPokemon = document.createElement("p");
  const movesPokemon = document.createElement("p");
  photoPokemon.src = pokemon.sprites.front_default;
  namePokemon.textContent = pokemon.name;
  habilityPokemon.textContent = `Height: ${pokemon.height} 〰 Weight: ${pokemon.weight}`;
  movesPokemon.textContent = `Experience: ${pokemon.base_experience}`;
  selectedDiv.insertAdjacentElement("beforeend", photoPokemon);
  selectedDiv.insertAdjacentElement("beforeend", namePokemon);
  selectedDiv.insertAdjacentElement("beforeend", habilityPokemon);
  selectedDiv.insertAdjacentElement("beforeend", movesPokemon);
}

function deletePokemon() {
  const selectedDivTwo = document.querySelector(".pokemon");
  selectedDivTwo.textContent = "";
}

const btnBorrar = document.querySelector(".delete-btn");
btnBorrar.addEventListener("click", deletePokemon);

btnBorrar.addEventListener("click", () => {
  loadPokemosWithAsync()
    .then(selectPokemons)
    .then(showPokemon)
    .catch(console.error);
});
