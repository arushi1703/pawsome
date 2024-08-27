import React from 'react';
import { BrowserRouter , Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Service from './pages/Service';
import Pets from './pages/Pets';

function App() {
  return (
    <div>
      <Dashboard/>
      <Routes>
        <Route path='/'>
          <Route path='home' element={<Home/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='pets' element={<Pets/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
