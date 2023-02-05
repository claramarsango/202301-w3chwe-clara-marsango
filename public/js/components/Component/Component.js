class Component {
    constructor(_parentElement, tag, className = '') {
        this._parentElement = _parentElement;
        this.domElement = document.createElement(tag);
        this.domElement.className = className;
    }
    render() {
        this._parentElement.appendChild(this.domElement);
    }
    updateClass(classInput) {
        this.domElement.classList.toggle(classInput);
    }
    remove() {
        this.domElement.remove();
    }
    registerClick(listener) {
        this.domElement.addEventListener('click', listener);
    }
}
export default Component;
