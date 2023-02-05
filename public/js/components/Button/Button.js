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
var _Button_text, _Button_type, _Button_cssClass;
import Component from '../Component/Component.js';
export default class Button extends Component {
    constructor(parentElement, text, type = 'button', cssClass = '') {
        super(parentElement, 'button', cssClass);
        _Button_text.set(this, void 0);
        _Button_type.set(this, 'button');
        _Button_cssClass.set(this, '');
        __classPrivateFieldSet(this, _Button_text, text, "f");
        __classPrivateFieldSet(this, _Button_type, type, "f");
        __classPrivateFieldSet(this, _Button_cssClass, cssClass, "f");
    }
    render() {
        super.render();
        this.domElement.textContent = __classPrivateFieldGet(this, _Button_text, "f");
        this.domElement.setAttribute('type', __classPrivateFieldGet(this, _Button_type, "f"));
    }
}
_Button_text = new WeakMap(), _Button_type = new WeakMap(), _Button_cssClass = new WeakMap();
