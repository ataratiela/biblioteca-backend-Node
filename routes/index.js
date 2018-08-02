const express = require('express');
const app = express();

app.use('/api/libros', require('./libro'));
app.use('/api/socios', require('./socio'));

module.exports = app;
