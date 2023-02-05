var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CardList_pokemonList;
import Component from '../Component/Component.js';
import Card from '../Card/Card.js';
export default class CardList extends Component {
    constructor(parentElement, pokemonList) {
        super(parentElement, 'section', 'pokemon-list-container');
        _CardList_pokemonList.set(this, void 0);
        __classPrivateFieldSet(this, _CardList_pokemonList, pokemonList, "f");
    }
    render() {
        super.render();
        const myList = document.createElement('ul');
        myList.className = 'pokemon-list';
        this.domElement.appendChild(myList);
        __classPrivateFieldGet(this, _CardList_pokemonList, "f").forEach(pokemon => {
            new Card(myList, pokemon).render();
        });
    }
}
_CardList_pokemonList = new WeakMap();
