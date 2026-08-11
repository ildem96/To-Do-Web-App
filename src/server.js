const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath) || '.html';
    const map = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json' };
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            return res.end('Not found');
        }
        res.writeHead(200, { 'Content-Type': map[ext] || 'text/plain' });
        res.end(content);
    });
});

server.listen(port, () => console.log(`Server running at http://localhost:${port}/`));