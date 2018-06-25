var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var fileExt = '.' + process.argv[3];

if (dir !== undefined && fileExt !== undefined) {
    fs.readdir(dir, function (err, files) {
        if (err) return console.error(err)
            files.forEach(function (file) {
                if (path.extname(file) === fileExt) {
                    console.log(file)
                }
            })
    })
} else {    
    console.log('Please provide dir path and file ext ...');
}