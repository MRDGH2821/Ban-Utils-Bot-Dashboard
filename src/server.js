const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'localhost';

app.listen(port, () =>
  console.log(`Server is Live at http://${domain}:${port}`),
);
