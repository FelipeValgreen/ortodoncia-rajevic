import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SecondOpinion = () => {
    return (
        <>
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)' }}>
                            Casos Complejos y Retratamientos
                        </span>
                        <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'white' }}>
                            Segunda Opinión en Ortodoncia: <br />
                            <span style={{ opacity: '0.8' }}>Recupere el control de su tratamiento.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '750px', opacity: '0.9', lineHeight: '1.6' }}>
                            Si sus dientes se volvieron a mover o lleva años sin terminar, necesita un diagnóstico de rescate.
                        </p>
                        <Link to="/contacto" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                            Agenda tu revisión de caso
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
                        <h2 style={{ marginBottom: '2rem' }}>¿Por qué fallan los tratamientos?</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px', color: 'var(--color-text-light)' }}>
                            El 90% de los fracasos no son por "falta de cooperación", sino por <strong>error en el diagnóstico inicial</strong>.
                        </p>
                    </motion.div>

                    <div className="grid-2" style={{ gap: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Falta de objetivos claros</h4>
                            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)' }}>Se empezaron a mover dientes sin visualizar dónde debían terminar, resultando en mordidas inestables que "nunca encajan".</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Ignorar la biología</h4>
                            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)' }}>Se intentó forzar dientes en un hueso insuficiente, provocando recesión de encías (dientes largos) o reabsorción de raíces.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Differentiation */}
            <section className="section section-alt">
                <div className="container">
                    <motion.h2
                        className="text-center"
                        style={{ marginBottom: '3rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        ¿Qué hacemos diferente en una Segunda Opinión?
                    </motion.h2>
                    <motion.div
                        style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-border)' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ol style={{ listStyle: 'none', counterReset: 'item', padding: 0 }}>
                            <li style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '2rem' }}>
                                <span style={{ position: 'absolute', left: 0, fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>1.</span>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Pausa y Análisis:</strong>
                                <span className="text-light">No seguimos simplemente "apretando". Nos detenemos a re-evaluar con radiografías nuevas el estado actual de sus raíces y articulación.</span>
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '2rem' }}>
                                <span style={{ position: 'absolute', left: 0, fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>2.</span>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Diagnóstico de Causa:</strong>
                                <span className="text-light">Identificamos por qué se detuvo el avance. ¿Hay contacto prematuro? ¿Anquilosis? ¿Hábito lingual?</span>
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '3rem' }}>
                                <span style={{ position: 'absolute', left: 0, fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>3.</span>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Plan de Salida:</strong>
                                <span className="text-light">Diseñamos una estrategia realista para terminar el caso de forma eficiente y segura, o para estabilizar lo logrado.</span>
                            </li>
                        </ol>
                    </motion.div>
                </div>
            </section>

            {/* Dr Authority */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '1.5rem' }}>Honestidad Profesional</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--color-text-light)' }}>
                            El Dr. Rajevic es conocido por su criterio ético. Si su tratamiento actual va bien y solo requiere paciencia, se lo diremos. Si requiere un cambio de rumbo urgente, le explicaremos por qué con evidencia clínica.
                        </p>
                        <Link to="/dr-zdenko-rajevic" className="text-primary" style={{ fontWeight: '600', textDecoration: 'underline' }}>
                            Ver credenciales del Dr. Rajevic
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
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>No se resigne a un mal resultado</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                            Una mirada experta puede destrabar años de frustración.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Solicita revisión de caso
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default SecondOpinion;
