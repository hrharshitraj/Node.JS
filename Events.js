/*
Node.js is perfect for event-driven applications.

Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

var fs = require('fs');
var rs = fs.createReadStream('./myNewFile.txt');
rs.on('open', () => {
  console.log('The file is open');
});
*/

/*
EVENTS MODULE-
* Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
*/

/*
EventEmitter -> EventEmitter is an Object using which you can assign event handlers to your own events.
* To fire an event, use the 'emit()' method.
*/
const events = require('events');

// All events properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:
const eventEmitter = new events.EventEmitter();

// Create an event handler-
const myEventHandler = () => {
    console.log('I hear a scream!');
}

// Assign the event handler to an event-
eventEmitter.on('scream', myEventHandler);
// Fire the 'scream' event-
eventEmitter.emit('scream');