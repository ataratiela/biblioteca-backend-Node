const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// Settings
app.set('port', process.env.Port || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto', app.get('port'));
});

// Database
mongoose.connect('mongodb://localhost:27017/mevn-biblioteca', { useNewUrlParser: true })
    .then(db => console.log('Base de datos OK'))
    .catch(err => console.log(err));
