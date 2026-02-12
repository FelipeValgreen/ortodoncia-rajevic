import React from 'react';
import { motion } from 'framer-motion';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import { BsAward, BsBook, BsEyeglasses } from 'react-icons/bs';

import SEO from '../components/SEO';

const Profile = () => {
    // useEffect removed

    return (
        <>
            <SEO
                title="Dr. Zdenko Rajevic: Ortodoncista Especialista en Vitacura | Bio"
                description="Conozca al Director Clínico Dr. Zdenko Rajevic. Más de 35 años de experiencia en casos complejos, ortodoncia biológica y estética en Vitacura."
                breadcrumbs={[{ name: 'Dr. Rajevic', path: '/dr-zdenko-rajevic' }]}
            />
            <section className="section" style={{ paddingBottom: '0' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '-20px',
                                    width: '100%',
                                    height: '100%',
                                    border: '2px solid var(--color-secondary)',
                                    zIndex: 0,
                                    borderRadius: 'var(--border-radius)'
                                }}></div>
                                <img src={drRajevicImg} alt="Dr. Zdenko Rajevic" style={{ width: '100%', borderRadius: 'var(--border-radius)', position: 'relative', zIndex: 1, display: 'block' }} />
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="uppercase-tracking text-secondary">Director Clínico</span>
                            <h1 style={{ marginTop: '0.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>Dr. Zdenko Rajevic</h1>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '400', fontStyle: 'italic', color: 'var(--color-primary)' }}>
                                "La boca es un sistema arquitectónico. Si mueves una columna sin calcular la carga, el edificio colapsa."
                            </h3>

                            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                                <p style={{ marginBottom: '1rem' }}>
                                    En una era de "ortodoncia rápida" y alineadores por correo, mi práctica se mantiene firme en los principios biológicos. No vendo aparatos; ofrezco diagnósticos médicos.
                                </p>
                                <p>
                                    Cada paciente que se sienta en mi sillón recibe el mismo nivel de análisis que hemos llevado a la práctica durante décadas. No delegamos el pensamiento clínico y traspasamos todo nuestro conocimiento a la sonrisa de nuestros pacientes.
                                </p>
                            </div>

                            <div className="grid-2-3" style={{ gap: '1rem' }}>
                                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
                                    <BsAward style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem' }} />
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Formación Académica</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                        Cirujano Dentista (U. Chile) con Distinción Máxima.
                                        <br /><br />
                                        Especialista en Ortodoncia Universidad de Chile. Distinción Máxima.
                                        <br /><br />
                                        Magíster en Ortodoncia del ROTH-WILLIAM CENTER FOR FUNCTIONAL OCCLUSION
                                        <br /><br />
                                        Invisalign Doctor
                                    </p>
                                </div>
                                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
                                    <BsEyeglasses style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem' }} />
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Visión Experta</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                        35+ años resolviendo casos que otros consideraban "imposibles" o "quirúrgicos".
                                        <br /><br />
                                        Alto nivel de especialidad para resolver casos de cirugía ortognática
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section section-alt" style={{ marginTop: '5rem' }}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: '3rem' }}>Filosofía de Trabajo</h2>
                    <div className="grid-3" style={{ gap: '3rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Diagnóstico Centrado en la Cara</h4>
                            <p className="text-light">No miramos solo los dientes. Miramos cómo los dientes soportan los labios y el perfil facial para asegurar un rejuvenecimiento estético.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>2. Respeto por la ATM</h4>
                            <p className="text-light">La articulación temporomandibular es sagrada. Ningún tratamiento estético vale la pena si genera dolor articular a futuro.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>3. Tecnología con Criterio</h4>
                            <p className="text-light">Usamos escáneres 3D y planificación digital, y sofisticados simuladores de mordida.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
