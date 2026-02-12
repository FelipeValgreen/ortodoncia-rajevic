import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Delay slightly to not overwhelm on initial load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        backgroundColor: 'white',
                        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
                        zIndex: 9999,
                        padding: '1.5rem',
                        borderTop: '1px solid var(--color-border)'
                    }}
                >
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Uso de Cookies</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
                                Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y analizar el tráfico del sitio.
                                Al continuar navegando, usted acepta nuestra <Link to="/politica-de-cookies" style={{ textDecoration: 'underline', color: 'var(--color-secondary)' }}>Política de Cookies</Link>.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button
                                onClick={handleAccept}
                                className="btn btn-primary"
                                style={{ padding: '0.6rem 2rem', fontSize: '0.9rem' }}
                            >
                                Aceptar Todo
                            </button>
                            <Link
                                to="/politica-de-privacidad"
                                className="btn btn-outline"
                                style={{ padding: '0.6rem 2rem', fontSize: '0.9rem' }}
                            >
                                Ver Políticas
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
