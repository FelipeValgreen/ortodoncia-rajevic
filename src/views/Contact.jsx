"use client";
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const StoreLocator = dynamic(() => import('../components/StoreLocator'), { ssr: false });

const Contact = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="grid-1-2" style={{ alignItems: 'start', gap: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="uppercase-tracking text-secondary">Contacto</span>
                            <h1 style={{ marginBottom: '2rem', marginTop: '1rem' }}>Agenda tu evaluación</h1>
                            <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                                Estamos ubicados en Vitacura, Santiago. Atendemos de Lunes a Viernes previa cita.
                            </p>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contacto Directo</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Teléfono:</strong> <a href="tel:+56988897033" className="text-light" style={{ textDecoration: 'none', color: 'inherit' }}>+56 9 8889 7033</a></li>
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>WhatsApp:</strong> <a href="https://wa.me/56988897033" target="_blank" rel="noopener noreferrer" className="text-light" style={{ textDecoration: 'none', color: 'inherit' }}>+56 9 8889 7033</a></li>
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Correo:</strong> <a href="mailto:contacto@ortodonciarajevic.cl" className="text-light" style={{ textDecoration: 'none', color: 'inherit' }}>contacto@ortodonciarajevic.cl</a></li>
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Dirección:</strong> <span className="text-light">Las Hualtatas 8999. Vitacura. Santiago.</span></li>
                                </ul>
                            </div>

                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                marginBottom: '3rem'
                            }}>
                                <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem', color: 'var(--color-primary)' }}>Reserva Directa</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    Conozca la disponibilidad en tiempo real y agende su evaluación sin esperas a través de Calendly o de nuestra plataforma en Doctoralia.
                                </p>
                                
                                <div style={{ marginBottom: '2rem' }}>
                                    <div 
                                        className="calendly-inline-widget" 
                                        data-url="https://calendly.com/ortodonciarajevic/diagnostico-inicial" 
                                        style={{ minWidth: '320px', height: '700px', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}
                                    ></div>
                                </div>
                            </div>

                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                marginBottom: '2rem'
                            }}>
                                <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem', color: 'var(--color-primary)' }}>Nuestra Ubicación</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    Visítanos en nuestra clínica ubicada en Vitacura. Contamos con estacionamiento y fácil acceso.
                                </p>
                                <StoreLocator />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
