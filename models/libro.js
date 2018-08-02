const mongoose = require('mongoose');
const { Schema } = mongoose;

const libroSchema = new Schema({
  titulo: String,
  autor: String,
  editorial: String,
  paginas: Number,
  precio: Number
});

module.exports = mongoose.model('Libro', libroSchema);
