export const getPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        .then(response => response.json())
        .then(data => {
        const dataResults = data.results;
        const pokemonUrlList = [];
        console.log(dataResults);
        for (let i = 0; i < dataResults.length; i++) {
            pokemonUrlList.push(data.results[i].url);
        }
        console.log(pokemonUrlList);
        for (let i = 0; i < pokemonUrlList.length; i++) {
            fetch(pokemonUrlList[i])
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));
        }
    })
        .catch(err => console.error(err));
};
