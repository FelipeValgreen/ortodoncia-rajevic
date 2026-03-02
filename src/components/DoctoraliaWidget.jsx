"use client";
import React, { useEffect } from 'react';

const DoctoraliaWidget = () => {
    useEffect(() => {
        // Function to load the Doctoralia script
        const loadScript = () => {
            const id = 'zl-widget-s';
            if (!document.getElementById(id)) {
                const js = document.createElement('script');
                js.id = id;
                js.src = "https://platform.docplanner.com/js/widget.js";
                const fjs = document.getElementsByTagName('script')[0];
                if (fjs && fjs.parentNode) {
                    fjs.parentNode.insertBefore(js, fjs);
                } else {
                    document.head.appendChild(js);
                }
            }
        };

        loadScript();
    }, []);

    return (
        <div className="doctoralia-widget-container" style={{ margin: '1rem 0' }}>
            <a
                id="zl-url"
                className="zl-url"
                href="https://www.doctoralia.cl/zdenko-rajevic/dentista/vitacura"
                rel="nofollow"
                data-zlw-doctor="zdenko-rajevic"
                data-zlw-type="big_with_calendar"
                data-zlw-opinion="false"
                data-zlw-hide-branding="true"
                data-zlw-saas-only="true"
                data-zlw-a11y-title="Widget de reserva de citas médicas"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    padding: '1.2rem 2rem',
                    backgroundColor: 'var(--color-secondary)',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(44, 112, 155, 0.2)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(44, 112, 155, 0.3)';
                    e.currentTarget.style.backgroundColor = '#3689bc';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 112, 155, 0.2)';
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Agendar en Doctoralia
            </a>
        </div>
    );
};

export default DoctoraliaWidget;
