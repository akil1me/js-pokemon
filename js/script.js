let elPokemonsList = document.querySelector(".pokemons__list-js");

pokemons.forEach(pokemon => {
  let elPokemonItem = document.createElement("li");
  elPokemonItem.className = "card pokemons__item shadow"

  let elPokemonTitle = document.createElement("h2");
  elPokemonTitle.className = "h5";
  elPokemonTitle.textContent = pokemon.name

  let elPokemonImage = document.createElement("img");
  elPokemonImage.className = "mx-auto"
  elPokemonImage.width = "100";
  elPokemonImage.height = "100";
  elPokemonImage.src = pokemon.img;

  let elPokemonСapabilities = document.createElement("p");
  elPokemonСapabilities.className = "fw-bold"
  elPokemonСapabilities.innerHTML = `Capabilities: <br> <span class="text-success fw-normal"> ${pokemon.type.join(' , ')} </span>`;

  elPokemonItem.append(elPokemonImage, elPokemonTitle, elPokemonСapabilities);
  elPokemonsList.appendChild(elPokemonItem);

})


