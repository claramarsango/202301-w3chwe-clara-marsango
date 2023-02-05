import Component from '../Component/Component.js';
import Button from '../Button/Button.js';

export default class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, 'header', 'header__logo');
  }

  render() {
    super.render();
    const headerButtonText = `
    <img src="../../../public/assets/pokeball_thumbnail.png" 
    alt="pokeball" class="header-favourites__pokeball"> My pokemons'
    `;
    const myPokemonsButton = new Button(this.domElement, headerButtonText);
    this.domElement.innerHTML = `
    <img src="../../../public/assets/pokemon-logo.svg" alt="original pokemon logo" class="header__logo">\n
    ${myPokemonsButton}
    `;
  }
}
