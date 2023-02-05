import Component from '../Component/Component.js';
import Button from '../Button/Button.js';

export default class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, 'header', 'header');
  }

  render() {
    super.render();

    this.domElement.innerHTML = `<img src="../../../assets/pokemon-logo.svg" alt="original pokemon logo" class="header__logo">
    <button class="header__favourites">
      <img src="../../../assets/pokeball_thumbnail.png" 
    alt="pokeball" class="header-favourites__pokeball"> My pokemons
    </button>
    `;
  }
}
