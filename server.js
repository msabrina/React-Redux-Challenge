// 'use strict';

// // require('dotenv').config({ silent: true });
// const express     = require('express');
// const logger      = require('morgan');
// const path        = require('path');
// const bodyParser  = require('body-parser');

// const app         = express();
// const PORT        = process.argv[2] || process.env.port || 3000;

// app.use(logger('dev'));

// app.use(express.static(path.join(__dirname, 'dist')));

// // This will parse our payload from fetch which is sent as a JSON object
// app.use(bodyParser.json());



const express = require('express');
const logger = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist'))); // or wherever you have your react files

// app.get('/api', (req, res) => {
//  fetch('http://api.flutrack.org/?s=flu')
//  .then(r => r.json())
//  .then(data => res.json(data))
//  .catch(err => res.json(err));
// });

app.listen(PORT, () => console.warn(`Listening on port ${PORT}!`));
