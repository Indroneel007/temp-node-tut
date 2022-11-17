//SYNCHROUNOUS
/*const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/subcontent/first.txt', 'utf8');
const second = readFileSync('./content/subcontent/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    'Here is the result: ' + first + second
)*/

//ASYNCHROUNOUS
const { readFile, writeFile} = require('fs')

readFile('./content/subcontent/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/subcontent/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result-sync.txt',
        'Here is the async result: ' + first + second,
        (err, result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})