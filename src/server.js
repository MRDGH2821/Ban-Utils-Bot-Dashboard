const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'localhost';

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) =>
  res.render('index', {
    subtitle: 'Home',
  }),
);

app.get('/commands', (req, res) =>
  res.render('commands', {
    subtitle: 'Commands',
    categories: [
      { name: 'ban', icon: 'fas fa-user-slash' },
      { name: 'timeout', icon: 'fas fa-user-times' },
      { name: 'mass_ban', icon: 'fas fa-users-slash' },
      { name: 'import', icon: 'fas fa-file-import' },
      { name: 'export', icon: 'fas fa-file-export' },
      { name: 'transfer bans', icon: 'fas fa-exchange-alt' },
    ],
  }),
);

app.listen(port, () =>
  console.log(`Server is Live at http://${domain}:${port}`),
);
