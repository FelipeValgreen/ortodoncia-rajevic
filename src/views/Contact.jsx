"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FaWhatsapp } from 'react-icons/fa';
import { countryCodes, getFlagEmoji } from '../utils/countryCodes';

const StoreLocator = dynamic(() => import('../components/StoreLocator'), { ssr: false });

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        situacion: 'Diagnóstico Clínico',
        fechaEstimada: ''
    });
    
    const [selectedCountryCode, setSelectedCountryCode] = useState('CL');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format the date to DD/MM/YYYY for the WhatsApp message
        let formattedDate = formData.fechaEstimada;
        if (formData.fechaEstimada) {
            const [year, month, day] = formData.fechaEstimada.split('-');
            formattedDate = `${day}/${month}/${year}`;
        }

        let entryUrl = '';
        if (typeof window !== 'undefined') {
            try {
                const currentUrl = window.location.href;
                const hasParams = window.location.search && window.location.search.length > 1;
                const savedUrl = sessionStorage.getItem('entryUrl');
                
                if (hasParams) {
                    entryUrl = currentUrl;
                    sessionStorage.setItem('entryUrl', currentUrl);
                } else {
                    entryUrl = savedUrl || currentUrl;
                }
            } catch (err) {
                entryUrl = window.location.href;
            }
        }

        // Clean and combine country code + phone number for GA4 standard format
        let cleanPhone = formData.telefono.trim().replace(/^\+/, '');
        const selectedCountry = countryCodes.find(c => c.code === selectedCountryCode) || { dial_code: '+56' };
        const dialCodeClean = selectedCountry.dial_code.replace(/^\+/, '');
        if (cleanPhone.startsWith(dialCodeClean)) {
            cleanPhone = cleanPhone.slice(dialCodeClean.length);
        }
        cleanPhone = cleanPhone.replace(/^0+/, '').replace(/\s+/g, '');
        const combinedPhone = `+${dialCodeClean}${cleanPhone}`;

        // 1. Send data to webhook (Make)
        fetch('https://hook.us2.make.com/znvdh5kxhgc1ouyn1o6631ykxacz1kp3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: formData.nombre,
                apellido: formData.apellido,
                email: formData.email,
                telefono: combinedPhone,
                situacion: formData.situacion,
                fechaEstimada: formattedDate,
                pageUrl: entryUrl
            })
        }).catch(err => console.error('Error sending webhook:', err));

        // 2. Push to dataLayer for GTM
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'whatsapp_form_submitted',
                formName: 'contacto_whatsapp',
                formData: {
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    email: formData.email,
                    telefono: combinedPhone,
                    situacion: formData.situacion,
                    fechaEstimada: formattedDate,
                    pageUrl: entryUrl
                }
            });
        }

        // 3. Open WhatsApp redirect
        const message = `Hola Dr. Rajevic, me gustaría solicitar más información. Estos son mis datos:
- Nombre: ${formData.nombre} ${formData.apellido}
- Correo: ${formData.email}
- Teléfono: ${combinedPhone}
- Situación/Servicio: ${formData.situacion}
- Fecha estimada de visita: ${formattedDate}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/56937784243?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <section className="section">
                <div className="container">
                    {/* Top Section: Info (Left) and Booking Form (Right) */}
                    <div className="grid-2" style={{ alignItems: 'start', gap: '3rem', marginBottom: '3rem' }}>
                        {/* LEFT COLUMN: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="uppercase-tracking text-secondary">Contacto</span>
                            <h1 style={{ marginBottom: '1.5rem', marginTop: '1rem', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', lineHeight: '1.2' }}>
                                Agenda tu evaluación
                            </h1>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                                Estamos ubicados en Vitacura, Santiago. Atendemos de Lunes a Viernes previa cita.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1.2rem', fontSize: '1.3rem', color: 'var(--color-primary)' }}>Contacto Directo</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.8rem', fontSize: '1rem' }}><strong>Teléfono:</strong> <a href="tel:+56937784243" className="text-light" style={{ textDecoration: 'none', color: 'inherit' }}>+56 9 3778 4243</a></li>
                                    <li style={{ marginBottom: '0.8rem', fontSize: '1rem' }}><strong>WhatsApp:</strong> <a href="https://wa.me/56937784243" target="_blank" rel="noopener noreferrer" className="text-light" style={{ textDecoration: 'none', color: 'inherit' }}>+56 9 3778 4243</a></li>
                                    <li style={{ marginBottom: '0.8rem', fontSize: '1rem' }}><strong>Correo:</strong> <a href="mailto:contacto@ortodonciarajevic.cl" className="text-light" style={{ textDecoration: 'none', color: 'inherit' }}>contacto@ortodonciarajevic.cl</a></li>
                                    <li style={{ marginBottom: '0.8rem', fontSize: '1rem' }}><strong>Dirección:</strong> <span className="text-light">Las Hualtatas 8999. Vitacura. Santiago.</span></li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: WhatsApp Reservation Form */}
                        <motion.div
                            id="contacto-formulario"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ width: '100%' }}
                        >
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                width: '100%'
                            }}>
                                <p style={{ 
                                    marginBottom: '1.5rem', 
                                    color: 'var(--color-text-light)', 
                                    fontSize: '0.95rem', 
                                    lineHeight: '1.5',
                                    textAlign: 'center'
                                }}>
                                    Completa tus datos en el siguiente formulario para coordinar tu cita directamente por WhatsApp.
                                </p>
                                
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            <label htmlFor="nombre" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Nombre *</label>
                                            <input 
                                                type="text" 
                                                id="nombre" 
                                                name="nombre" 
                                                required 
                                                value={formData.nombre} 
                                                onChange={handleChange} 
                                                placeholder="Ej. Juan"
                                                style={{
                                                    padding: '0.7rem 0.9rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid var(--color-border)',
                                                    fontSize: '16px',
                                                    fontFamily: 'var(--font-body)',
                                                    outline: 'none',
                                                    width: '100%',
                                                    color: 'var(--color-text)',
                                                    minHeight: '44px',
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            <label htmlFor="apellido" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Apellido *</label>
                                            <input 
                                                type="text" 
                                                id="apellido" 
                                                name="apellido" 
                                                required 
                                                value={formData.apellido} 
                                                onChange={handleChange} 
                                                placeholder="Ej. Pérez"
                                                style={{
                                                    padding: '0.7rem 0.9rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid var(--color-border)',
                                                    fontSize: '16px',
                                                    fontFamily: 'var(--font-body)',
                                                    outline: 'none',
                                                    width: '100%',
                                                    color: 'var(--color-text)',
                                                    minHeight: '44px',
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Correo Electrónico *</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                required 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                placeholder="Ej. juan.perez@email.com"
                                                style={{
                                                    padding: '0.7rem 0.9rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid var(--color-border)',
                                                    fontSize: '16px',
                                                    fontFamily: 'var(--font-body)',
                                                    outline: 'none',
                                                    width: '100%',
                                                    color: 'var(--color-text)',
                                                    minHeight: '44px',
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            <label htmlFor="telefono" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Teléfono *</label>
                                            <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                                                <div style={{ position: 'relative', width: '90px', flexShrink: 0 }}>
                                                    {/* Elemento visual que se muestra (solo bandera y código) */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        padding: '0.7rem 0.5rem',
                                                        borderRadius: '4px',
                                                        border: '1px solid var(--color-border)',
                                                        fontSize: '16px',
                                                        fontFamily: 'var(--font-body)',
                                                        backgroundColor: 'white',
                                                        color: 'var(--color-text)',
                                                        pointerEvents: 'none',
                                                        boxSizing: 'border-box',
                                                        minHeight: '44px'
                                                    }}>
                                                        <span>{getFlagEmoji(selectedCountryCode)} {(countryCodes.find(c => c.code === selectedCountryCode) || { dial_code: '+56' }).dial_code}</span>
                                                        <span style={{ fontSize: '0.5rem', color: 'var(--color-text-muted)', marginLeft: '2px' }}>▼</span>
                                                    </div>
                                                    
                                                    {/* El select real invisible encima */}
                                                    <select
                                                        value={selectedCountryCode}
                                                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            width: '100%',
                                                            height: '100%',
                                                            opacity: 0,
                                                            cursor: 'pointer',
                                                            fontSize: '16px'
                                                        }}
                                                    >
                                                        {countryCodes.map((c) => (
                                                            <option key={`${c.code}-${c.dial_code}`} value={c.code}>
                                                                {getFlagEmoji(c.code)} {c.dial_code} ({c.name})
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <input 
                                                    type="tel" 
                                                    id="telefono" 
                                                    name="telefono" 
                                                    required 
                                                    value={formData.telefono} 
                                                    onChange={handleChange} 
                                                    placeholder="9 1234 5678"
                                                    style={{
                                                        padding: '0.7rem 0.9rem',
                                                        borderRadius: '4px',
                                                        border: '1px solid var(--color-border)',
                                                        fontSize: '16px',
                                                        fontFamily: 'var(--font-body)',
                                                        outline: 'none',
                                                        width: '100%',
                                                        color: 'var(--color-text)',
                                                        minHeight: '44px',
                                                        boxSizing: 'border-box'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            <label htmlFor="situacion" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>¿En qué situación estás / Qué servicio necesitas? *</label>
                                            <select 
                                                id="situacion" 
                                                name="situacion" 
                                                required 
                                                value={formData.situacion} 
                                                onChange={handleChange}
                                                style={{
                                                    padding: '0.7rem 0.9rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid var(--color-border)',
                                                    fontSize: '16px',
                                                    fontFamily: 'var(--font-body)',
                                                    backgroundColor: 'white',
                                                    outline: 'none',
                                                    width: '100%',
                                                    cursor: 'pointer',
                                                    color: 'var(--color-text)',
                                                    minHeight: '44px',
                                                    boxSizing: 'border-box'
                                                }}
                                            >
                                                <option value="Diagnóstico Clínico">Diagnóstico Clínico</option>
                                                <option value="Ortodoncia Infantil">Ortodoncia Infantil</option>
                                                <option value="Ortodoncia Adultos">Ortodoncia Adultos</option>
                                                <option value="Invisalign">Invisalign (Ortodoncia Invisible)</option>
                                                <option value="Bruxismo y ATM">Bruxismo y ATM (Planos de Relajación)</option>
                                                <option value="Rehabilitación Oral">Rehabilitación Oral</option>
                                                <option value="Segunda Opinión">Segunda Opinión</option>
                                            </select>
                                        </div>
                                        <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            <label htmlFor="fechaEstimada" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Fecha estimada de visita *</label>
                                            <input 
                                                type="date" 
                                                id="fechaEstimada" 
                                                name="fechaEstimada" 
                                                required 
                                                min={new Date().toISOString().split('T')[0]}
                                                value={formData.fechaEstimada} 
                                                onChange={handleChange}
                                                style={{
                                                    padding: '0.7rem 0.9rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid var(--color-border)',
                                                    fontSize: '16px',
                                                    fontFamily: 'var(--font-body)',
                                                    outline: 'none',
                                                    width: '100%',
                                                    color: 'var(--color-text)',
                                                    backgroundColor: 'white',
                                                    minHeight: '44px',
                                                    cursor: 'pointer',
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        style={{
                                            marginTop: '0.8rem',
                                            padding: '1rem 2rem',
                                            borderRadius: '4px',
                                            backgroundColor: '#25D366',
                                            color: 'white',
                                            border: 'none',
                                            fontSize: '1.05rem',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.8rem',
                                            transition: 'background-color 0.2s, transform 0.1s',
                                            fontFamily: 'var(--font-body)',
                                            width: '100%',
                                            minHeight: '48px'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <FaWhatsapp size={24} />
                                        Solicitar evaluación vía WhatsApp
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section: Location Map (Full Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ width: '100%' }}
                    >
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2.5rem',
                            borderRadius: '12px',
                            border: '1px solid var(--color-border)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                            marginTop: '2rem'
                        }}>
                            <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem', color: 'var(--color-primary)' }}>Nuestra Ubicación</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                Visítanos en nuestra clínica ubicada en Vitacura. Contamos con estacionamiento y fácil acceso.
                            </p>
                            <StoreLocator />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
