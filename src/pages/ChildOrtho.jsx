import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import heroChild from '../assets/hero_child.png';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import FAQSection from '../components/FAQSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navChild from '../assets/nav_child.png';
import { BsStarFill, BsCheckCircle } from 'react-icons/bs';
import SEO from '../components/SEO';

const ChildOrtho = () => {
    // useEffect removed

    const childTestimonials = [
        {
            name: "Andrea P.",
            role: "Mamá de paciente (7 años)",
            text: "La diferencia en la cara de mi hijo es impresionante. El Dr. Rajevic no solo arregló sus dientes chuecos, sino que ahora respira mejor y duerme toda la noche. El enfoque integral es real.",
            image: navChild,
            date: "Hace 3 meses en Google"
        },
        {
            name: "Marcela S.",
            role: "Mamá de paciente (11 años)",
            text: "Nos ahorramos una cirugía de mandíbula futura gracias a la ortopedia. Agradezco la honestidad del diagnóstico desde el día uno. Vale la pena cada peso invertido en salud.",
            image: navChild,
            date: "Hace 5 meses en Google"
        },
        {
            name: "Roberto G.",
            role: "Papá de paciente (9 años)",
            text: "El trato con los niños es excepcional. Mi hija tenía pánico al dentista y aquí viene feliz a sus controles. La paciencia de todo el equipo es maravillosa.",
            image: navChild,
            date: "Hace 1 mes en Google"
        }
    ];

    return (
        <>
            <SEO
                title="Ortodoncia Infantil Vitacura: Expertos en Crecimiento | Dr. Rajevic"
                description="Ortodoncia infantil en Vitacura. Tratamiento temprano y ortopedia maxilar para guiar el crecimiento correctivo. Evite cirugías futuras."
                breadcrumbs={[{ name: 'Servicios', path: '/servicios' }, { name: 'Ortodoncia Infantil', path: '/ortodoncia-infantil-vitacura' }]}
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
                    <img src={heroChild} alt="Ortopedia maxilar infantil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                            Ortopedia & Crecimiento
                        </span>
                        <h1 style={{ fontSize: '3.5rem', maxWidth: '800px', lineHeight: '1.1', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            Guíe el rostro de su hijo <br /> antes de que sea tarde.
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '650px', lineHeight: '1.6', marginBottom: '2.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            La ventana de oportunidad clínica es entre los 4 y 9 años. Esperar a que muden todos los dientes es el error más costoso que cometen algunos padres.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                            Agendar evaluación preventiva
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* PROBLEM & PIVOT */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <h2 style={{ marginBottom: '2rem' }}>El mito de "Esperar a que crezca"</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                            Si la mandíbula es pequeña o el paladar es estrecho, esperar solo consolida el problema. A los 7 años, el hueso es maleable; a los 12, la estructura ya está casi rígida.
                            <br /><br />
                            <strong style={{ color: 'var(--color-primary)' }}>Corregir hueso temprano es más fácil. Corregir dientes y mordidas sobre hueso deformado es difícil.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* METHOD */}
            <section className="section section-alt">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="uppercase-tracking text-secondary">Metodología Rajevic</span>
                            <h2 style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>No son solo "frenillos"</h2>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                Utilizamos aparatos de <strong>Ortopedia Funcional</strong>. Estos dispositivos no mueven dientes, sino que estimulan el crecimiento del hueso maxilar, "desbloqueando" el potencial genético de crecimiento del niño.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                                    <BsCheckCircle className="text-secondary" style={{ marginTop: '0.3rem' }} />
                                    <div>
                                        <strong>Expansión Palatina:</strong> Mejora no solo la mordida, sino la respiración nasal y el sueño.
                                    </div>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                                    <BsCheckCircle className="text-secondary" style={{ marginTop: '0.3rem' }} />
                                    <div>
                                        <strong>Avance Mandibular:</strong> Corrige el perfil "perfil de pajarito" (mentón retraído) sin cirugía.
                                    </div>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                                    <BsCheckCircle className="text-secondary" style={{ marginTop: '0.3rem' }} />
                                    <div>
                                        Control de crecimiento mandibular excesivo (mentón prominente)
                                    </div>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                                    <BsCheckCircle className="text-secondary" style={{ marginTop: '0.3rem' }} />
                                    <div>
                                        <strong>Guía de Erupción:</strong> Hacemos espacio para que los dientes definitivos salgan derechos solos.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                            <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>Señales de alerta (4 y 9 años)</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                                <li style={{ marginBottom: '0.8rem' }}>• Respira por la boca o ronca (Duerme con la boca abierta)</li>
                                <li style={{ marginBottom: '0.8rem' }}>• Bruxa o rechina los dientes (Dientes chicos o gastados)</li>
                                <li style={{ marginBottom: '0.8rem' }}>• Muerde chueco o cruzado (la mandíbula se va hacia un lado)</li>
                                <li style={{ marginBottom: '0.8rem' }}>• Dientes montados o muy separados</li>
                                <li style={{ marginBottom: '0.8rem' }}>• Pérdida temprana de dientes de leche</li>
                                <li style={{ marginBottom: '0.8rem' }}>• Malos hábitos bucales (succión de dedo, chupetes y otros objetos en la boca)</li>
                                <li style={{ marginBottom: '0.8rem' }}>• Frenillo del labio o de la lengua corto</li>
                            </ul>
                            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                <Link to="/contacto" className="btn btn-outline" style={{ width: '100%' }}>Agendar Chequeo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Historias de Mamás y Papás</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Resultados que cambian vidas</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={childTestimonials} />
                </div>
            </section>

            {/* AUTHORITY */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', backgroundColor: 'var(--color-secondary)', opacity: 0.1, borderRadius: '50%' }}></div>
                            <img src={drRajevicImg} alt="Dr. Rajevic con paciente" style={{ width: '100%', borderRadius: 'var(--border-radius)', position: 'relative', zIndex: 1 }} />
                        </div>
                        <div>
                            <h2>Responsabilidad Clínica</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                "Tratar a un niño es una responsabilidad inmensa. Estamos definiendo su rostro, su respiración y su autoestima para los próximos 80 años. Por eso en mi clínica, la planificación del tratamiento y del crecimiento la hago yo personalmente."
                            </p>
                            <Link to="/dr-zdenko-rajevic" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'underline' }}>
                                Conozca al Dr. Zdenko Rajevic
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section text-center" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>Más temprano, más fácil</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        No deje pasar la ventana de crecimiento. Una consulta a tiempo puede evitar cirugías ortognáticas en el futuro.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Solicitar Evaluación de Crecimiento
                    </Link>
                </div>
            </section>

            {/* FAQs Section */}
            <FAQSection
                title="Preguntas Frecuentes sobre Ortodoncia Infantil"
                faqs={[
                    {
                        question: "¿Cuál es la edad ideal para empezar ortodoncia en niños?",
                        answer: "La primera evaluación debería realizarse alrededor de los 6-7 años, cuando erupcionan los primeros molares permanentes. En algunos casos, la ortopedia maxilar puede iniciarse desde los 4 años para guiar el crecimiento óseo. La intervención temprana puede prevenir problemas más complejos en la adolescencia y reducir significativamente los tiempos de tratamiento futuros."
                    },
                    {
                        question: "¿Qué es la ortopedia maxilar y por qué es importante?",
                        answer: "La ortopedia maxilar trabaja sobre el crecimiento de los huesos, no solo sobre la posición de los dientes. Durante la infancia, los huesos aún están en desarrollo y son moldeables, lo que permite corregir problemas como paladar estrecho, mandíbula pequeña o mordidas cruzadas. Este tipo de tratamiento solo es efectivo durante la etapa de crecimiento."
                    },
                    {
                        question: "¿Cuánto tiempo dura el tratamiento de ortodoncia infantil?",
                        answer: "Depende del tipo de tratamiento. La ortopedia maxilar (Fase 1) suele durar 12-18 meses. Si posteriormente se requiere ortodoncia con brackets (Fase 2), puede durar 18-24 meses adicionales. Sin embargo, al intervenir tempranamente, muchos casos se resuelven solo con la primera fase o con tratamientos más cortos en la adolescencia."
                    },
                    {
                        question: "¿Mi hijo necesita ortodoncia incluso si tiene dientes de leche?",
                        answer: "Sí, en algunos casos es necesario. Problemas como mordida cruzada, hábitos de succión del pulgar, respiración bucal o paladar estrecho deben tratarse durante la dentición mixta (dientes de leche y permanentes). Esperar a que caigan todos los dientes de leche puede hacer que el tratamiento sea más complejo, largo y costoso."
                    }
                ]}
            />
        </>
    );
};

export default ChildOrtho;
