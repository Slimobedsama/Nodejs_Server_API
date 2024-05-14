const http = require('http');
const { title } = require('process');
const PORT = 4000;

const db = 
[
    {
        id: '1',
        title: 'The Nigerian police is your friend',
        comedian: 'AY',
        year: 2008
    },
    {
        id: '2',
        title: 'The smart student',
        comedian: 'Basket Mouth',
        year: 2002
    },
    {
        id: '3',
        title: 'Caught while trying to outsmart mom',
        comedian: 'Buchi',
        year: 2015
    },
    {
        id: '4',
        title: 'Three drunk friends',
        comedian: 'Bovi',
        year: 2010
    },
];

const handleRequest = ((req, res)=> {
    if(req.url === '/joke' && req.method === 'GET') {
        res.writeHead(200)
        res.end(JSON.stringify({
            message: 'Successful',
            data: db
        }));
    } else if(req.url === '/joke' && req.method === 'POST') {

    } else if(req.url === '/joke/:id' && req.method === 'PATCH') {

    } else if(req.url === '/joke/:id' && req.method === 'DELETE') {

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            error: 'Not found',
        }));

    }
});

const server = http.createServer(handleRequest);

server.listen(PORT, ()=> console.log(`Server listening on port ${PORT}...`));