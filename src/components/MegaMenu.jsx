import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
    {
        title: 'Diagnóstico Clínico',
        path: '/diagnostico-ortodoncia-vitacura',
        desc: 'Análisis profundo para evitar errores futuros.'
    },
    {
        title: 'Ortodoncia Infantil',
        path: '/ortodoncia-infantil-vitacura',
        desc: 'Guía de crecimiento óseo preventivo.'
    },
    {
        title: 'Ortodoncia Adultos',
        path: '/ortodoncia-adultos-vitacura',
        desc: 'Corrección estética y funcional definitiva.'
    },
    {
        title: 'Invisalign',
        path: '/invisalign-vitacura',
        desc: 'Alineación invisible, planificación digital.'
    },
    {
        title: 'Bruxismo y ATM',
        path: '/bruxismo-planos-relajacion-vitacura',
        desc: 'Alivio de tensión y protección articular.'
    },
    {
        title: 'Rehabilitación Oral',
        path: '/rehabilitacion-oral-vitacura',
        desc: 'Reconstrucción funcional de su sonrisa.'
    },
    {
        title: 'Segunda Opinión',
        path: '/segunda-opinion-ortodoncia',
        desc: 'Certeza clínica ante dudas complejas.'
    }
];

const MegaMenu = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%', // Center relative to parent li
                        transform: 'translateX(-50%)',
                        minWidth: '280px', // Standard dropdown width
                        backgroundColor: 'white',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        borderRadius: 'var(--border-radius)',
                        padding: '1rem 0', // Vertical padding
                        zIndex: 1000,
                        borderTop: '3px solid var(--color-primary)'
                    }}
                    onMouseLeave={onClose}
                >
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    onClick={onClose}
                                    style={{
                                        textDecoration: 'none',
                                        display: 'block',
                                        padding: '0.8rem 1.5rem',
                                        borderBottom: index !== menuItems.length - 1 ? '1px solid #f1f5f9' : 'none',
                                        transition: 'background 0.2s',
                                        color: 'var(--color-text)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f8fafc';
                                        e.currentTarget.querySelector('h4').style.color = 'var(--color-secondary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.querySelector('h4').style.color = 'var(--color-primary)';
                                    }}
                                >
                                    <h4 style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        marginBottom: '0.2rem',
                                        transition: 'color 0.2s'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <p style={{
                                        color: 'var(--color-text-light)',
                                        fontSize: '0.8rem',
                                        lineHeight: '1.3',
                                        margin: 0
                                    }}>
                                        {item.desc}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
