import Component from '../Component/Component.js';
import { Pokemon } from '../types.js';

export default class Card extends Component {
  pokemon: Pokemon;

  constructor(parentElement: HTMLElement, pokemon: Pokemon) {
    super(parentElement, 'li', 'list__pokemon');
    this.pokemon = pokemon;
  }

  render() {
    super.render();
    this.domElement.innerHTML += `
    <a class="pokemon__link" href="" target="_blank">
              <div class="pokemon__image-container">
                <img
                  src="${
                    this.pokemon.sprites.versions['generation-v']['black-white']
                      .animated.front_default
                  }"
                  alt="${this.pokemon.name}" class="pokemon__image">
              </div>
              <div class="pokemon__description-container">
                <div class="description__id-container">
                  <p class="description__id">#${this.pokemon.id}</p>
                  <p class="description__exp">EXP: ${
                    this.pokemon.base_experience
                  }</p>
                </div>
                <div class="description__main-info">
                  <div class="description__title">
                    <h3 class="description-title__pokemon-name">${
                      this.pokemon.name
                    }</h3>
                    <p class="description-title__pokemon-type ${this.#setTypeColour(
                      this.pokemon.types[0].type.name,
                    )}">${this.pokemon.types[0].type.name}</p>
                  </div>
                </div>
              </div>
            </a>
            <button class="description__favourite">
              <ion-icon name="heart" class="description__heart" class="description__heart--selected"></ion-icon>
            </button>
    `;
  }

  #setTypeColour(type: string): string {
    let className = 'pokemon-type';

    switch (type) {
      case 'normal':
        className += '--normal';
        break;
      case 'grass':
        className += '--grass';
        break;
      case 'fire':
        className += '--fire';
        break;
      case 'water':
        className += '--water';
        break;
      case 'bug':
        className += '--bug';
        break;
      case 'electric':
        className += '--electric';
        break;
      case 'rock':
        className += '--rock';
        break;
      case 'ghost':
        className += '--ghost';
        break;
      case 'poison':
        className += '--poison';
        break;
      case 'psychic':
        className += '--psychic';
        break;
      case 'fighting':
        className += '--fighting';
        break;
      case 'ground':
        className += '--ground';
        break;
      case 'dragon':
        className += '--dragon';
        break;
      default:
        break;
    }

    return className;
  }
}
