import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBruxism from '../assets/hero_bruxism.png';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navAdult from '../assets/nav_adult.png';
import { BsStarFill } from 'react-icons/bs';

const Bruxism = () => {
    React.useEffect(() => {
        document.title = "Bruxismo y ATM Vitacura | Ortodoncia Rajevic";
    }, []);

    const bruxismTestimonials = [
        {
            name: "Loreto M.",
            role: "Diseñadora Gráfica",
            text: "Amanecía con dolor de cabeza todos los días a las 11am. Pensé que era vista cansada, pero el Dr. Rajevic diagnosticó mi bruxismo. El plano de relajación me cambió la vida, el dolor desapareció.",
            image: navAdult,
            date: "Hace 2 meses en Google"
        },
        {
            name: "Patricio V.",
            role: "Ingeniero Civil",
            text: "Mis dientes se estaban poniendo chicos y planos. No sabía que los estaba limando al dormir. Ahora están protegidos y descanso mucho mejor. Gran profesionalismo.",
            image: navAdult,
            date: "Hace 6 meses en Google"
        },
        {
            name: "Isabel R.",
            role: "Profesora",
            text: "Llevaba años con 'cliks' en la mandíbula al comer. El ajuste oclusal y el plano estabilizaron mi mordida. Gracias por la paciencia y explicación.",
            image: navAdult,
            date: "Hace 1 mes en Google"
        }
    ];

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
                    <img src={heroBruxism} alt="Bruxismo y Relajación Mandibular" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(16, 24, 40, 0.9), rgba(16, 24, 40, 0.4))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Salud Articular & Dolor Orofacial</span>
                        <h1 style={{ fontSize: '3.5rem', maxWidth: '800px', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            Despierte sin dolor.<br />
                            Proteja sus dientes hoy.
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '650px', opacity: '0.9', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                            El bruxismo no solo desgasta los dientes: colapsa el sistema muscular. Un plano de relajación médico es la única forma de detener el daño.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Agendar evaluación ATM
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* PROBLEM & PIVOT */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ marginBottom: '2rem' }}>El enemigo silencioso</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                El estrés moderno se canaliza a través de la mandíbula. Durante el sueño, podemos ejercer hasta 200kg de fuerza sobre nuestros molares.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                Esto no solo rompe dientes. Genera:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'red', fontWeight: 'bold' }}>✖</span> Cefaleas tensionales matutinas</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'red', fontWeight: 'bold' }}>✖</span> Desgaste de bordes dentales</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'red', fontWeight: 'bold' }}>✖</span> Ruido articular (click)</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="card section-alt"
                            style={{ padding: '3rem', border: 'none' }}
                        >
                            <span className="uppercase-tracking text-secondary">Solución Médica</span>
                            <h3 style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>El Plano de Relajación "Míchigan"</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                No confunda un plano médico con un protector bucal comercial. El plano Míchigan es de acrílico rígido, diseñado a medida para desprogramar la musculatura y guiar la mandíbula a una posición de descanso real ("Relación Céntrica").
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ height: '4px', width: '40px', backgroundColor: 'var(--color-secondary)' }}></div>
                                <span style={{ fontStyle: 'italic', color: 'var(--color-text-light)' }}>Estándar de Oro en Odontología</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Alivio Real</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Dormir sin Dolor</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={bruxismTestimonials} />
                </div>
            </section>

            {/* AUTHORITY */}
            <section className="section section-alt">
                <div className="container">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                        <div style={{ flex: '0 0 120px' }}>
                            <img src={drRajevicImg} alt="Dr. Rajevic" style={{ borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Especialista en Oclusión</h4>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                "No saco dientes del bruxismo, trato el sistema masticatorio. Un plano mal ajustado puede ser peor que no tener nada. El ajuste oclusal es un arte de precisión."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>Deje de desgastar su vida.</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        El tratamiento es no invasivo y le protegerá por años.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Evaluación de Bruxismo
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Bruxism;
