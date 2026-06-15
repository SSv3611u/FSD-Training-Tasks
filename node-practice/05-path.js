const path = require('path');

const filePath = path.join('folder', 'subfolder', 'notes.txt');
console.log('Joined path:', filePath);

console.log('Base name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Directory:', path.dirname(filePath));
