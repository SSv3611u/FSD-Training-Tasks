const fs = require('fs');

const readStream = fs.createReadStream('sample.txt', 'utf8');
const writeStream = fs.createWriteStream('stream-output.txt');

readStream.on('data', (chunk) => {
  console.log('Chunk received:', chunk.length, 'characters');
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
  console.log('Read stream finished.');
});
