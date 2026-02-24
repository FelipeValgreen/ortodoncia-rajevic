import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroInvisalign from '../assets/hero_invisalign.webp';
import alignmentSchematic from '../assets/alignment-schematic.webp';
import { BsCheckCircle, BsStarFill, BsShieldCheck, BsLightningCharge, BsDisplay } from 'react-icons/bs';
import FAQSection from '../components/FAQSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navInvisalign from '../assets/nav_invisalign.webp';
import navAdult from '../assets/nav_adult.webp';
import BlogGrid from '../components/BlogGrid';
import { getPostsByCategory } from '../data/blogData';

import SEO from '../components/SEO';

const InvisalignPage = () => {
    // useEffect removed

    const invisalignTestimonials = [
        {
            name: "Pedro G.",
            role: "Paciente",
            text: "Me hice el tratamiento Invisalign con el doctor Rajevic y fue la mejor inversión. Rápido, sin dolor y el resultado superó mis expectativas. Aparte la clínica es impecable.",
            image: null,
            date: "Hace 1 mes en Google"
        },
        {
            name: "Javier V.",
            role: "Paciente",
            text: "Trabajo en reuniones todo el día y la verdad no quería usar brackets de metal. La ortodoncia invisible fue la solución perfecta porque nadie lo notó. Excelente nivel de doctores.",
            image: null,
            date: "Hace 2 meses en Google"
        },
        {
            name: "Maria Paz Tagle",
            role: "Paciente",
            text: "Excelente atención. Muy profesional y dedicado. 100% recomendado.",
            image: null,
            date: "Hace 3 semanas en Google"
        }
    ];

    return (
        <>
            <SEO
                title="Invisalign Vitacura | Ortodoncia Invisible Certificada | Clínica Rajevic"
                description="Especialista Invisalign en Vitacura. Alineadores transparentes planificados 3D para máxima estética y rapidez sin metales. Agende su simulación de sonrisa."
                breadcrumbs={[{ name: 'Servicios', path: '/servicios' }, { name: 'Invisalign', path: '/invisalign-vitacura' }]}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalSpecialty",
                        "name": "Ortodoncia Invisible Invisalign",
                        "description": "Tratamiento de ortodoncia mediante alineadores transparentes planificados digitalmente en 3D.",
                        "relevantSpecialty": {
                            "@type": "MedicalSpecialty",
                            "name": "Orthodontic"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Cuánto cuesta Invisalign en Chile?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "El costo de Invisalign varía según la complejidad del caso y la duración del tratamiento. En promedio, puede ir desde $2.500.000 a $4.500.000 CLP. Durante la evaluación inicial le entregaremos un presupuesto detallado. Aceptamos pago con Isapre, tarjetas de crédito y ofrecemos facilidades de pago."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Invisalign funciona para casos complejos?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí. Con los avances tecnológicos actuales, Invisalign puede tratar la mayoría de los casos complejos incluyendo apiñamiento severo, mordidas abiertas, sobremordida y maloclusiones. Sin embargo, cada caso requiere evaluación individual para determinar si es el tratamiento más adecuado."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuánto dura el tratamiento con Invisalign?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "La duración promedio es de 12 a 18 meses, aunque casos simples pueden resolverse en 6-9 meses y casos complejos pueden extenderse hasta 24 meses. El tiempo exacto depende de la complejidad de su caso y la disciplina en el uso de los alineadores (22 horas diarias)."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Es verdad que Invisalign es más rápido que los brackets?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No necesariamente. La velocidad del tratamiento depende más de la biomecánica y planificación que del sistema utilizado. En algunos casos Invisalign puede ser igual o más rápido, pero en otros los brackets tradicionales pueden ser más eficientes. Lo importante es elegir el tratamiento correcto para su caso específico."
                                }
                            }
                        ]
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
                    <img src={heroInvisalign} alt="Tratamiento con Alineadores Transparentes Invisalign Vitacura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                            Alineadores Transparentes
                        </span>
                        <h1 style={{
                            fontSize: '3.5rem',
                            maxWidth: '800px',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem',
                            color: 'white',
                            textShadow: '0 2px 20px rgba(0,0,0,0.5)'  // Clean shadow for readability
                        }}>
                            Invisalign es solo el plástico.<br />
                            Nosotros somos el arquitecto.
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '650px', lineHeight: '1.6', marginBottom: '2.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            El éxito no depende de la marca del alineador, sino de la biomecánica diseñada por el ortodoncista detrás del software.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                            Evaluar factibilidad Invisalign
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
                            <h2 style={{ marginBottom: '2rem' }}>"Me hice Invisalign y no quedó bien"</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                Lamentablemente, muchos tratamientos fallan porque se confía ciegamente en la propuesta automática del software.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                                En Ortodoncia Rajevic, <strong>nosotros movemos cada diente digitalmente</strong>, no el algoritmo. Controlamos la fuerza, el torque y la secuencia para asegurar que lo que se ve en la pantalla ocurra realmente en su boca.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={alignmentSchematic} alt="Biomecánica de Alineación" style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Invisalign */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Ventajas Clínicas (Bien Utilizado)</h2>
                    </div>
                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{ padding: '2.5rem', textAlign: 'center' }}
                        >
                            <BsShieldCheck style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Higiene Superior</h3>
                            <p className="text-light">Al ser removible, permite uso de hilo dental y cepillado normal, reduciendo riesgo de caries y gingivitis durante el tratamiento.</p>
                        </motion.div>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ padding: '2.5rem', textAlign: 'center' }}
                        >
                            <BsLightningCharge style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Fuerzas Controladas</h3>
                            <p className="text-light">Ideal para pacientes con poco soporte óseo, ya que el alineador empuja el diente de forma mucho más suave que un bracket.</p>
                        </motion.div>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{ padding: '2.5rem', textAlign: 'center' }}
                        >
                            <BsDisplay style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Visualización Previa</h3>
                            <p className="text-light">Le mostramos su resultado final en 3D antes de comenzar, validando juntos el objetivo estético.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Pacientes Felices</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Sonrisas sin Interrupciones</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={invisalignTestimonials} />
                </div>
            </section>

            {/* Related Blog Posts */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="uppercase-tracking text-secondary">Aprende Más</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Artículos Relacionados</h2>
                    </div>
                    <BlogGrid posts={getPostsByCategory('Invisalign')} />
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link to="/blog" className="btn-link">Ver todos los artículos &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>¿Es usted candidato?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            No todos los casos se resuelven solo con alineadores. Necesita un diagnóstico honesto para saber si esta es su mejor opción.
                        </p>
                        <Link to="/contacto" className="btn" style={{ padding: '1.2rem 3rem', backgroundColor: 'white', color: 'var(--color-primary)', border: 'none' }}>
                            Evaluación Invisalign
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* SILO LINK TO PILLAR PAGE */}
            <section className="section" style={{ backgroundColor: '#f0f5f9' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>¿Quieres saber todo sobre Invisalign?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Descubre precios, tiempos exactos de tratamiento y una comparativa clínica profunda en nuestra guía definitiva elaborada especialmente para despejar todas tus dudas.
                        </p>
                        <Link to="/guia-invisalign-chile" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Leer la Guía Completa de Invisalign
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FAQs Section */}
            <FAQSection
                title="Preguntas Frecuentes sobre Invisalign"
                faqs={[
                    {
                        question: "¿Cuánto cuesta Invisalign en Chile?",
                        answer: "El costo de Invisalign varía según la complejidad del caso y la duración del tratamiento. En promedio, puede ir desde $2.500.000 a $4.500.000 CLP. Durante la evaluación inicial le entregaremos un presupuesto detallado. Aceptamos pago con Isapre, tarjetas de crédito y ofrecemos facilidades de pago."
                    },
                    {
                        question: "¿Invisalign funciona para casos complejos?",
                        answer: "Sí. Con los avances tecnológicos actuales, Invisalign puede tratar la mayoría de los casos complejos incluyendo apiñamiento severo, mordidas abiertas, sobremordida y maloclusiones. Sin embargo, cada caso requiere evaluación individual para determinar si es el tratamiento más adecuado."
                    },
                    {
                        question: "¿Cuánto dura el tratamiento con Invisalign?",
                        answer: "La duración promedio es de 12 a 18 meses, aunque casos simples pueden resolverse en 6-9 meses y casos complejos pueden extenderse hasta 24 meses. El tiempo exacto depende de la complejidad de su caso y la disciplina en el uso de los alineadores (22 horas diarias)."
                    },
                    {
                        question: "¿Es verdad que Invisalign es más rápido que los brackets?",
                        answer: "No necesariamente. La velocidad del tratamiento depende más de la biomecánica y planificación que del sistema utilizado. En algunos casos Invisalign puede ser igual o más rápido, pero en otros los brackets tradicionales pueden ser más eficientes. Lo importante es elegir el tratamiento correcto para su caso específico."
                    }
                ]}
            />
        </>
    );
};

export default InvisalignPage;
