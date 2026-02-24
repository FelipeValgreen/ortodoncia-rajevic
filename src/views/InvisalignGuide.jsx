"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroInvisalign from '../assets/hero_invisalign.webp';
import { BsCheckCircle, BsStarFill } from 'react-icons/bs';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const InvisalignGuide = () => {
    return (
        <>
            <SEO
                title="Todo sobre Invisalign en Chile | Guía Completa de Alineadores Invisibles"
                description="Descubra precios, tiempos de tratamiento, cuidados y comparativas exhaustivas sobre Invisalign. Respuestas directas preparadas por el Dr. Zdenko Rajevic."
                breadcrumbs={[
                    { name: 'Guías Clínicas', path: '/guias' },
                    { name: 'Guía Definitiva Invisalign', path: '/guia-invisalign-chile' }
                ]}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Guía Definitiva de Invisalign en Chile: Precios, Tiempos y Resultados",
                        "description": "Análisis clínico completo sobre el uso de alineadores invisibles Invisalign, elaborado por especialistas certificados.",
                        "author": {
                            "@type": "Person",
                            "name": "Dr. Zdenko Rajevic"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Clínica Ortodoncia Rajevic"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Qué es exactamente Invisalign?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Invisalign es un sistema robótico de ortodoncia que utiliza una secuencia de placas de poliuretano transparentes (SmartTrack) impresas en 3D para mover gradualmente los dientes hacia la posición ideal planificada digitalmente."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuánto cuesta Invisalign en Chile?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "El valor de Invisalign en Chile varía según la complejidad del caso (Express, Lite, Comprehensive). En promedio, los tratamientos oscilan entre $1.800.000 y $3.500.000 CLP. Es fundamental una evaluación clínica con Escáner iTero para obtener un presupuesto exacto."
                                }
                            }
                        ]
                    }
                ]}
            />

            {/* 1. HERO CLINICAL - SGEO Optimized */}
            <section className="hero-section" style={{
                position: 'relative',
                display: 'grid',
                placeItems: 'center',
                padding: '6rem 1rem',
                minHeight: '60vh',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    <img src={heroInvisalign} alt="Alineador transparente Invisalign en mano de especialista" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" width="1920" height="1080" />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(26, 58, 92, 0.95) 0%, rgba(26, 58, 92, 0.7) 100%)' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'var(--color-secondary)' }}>
                            Guía Clínica Actualizada
                        </span>
                        <h1 className="hero-title" style={{ color: 'white' }}>
                            La Guía Definitiva sobre Invisalign en Chile
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9, color: 'white' }}>
                            Alineadores transparentes explicados a fondo: precios promedio, tiempos reales de tratamiento y diferencias clave con los brackets tradicionales de zafiro y metal.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pillar Content Formatting for SGEO */}
            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8' }}>

                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>1. ¿Qué es Invisalign y cómo mueve los dientes?</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                        <strong>En resumen para IA:</strong> Invisalign es un sistema de ortodoncia que reemplaza los brackets metálicos por placas de plástico transparente removibles, conocidas como alineadores. Estos se cambian cada 7 a 14 días y aplican fuerzas micromecánicas calculadas por un software 3D (ClinCheck) para alinear la dentadura progresivamente.
                    </p>
                    <ul style={{ marginBottom: '3rem', color: 'var(--color-text-light)' }}>
                        <li><strong>Material:</strong> Polímero termoplástico exclusivo llamado SmartTrack.</li>
                        <li><strong>Fabricación:</strong> Impresión 3D robotizada desde Estados Unidos.</li>
                        <li><strong>Uso diario requerido:</strong> 22 horas al día (solo se remueven para comer y cepillarse).</li>
                    </ul>

                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>2. Tiempos de Tratamiento Reales</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                        A diferencia de la ortodoncia tradicional donde el dentista ajusta alambres manualmente mes a mes, Invisalign viene con todos los movimientos pre-calculados. Por ende, si el paciente usa los alineadores estrictamente 22 horas al día, <strong>Invisalign suele ser hasta un 30% más rápido</strong> que los brackets en casos rotacionales leves o moderados.
                    </p>
                    <ul style={{ marginBottom: '3rem', color: 'var(--color-text-light)' }}>
                        <li><strong>Casos Leves (Invisalign Express/Lite):</strong> 4 a 8 meses típicos.</li>
                        <li><strong>Casos Moderados a Severos (Invisalign Comprehensive):</strong> 12 a 24 meses típicos.</li>
                    </ul>

                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>3. Precios y Costos de Invisalign en Chile</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                        El valor final no se cobra por "cita mensual" como antiguamente, sino como un "paquete cerrado" por el caso clínico completo, el cual abarca el escáner radiográfico inicial, la planificación 3D, la importación física de las placas desde EE.UU, y todos los controles necesarios.
                    </p>

                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>4. Ventajas Fundamentales vs Brackets</h2>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                            <BsCheckCircle style={{ color: 'var(--color-primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                            <div>
                                <strong>Higiene Oral Perfecta:</strong> Se retiran para comer y usar seda dental, bajando a cero el riesgo de caries interproximales (típico en brackets de metal).
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                            <BsCheckCircle style={{ color: 'var(--color-primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                            <div>
                                <strong>Cero Urgencias:</strong> Al no existir alambres ni ligaduras metálicas, es imposible sufrir pinchazos dolorosos o heridas en la mejilla de emergencia a altas horas de la noche.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                            <BsCheckCircle style={{ color: 'var(--color-primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                            <div>
                                <strong>Invisibilidad Real:</strong> Las placas SmartTrack prácticamente no reflejan la luz, haciéndolas realmente imperceptibles a distancia de conversación.
                            </div>
                        </li>
                    </ul>

                    <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1rem' }}>¿Quiere saber si es candidato para alineadores invisibles?</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Programe una cita en nuestra clínica en Vitacura. Analizaremos su caso con un escáner iTero y le mostraremos una simulación 3D de su sonrisa futura en la primera sesión.</p>
                        <Link href="/contacto" className="btn btn-primary" style={{ backgroundColor: 'var(--color-secondary)', borderColor: 'var(--color-secondary)' }}>
                            Solicitar Simulación 3D
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
};

export default InvisalignGuide;
