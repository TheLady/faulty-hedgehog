const express = require('express');
const app = express();
// let bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Sandbox_Server is listening on port 3000');
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setStatus = 200;
  res.send('Welcome to Sandbox!');
});

app.get('/search', (req, res) => {
  let { q } = req.query;
  // let q = req.query.q; this is same as previous line.
  if (q !== undefined) {
    res.setHeader('Content-Type', 'text/plain');
    res.setStatus = 200;
    res.send('You searched for: "doodads"');
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.setStatus = 400;
    res.send(`You didn't provide a search query term :(`);
  }
});

app.post('/things/:a', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setStatus = 201;
  res.send('New thing created: ' + req.params.a);
});

app.get('/somefile', (req, res) => {
    req.accepts('text/html');
    req.accepts('text/plain');

    res.setHeader('Content-Type', 'text/html');
    res.setStatus = 200;
    // res.send('This is a plain text file');
    res.send('<!DOCTYPE html><html><body>This is an HTML file</body></html>');
});

app.get('/myjsondata', (req, res) => {
   req.accepts('application/json');

   res.setHeader('Content-Type', 'application/json');
   res.setStatus = 200;
   res.send('{ "title": "some JSON data" }');
});

app.get('/old-page', (req, res) => {
   res.redirect(301, 'http://localhost:3000/newpage');
});

app.post('/admin-only', (req, res) => {
   res.status(403).send('Admin only');
});

app.get('/not-a-page', (req, res) => {
   res.status(404).send('File not found');
});

app.get('/server-error', (req, res) => {
   res.status(500).send('Internal server error');
});
