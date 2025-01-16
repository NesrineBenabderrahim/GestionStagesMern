const express = require('express');
const Stage = require('../models/Stage');
const router = express.Router();

// Lire tous les stages
router.get('/', async (req, res) => {
  try {
    const stages = await Stage.find();
    res.json(stages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Créer un stage
router.post('/', async (req, res) => {
  const { titre, description, dateDebut, dateFin } = req.body;
  const stage = new Stage({ titre, description, dateDebut, dateFin });

  try {
    const newStage = await stage.save();
    res.status(201).json(newStage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Mettre à jour un stage
router.put('/:id', async (req, res) => {
  try {
    const updatedStage = await Stage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supprimer un stage
router.delete('/:id', async (req, res) => {
  try {
    await Stage.findByIdAndDelete(req.params.id);
    res.json({ message: 'Stage supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
