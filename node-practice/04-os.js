const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU cores:', os.cpus().length);
console.log('Total memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Free memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Home directory:', os.homedir());
