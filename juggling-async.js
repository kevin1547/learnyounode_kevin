/*const http = require('http');
const bl = require('bl');
let n = 0;


for(let i = 4; i >=2; i--){
    
    if(i === 4){n = i - 1;}
    else if(i === 3){n = i + 1;}
    const url = process.argv[n];
    http.get(url, function(things){
    things.setEncoding('utf-8');
    things.pipe(bl(function(err, data){
        const newdata = data.toString();
        console.log(newdata);
    }))
})
}*/
const http = require('http');
const bl = require('bl');
const box = [];
let counting = 0;

function thelastresult(){
    for(let i = 0; i < 3; i++){
        console.log(box[i]);
    }
}

function themiddleresult(index){ 
    http.get(process.argv[2 + index], function(response){
    response.pipe(bl(function(err, data){
        if(err){console.err(err);}

        box[index] = data.toString();
        counting++;

        if(counting === 3){
            thelastresult();
        }
    }))
})
}

for(let i = 0; i < 3; i++){
    themiddleresult(i);
}