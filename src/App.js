import React, { useState } from 'react';
import Headers from './Components/Headers';
import Footer from './Components/Footer';
import CustomNavbar from './Components/CustomNavbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Views/Contact';
import Home from './Views/Home';
import NoPage from './Views/NoPage';

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Headers />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
