import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import alignmentSchematic from '../assets/alignment-schematic.png';
import childOrthoSchematic from '../assets/child_ortho_growth_schematic.png';

import heroServices from '../assets/hero_diagnosis_real.jpg';

const Services = () => {
    React.useEffect(() => {
        document.title = "Servicios Clínicos | Ortodoncia Rajevic";
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '70vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1
                }}>
                    <img src={heroServices} alt="Servicios Clínicos Ortodoncia Rajevic" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(16, 24, 40, 0.85) 0%, rgba(16, 24, 40, 0.5) 100%)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            Áreas de Especialidad
                        </span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '800px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            Servicios Clínicos
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '650px', lineHeight: '1.6', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            Nuestra práctica se divide por áreas de necesidad clínica, no por productos comerciales.<br />
                            Adaptamos la técnica a la biología de cada paciente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Children & Adolescents */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <motion.div
                            style={{ order: 2 }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ width: '100%', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                                <img src={childOrthoSchematic} alt="Esquema de guía de crecimiento maxilar" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ order: 1 }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="uppercase-tracking text-secondary">Crecimiento y Desarrollo</span>
                            <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Niños y Adolescentes</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                La "Ortopedia Maxilar" es la oportunidad única de guiar el crecimiento de los huesos. Intervenir en el momento correcto (niñez temprana) puede evitar cirugías o extracciones en la adultez.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Corrección temprana y prevención de malas mordidas.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Tratamiento de mordidas cruzadas y abiertas</li>
                                <li style={{ marginBottom: '0.5rem' }}>Guía de erupción</li>
                                <li style={{ marginBottom: '0.5rem' }}>Control de malos hábitos (succión de dedo, chupete y respiración bucal).</li>
                                <li style={{ marginBottom: '0.5rem' }}>Manejo de bruxismo en niños</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Adults */}
            <section className="section section-alt">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ width: '100%', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                                <img src={alignmentSchematic} alt="Esquema de alineación dental y biomecánica" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="uppercase-tracking text-secondary">Corrección y Estabilidad</span>
                            <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Ortodoncia en Adultos</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Nunca es tarde para corregir la función y la estética. En adultos, el desafío es mover dientes en un hueso maduro, muchas veces con desgastes o pérdidas previas. Requiere una planificación biomecánica de precisión.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Alineación estética en corto tiempo y de alta discreción</li>
                                <li style={{ marginBottom: '0.5rem' }}>Preparación para implantes y rehabilitación.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Manejo de enfermedad periodontal.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Tratamiento de bruxismo y disfunción mandibular</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Invisalign / Aesthetics */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="text-center"
                        style={{ maxWidth: '800px', margin: '0 auto 4rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking text-secondary">Técnicas Invisibles</span>
                        <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Invisalign y Ortodoncia Estética</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                            Somos expertos en alineadores transparentes, pero no los vendemos como un producto mágico. Invisalign es una herramienta poderosa que funciona solo bajo el diseño de un experto. Nosotros diseñamos el movimiento; el alineador solo lo ejecuta.
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
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Invisalign</h3>
                            <p className="text-light">Alineadores removibles, cómodos y transparentes. Planificados digitalmente por el Dr. Rajevic.</p>
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
                            <p className="text-light">Translucidez cristalina que se mimetiza con el diente. Alta estética con control fijo.</p>
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
                            <p className="text-light">Aparatología cementada en la cara interna del diente. Totalmente invisible.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section section-alt" style={{ textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '2rem' }}>¿Busca una segunda opinión?</h2>
                        <Link to="/segunda-opinion-ortodoncia" className="btn btn-primary">Ver casos complejos</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Services;
