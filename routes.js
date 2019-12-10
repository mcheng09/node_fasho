const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Homepage</title></head>');
    res.write(
      '<body><h1>Home Route</h1></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/page-two') {
    res.write('<html>');
    res.write('<head><title>Second Page</title></head>');
    res.write(
      '<body><h1>Second Page Route</h1></body>'
    );
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>404</title><head>');
  res.write('<body><h1>This page does not exist!</h1></body>');
  res.write('</html>');
  res.end();
};

exports.handler = requestHandler;
