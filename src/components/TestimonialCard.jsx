import React from 'react';
import { BsStarFill, BsGoogle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, text, image, date }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="testimonial-card"
            style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0,0,0,0.05)'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid var(--color-background)'
                    }}
                />
                <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{role}</span>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <BsGoogle style={{ color: '#4285F4', fontSize: '1.2rem' }} />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#FFC107' }}>
                {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} size={14} />
                ))}
            </div>

            <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--color-text)',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                flex: 1
            }}>
                "{text}"
            </p>

            <div style={{ fontSize: '0.8rem', color: '#999', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                {date}
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
