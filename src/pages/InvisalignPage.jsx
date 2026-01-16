import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import drRajevicAnalysis from '../assets/dr-rajevic-analysis.jpg';

const InvisalignPage = () => {
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
                            Ortodoncia Digital
                        </span>
                        <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Invisalign en Vitacura: <br />
                            <span className="text-secondary">El diseño lo hace el doctor, no el plástico.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            Invisalign es la herramienta más avanzada del mundo, pero sigue siendo solo una herramienta. En Ortodoncia Rajevic, el éxito no viene de la marca de los alineadores, sino de la planificación clínica del Dr. Rajevic.
                        </p>
                        <Link to="/contacto" className="btn btn-primary">
                            Agenda tu diagnóstico
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '2rem' }}>Cualquiera puede escanear, pocos saben planificar.</h2>
                    </motion.div>

                    <div className="grid-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Hoy en día, es fácil encontrar ofertas de "Invisalign Rápido". El peligro es creer que el software hace todo el trabajo.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Un plan automatizado puede alinear los dientes en la pantalla, pero si no respeta el hueso y la articulación, el resultado clínico será inestable o dañino.
                            </p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ padding: '2.5rem', border: 'none' }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' }}>La diferencia Rajevic:</h4>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                Nosotros no aprobamos el "Plan Automático" de Invisalign. El Dr. Rajevic modifica cada punto de presión, cada attachment y cada secuencia de movimiento basándose en su radiografía y examen clínico real.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Invisalign */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Ventajas Clínicas (Bien Utilizado)</h2>
                    </div>
                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Higiene Superior</h3>
                            <p className="text-light">Al ser removible, permite uso de hilo dental y cepillado normal, reduciendo riesgo de caries y gingivitis durante el tratamiento.</p>
                        </motion.div>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Fuerzas Controladas</h3>
                            <p className="text-light">Ideal para pacientes con poco soporte óseo, ya que el alineador empuja el diente de forma mucho más suave que un bracket.</p>
                        </motion.div>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Visualización Previa</h3>
                            <p className="text-light">Le mostramos su resultado final en 3D antes de comenzar, validando juntos el objetivo estético.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Authority */}
            <section className="section">
                <div className="container">
                    <div className="grid-2-3" style={{ alignItems: 'center', gap: '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <img src={drRajevicAnalysis} alt="Dr. Rajevic planificando tratamiento Invisalign" style={{ width: '100%', display: 'block' }} />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Expertise Digital: ClinCheck® Pro</h3>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                                El Dr. Rajevic utiliza el software ClinCheck como una herramienta de arquitectura dental, no solo de visualización. Cada movimiento es calculado para asegurar que la raíz del diente se mueva dentro del hueso de forma segura.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>¿Es usted candidato?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            No todos los casos se resuelven solo con alineadores. Necesita un diagnóstico honesto para saber si esta es su mejor opción.
                        </p>
                        <Link to="/contacto" className="btn" style={{ padding: '1.2rem 3rem', backgroundColor: 'white', color: 'var(--color-primary)', border: 'none' }}>
                            Evaluación Invisalign
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default InvisalignPage;
