//Used to set up a web server
//Use to setup an API
//HTTP :- HyperText Transfer Protocol
const http = require('http')

const server = http.createServer((req, res)=>{  //req-> Incoming request res-> Response
    if(req.url === '/'){
        res.write('Here is our Home Page222')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('Here is our about page')
        res.end()
    }
    else{
        res.write('Sorry No Page Found')
        res.end()
    }
})

server.listen(5000)