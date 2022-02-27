const http = require('http');
const URL = process.argv[2];

http.get(URL, function(response){
    response.setEncoding('utf-8');
    response.on('data', function(list){
            console.log(list);
    })
})