var http = require('http');
var getUrl = process.argv[2];

http.get(getUrl, processResponse);

function processResponse(res) {
    res.setEncoding('utf8');
}