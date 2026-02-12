import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import ChildOrtho from './pages/ChildOrtho';
import AdultOrtho from './pages/AdultOrtho';
import InvisalignPage from './pages/InvisalignPage';
import Bruxism from './pages/Bruxism';
import OralRehab from './pages/OralRehab';
import SecondOpinion from './pages/SecondOpinion';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import RefundPolicy from './pages/RefundPolicy';
import Services from './pages/Services';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    {/* SEO Defined Routes */}
                    <Route path="diagnostico-ortodoncia-vitacura" element={<Diagnosis />} />
                    <Route path="ortodoncia-infantil-vitacura" element={<ChildOrtho />} />
                    <Route path="ortodoncia-adultos-vitacura" element={<AdultOrtho />} />
                    <Route path="invisalign-vitacura" element={<InvisalignPage />} />
                    <Route path="bruxismo-planos-relajacion-vitacura" element={<Bruxism />} />
                    <Route path="rehabilitacion-oral-vitacura" element={<OralRehab />} />
                    <Route path="segunda-opinion-ortodoncia" element={<SecondOpinion />} />

                    <Route path="dr-zdenko-rajevic" element={<Profile />} />
                    <Route path="contacto" element={<Contact />} />

                    <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
                    <Route path="politica-de-cookies" element={<CookiePolicy />} />
                    <Route path="politica-de-reembolso" element={<RefundPolicy />} />

                    {/* Legacy/Overview */}
                    <Route path="servicios" element={<Services />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
