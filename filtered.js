/*
const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(directory, function(err, file){
    file.forEach(function(file){
        if(path.extname(file) === extension){
            console.log(file);
        }
    })
})*/


const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(directory, 'utf-8', function(err, list){
    /*list.forEach(function(file){
        if(path.extname(file) === extension){
            console.log(file);
        }
    })*/
    for(let i = 0; i <= list.length - 1; i++){
        if(path.extname(list[i]) === extension){
           console.log(list[i]); 
        }
    }
})
