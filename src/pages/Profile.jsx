import React from 'react';
import { motion } from 'framer-motion';
import drRajevicImg from '../assets/dr-rajevic.jpg';

const Profile = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="grid-2-3" style={{ alignItems: 'start', gap: '5rem' }}>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ width: '100%', height: '500px', backgroundColor: '#e2e8f0', borderRadius: 'var(--border-radius)', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <img src={drRajevicImg} alt="Dr. Zdenko Rajevic" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)' }} />
                            </div>

                            <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--border-radius)' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Credenciales</h4>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', color: 'var(--color-text)', display: 'grid', gap: '1.2rem' }}>
                                    <li><strong>Cirujano Dentista</strong> <br /><span className="text-light" style={{ fontSize: '0.9rem' }}>Universidad de Chile, Distinción Máxima</span></li>
                                    <li><strong>Especialista en Ortodoncia</strong> <br /><span className="text-light" style={{ fontSize: '0.9rem' }}>Universidad de Chile</span></li>
                                    <li><strong>Magíster en Ortodoncia</strong> <br /><span className="text-light" style={{ fontSize: '0.9rem' }}>Universidad Andrés Bello</span></li>
                                    <li className="text-secondary" style={{ fontWeight: '600', marginTop: '0.5rem' }}>35+ Años de Práctica Clínica</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="uppercase-tracking text-secondary">Director Clínico</span>
                            <h1 style={{ marginTop: '0.5rem', marginBottom: '2.5rem', lineHeight: '1.1' }}>Dr. Zdenko Rajevic</h1>

                            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '4rem', fontWeight: '300' }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    La ortodoncia moderna a menudo cae en la trampa de la inmediatez. Se venden sonrisas como productos terminados, ignorando que cada paciente es un sistema biológico único y complejo.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Mi práctica se ha construido sobre un principio opuesto: <strong>el respeto profundo por la biología y la función</strong>. No veo aparatos, veo articulaciones, músculos y huesos. Los dientes son solo la consecuencia de ese equilibrio.
                                </p>
                                <p>
                                    Dedico mi tiempo a los casos diagnósticos complejos, a las segundas opiniones y a los pacientes que buscan la tranquilidad de saber que están en manos de un experto que no improvisa.
                                </p>
                            </div>

                            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Filosofía Clínica</h3>
                                <div className="grid-2" style={{ gap: '3rem' }}>
                                    <div>
                                        <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem', color: 'var(--color-primary)' }}>Diagnóstico sobre Técnica</h5>
                                        <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                                            La mejor técnica del mundo (Invisalign, Lingual) fracasa si el diagnóstico inicial es erróneo. Primero el qué, luego el cómo.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem', color: 'var(--color-primary)' }}>Estabilidad a Largo Plazo</h5>
                                        <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                                            El objetivo no es solo alinear dientes hoy, sino asegurar que permanezcan sanos y estables dentro de 10, 20 o 30 años.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
