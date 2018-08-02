const express = require('express');
const router = express.Router();

const Socio = require('../models/socio');

router.get('/', async (req, res) => {
  const socios = await Socio.find();
  res.json(socios);
});

router.get('/:id', async (req, res) => {
  const socio = await Socio.findById(req.params.id);
  res.json(socio);
});

router.post('/', async (req, res) => {
  const socio = new Socio(req.body);
  await socio.save();
  res.json({
    socio,
    status: 'Socio guardado'
  });
});

router.put('/:id', async (req, res) => {
  await Socio.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Socio actualizado'
  });
});

router.delete('/:id', async (req, res) => {
  await Socio.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Socio eliminado'
  });
});

module.exports = router;