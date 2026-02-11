import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    // Deep link message for lead qualification
    const message = "Hola Clínica Rajevic, quisiera información para agendar un diagnóstico de ortodoncia.";
    const encodedMessage = encodeURIComponent(message);

    return (
        <motion.a
            href={`https://wa.me/56933427916?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)' }}
            whileTap={{ scale: 0.95 }}
            style={{
                position: 'fixed',
                bottom: '2.5rem',
                right: '2.5rem',
                backgroundColor: 'var(--color-secondary)', // Sobrio Blue instead of Generic Green
                color: 'white',
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(19, 52, 71, 0.3)', // Colored shadow
                zIndex: 1000,
                textDecoration: 'none',
                fontSize: '2.2rem',
                border: '2px solid rgba(255,255,255,0.1)'
            }}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
            <span style={{
                position: 'absolute',
                right: '100%',
                backgroundColor: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                marginRight: '1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                color: 'var(--color-text)',
                fontSize: '0.9rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                opacity: 0,
                pointerEvents: 'none',
                // Tooltip logic could be added here or via CSS, 
                // but for now keeping it simple: Icon only with sophisticated look.
                display: 'none'
            }}>
                Agenda tu hora
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
