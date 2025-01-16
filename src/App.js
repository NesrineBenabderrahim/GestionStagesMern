import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StageList from './components/StageList';
import AddStage from './components/AddStage';
import EditStage from './components/EditStage';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-4">Gestion des Stages</h1>
        <Routes>
          <Route path="/" element={<StageList />} />
          <Route path="/add" element={<AddStage />} />
          <Route path="/edit/:id" element={<EditStage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
