import type ComponentStructure from '../types.js';

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly _parentElement: HTMLElement,
    className: string,
    tag: string,
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render(): void {
    this._parentElement.appendChild(this.domElement);
  }
}

export default Component;
