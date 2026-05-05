import './styles.css';
import { homeContainer } from './home.js';
import { menuContainer } from './menu.js';
import { contactContainer } from './contact.js';

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function setContent(element, contentElement) {
    clearChildren(element);
    element.appendChild(contentElement);
}

const content = document.querySelector('#content');
const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {

    const buttonClicked = event.target.textContent;
    console.log(event.target.textContent);

    if (buttonClicked == 'Home') {
        console.log('abcd');
        setContent(content, homeContainer);
    }

    if (buttonClicked == 'Menu') {
        setContent(content, menuContainer);
    }

    if (buttonClicked == 'Contact') {
        setContent(content, contactContainer);
    }

});

content.append(menuContainer);


