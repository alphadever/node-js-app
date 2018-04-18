/*jshint esversion: 6 */
console.log('starting notes.js ...');

// binding a property to module function
module.exports.age = 25;

// void function attached to module object
module.exports.addNote = () => {
    console.log('addNote');
    return 'here is the return !';
}; 

// add function attached to module object
module.exports.add = (x, y) => {
    return x + y;
};