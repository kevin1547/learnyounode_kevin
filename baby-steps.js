let sum = 0;
for(let i = 2 ; i <= process.argv.length - 1; i++){
    sum += Number(process.argv[i]);
    
}


const fs = require('fs');
const file = fs.readFileSync(process.argv[2]).toString()
const text = file.split("\n");
console.log(text.length - 1);
