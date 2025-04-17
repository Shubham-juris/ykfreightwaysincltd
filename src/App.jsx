import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutpages from './Pages/Aboutpages';
import Footer from './Components/FooterComponents/Footer';



import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>

    <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
<Route path="/about"  element ={<Aboutpages/>}/>
      </Routes>
  
    
     
     <Footer/>

    </>
    
  );
}

export default App;
