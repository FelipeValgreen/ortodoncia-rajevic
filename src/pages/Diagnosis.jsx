import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import heroDiagnosis from '../assets/hero_diagnosis_real.jpg';
import diagnosisFlow from '../assets/diagnosis-flow.png';

const Diagnosis = () => {
    React.useEffect(() => {
        document.title = "Diagnóstico en Ortodoncia Vitacura | Ortodoncia Rajevic";
    }, []);

    return (
        <>
            {/* 1. HERO CLINICAL */}
            <section style={{
                position: 'relative',
                height: '80vh',
                minHeight: '600px',
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
                    <img src={heroDiagnosis} alt="Dr. Rajevic realizando diagnóstico clínico con paciente" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                    {/* Gradient Overlay for general contrast */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(16, 24, 40, 0.8) 0%, rgba(16, 24, 40, 0.4) 100%)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            Fase 1: Ingeniería Clínica
                        </span>

                        {/* SEO Title with Brand Background Box */}
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            maxWidth: '900px',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            color: 'white',
                            textShadow: '0 2px 4px rgba(0,0,0,0.9)'
                        }}>
                            Diagnóstico de Ortodoncia <br /> en Vitacura
                        </h1>

                        {/* 2. SUBHEAD EDUCATIVO */}
                        <p style={{ fontSize: '1.3rem', maxWidth: '650px', lineHeight: '1.6', marginBottom: '2.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)', fontWeight: '400' }}>
                            Un tratamiento exitoso no depende del tipo de brackets o la marca de los alineadores, sino de la precisión del diagnóstico y de los objetivos de tratamiento.
                        </p>
                        {/* 3. CTA */}
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                            Agenda tu evaluación
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 4. THE PROBLEM & 5. THE PIVOT */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ marginBottom: '2rem' }}>"Lo invisible no se cura"</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                El error más común en ortodoncia es iniciar un tratamiento sin haber evaluado la salud articular, las condiciones de las raíces y la salud de sus encías.
                            </p>
                            <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--color-secondary)' }}>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
                                    "Mover dientes sobre una base biológica inestable es la causa número uno de recidivas (dientes que se vuelven a enchuecar) y dolor crónico."
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img src={diagnosisFlow} alt="Diagrama de flujo diagnóstico" style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. THE METHOD (RAJEVIC PROTOCOL) */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Protocolo Rajevic</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Ingeniería Inversa del Tratamiento</h2>
                        <p style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'var(--color-text-light)' }}>
                            No improvisamos. Antes de tocar un solo diente, visualizamos el resultado final y planificamos cada movimiento.
                        </p>
                    </div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <div className="card" style={{ padding: '2.5rem' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>01.</div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Análisis Articular</h3>
                            <p className="text-light">Evaluamos la ATM (Articulación Temporomandibular) para descartar patologías que puedan complicarse con el movimiento dental.</p>
                        </div>
                        <div className="card" style={{ padding: '2.5rem' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>02.</div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Soporte Periodontal</h3>
                            <p className="text-light">Medimos la densidad ósea y la salud de las encías. El hueso debe ser capaz de acompañar el movimiento del diente.</p>
                        </div>
                        <div className="card" style={{ padding: '2.5rem' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>03.</div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Planificación Digital</h3>
                            <p className="text-light">Usamos un software de última generación y simuladores de mordida para planificar buenos resultados y predecir tiempos exactos de tratamiento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. DIFFERENTIATION & 9. AUTHORITY */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <h2 style={{ color: 'white', marginBottom: '2rem' }}>¿Por qué agendar un diagnóstico con nosotros?</h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.5rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }} />
                                    <span style={{ fontSize: '1.1rem' }}>Opinión honesta: Si no necesita tratamiento, se lo diremos.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }} />
                                    <span style={{ fontSize: '1.1rem' }}>Enfoque en estabilidad a largo plazo, no en "rapidez".</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }} />
                                    <span style={{ fontSize: '1.1rem' }}>Diagnóstico realizado directamente por el especialista, no por asistentes.</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem' }}>
                                "La diferencia entre un tratamiento que dura toda la vida y uno que fracasa a los 5 años es, invariablemente, la calidad del diagnóstico inicial."
                            </p>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.2rem' }}>Dr. Zdenko Rajevic</strong>
                                <span style={{ opacity: 0.7 }}>Especialista en Ortodoncia y Ortopedia Dento Maxilar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>Comience con certeza.</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Agenda una evaluación completa de 30 minutos para entender el estado real de su salud oral.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Solicitar hora de diagnóstico
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Diagnosis;
