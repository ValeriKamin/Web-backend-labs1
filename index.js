
const http = require('http');
const port = 8080; // Порт, на якому буде працювати сервер

// Створення HTTP-сервера
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const url = req.url;

    if (url === '/about') {
        res.write('<h1>about us page</h1>');
        res.end();
    } else if (url === '/contact') {
        res.write('<h1>contact us page</h1>');
        res.end();
    } else {
        res.write('<h1>Hello World!</h1>');
        res.write('<h2>My name Valeri</h2>');
        res.end();
    }
});

// Прослуховування порту та адреси сервера
server.listen(port, () => {
    console.log(`server start at http://localhost:${port}/`);
});
