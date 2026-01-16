import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdultOrtho = () => {
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
                            Estética y Función
                        </span>
                        <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Ortodoncia Adultos en Vitacura: <br />
                            <span className="text-secondary">Precisión en estructuras maduras.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            Nunca es tarde, pero el adulto requiere cuidado periodontal superior. Priorizamos su salud gingival y hueso.
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>El desafío de la ortodoncia en adultos</h2>
                    </motion.div>

                    <div className="grid-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                A diferencia de los niños, los adultos ya no están creciendo. Además, es común encontrar dientes con restauraciones previas, implantes o encías retraídas.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Tratar a un adulto como si fuera un niño grande es un error clínico grave que puede causar pérdida de hueso o reabsorción de raíces.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Nuestra diferenciación clínica:</h4>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                <strong>Biomecánica Específica:</strong> Usamos fuerzas más ligeras y continuas para proteger sus raíces y encías.
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                <strong>Estética Invisible:</strong> Entendemos que su imagen profesional es vital. Ofrecemos Invisalign y ortodoncia lingual para que el tratamiento no interfiera con su vida laboral.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)' }}>
                                <strong>Interdisciplina:</strong> Trabajamos coordinados con su rehabilitador si necesita implantes o carillas posteriores.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Method Rajevic */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Opciones de Tratamiento</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                            Seleccionamos la herramienta según su estilo de vida y complejidad clínica.
                        </p>
                    </div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Alineadores (Invisalign)</h3>
                            <p className="text-light">La opción preferida por nuestros pacientes adultos. Removible, transparente y facilita la higiene.</p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Brackets Zafiro</h3>
                            <p className="text-light">Cristal puro que no se mancha. Una opción fija estética de alta eficacia biomecánica.</p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Ortodoncia Lingual</h3>
                            <p className="text-light">Sistema incógnito adherido detrás de los dientes. 100% invisible desde el exterior.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Authority */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Dirección Clínica Senior</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9', lineHeight: '1.6' }}>
                            El Dr. Rajevic planifica personalmente cada caso de adultos, evaluando cuidadosamente la condición periodontal y articular antes de aplicar cualquier fuerza. La seguridad biológica es nuestra prioridad n°1.
                        </p>
                        <Link to="/dr-zdenko-rajevic" style={{ color: 'var(--color-accent)', textDecoration: 'underline', fontSize: '1.1rem' }}>Conocer al Doctor</Link>
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
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Hablemos de su sonrisa</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem' }}>
                            Analicemos sus expectativas y diseñemos un plan realista, estético y estable.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Solicita tu evaluación clínica
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AdultOrtho;
