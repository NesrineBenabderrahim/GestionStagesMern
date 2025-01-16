const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
});

module.exports = mongoose.model('Stage', stageSchema);
