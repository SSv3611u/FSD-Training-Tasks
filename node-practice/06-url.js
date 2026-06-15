const url = require('url');

const address = 'https://example.com/products?category=books&sort=price';
const parsed = url.parse(address, true);

console.log('Hostname:', parsed.hostname);
console.log('Pathname:', parsed.pathname);
console.log('Query:', parsed.query);
