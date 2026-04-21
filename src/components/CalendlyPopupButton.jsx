"use client";
import React from 'react';

const CalendlyPopupButton = ({ className = "btn btn-primary", style, children, url = "https://calendly.com/ortodonciarajevic/consulta-control", onClickExtra }) => {

    const handleClick = (e) => {
        e.preventDefault();
        
        // Execute any extra onClick handler (like closeMobileMenu)
        if (onClickExtra) onClickExtra();

        if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initPopupWidget({ url });
        } else {
            // Fallback si el script no ha cargado
            window.open(url, "_blank");
        }
    };

    return (
        <a href={url} onClick={handleClick} className={className} style={{...style, cursor: 'pointer', zIndex: 10}}>
            {children || "Agenda tu hora"}
        </a>
    );
};

export default CalendlyPopupButton;
