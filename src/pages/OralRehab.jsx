import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OralRehab = () => {
    return (
        <>
            <section className="section section-alt">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking text-secondary">
                            Trabajo Interdisciplinario
                        </span>
                        <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Rehabilitación Oral en Vitacura: <br />
                            <span className="text-secondary">La base de una restauración perfecta.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            Antes de colocar implantes, carillas o coronas, los cimientos deben estar alineados. Trabajamos junto a su rehabilitador para optimizar el espacio y la posición de sus dientes.
                        </p>
                        <Link to="/contacto" className="btn btn-primary">
                            Agenda tu diagnóstico
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '2rem' }}>Ortodoncia Pre-Protésica</h2>
                        <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '3rem', color: 'var(--color-text-light)' }}>
                            Intentar restaurar una boca con dientes volcados o espacios irregulares suele llevar a resultados estéticos pobres y biológicamente inestables. La ortodoncia prepara "el terreno" para que el trabajo del rehabilitador brille.
                        </p>
                    </motion.div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Verticalización de Molares</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Enderezamos molares inclinados (común tras pérdidas dentales) para permitir la colocación de un implante recto y fuerte.</p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Redistribución de Espacios</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Organizamos los espacios con precisión milimétrica para que las carillas o coronas tengan proporciones estéticas ideales.</p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Extrusión Ortodóncica</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Técnicas para regenerar hueso y encía de forma natural traccionando la raíz antes de un implante.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dr Authority */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ borderLeft: '4px solid var(--color-secondary)', paddingLeft: '2rem' }}
                    >
                        <h2 style={{ marginBottom: '1.5rem' }}>Coordinación Clínica</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', fontStyle: 'italic', fontWeight: '300', maxWidth: '900px' }}>
                            "El Dr. Rajevic habla el mismo idioma que su rehabilitador oral. Entendemos de oclusión, guías caninas y estética gingival, asegurando que nuestro tratamiento ortodóncico facilite y mejore el pronóstico de su rehabilitación final."
                        </p>
                        <Link to="/dr-zdenko-rajevic" className="text-secondary" style={{ fontWeight: '600', textDecoration: 'underline' }}>
                            Conocer experiencia del Dr. Rajevic
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Planificación Integral</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                            Si está pensando en renovar su sonrisa con carillas o implantes, consúltenos primero.
                        </p>
                        <Link to="/contacto" className="btn btn-primary">
                            Solicita evaluación conjunta
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default OralRehab;
