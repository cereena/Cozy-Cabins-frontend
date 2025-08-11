import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMain from './Components/NavbarMain';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import PropertyDetail from './Pages/PropertyDetail';
import SellProperty from './Pages/SellProperty';
import AboutUs from "./Pages/About";
import Services from './Pages/Services';
import PrivateRoute from "./Components/PrivateRoute";
import Auth from './Pages/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <main style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/sell" element={<SellProperty />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sell" element={ <PrivateRoute> <SellProperty /> </PrivateRoute>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
