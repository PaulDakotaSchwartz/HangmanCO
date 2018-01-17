
var inquirer = require("inquirer");

var Word = require("./Word");

var nodeArgs = process.argv;

var start = new Word();
start.setupGame();


// Need to develop a separate letter constructor to take the entered letter and evaluate it.  