import type ComponentStructure from '../types.js';

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly _parentElement: HTMLElement,
    tag: string,
    className: string = '',
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render(): void {
    this._parentElement.appendChild(this.domElement);
  }

  updateClass(classInput: string): void {
    this.domElement.classList.toggle(classInput);
  }

  remove(): void {
    this.domElement.remove();
  }

  registerClick(listener: () => void): void {
    this.domElement.addEventListener('click', listener);
  }
}

export default Component;
