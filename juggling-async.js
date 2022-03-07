const http = require('http');
const bl = require('bl');
//const { resolve } = require('path');
//const { rejects } = require('assert');
function step(){
    return new Promise((resolve, reject)=>{
            
            let require = http.get(process.argv[2]);
            require.on('data', result =>{
                resolve(result);
            });
            require.on('error', err=>{
                reject(err);
            });
    });
}
const box = [];
async function start(){
    for(i = 2; i < process.argv.length; i++){
        const final = await step();
        final.setEncoding('utf-8');
        final.pipe(bl(function(err, answer){
            if(err){console.err(err);}

            box.push(answer);
            //console.log(answer);
        }))
}
box.forEach(item => {
    console.log(item);
})
}
start();









/*





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
        console.log('i am response >>>>>>>>>>'+response)
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
}*/