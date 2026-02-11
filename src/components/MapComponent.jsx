import React from 'react';

const MapComponent = () => {
    return (
        <div style={{
            width: '100%',
            height: '450px',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            position: 'relative',
            backgroundColor: '#e5e3df'
        }}>
            <iframe
                title="Ubicación Ortodoncia Rajevic"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=Las+Hualtatas+8999,+Vitacura,+Santiago&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 10,
                maxWidth: '250px'
            }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Ortodoncia Rajevic</strong>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Las Hualtatas 8999, Vitacura</span>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Las+Hualtatas+8999,+Vitacura,+Santiago"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        marginTop: '0.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-secondary)',
                        textDecoration: 'none',
                        fontWeight: '600'
                    }}
                >
                    Ver en Google Maps →
                </a>
            </div>
        </div>
    );
};

export default React.memo(MapComponent);
