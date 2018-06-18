var fs = require('fs');
var file = process.argv[2];

// fs.readFile(file, 'utf8', callback) can also be 
// used and no need to call toString()

fs.readFile(file, function (err, contents) {
    if (err) {
        return console.log(err);
    }  
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
});