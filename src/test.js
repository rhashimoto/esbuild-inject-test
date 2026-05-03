import '@babel/standalone';

const Babel = globalThis.Babel;

const message = document.createElement('div');
message.textContent = `globalThis.Babel is ${typeof globalThis.Babel}`;
document.querySelector('body').appendChild(message);
