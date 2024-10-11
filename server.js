const http = require("http")
// console.log(http)

const port = 3000;


// creating the server to output hello Node.
http.createServer((req, res) => {
    if(req.url === '/aboutt') {
        res.write(`Welcome to My About Page`);
        res.end;

    } else {
        res.write(`<h1>Hello Node</h1>`)
        res.end;
        
    }

}).listen(port, () => {
    console.log(`😍😍 Server is active and working at http://localhost:3000`)
})