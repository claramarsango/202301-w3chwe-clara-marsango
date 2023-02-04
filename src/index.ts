import App from './components/App/App.js';

const appContainer = document.querySelector('.app') as HTMLElement;
const app = new App(appContainer);
app.render();
