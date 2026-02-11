import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterCard = ({ beforeImage, afterImage, label, description }) => {
    return (
        <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '250px' }}>
                <div style={{ position: 'relative' }}>
                    <img src={beforeImage} alt={`Antes de ${label}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                    }}>ANTES</span>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={afterImage} alt={`Después de ${label}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'var(--color-secondary)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                    }}>DESPUÉS</span>
                </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{label}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', lineHeight: '1.5' }}>{description}</p>
            </div>
        </div>
    );
};

const BeforeAfterGallery = ({ cases }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
        }}>
            {cases.map((c, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <BeforeAfterCard {...c} />
                </motion.div>
            ))}
        </div>
    );
};

export default BeforeAfterGallery;
