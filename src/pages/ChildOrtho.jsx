import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import drRajevicImg from '../assets/dr-rajevic.jpg';

const ChildOrtho = () => {
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
                            Ortopedia Maxilar & Ortodoncia
                        </span>
                        <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Ortodoncia Infantil en Vitacura: <br />
                            <span className="text-secondary">Guía de crecimiento temprano.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            Detectar a tiempo evita cirugías. Guiamos el desarrollo óseo de niños entre 6 y 11 años para corregir problemas antes de que sean permanentes.
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
                        <h2 style={{ marginBottom: '2rem' }}>El problema no son solo los "dientes chuecos"</h2>
                    </motion.div>
                    <div className="grid-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                                Muchos padres esperan a que muden todos los dientes. <strong>Ese es el error más común.</strong>
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                                Los problemas de hueso (mandíbulas retraídas o paladares angostos) deben corregirse en el "peak de crecimiento" (6-11 años). Esperar puede significar cirugía futura.
                            </p>
                        </motion.div>
                        <motion.div
                            className="card section-alt"
                            style={{ border: 'none' }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Señales de alerta en niños:</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Respiración bucal (duerme con la boca abierta).</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Chupete o succión de dedo más allá de los 3 años.</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Mandíbula que se desvía al cerrar.</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Dientes apiñados o falta de espacio evidente.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Diagnosis Importance */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'white' }}>¿Por qué el diagnóstico es urgente?</h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '4rem', opacity: '0.9', lineHeight: '1.6' }}>
                            Porque el hueso es maleable solo durante la infancia. Un diagnóstico certero a los 7 años nos permite usar el propio crecimiento del niño a nuestro favor, logrando resultados más estables y tratamientos más cortos en el futuro.
                        </p>
                    </motion.div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            style={{ background: 'rgba(255,255,255,0.08)', padding: '2rem', borderRadius: 'var(--border-radius)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Evita extracciones</h4>
                            <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>Generamos espacio expandiendo el paladar, no sacando dientes sanos.</p>
                        </motion.div>
                        <motion.div
                            style={{ background: 'rgba(255,255,255,0.08)', padding: '2rem', borderRadius: 'var(--border-radius)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Mejora la respiración</h4>
                            <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>Un paladar más ancho mejora el flujo de aire nasal y el sueño.</p>
                        </motion.div>
                        <motion.div
                            style={{ background: 'rgba(255,255,255,0.08)', padding: '2rem', borderRadius: 'var(--border-radius)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Perfil Armónico</h4>
                            <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>Guiamos el mentón y el maxilar para una estética facial balanceada.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Rajevic Method */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="text-center"
                        style={{ marginBottom: '4rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '1rem' }}>Método Clínico Rajevic: Ortopedia Funcional</h2>
                        <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                            No nos limitamos a pegar brackets. Usamos aparatos ortopédicos funcionales que estimulan o frenan el crecimiento óseo según sea necesario.
                        </p>
                    </motion.div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            className="card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>1. Estudio</div>
                            <p className="text-light">Radiografías de mano (carpales) para determinar la edad ósea exacta y el potencial de crecimiento restante.</p>
                        </motion.div>
                        <motion.div
                            className="card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>2. Diseño</div>
                            <p className="text-light">Selección del aparato específico (Disyuntores, Máscaras faciales, Pistas) según el patrón genético del niño.</p>
                        </motion.div>
                        <motion.div
                            className="card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>3. Monitoreo</div>
                            <p className="text-light">Controles periódicos para ajustar la fuerza a medida que el niño crece. Acompañamiento cercano.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dr. Authority & Differentiation */}
            <section className="section section-alt">
                <div className="container">
                    <div className="grid-1-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={drRajevicImg} alt="Dr. Zdenko Rajevic" style={{ borderRadius: '50%', width: '250px', height: '250px', objectFit: 'cover', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Expertise del Dr. Rajevic</h3>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                                "Tratar a un niño es una responsabilidad mayor que tratar a un adulto, porque estamos definiendo su rostro para toda la vida. Por eso no delegamos; cada control es supervisado clínicamente."
                            </p>
                            <Link to="/dr-zdenko-rajevic" className="text-secondary" style={{ fontWeight: '600', textDecoration: 'underline' }}>Conocer trayectoria</Link>
                        </motion.div>
                    </div>
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
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Tiene dudas sobre la mordida de su hijo?</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            Una evaluación temprana (7 años) no significa necesariamente comenzar tratamiento, pero sí entrega tranquilidad y control.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Agenda una evaluación preventiva
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ChildOrtho;
