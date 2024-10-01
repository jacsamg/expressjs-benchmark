const connect = require('connect');
const http = require('http');

const port = 3000;
const app = connect();

app.use('/', (req, res) => {
  res.end(JSON.stringify({ status: 200 }));
});

http.createServer(app).listen(port, () => {
  console.log(`Connect app listening at http://localhost:${port}`);
});