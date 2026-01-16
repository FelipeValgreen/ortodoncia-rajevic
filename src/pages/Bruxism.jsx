import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bruxism = () => {
    return (
        <>
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking text-secondary">
                            Salud Articular (ATM)
                        </span>
                        <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Bruxismo y Planos en Vitacura: <br />
                            <span className="text-secondary">Proteja su articulación y sus dientes.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            El dolor mandibular y el desgaste dentario son señales de un sistema en estrés. No normalice el dolor. Un plano de relajación bien ajustado es la primera línea de defensa.
                        </p>
                        <Link to="/contacto" className="btn btn-primary">
                            Agenda tu diagnóstico
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section section-alt">
                <div className="container">
                    <div className="grid-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Más que "rechinar" los dientes</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                                El bruxismo no tratado puede llevar a consecuencias irreversibles: fracturas de dientes, retracción de encías, dolores de cabeza crónicos y daño permanente en la Articulación Temporomandibular (ATM).
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-border)' }}
                        >
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Síntomas frecuentes:</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '1.05rem', color: 'var(--color-text-light)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Dolor o cansancio muscular al despertar.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Dificultad para abrir la boca por completo.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Chasquidos o "conejos" en la mandíbula.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Desgaste visible en los bordes de los dientes.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Diagnosis & Method */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>El Plano de Relajación: Un Dispositivo de Precisión</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                            Un plano no es un simple pedazo de acrílico. Es una órtesis que debe ser ajustada micra a micra para desprogramar la musculatura y permitir que la articulación descanse en su posición fisiológica.
                        </p>
                    </div>

                    <div className="grid-2" style={{ gap: '3rem' }}>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Diseño Rígido y Ajustado</h4>
                            <p style={{ color: 'var(--color-text-light)' }}>Utilizamos acrílico termocurado rígido (no de silicona blanda), que es el estándar de oro médico para dar estabilidad real a la mandíbula.</p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Control de Contactos</h4>
                            <p style={{ color: 'var(--color-text-light)' }}>El Dr. Rajevic ajusta los puntos de contacto para asegurar que su mordida sea balanceada y no provoque más tensión muscular.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Differentiation */}
            <section className="section section-alt">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>¿Por qué evitar los planos "blandos" o de farmacia?</h2>
                        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                            Los dispositivos blandos o prefabricados suelen incentivar el "masticamiento" inconsciente durante la noche, empeorando la fatiga muscular y pudiendo alterar irreversiblemente su mordida.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Recupere su calidad de sueño</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                            Un diagnóstico articular correcto es el primer paso para vivir sin dolor.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Agenda tu evaluación de ATM
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Bruxism;
