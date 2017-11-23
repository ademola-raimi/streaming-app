'use strict';

const express = require('express');
const app = express();
const badges = require('./controllers/badges');

//app.use(express.json());

app.post('/', badges, (req, res) => {
    res.send('\ndone\n\n');
});

app.listen(3000, console.log('Listening on port localhost 3000'));
