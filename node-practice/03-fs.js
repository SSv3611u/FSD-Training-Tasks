const fs = require('fs');

fs.writeFileSync('sample.txt', 'Hello from fs module!\n', 'utf8');
console.log('File written successfully.');

const data = fs.readFileSync('sample.txt', 'utf8');
console.log('File content:');
console.log(data);

fs.appendFile('sample.txt', 'Appended line from Node.\n', (err) => {
  if (err) throw err;
  console.log('Append operation completed.');
});
