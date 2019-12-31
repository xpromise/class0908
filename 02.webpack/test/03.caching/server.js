const express = require('express');
const app = express();

app.use(
  express.static('build', {
    maxAge: 3600 * 1000
  })
);

app.listen(3000);
