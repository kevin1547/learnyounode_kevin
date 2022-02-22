/*const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function (err , string){
    const result = string.split('\n').length - 1;
    console.log(result);
})*/



const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function(err, string){
    const result = string.split("\n").length - 1;
    console.log(result);
})
