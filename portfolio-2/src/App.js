import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/home/Home";
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    
    <Router>
    
      <NavBar />

        <Routes>

        <Route path="/" element={<Home />} />


      </Routes>

    </Router>
  );
};

export default App;
