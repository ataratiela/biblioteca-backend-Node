const express = require('express');
const router = express.Router();

const Libro = require('../models/libro');

router.get('/', async (req, res) => {
  const libros = await Libro.find();
  res.json(libros);
});

router.get('/:id', async (req, res) => {
  const libro = await Libro.findById(req.params.id);
  res.json(libro);
});

router.post('/', async (req, res) => {
  const libro = new Libro(req.body);
  await libro.save();
  res.json({
    libro,
    status: 'Libro guardado'
  });
});

router.put('/:id', async (req, res) => {
  await Libro.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Libro actualizado'
  });
});

router.delete('/:id', async (req, res) => {
  await Libro.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Libro eliminado'
  });
});

module.exports = router;
