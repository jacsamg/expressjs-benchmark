const { serve } = require('@hono/node-server');
const { Hono } = require('hono');

const port = 3001;
const app = new Hono();
const opts = {
  port,
  fetch: app.fetch
};

app.get('/', (c) => {
  c.json({ status: 200 });
});

serve(opts, () => {
  console.log(`Hono app listening at http://localhost:${port}`);
});