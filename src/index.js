import {cube} from "./match";
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('development')
}

function component() {
  let element = document.createElement('pre');
  let btn = document.createElement('button');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n')

  return element;
}

let element = component();
document.body.appendChild(element);