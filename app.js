const amount= 12;

if(amount<10){
    console.log("neel");
}
else{
    console.log("indro");
}

//GLOBALS - NO WINDOW
/*__dirname - path to current directory
__filename - file name
require - function to use module
module - info about current module (file)
process - info about enviroment where the program is being executed*/

//Modules
const name = require('./app2')
console.log(name);

console.log(name.neel)