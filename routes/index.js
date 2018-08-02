const express = require('express');
const app = express();

app.use('/api/libros', require('./libro'));

module.exports = app;
