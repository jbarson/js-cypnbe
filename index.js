// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const headerEl = document.createElement('h1')
headerEl.innerText = `JS Starter`;
appDiv.appendChild(headerEl)

const contentEl = document.createElement('div')
appDiv.appendChild(contentEl)
console.log(window)