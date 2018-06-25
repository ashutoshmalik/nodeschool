var fs = require('fs');

var file = process.argv[2];

if (file !== undefined) {
    var fileBuffer = fs.readFileSync(file);
    var fileStr = fileBuffer.toString();
    console.log(fileStr);
    var fileTokens = fileStr.split('\n');
    console.log(fileTokens.length);
} else {
    console.log('Please provide file path.');
}