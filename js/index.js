import image from '../images/CMC_logo.jpeg';
import getDateString from './date.js';
import '../styles/styles.scss';

document
    .querySelector('.js-content')
    .innerHTML = `It's ${ getDateString() }`;

const imageElement = document.createElement('img');
imageElement.src = image;
imageElement.alt = 'Clueless Morning Chicken(CMC) logo';
document.body.append(imageElement);
