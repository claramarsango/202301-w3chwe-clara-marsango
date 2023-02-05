import Component from '../Component/Component.js';
import Card from '../Card/Card.js';
import { Pokemon } from '../types.js';

export default class CardList extends Component {
  #pokemonList: Pokemon[];

  constructor(parentElement: HTMLElement, pokemonList: Pokemon[]) {
    super(parentElement, 'section', 'pokemon-list-container');
    this.#pokemonList = pokemonList;
  }

  render() {
    super.render();

    const myList = document.createElement('ul');
    myList.className = 'pokemon-list';

    this.domElement.appendChild(myList);

    this.#pokemonList.forEach(pokemon => {
      new Card(myList, pokemon).render();
    });
  }
}
