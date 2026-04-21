"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const message = "Hola Clínica Rajevic, quisiera información para agendar un diagnóstico de ortodoncia.";
    const encodedMessage = encodeURIComponent(message);

    return (
        <a
            href={`https://wa.me/56988897033?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            style={{
                position: 'fixed',
                bottom: '2.5rem',
                right: '2.5rem',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(19, 52, 71, 0.3)',
                zIndex: 1000,
                textDecoration: 'none',
                fontSize: '2.2rem',
                border: '2px solid rgba(255,255,255,0.1)'
            }}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;
