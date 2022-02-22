const mod = require('./mymodule.js');
const dir = process.argv[2];
const ext2 = process.argv[3];

mod(dir, ext2, function(err, newlist){
    if(err) return console.err(err);
    for(let i = 0; i <= newlist.length - 1; i++){
        console.log(newlist[i]);
    }
})

