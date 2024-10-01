const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.json({ status: 200 });
});

app.listen(port, () => {
  console.log(`Express v5 app listening at http://localhost:${port}`);
});
