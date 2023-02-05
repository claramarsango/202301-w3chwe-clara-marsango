export const pokemonsList = [];
export const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        .then(response => response.json())
        .then(data => {
        const dataResults = data.results;
        const pokemonUrlList = [];
        for (let i = 0; i < dataResults.length; i++) {
            pokemonUrlList.push(data.results[i].url);
        }
        for (const url of pokemonUrlList) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                pokemonsList.push(data);
                pokemonsList.sort((a, b) => a.id - b.id);
            })
                .catch(err => console.error(err));
        }
    })
        .catch(err => console.error(err));
};
