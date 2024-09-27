import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Pets from './pages/Pets';
import Login from './pages/AuthPage';
import Navbar from './components/Navbar';
import PetOwners from './pages/PetOwners';
import Bookings from './pages/Booking';


function App() {
  const location = useLocation();
  
  // Hide navbar on login page
  const hideNavbar = location.pathname === '/';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/petowners" element={<PetOwners />} />
          <Route path="/booking" element={<Bookings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
