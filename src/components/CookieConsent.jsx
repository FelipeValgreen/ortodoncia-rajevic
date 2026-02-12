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
                        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
                        zIndex: 9999,
                        padding: '0.5rem 0', // Thinner padding
                        borderTop: '1px solid var(--color-border)'
                    }}
                >
                    <div className="container" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 auto', minWidth: '200px' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', margin: 0, lineHeight: '1.2' }}>
                                Usamos cookies para mejorar su experiencia. Al navegar, acepta nuestra <Link to="/politica-de-cookies" style={{ textDecoration: 'underline', color: 'var(--color-secondary)' }}>Política de Cookies</Link>.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                            <button
                                onClick={handleAccept}
                                style={{
                                    padding: '0.4rem 1rem',
                                    fontSize: '0.75rem',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: '600'
                                }}
                            >
                                Aceptar
                            </button>
                            <button
                                onClick={() => setIsVisible(false)} // Allow dismissing without accept for UI
                                style={{
                                    padding: '0.4rem 1rem',
                                    fontSize: '0.75rem',
                                    backgroundColor: 'transparent',
                                    color: 'var(--color-text-light)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
