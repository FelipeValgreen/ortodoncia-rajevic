"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const pathname = usePathname();
    const router = useRouter();
    const message = "Hola Dr. Rajevic, me gustaría contarle mi caso para ver cómo me puede ayudar a solucionarlo.";
    const encodedMessage = encodeURIComponent(message);

    const handleClick = (e) => {
        e.preventDefault();
        if (pathname === '/contacto') {
            const element = document.getElementById('contacto-formulario');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (pathname === '/diagnostico-de-precision') {
            const element = document.getElementById('cta-reserva');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/contacto');
        }
    };

    // Determine href dynamically for SEO/accessibility fallback
    let href = '/contacto';
    if (pathname === '/contacto') {
        href = '#contacto-formulario';
    } else if (pathname === '/diagnostico-de-precision') {
        href = '#cta-reserva';
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className="whatsapp-btn"
            style={{
                position: 'fixed',
                bottom: '2.5rem',
                right: '2.5rem',
                backgroundColor: '#25D366',
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
                border: '2px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
            }}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;
