import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BsTelephone, BsGeoAlt, BsClock } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Logo';

const Layout = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-container">
            {/* Top Bar - Xegara Style */}
            <div style={{ backgroundColor: 'var(--color-primary)', color: 'rgba(255,255,255,0.7)', padding: '0.8rem 0', fontSize: '0.85rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BsGeoAlt /> Av. Vitacura 1234, Santiago</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BsTelephone /> +56 9 1234 5678</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BsClock /> Lun - Vie: 9:00 - 19:00</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: 'white' }}><FaFacebookF /></a>
                        <a href="#" style={{ color: 'white' }}><FaInstagram /></a>
                        <a href="#" style={{ color: 'white' }}><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}>
                <div className="container header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'var(--header-height)' }}>
                    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Logo height={45} />
                        <Link to="/" style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            color: 'var(--color-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            lineHeight: '1'
                        }}>
                            ORTODONCIA RAJEVIC
                        </Link>
                    </div>
                    <nav className="nav">
                        <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', alignItems: 'center', margin: 0 }}>
                            <li><Link to="/diagnostico" style={{ fontWeight: '500', color: location.pathname === '/diagnostico' ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Diagnóstico</Link></li>
                            <li><Link to="/servicios" style={{ fontWeight: '500', color: location.pathname === '/servicios' ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Servicios</Link></li>
                            <li><Link to="/experiencia" style={{ fontWeight: '500', color: location.pathname === '/experiencia' ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Experiencia</Link></li>
                            <li><Link to="/dr-rajevic" style={{ fontWeight: '500', color: location.pathname === '/dr-rajevic' ? 'var(--color-secondary)' : 'var(--color-primary)' }}>Dr. Rajevic</Link></li>
                            <li><Link to="/contacto" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.9rem' }}>Agenda tu hora</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0 2rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>R</div>
                                Ortodoncia Rajevic
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
                                Criterio clínico superior. Especialistas en diagnóstico, planificación y casos complejos de ortodoncia.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ width: '35px', height: '35px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaFacebookF /></div>
                                <div style={{ width: '35px', height: '35px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaInstagram /></div>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Enlaces Rápidos</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Inicio</Link></li>
                                <li><Link to="/diagnostico" style={{ color: 'rgba(255,255,255,0.7)' }}>Diagnóstico</Link></li>
                                <li><Link to="/servicios" style={{ color: 'rgba(255,255,255,0.7)' }}>Servicios</Link></li>
                                <li><Link to="/dr-rajevic" style={{ color: 'rgba(255,255,255,0.7)' }}>Dr. Rajevic</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Tratamientos</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><Link to="/servicios" style={{ color: 'rgba(255,255,255,0.7)' }}>Ortodoncia Niños</Link></li>
                                <li><Link to="/servicios" style={{ color: 'rgba(255,255,255,0.7)' }}>Ortodoncia Adultos</Link></li>
                                <li><Link to="/servicios" style={{ color: 'rgba(255,255,255,0.7)' }}>Invisalign</Link></li>
                                <li><Link to="/servicios" style={{ color: 'rgba(255,255,255,0.7)' }}>Segunda Opinión</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contacto</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                                    <BsGeoAlt style={{ marginTop: '0.3rem', color: 'var(--color-secondary)' }} />
                                    Av. Vitacura 1234,<br />Oficina 505, Vitacura
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                                    <BsTelephone style={{ marginTop: '0.3rem', color: 'var(--color-secondary)' }} />
                                    +56 9 1234 5678
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                                    <BsClock style={{ marginTop: '0.3rem', color: 'var(--color-secondary)' }} />
                                    Lun - Vie: 9:00 - 19:00
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Ortodoncia Rajevic. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
