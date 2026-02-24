"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroAdult from '../assets/hero_adult.webp';
import drRajevicImg from '../assets/dr-rajevic.webp';
import { BsCheckCircle, BsStarFill } from 'react-icons/bs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navAdult from '../assets/nav_adult.webp';
import navInvisalign from '../assets/nav_invisalign.webp';

import SEO from '../components/SEO';

const AdultOrtho = () => {
    // useEffect removed

    const adultTestimonials = [
        {
            name: "María Luz Díaz",
            role: "Paciente",
            text: "Dudé mucho por mi edad, pero el Dr Zdenko me explicó súper claro las opciones estéticas y empezamos el tratamiento. Ya veo los cambios y es mucho más cómodo de lo que pensé. Lo recomiendo a ojos cerrados.",
            image: null,
            date: "Hace 3 semanas en Google"
        },
        {
            name: "Carlos Y.",
            role: "Paciente",
            text: "Seco el doctor. Trabajo atendiendo público y los brackets de zafiro fueron la mejor decisión. Muy puntual, profesional y todo su equipo es un 7.",
            image: null,
            date: "Hace 2 meses en Google"
        },
        {
            name: "Maria Paz Tagle",
            role: "Paciente",
            text: "Excelente atención. Muy profesional y dedicado. El proceso como adulto fue súper llevadero y los resultados increíbles. 100% recomendado.",
            image: null,
            date: "Hace 3 semanas en Google"
        }
    ];

    return (
        <>
            <SEO
                title="Ortodoncia para Adultos en Vitacura | Invisalign y Brackets Estéticos"
                description="Nunca es tarde para la sonrisa perfecta. Ortodoncia invisible (Invisalign), zafiro y lingual para adultos en Vitacura. Tratamientos discretos y eficientes."
                breadcrumbs={[{ name: 'Servicios', path: '/servicios' }, { name: 'Ortodoncia Adultos', path: '/ortodoncia-adultos-vitacura' }]}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalSpecialty",
                        "name": "Ortodoncia para Adultos",
                        "description": "Tratamientos de ortodoncia estética, invisible y lingual diseñados específicamente para pacientes adultos corporativos.",
                        "relevantSpecialty": {
                            "@type": "MedicalSpecialty",
                            "name": "Orthodontic"
                        }
                    }
                ]}
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
                    <img src={heroAdult} alt="Ortodoncia Estética y Brackets para Adultos en Vitacura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                        <Link href="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
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
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '3rem', textAlign: 'center' }}>El desafío de la ortodoncia en adultos</h2>
                    </motion.div>

                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={navAdult} alt="Ortodoncia Adultos Profesional" style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                A diferencia de los niños, los adultos ya no están creciendo y en la mayoría se ha producido un desgaste o daño funcional o estético.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                Tratar a un adulto sin un completo análisis diagnóstico puede ser un error clínico grave.
                            </p>

                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Nuestra diferenciación clínica:</h4>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                <strong>Biomecánica Específica:</strong> Usamos fuerzas más ligeras y continuas para proteger sus raíces y encías.
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                                <strong>Estética Invisible:</strong> Entendemos que su imagen personal es vital.
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

            {/* FINAL CTA */}
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
                        <Link href="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Solicita tu evaluación clínica
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* SILO LINK TO ORTHOGNATHIC */}
            <section className="section" style={{ backgroundColor: '#f0f5f9' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>¿Le recomendaron Cirugía Maxilofacial?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Descubra cómo funciona el tratamiento combinado de ortodoncia pre-quirúrgica y cirugía ortognática para resolver asimetrías severas.
                        </p>
                        <Link href="/guia-cirugia-ortognatica-chile" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Leer la Guía de Cirugía Ortognática
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AdultOrtho;
