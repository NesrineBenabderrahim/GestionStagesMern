import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStage() {
  const [stage, setStage] = useState({
    titre: '',
    description: '',
    dateDebut: '',
    dateFin: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setStage({ ...stage, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/stages', stage)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Titre</label>
        <input type="text" className="form-control" name="titre" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" name="description" onChange={handleChange}></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Date Début</label>
        <input type="date" className="form-control" name="dateDebut" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Date Fin</label>
        <input type="date" className="form-control" name="dateFin" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-success">Ajouter</button>
    </form>
  );
}

export default AddStage;
