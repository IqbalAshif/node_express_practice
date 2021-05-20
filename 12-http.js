const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to  our homepage');
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We cant seem to find what you are looking for</p>
      <a href="/">Back home</a>
  `);
  }
});

server.listen(5000);
