const http = require('http');
const fs = require('fs');
const path = require('path');

const formHTML = fs.readFileSync(path.join(__dirname, 'form.html'), 'utf8');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(formHTML);
    return;
  }

  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const name = formData.get('name') || 'Unknown';
      const email = formData.get('email') || 'No email';
      const message = formData.get('message') || 'No message';

      const record = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n---\n`;

      fs.appendFile('submissions.txt', record, (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('Error saving form data.');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <h2>Form submitted successfully!</h2>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
          <a href="/">Back to form</a>
        `);
      });
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Page not found');
});

server.listen(3000, () => {
  console.log('Form server is running at http://localhost:3000');
});
