/*jshint esversion: 6 */
console.log('starting app.js ...');

//load in built in module
var fs = require('fs');
var os = require('os');
const notes = require('./notes');

// var user = os.userInfo();

// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//     if (err)
//         console.log('unable to log to file !');
// });

var res = notes.Sum2Numbers(4,6);
console.log(res);