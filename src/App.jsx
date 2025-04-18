import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutpages from './Pages/Aboutpages';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import ContactUsPage from './Pages/ContactUsPage';

function App() {
  return (
    <>

    <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about"  element ={<Aboutpages/>}/>
        <Route path="/contact-us"  element ={<ContactUsPage/>}/>
      </Routes>
  
    
     
     <Footer/>

    </>
    
  );
}

export default App;
