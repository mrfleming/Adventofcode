"use strict";
exports.__esModule = true;
// common methods to be used for multiple days
var fs = require('fs');
function readInputSync(fileName) {
    var inputRead = fs.readFileSync(fileName, 'utf8');
    return inputRead;
}
exports.readInputSync = readInputSync;
function readInput(fileName) {
    var inputRead = fs.readFile(fileName, 'utf8', function (err, data) {
        if (err)
            throw err;
        console.log(data);
    });
    return inputRead;
}
exports.readInput = readInput;
function inputToArray(input, type, char) {
    type = type.toLocaleLowerCase();
    var inputArray = input.split(char);
    var outputArray;
    if (type === 'number') {
        outputArray = inputArray.map(function (str) { return Number(str); });
    }
    else if (type === 'string') {
        outputArray = inputArray.map(function (str) { return String(str); });
    }
    return outputArray;
}
exports.inputToArray = inputToArray;
function inputToNumberArray(fileName, splitChar) {
    var rawFile = readInputSync(fileName);
    return inputToArray(rawFile, 'number', splitChar);
}
exports.inputToNumberArray = inputToNumberArray;
function inputToStringArray(fileName, splitChar) {
    var rawFile = readInputSync(fileName);
    return inputToArray(rawFile, 'string', splitChar);
}
exports.inputToStringArray = inputToStringArray;
