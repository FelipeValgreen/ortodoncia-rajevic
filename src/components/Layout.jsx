"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsTelephone, BsGeoAlt, BsClock, BsList, BsX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Logo from './Logo';
import CalendlyPopupButton from './CalendlyPopupButton';

const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false });
const MegaMenu = dynamic(() => import('./MegaMenu'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

const Layout = ({ children }) => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        const handleMessage = (e) => {
            if (e.data && e.data.event === 'calendly.event_scheduled') {
                window.location.href = '/gracias';
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('message', handleMessage);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="app-container">
            {/* Top Bar */}
            <div className="desktop-only" style={{ backgroundColor: 'var(--color-primary)', color: 'rgba(255,255,255,0.8)', padding: '0.8rem 0', fontSize: '0.85rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BsGeoAlt /> Las Hualtatas 8999. Vitacura. Santiago.</span>
                        <a href="tel:+56988897033" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}><BsTelephone /> +56 9 8889 7033</a>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BsClock /> Lun - Vie: 9:00 - 19:00</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://www.facebook.com/profile.php?id=61586571209741" aria-label="Facebook de Ortodoncia Rajevic" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ortodonciarajevic/" aria-label="Instagram de Ortodoncia Rajevic" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/zdenko-rajevic-marin-67052534/?originalSubdomain=cl" aria-label="LinkedIn del Dr. Zdenko Rajevic" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaLinkedinIn /></a>
                        <a href="https://www.tiktok.com/@ortodonciarajevic" aria-label="TikTok de Ortodoncia Rajevic" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaTiktok /></a>
                        <a href="https://www.youtube.com/@OrtodonciaRajevic" aria-label="YouTube de Ortodoncia Rajevic" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'var(--header-height)' }}>
                    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Logo height={45} />
                        <Link href="/" style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: 'var(--color-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            lineHeight: '1'
                        }}>
                            ORTODONCIA RAJEVIC
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="nav desktop-only">
                        <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', alignItems: 'center', margin: 0 }}>
                            <li>
                                <Link
                                    href="/diagnostico-ortodoncia-vitacura"
                                    className={`nav-link ${pathname && pathname.includes('diagnostico') ? 'active' : ''}`}
                                >
                                    Diagnóstico
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setMegaMenuOpen(true)}
                                onMouseLeave={() => setMegaMenuOpen(false)}
                                style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                            >
                                <Link
                                    href="/servicios"
                                    className={`nav-link ${pathname && (pathname.includes('ortodoncia') || pathname.includes('invisalign') || pathname.includes('bruxismo') || pathname.includes('rehabilitacion')) ? 'active' : ''}`}
                                    style={{ height: '100%', display: 'flex', alignItems: 'center' }}
                                >
                                    Servicios
                                </Link>
                                <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
                            </li>
                            <li>
                                <Link
                                    href="/dr-zdenko-rajevic"
                                    className={`nav-link ${pathname && pathname.includes('dr-zdenko-rajevic') ? 'active' : ''}`}
                                >
                                    Dr. Rajevic
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className={`nav-link ${pathname && pathname.includes('blog') ? 'active' : ''}`}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className={`nav-link ${pathname && pathname.includes('contacto') ? 'active' : ''}`}
                                >
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <CalendlyPopupButton style={{ padding: '0.8rem 2rem', fontSize: '0.9rem' }}>
                                    Agenda tu diagnóstico
                                </CalendlyPopupButton>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-only mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Menu">
                        {mobileMenuOpen ? <BsX size={30} /> : <BsList size={30} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', maxHeight: '100vh', overflowY: 'auto', padding: '2rem 0' }}>
                    <Link href="/" onClick={closeMobileMenu} className="mobile-nav-link">Inicio</Link>
                    <Link href="/diagnostico-ortodoncia-vitacura" onClick={closeMobileMenu} className="mobile-nav-link">Diagnóstico</Link>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '0.5rem 0' }}></div>
                    <span style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Especialidades</span>

                    <Link href="/ortodoncia-infantil-vitacura" onClick={closeMobileMenu} className="mobile-nav-link" style={{ fontSize: '1.2rem' }}>Ortodoncia Infantil</Link>
                    <Link href="/ortodoncia-adultos-vitacura" onClick={closeMobileMenu} className="mobile-nav-link" style={{ fontSize: '1.2rem' }}>Ortodoncia Adultos</Link>
                    <Link href="/invisalign-vitacura" onClick={closeMobileMenu} className="mobile-nav-link" style={{ fontSize: '1.2rem' }}>Invisalign</Link>
                    <Link href="/bruxismo-planos-relajacion-vitacura" onClick={closeMobileMenu} className="mobile-nav-link" style={{ fontSize: '1.2rem' }}>Bruxismo y ATM</Link>
                    <Link href="/rehabilitacion-oral-vitacura" onClick={closeMobileMenu} className="mobile-nav-link" style={{ fontSize: '1.2rem' }}>Rehabilitación Oral</Link>
                    <Link href="/segunda-opinion-ortodoncia" onClick={closeMobileMenu} className="mobile-nav-link" style={{ fontSize: '1.2rem' }}>Segunda Opinión</Link>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '0.5rem 0' }}></div>

                    <Link href="/dr-zdenko-rajevic" onClick={closeMobileMenu} className="mobile-nav-link">Dr. Rajevic</Link>
                    <Link href="/blog" onClick={closeMobileMenu} className="mobile-nav-link">Blog</Link>
                    <Link href="/contacto" onClick={closeMobileMenu} className="mobile-nav-link">Contacto</Link>
                    <CalendlyPopupButton 
                        onClickExtra={closeMobileMenu} 
                        className="mobile-nav-link" 
                        style={{ marginTop: '1rem', border: '1px solid white', padding: '0.5rem 2rem', borderRadius: '50px', fontSize: '1.5rem', display: 'inline-block' }}
                    >
                        Agenda tu hora
                    </CalendlyPopupButton>
                </nav>
            </div>

            <main style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
                {children}
            </main>

            <footer className="footer" style={{ backgroundColor: 'var(--color-primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="grid-3" style={{ gridTemplateColumns: 'minmax(250px, 1.5fr) repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Logo height={32} />
                                </div>
                                Ortodoncia Rajevic
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Criterio clínico superior. Especialistas en diagnóstico, planificación y casos complejos de ortodoncia en Vitacura.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="https://www.facebook.com/profile.php?id=61586571209741" aria-label="Visitar Facebook" target="_blank" rel="noopener noreferrer" className="icon-box" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><FaFacebookF /></a>
                                <a href="https://www.instagram.com/ortodonciarajevic/" aria-label="Visitar Instagram" target="_blank" rel="noopener noreferrer" className="icon-box" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/zdenko-rajevic-marin-67052534/?originalSubdomain=cl" aria-label="Visitar LinkedIn" target="_blank" rel="noopener noreferrer" className="icon-box" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><FaLinkedinIn /></a>
                                <a href="https://www.tiktok.com/@ortodonciarajevic" aria-label="Visitar TikTok" target="_blank" rel="noopener noreferrer" className="icon-box" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><FaTiktok /></a>
                                <a href="https://www.youtube.com/@OrtodonciaRajevic" aria-label="Visitar YouTube" target="_blank" rel="noopener noreferrer" className="icon-box" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><FaYoutube /></a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Enlaces Rápidos</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
                                <li><Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Inicio</Link></li>
                                <li><Link href="/diagnostico-ortodoncia-vitacura" style={{ color: 'rgba(255,255,255,0.7)' }}>Diagnóstico</Link></li>
                                <li><Link href="/servicios" style={{ color: 'rgba(255,255,255,0.7)' }}>Servicios</Link></li>
                                <li><Link href="/dr-zdenko-rajevic" style={{ color: 'rgba(255,255,255,0.7)' }}>Dr. Rajevic</Link></li>

                                <li style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <span style={{ color: 'var(--color-secondary)' }}>Guías Clínicas</span>
                                </li>
                                <li><Link href="/guia-invisalign-chile" style={{ color: 'rgba(255,255,255,0.7)' }}>Guía Completa Invisalign</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Especialidades</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
                                <li><Link href="/ortodoncia-infantil-vitacura" style={{ color: 'rgba(255,255,255,0.85)' }}>Ortodoncia Infantil</Link></li>
                                <li><Link href="/ortodoncia-adultos-vitacura" style={{ color: 'rgba(255,255,255,0.85)' }}>Ortodoncia Adultos</Link></li>
                                <li><Link href="/invisalign-vitacura" style={{ color: 'rgba(255,255,255,0.85)' }}>Invisalign</Link></li>
                                <li><Link href="/bruxismo-planos-relajacion-vitacura" style={{ color: 'rgba(255,255,255,0.85)' }}>Bruxismo y ATM</Link></li>
                                <li><Link href="/rehabilitacion-oral-vitacura" style={{ color: 'rgba(255,255,255,0.85)' }}>Rehabilitación Oral</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contacto</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                                <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
                                    <BsGeoAlt style={{ marginTop: '0.3rem', color: 'var(--color-accent)' }} />
                                    <a href="https://maps.app.goo.gl/t1X3mC4w5Yd6nZ4W6" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Las Hualtatas 8999. Vitacura. Santiago.
                                    </a>
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
                                    <BsTelephone style={{ marginTop: '0.3rem', color: 'var(--color-accent)' }} />
                                    <a href="https://wa.me/56988897033" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        +56 9 8889 7033
                                    </a>
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
                                    <BsClock style={{ marginTop: '0.3rem', color: 'var(--color-accent)' }} />
                                    Lun - Vie: 9:00 - 19:00
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                        <div>
                            &copy; {new Date().getFullYear()} Ortodoncia Rajevic. Todos los derechos reservados.
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Link href="/politica-de-privacidad" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Política de Privacidad</Link>
                            <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
                            <Link href="/politica-de-cookies" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Política de Cookies</Link>
                            <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
                            <Link href="/politica-de-reembolso" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Política de Reembolso</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <CookieConsent />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
