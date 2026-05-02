import phoneSvg from './phone.svg';
import globeSvg from './globe.svg';
import mapPinSvg from './map-pin.svg';

const header = document.createElement('h1');

header.textContent = 'Contact Us';

const phoneImg = document.createElement('img');
phoneImg.src = phoneSvg;

const websiteImg = document.createElement('img');
websiteImg.src = globeSvg;

const locationImg = document.createElement('img');
locationImg.src = mapPinSvg;

const content = document.createElement('div');
content.style.fontSize = '24px';

content.appendChild(phoneImg);
content.insertAdjacentText('beforeend', '   +01-787-9356');
content.insertAdjacentElement('beforeend', document.createElement('br'));
content.insertAdjacentElement('beforeend', websiteImg);
content.insertAdjacentText('beforeend', '   https://github.com/mickyfifi');
content.insertAdjacentElement('beforeend', document.createElement('br'));
content.insertAdjacentElement('beforeend', locationImg);
content.insertAdjacentText('beforeend', '   Oceanic');

const contactContainer = document.createElement('div');

contactContainer.append(header, content);

export { contactContainer };