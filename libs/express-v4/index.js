const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
  res.json({ status: 200 });
});

app.listen(port, () => {
  console.log(`Express v4 app listening at http://localhost:${port}`);
});
