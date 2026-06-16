const http = require('http');
const express = require('express');

const app = express();

// ✅ Routes defined at the top level, NOT inside createServer()
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.post('/post', (req, res) => {
    res.send('POST request received!');
});

app.put('/put', (req, res) => {
    res.send('PUT request received!');
});

app.delete('/delete', (req, res) => {
    res.send('DELETE request received!');
});

// ✅ Pass `app` as the handler — Express knows how to route requests
const server = http.createServer(app);

server.listen(5678, () => {
    console.log('Express server running at http://localhost:5678');
});