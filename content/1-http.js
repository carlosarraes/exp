const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html', 'utf8');
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf8');
const homeLogo = readFileSync('./navbar-app/logo.svg', 'utf8');
const homeApp = readFileSync('./navbar-app/browser-app.js', 'utf8');

const server = http.createServer((req,res)=>{
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(homePage);
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>About</h1>')
    res.end();
  } else if (req.url === '/styles.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(homeStyles)
    res.end();
  } else if (req.url === '/logo.svg') {
    res.writeHead(200, {'Content-Type': 'image/svg+xml'});
    res.write(homeLogo)
    res.end();
  } else if (req.url === '/browser-app.js') {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(homeApp)
    res.end();
  }  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404</h1>')
    res.end();
  }
})

console.log('Listening on port 5000...')
server.listen(5000);