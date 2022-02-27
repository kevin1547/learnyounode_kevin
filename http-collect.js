const http = require('http');
const url = process.argv[2];
const bl = require('bl');

http.get(url, function(Stream){
    Stream.setEncoding('utf-8');
    Stream.pipe(bl(function (err, data){
        //for(let i = 0; i < something.length; i++){
            // box = box + something[i].length;
           //num += something[i].length;
        //}
        //num += data.toString.length;
        console.log(data.toString().length);
        console.log(data.toString());

    })
    
)})