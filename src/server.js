const express = require('express');
const fs = require('fs');
// Const commands = require('../Discord-Ban-Utils-Bot/export-commands.js');

function getCommands() {
  process.chdir('./Discord-Ban-Utils-Bot/');
  const commands = [].map((command) => command.toJSON());
  const commandFiles = fs
    .readdirSync('../Discord-Ban-Utils-Bot/commands')
    .filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../Discord-Ban-Utils-Bot/commands/${file}`);
    commands.push(command.data.toJSON());
  }
  return commands;
}
const commands = getCommands();
// Before: console.log(commands);

const app = express();
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'localhost';

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

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
    commands,
  }),
);

app.listen(port, () =>
  console.log(`Server is Live at http://${domain}:${port}`),
);
