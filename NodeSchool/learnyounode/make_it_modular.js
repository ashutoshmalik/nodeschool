var myModule = require('./myModule.js');
var dir = process.argv[2];
var fileExt = process.argv[3];

myModule(dir, fileExt, function (err, list) {
    if (err) {
        return console.log(err);
    }
    
    list.forEach(function (entry) {
        console.log(entry);
    }); 
});