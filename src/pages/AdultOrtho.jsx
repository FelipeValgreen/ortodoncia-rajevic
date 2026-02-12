import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroAdult from '../assets/hero_adult.png';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import { BsCheckCircle, BsStarFill } from 'react-icons/bs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navAdult from '../assets/nav_adult.png';
import navInvisalign from '../assets/nav_invisalign.png';

import SEO from '../components/SEO';

const AdultOrtho = () => {
    // useEffect removed

    const adultTestimonials = [
        {
            name: "Javier V.",
            role: "Ingeniero Comercial",
            text: "Trabajo en reuniones todo el día y no podía usar brackets metálicos. La ortodoncia invisible fue la solución perfecta. Nadie lo notó y el resultado fue rapidísimo. 100% recomendado.",
            image: navInvisalign,
            date: "Hace 2 meses en Google"
        },
        {
            name: "Carolina M.",
            role: "Arquitecta (42 años)",
            text: "Tenía miedo de usar ortodoncia a mi edad. Con el Dr. Rajevic fue todo muy claro y profesional. El cambio en mi sonrisa y en mi seguridad personal ha sido impagable.",
            image: navAdult,
            date: "Hace 6 meses en Google"
        },
        {
            name: "Gonzalo R.",
            role: "Abogado",
            text: "El Dr. Rajevic solucionó un problema de mordida y dolor articular que arrastraba por años y que otros no vieron. La precisión del diagnóstico hizo toda la diferencia.",
            image: navAdult,
            date: "Hace 1 mes en Google"
        }
    ];

    return (
        <>
            <SEO
                title="Ortodoncia Adultos Vitacura: Invisalign y Estética Dental | Dr. Rajevic"
                description="Nunca es tarde para corregir su sonrisa. Ortodoncia estética, lingual e Invisalign en Vitacura. Tratamientos de alta discreción y eficiencia."
                breadcrumbs={[{ name: 'Servicios', path: '/servicios' }, { name: 'Ortodoncia Adultos', path: '/ortodoncia-adultos-vitacura' }]}
            />
            {/* 1. HERO CLINICAL */}
            <section className="hero-section" style={{
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
                    <img src={heroAdult} alt="Ortodoncia Estética Adultos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(16, 24, 40, 0.9) 0%, rgba(16, 24, 40, 0.7) 50%, rgba(16, 24, 40, 0.4) 100%)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            Ortodoncia Estética & Invisible
                        </span>
                        <h1 style={{ fontSize: '3.5rem', maxWidth: '800px', lineHeight: '1.1', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            Corrección sin interrupción <br /> de su vida personal
                        </h1>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
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
                                A diferencia de los niños, los adultos ya no están creciendo y en la mayoría se ha producido un desgaste o daño funcional o estético.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Tratar a un adulto sin un completo análisis diagnóstico puede ser un error clínico grave que puede causar pérdida de hueso, reabsorción de raíces o daño articular irreparable.
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
                                <strong>Estética Invisible:</strong> Entendemos que su imagen personal es vital. Ofrecemos alineadores invisibles y la más moderna y eficiente ortodoncia con brackets (transparente) para que el tratamiento no interfiera con su vida personal ni laboral.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)' }}>
                                <strong>Interdisciplina:</strong> Trabajamos coordinados con rehabilitadores, periodoncistas y cirujanos maxilofaciales.
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
                            <p className="text-light">La opción preferida por nuestros pacientes adultos. Invisibles, cómodos, removibles y altamente eficientes.</p>
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
                            <p className="text-light">Frenillos por detrás de los dientes. Cada vez menos utilizados, pero sigue siendo una opción.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Experiencias Reales</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Confianza y Discreción</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={adultTestimonials} />
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
