import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStage() {
  const { id } = useParams(); // Récupérer l'ID du stage depuis l'URL
  const [stage, setStage] = useState({
    titre: '',
    description: '',
    dateDebut: '',
    dateFin: ''
  });
  const navigate = useNavigate();

  // Charger les données du stage
  useEffect(() => {
    axios.get(`http://localhost:5000/api/stages/${id}`)
      .then(res => setStage(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setStage({ ...stage, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/stages/${id}`, stage)
      .then(() => {
        alert("Stage modifié avec succès !");
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Modifier le Stage</h3>
      <div className="mb-3">
        <label className="form-label">Titre</label>
        <input
          type="text"
          className="form-control"
          name="titre"
          value={stage.titre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={stage.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Date Début</label>
        <input
          type="date"
          className="form-control"
          name="dateDebut"
          value={stage.dateDebut.split('T')[0]}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date Fin</label>
        <input
          type="date"
          className="form-control"
          name="dateFin"
          value={stage.dateFin.split('T')[0]}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success">Modifier</button>
    </form>
  );
}

export default EditStage;
