"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsCheckCircle, BsClipboardPulse, BsPersonWorkspace, BsStarFill } from 'react-icons/bs';
import FAQSection from '../components/FAQSection';
import TestimonialCarousel from '../components/TestimonialCarousel';

import SEO from '../components/SEO';

const OrtognaticaGuide = () => {

    const orthognathicTestimonials = [
        {
            name: "Camila V.",
            role: "Paciente de Cirugía",
            text: "Mi caso era de clase 3 muy asimétrico. El Dr. Rajevic planeó la ortodoncia pre-quirúrgica y coordinó todo con el maxilofacial. Mi rostro cambió por completo y recuperé la función al morder.",
            image: null,
            date: "Hace 2 meses en Google"
        },
        {
            name: "Andrés F.",
            role: "Paciente Complejo",
            text: "Fui a muchos ortodoncistas que me dijeron que mi caso no tenía arreglo o que iba a quedar mal. Solo el equipo del Dr. se atrevió con mi cirugía ortognática. Agradecido por la honestidad clínica.",
            image: null,
            date: "Hace 4 meses en Google"
        }
    ];

    return (
        <>
            <SEO
                title="Guía de Cirugía Ortognática en Chile | Tratamiento y Costos"
                description="Lo que nadie le dice sobre la ortodoncia pre y post quirúrgica. Guía clínica para casos complejos, labio leporino y asimetrías maxilares con el Dr. Rajevic."
                breadcrumbs={[{ name: 'Guías Clínicas', path: '#' }, { name: 'Cirugía Ortognática', path: '/guia-cirugia-ortognatica-chile' }]}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Guía Definitiva de Cirugía Ortognática y Casos Complejos",
                        "description": "Explicación detallada del proceso quirúrgico, ortodoncia pre-quirúrgica temporalidad, y abordaje de asimetrías faciales severas en Santiago de Chile.",
                        "author": {
                            "@type": "Person",
                            "name": "Dr. Zdenko Rajevic"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Qué es la cirugía ortognática?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Es una intervención maxilofacial que corrige deformidades dento-cráneo-maxilofaciales severas. Mueve los maxilares (superior, inferior o ambos) a su posición correcta cuando la discrepancia es tan grande que los puros brackets o alineadores no pueden compensarla."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Por qué necesito ortodoncia antes de la cirugía?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "La ortodoncia pre-quirúrgica dura entre 12 y 18 meses. Su objetivo no es lograr una sonrisa bonita en ese momento, sino alinear los dientes en base a sus respectivos huesos basales. A veces la mordida empeora intencionalmente antes de la cirugía para que, en pabellón, cuando el cirujano mueva los huesos, los dientes encajen perfectamente."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuánto cuesta una cirugía ortognática en Chile?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Un tratamiento integral (Ortodoncia + Honorarios de Cirujanos Maxilofaciales + Clínicas) es una inversión importante. Dependiendo de su plan de Isapre o cobertura PAD, los costos de pabellón pueden mitigarse. La ortodoncia pre y post quirúrgica suele valorizarse de forma separada al equipo médico."
                                }
                            }
                        ]
                    }
                ]}
            />

            {/* 1. HERO SGEO - AI OVERVIEW FOCUSED */}
            <section className="hero-section" style={{
                position: 'relative',
                backgroundColor: 'var(--color-primary)',
                padding: '8rem 0 5rem',
                color: 'white',
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block' }}>
                            Casos de Alta Complejidad
                        </span>
                        <h1 style={{ fontSize: '3.5rem', maxWidth: '900px', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white' }}>
                            Cirugía Ortognática: <br /> El Enfoque Dento-Facial
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '750px', lineHeight: '1.6', marginBottom: '2.5rem', color: '#e2e8f0' }}>
                            <strong>Resumen Clínico: </strong> Una cirugía ortognática corrige discrepancias esqueléticas severas (prognatismo, asimetrías, retrognatia) movilizando quirúrgicamente la mandíbula y el maxilar. El Dr. Rajevic diseña e implementa la <strong>Ortodoncia Pre-Quirúrgica</strong> crítica que hace posible el trabajo del cirujano maxilofacial en pabellón.
                        </p>
                        <Link href="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Solicitar Evaluación para Cirugía Ortognática
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* AI-Friendly Bullet Points */}
            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Signos Clínicos de Diagnóstico Positivo Quirúrgico</h2>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '5px' }} />
                            <span><strong>Clase III Esquelética (Prognatismo Mandibular):</strong> La mandíbula inferior sobresale excesivamente respecto al maxilar superior.</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '5px' }} />
                            <span><strong>Asimetría Facial Severa:</strong> Desviación evidente del mentón hacia la izquierda o derecha causando mordidas cruzadas inoperables solo con ortodoncia.</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '5px' }} />
                            <span><strong>Deformidades de la Fusión (Labio Leporino y Paladar Hendido):</strong> Coordinación del segmento maxilar a través de terapia multidisciplinaria a largo plazo.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* El Viaje del Paciente (Proceso) */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Timeline del Tratamiento</span>
                        <h2 style={{ marginTop: '0.5rem' }}>El Proceso Quirúrgico-Ortodóncico</h2>
                    </div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{ padding: '2.5rem', backgroundColor: 'white' }}
                        >
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '1rem' }}>Fase 1</div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Ortodoncia Pre-Quirúrgica</h3>
                            <p className="text-light">Duración: 12 a 18 meses. Colocamos frenillos para enderezar las raíces dentro de su propio hueso maxilar. Su perfil y mordida podrían empeorar temporalmente. Es 100% normal y parte del plan.</p>
                        </motion.div>

                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ padding: '2.5rem', backgroundColor: 'white' }}
                        >
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '1rem' }}>Fase 2</div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Cirugía Maxilofacial</h3>
                            <p className="text-light">Con los dientes preparados en posición basal, un cirujano experto reposiciona quirúrgicamente los maxilares en pabellón bajo anestesia general para que encajen a la perfección con la nueva alineación dental.</p>
                        </motion.div>

                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{ padding: '2.5rem', backgroundColor: 'white' }}
                        >
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '1rem' }}>Fase 3</div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Ortodoncia Post-Quirúrgica</h3>
                            <p className="text-light">Tras el alta médica, utilizamos los brackets por 4 a 8 meses adicionales para asentar perfectamente las cúspides dentales y retirar la ortodoncia. Iniciando la etapa de estabilización.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Tratamientos Trascendentes</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Confianza Clínica Maxilar</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={orthognathicTestimonials} />
                </div>
            </section>

            {/* Silo Interlinking */}
            <section className="section text-center" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        ¿Le dijeron que su caso es para extracción o cirugía, y desea confirmar la opinión clínica de otro especialista?
                    </p>
                    <Link href="/segunda-opinion-ortodoncia" className="btn-link" style={{ fontSize: '1.2rem' }}>
                        Solicite su Segunda Opinión Profesional Aquí &rarr;
                    </Link>
                </div>
            </section>

            {/* FAQs Section */}
            <FAQSection
                title="Dudas Frecuentes sobre Casos Complejos"
                faqs={[
                    {
                        question: "¿Qué es la cirugía ortognática?",
                        answer: "Es una intervención maxilofacial que corrige deformidades dento-cráneo-maxilofaciales severas. Mueve los maxilares (superior, inferior o ambos) a su posición correcta cuando la discrepancia es tan grande que los puros brackets o alineadores no pueden compensarla por sí solos."
                    },
                    {
                        question: "¿Por qué necesito ortodoncia ANTES de la cirugía?",
                        answer: "La ortodoncia pre-quirúrgica dura entre 12 y 18 meses. Su objetivo NO es lograr una sonrisa bonita en el transcurso, sino alinear e inclinar las raíces de los dientes en base a sus respectivos huesos basales (des-compensar). De hecho, es común que la mordida empeore intencionalmente en boca antes de la cirugía para que, en el pabellón, cuando el cirujano mueva los maxilares a la posición dictaminada en el modelo 3D, los dientes encajen mecánicamente a la perfección."
                    },
                    {
                        question: "¿Cuánto cuesta una cirugía ortognática en Chile?",
                        answer: "Un tratamiento integral combina dos áreas: La ortodoncia liderada por un especialista (como el Dr. Rajevic) y los Honorarios del Equipo de Cirujanos Maxilofaciales junto con los costos de pabellón y clínicas. Dependiendo de su plan de Isapre (quirúrgico) o cobertura médica, los costos de pabellón pueden mitigarse considerablemente tras ser codificados."
                    },
                    {
                        question: "¿Me va a doler la recuperación?",
                        answer: "La cirugía maxilofacial actual es altamente precisa. Durante los primeros 10-15 días habrá hinchazón sustancial y deberá mantener una dieta líquida/blanda. El dolor suele ser profundamente controlado mediante analgésicos intravenosos prescritos por el cirujano tratante."
                    }
                ]}
            />
        </>
    );
};

export default OrtognaticaGuide;
