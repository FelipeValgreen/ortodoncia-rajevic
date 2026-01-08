import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="diagnostico" element={<Diagnosis />} />
                    <Route path="servicios" element={<Services />} />
                    <Route path="experiencia" element={<Experience />} />
                    <Route path="dr-rajevic" element={<Profile />} />
                    <Route path="contacto" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
