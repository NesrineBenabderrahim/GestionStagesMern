import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StageList() {
  const [stages, setStages] = useState([]);

  // Charger les stages
  useEffect(() => {
    fetchStages();
  }, []);

  const fetchStages = () => {
    axios.get('http://localhost:5000/api/stages')
      .then(res => setStages(res.data))
      .catch(err => console.error(err));
  };

  // Supprimer un stage
  const deleteStage = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce stage ?")) {
      axios.delete(`http://localhost:5000/api/stages/${id}`)
        .then(() => {
          alert("Stage supprimé avec succès !");
          fetchStages(); // Recharger les stages
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">Ajouter un Stage</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Dates</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stages.map(stage => (
            <tr key={stage._id}>
              <td>{stage.titre}</td>
              <td>{stage.description}</td>
              <td>{`${stage.dateDebut} - ${stage.dateFin}`}</td>
              <td>
                <Link to={`/edit/${stage._id}`} className="btn btn-warning btn-sm me-2">Modifier</Link>
                <button onClick={() => deleteStage(stage._id)} className="btn btn-danger btn-sm">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StageList;
