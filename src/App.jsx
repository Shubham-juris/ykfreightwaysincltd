import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';



import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  
    </>
    
  );
}

export default App;
