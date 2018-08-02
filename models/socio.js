const mongoose = require('mongoose');
const { Schema } = mongoose;

const socioSchema = new Schema({
  usuario: String,
  clave: String,
  nombre: String,
  apellidos: String,
  direccion: String
});

module.exports = mongoose.model('Socio', socioSchema);