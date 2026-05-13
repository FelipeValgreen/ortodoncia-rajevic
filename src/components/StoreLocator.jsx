"use client";
import React from 'react';

const StoreLocator = () => {
    return (
        <div className="store-locator-wrapper" style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <iframe 
                src="https://maps.google.com/maps?q=Ortodoncia%20Rajevic,%20Las%20Hualtatas%208999,%20Vitacura&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Ortodoncia Rajevic"
            ></iframe>
        </div>
    );
};

export default StoreLocator;
