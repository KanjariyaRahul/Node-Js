
const event = require('events');

class Dog extends event.EventEmitter {}
class Cat extends event.EventEmitter {}

const cat = new Cat();

const dog = new Dog();

dog.on('bark', () => {
    console.log('Woof! Woof!');
});

cat.on('bark', () => {
    console.log('Meow! Meow!');
});

dog.emit('bark');
cat.emit('bark');

// ========================================================

﻿
const EventEmitter = require('events');
// Step 1: Create a custom event emitter class 

class UserEventEmitter extends EventEmitter {}
const userEventEmitter = new UserEventEmitter();

// Step 3: Register event listeners 
userEventEmitter.on('userRegistered', (user) => {
    console.log(`User registered: ${user.name}`);
    sendwelcomeEmail(user);
});

function sendwelcomeEmail(user) {
    // Simulate sending a welcome email
    console.log(`Sending welcome email to ${user.email}`);
}

// Step 2: Emit events
function registerUser(name, email) {
    const user = { name, email };
    console.log('Registering user...');

    // Emit the 'userRegistered' event 
    userEventEmitter.emit('userRegistered', user);
}
// Example usage
registerUser('rahul', 'rahul@example.com');
// registerUser('jay', 'jay@example.com');