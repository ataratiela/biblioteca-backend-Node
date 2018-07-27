const express = require('express');
const app = express();

app.use('/libros', require('./libro'));

module.exports = app;
