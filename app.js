const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Test push pour voir ça sert à quoi le pipeline !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
