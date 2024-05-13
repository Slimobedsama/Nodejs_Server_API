const http = require('http');
const PORT = 4000;

const handleRequest = ((req, res)=> {
    res.end(JSON.stringify({
        message: 'Connection'
    }));
})

const server = http.createServer(handleRequest);


server.listen(PORT, ()=> console.log(`Server listening on port ${PORT}...`));