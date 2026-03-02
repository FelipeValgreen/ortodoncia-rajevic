"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import dynamic from 'next/dynamic';

const StoreLocator = dynamic(() => import('../components/StoreLocator'), { ssr: false });
const DoctoraliaWidget = dynamic(() => import('../components/DoctoraliaWidget'), { ssr: false });

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const { error } = await supabase
                .from('contact_messages')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

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
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Teléfono:</strong> <span className="text-light">+56 9 3342 7916</span></li>
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>WhatsApp:</strong> <span className="text-light">+56 9 3342 7916</span></li>
                                    <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Correo:</strong> <span className="text-light">ortodonciarajevic@gmail.com</span></li>
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
                                    Conozca la disponibilidad en tiempo real y agende su diagnóstico sin esperas a través de nuestra plataforma de Doctoralia.
                                </p>
                                <DoctoraliaWidget />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <StoreLocator />
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ backgroundColor: 'var(--color-bg-alt)', padding: '3rem', borderRadius: 'var(--border-radius)' }}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 style={{ marginBottom: '2rem' }}>Formulario de Solicitud</h3>
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '1rem' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '1rem' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '1rem' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>Motivo de consulta</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div style={{ color: 'red', marginBottom: '1rem' }}>Hubo un error al enviar el formulario. Por favor intenta nuevamente o contáctanos por WhatsApp.</div>
                                )}
                                {status === 'success' && (
                                    <div style={{ color: 'green', marginBottom: '1rem' }}>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.</div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={status === 'loading' || status === 'success'}
                                    style={{ width: '100%', border: 'none', fontSize: '1.1rem', padding: '1.2rem', opacity: status === 'loading' ? 0.7 : 1 }}
                                >
                                    {status === 'loading' ? 'Enviando...' : 'Solicitar hora'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
