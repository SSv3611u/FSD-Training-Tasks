const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('user:signup', (name) => {
  console.log(`Welcome, ${name}!`);
});

emitter.on('user:signup', () => {
  console.log('A new user was registered.');
});

emitter.emit('user:signup', 'Aarav');
console.log('EventEmitter example completed.');
