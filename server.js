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
    res.end(JSON.stringify({
        message: 'Connection'
    }));
})

const server = http.createServer(handleRequest);


server.listen(PORT, ()=> console.log(`Server listening on port ${PORT}...`));