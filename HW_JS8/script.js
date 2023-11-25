let title = document.createElement('title');
title.innerHTML = 'New html document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';


// document.body.appendChild(h1);

let div1 = document.createElement('div');
div1.innerHTML = 'Choose Your Option';
div1.classList.add('block');

// document.body.appendChild(div1);

// let p1 = document.createElement('p');
// p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

// document.body.appendChild(div1);

console.log(h1);