const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'localhost';
__dirname;
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {
  test: 'Tests',
  subtitle: 'Home'
}));

app.listen(port, () =>
  console.log(`Server is Live at http://${domain}:${port}`),
);
