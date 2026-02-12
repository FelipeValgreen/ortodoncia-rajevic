import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroRehab from '../assets/hero_rehab.png';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navAdult from '../assets/nav_adult.png';
import { BsStarFill } from 'react-icons/bs';

import SEO from '../components/SEO';

const OralRehab = () => {
    // useEffect removed

    const rehabTestimonials = [
        {
            name: "Ricardo A.",
            role: "Empresario",
            text: "Mi caso era complejo, me faltaban piezas y mi mordida estaba colapsada. La coordinación entre el Dr. Rajevic y el implantólogo fue impecable. Hoy sonrío con confianza.",
            image: navAdult, // Placeholder
            date: "Hace 8 meses en Google"
        },
        {
            name: "Carmen Gloria F.",
            role: "Jubilada",
            text: "Pensé que a mi edad ya no había solución. Me explicaron que primero debíamos ordenar para luego rehabilitar. El resultado es tan natural que nadie cree que son implantes.",
            image: navAdult, // Placeholder
            date: "Hace 1 año en Google"
        },
        {
            name: "Manuel S.",
            role: "Abogado",
            text: "Volví a comer con confianza. La ortodoncia pre-protésica fue la clave para que mis coronas duraran. Gracias por la dedicación y el profesionalismo.",
            image: navAdult, // Placeholder
            date: "Hace 3 meses en Google"
        }
    ];

    return (
        <>
            <SEO
                title="Rehabilitación Oral Compleja e Implantes en Vitacura | Dr. Rajevic"
                description="Trabajo interdisciplinario para casos complejos. Ortodoncia pre-protésica, implantes y recuperación funcional de la boca con enfoque integral."
                breadcrumbs={[{ name: 'Servicios', path: '/servicios' }, { name: 'Rehabilitación Oral', path: '/rehabilitacion-oral-vitacura' }]}
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
                    <img src={heroRehab} alt="Rehabilitación Oral Compleja" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(16, 24, 40, 0.9), rgba(16, 24, 40, 0.4))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Rehabilitación Multidisciplinaria</span>
                        <h1 style={{ fontSize: '3.5rem', maxWidth: '800px', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            Recupere la función completa<br />
                            de su boca.
                        </h1>
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

            {/* TESTIMONIALS SECTION */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Casos de Éxito</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Recuperando la Función</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={rehabTestimonials} />
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
