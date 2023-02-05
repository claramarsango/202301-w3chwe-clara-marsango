import Component from '../Component/Component.js';

export default class Button extends Component {
  #text: string;
  #type: string = 'button';
  #cssClass: string = '';

  constructor(
    parentElement: HTMLElement,
    text: string,
    type: string = 'button',
    cssClass: string = '',
  ) {
    super(parentElement, 'button', cssClass);
    this.#text = text;
    this.#type = type;
    this.#cssClass = cssClass;
  }

  render() {
    super.render();
    this.domElement.textContent = this.#text;
    this.domElement.setAttribute('type', this.#type);
  }
}
