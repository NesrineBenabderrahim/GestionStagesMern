const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/gestion-stages")
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Routes
app.use("/api/stages", require("./routes/stageRoutes"));

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
