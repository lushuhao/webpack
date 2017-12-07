import _ from 'lodash';
// import Print from './print';

function component() {
  let element = document.createElement('div');

  let button = document.createElement('button');
  let br = document.createElement('br');

  button.innerHTML = 'Click'
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // button.onclick = Print.bind(null, 'Hello');

  // button.onclick = e => import(/* webpackChunkName: 'print' */ './print').then(module => { // 通过注释，指定name，而不是[id].bundle.js
  //      // 懒加载
  //
  //   let print = module.default; // 当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
  //
  //   print();
  // })
  return element;
}


document.body.appendChild(component());