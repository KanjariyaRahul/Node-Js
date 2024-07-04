const EventEmitter = require('events');
const thismy = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}
class MyEventEmitter extends thismy {}
// Instantiate the custom event emitter

const myEmitter = new MyEmitter();
const myEventEmitter = new MyEventEmitter();

// Register event listener
myEmitter.on('event', () => {
    console.log('Event occurred');
});
myEventEmitter.on('e', () => {
    console.log('he occurred');
});



// Emit the event
myEmitter.emit('event');
myEventEmitter.emit('e');