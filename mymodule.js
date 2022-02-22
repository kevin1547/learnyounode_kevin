const fs = require('fs');
const path = require('path');
function result(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if(err) {return callback(err);}
        const newlist=[];
        for(let i = 0; i < list.length; i++){
            if(path.extname(list[i]) === "." + ext){
                newlist.push(list[i]);
            }
        }
        callback(null, newlist)
    })
}
module.exports = result;