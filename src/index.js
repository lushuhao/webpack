import _ from 'lodash';
import './style.css';
import Bg from './bg.jpg';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let myBg = new Image();
  myBg.src = Bg;

  element.appendChild(myBg)

  return element;
}

document.body.appendChild(component());