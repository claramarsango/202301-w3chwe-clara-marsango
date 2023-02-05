import App from './components/App/App.js';
import { pokemonsList } from './components/get-pokemons-list.js';
import { getPokemon } from './components/get-pokemons-list.js';

const appContainer = document.body as HTMLElement;
const app = new App(appContainer, pokemonsList);

getPokemon();

setTimeout(() => {
  app.render();
}, 500);
