import CardList from '../CardList/CardList.js';
import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import { Pokemon } from '../types.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement, pokemons: Pokemon[]) {
    super(parentElement, 'div', 'app');
    this.#children = [
      new Header(this.domElement),
      new CardList(this.domElement, pokemons),
    ];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
