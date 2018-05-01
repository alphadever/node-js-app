/*jshint esversion: 6 */
console.log('starting app.js ...');

//load in built in module
var fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// load in internal modules
const notes = require('./notes');

// using yargs
const argv = yargs.argv;
// conventional Node
var command = process.argv[2];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}