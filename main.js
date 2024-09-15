function loadCSS(filename) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filename;
    document.head.appendChild(link);
}

loadCSS('style.css');
import { showProductContainer } from './homeProductCards.js';
import products from './things.json' with {type:"json"};
console.log(products);

showProductContainer(products);
