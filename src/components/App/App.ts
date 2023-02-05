import Component from '../Component/Component.js';
import Header from '../Header/Header.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement) {
    super(parentElement, 'div', 'app');
    this.#children = [new Header(this.domElement)];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
