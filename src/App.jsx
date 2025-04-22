import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutpages from './Pages/Aboutpages';
import Footer from './Components/FooterComponents/Footer';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';

import Servicespages from './Pages/Servicespages';

function App() {
  return (
    <>

    <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
<Route path="/about"  element ={<Aboutpages/>}/>
<Route path="/services" element={ <Servicespages/>}/>
      </Routes>
  
    
     
     <Footer/>

    </>
    
  );
}

export default App;
