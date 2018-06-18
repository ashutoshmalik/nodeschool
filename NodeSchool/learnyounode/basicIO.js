var fs = require('fs');

var file = process.argv[2];
var fileBuffer = fs.readFileSync(file);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

var fileString = fileBuffer.toString();
var fileArr = fileString.split("\n");
console.log(fileArr.length - 1);