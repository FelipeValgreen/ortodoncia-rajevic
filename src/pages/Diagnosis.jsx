import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Diagnosis = () => {
    return (
        <>
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)' }}>Nuestro Enfoque Principal</span>
                        <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', maxWidth: '900px', color: 'white', lineHeight: '1.2' }}>
                            El Diagnóstico es el Tratamiento.
                        </h1>
                        <p style={{ fontSize: '1.2rem', marginTop: '2rem', maxWidth: '750px', opacity: '0.9', lineHeight: '1.6' }}>
                            Un aparato bien colocado en un diagnóstico incorrecto solo lleva más rápido al fracaso.
                            Por eso, nuestra inversión principal está en entender antes de actuar.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ marginBottom: '2rem' }}>Lo que no se ve, no se cura</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Muchos pacientes llegan a nuestra consulta buscando "frenillos" o "alineadores". Sin embargo, estos son solo dispostivos de fuerza. Quien decide dónde aplicar esa fuerza y por qué, es el ortodoncista.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                En Ortodoncia Rajevic, el proceso diagnóstico no es un trámite administrativo de 15 minutos. Es una fase de ingeniería clínica donde analizamos:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '2rem', marginTop: '3rem' }}>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>01</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Salud Articular (ATM)</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Antes de mover dientes, debemos asegurar que la articulación de la mandíbula esté estable y sana. Ignorar esto es la causa #1 de dolores y recidivas.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>02</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Soporte Óseo y Periodontal</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Los dientes se mueven a través del hueso. Evaluamos la densidad y calidad de sus tejidos para asegurar movimientos seguros.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>03</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Función y Estética Facial</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>No solo miramos dientes rectos. Miramos cómo su sonrisa se integra con su rostro y cómo funciona al hablar y comer.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="card section-alt"
                            style={{ padding: '3rem', border: 'none', height: 'fit-content' }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Nuestra Evaluación</h3>
                            <p style={{ marginBottom: '2rem', fontSize: '1rem', color: 'var(--color-text)' }}>
                                Para emitir un diagnóstico responsable, realizamos un estudio completo que incluye:
                            </p>
                            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}><BsCheckCircle className="text-secondary" /> Escáner Intraoral 3D</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}><BsCheckCircle className="text-secondary" /> Fotografías Clínicas</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}><BsCheckCircle className="text-secondary" /> Radiografías Digitales</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}><BsCheckCircle className="text-secondary" /> Montaje en Articulador (si aplica)</li>
                            </ul>

                            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                                    "Un diagnóstico correcto ahorra años de tratamientos fallidos."
                                </p>
                                <Link to="/contacto" className="btn btn-primary" style={{ width: '100%' }}>
                                    Solicitar Evaluación Diagnóstica
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Diagnosis;
