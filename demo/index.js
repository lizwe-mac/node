const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // res.write(`<h1>Hello</h1>`);
    if(req.url=='/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
    
            res.end(content);
            console.log(path.join(__dirname, 'public', 'index.html'));
        })
    }else if(req.url=='/about.html'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content)=>{
            if(err){
                res.end(`<h2>Document ${res.url} not found`)
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
    
            res.end(content);
            }
            
        })
    }
    else
    {
        res.writeHead(404)
        res.end(`<h1>Error 404.</h1><h1>${req.url} Not Found!</h1>`)
    }
    
}).listen(5001, ()=>console.log("Server running on port: 5001"))




// const names = {
//     name1:"MacDonald Ginyani",
//     name2:"Peter Monda",
//     name3:"Simon Chickwetu"
// }

// function printNames(){
//     Object.values(names).forEach(element => {
//         console.log(element)
//     });
// }

// printNames();