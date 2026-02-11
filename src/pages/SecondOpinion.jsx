import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroSecondOpinion from '../assets/hero_second_opinion.png';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import { BsCheckCircle, BsStarFill } from 'react-icons/bs';
import FAQSection from '../components/FAQSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import navAdult from '../assets/nav_adult.png';
const SecondOpinion = () => {
    React.useEffect(() => {
        document.title = "Segunda Opinión Experta Vitacura | Ortodoncia Rajevic";
    }, []);

    const secondOpinionTestimonials = [
        {
            name: "Fernanda G.",
            role: "Universitaria",
            text: "Llevaba 3 años con brackets en otro lado y no veía avances. Aquí me explicaron por qué no cerraban los espacios. En 8 meses el Dr. Rajevic solucionó lo que otros no pudieron en años.",
            image: navAdult,
            date: "Hace 5 meses en Google"
        },
        {
            name: "Familia Muñoz",
            role: "Padres de Joaquín",
            text: "Nos dijeron que nuestro hijo necesitaba cirugía sí o sí. Buscamos al Dr. Rajevic para una segunda opinión y logró corregir el problema con ortopedia. Estaremos siempre agradecidos.",
            image: navAdult,
            date: "Hace 2 meses en Google"
        },
        {
            name: "Pablo D.",
            role: "Ingeniero",
            text: "La diferencia en el diagnóstico es abismal. Aquí se toman el tiempo de analizar y medir antes de actuar. Me sentí en manos de un verdadero experto, no de un vendedor.",
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
                    <img src={heroSecondOpinion} alt="Segunda Opinión Ortodoncia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(16, 24, 40, 0.9), rgba(16, 24, 40, 0.4))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Diagnóstico de Alta Complejidad</span>
                        <h1 style={{ fontSize: '3.5rem', maxWidth: '800px', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                            ¿Lleva años en tratamiento<br />
                            sin ver el final?
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '650px', opacity: '0.9', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                            El 40% de nuestros pacientes llegan derivados de otros centros por tratamientos estancados. Detenga la inercia clínica con un diagnóstico preciso.
                        </p>
                        <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Solicitar Auditoría de Caso
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
                            <h2 style={{ marginBottom: '2rem' }}>La "Fatiga de Tratamiento"</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Es frustrante. Pasan los meses, usted paga las mensualidades, pero los espacios no cierran, la mordida no encaja y el doctor parece estar improvisando en cada cita.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                <strong>La verdad dura:</strong> Si un tratamiento de ortodoncia no muestra progreso claro en 6 meses, el plan inicial probablemente estaba equivocado.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="card section-alt"
                            style={{ padding: '3rem', border: 'none' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem' }}>¿Cuándo pedir una segunda opinión?</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }} />
                                    <span>Antes de partir si no le han explicado bien su diagnostico las opciones de tratamiento, las opciones de frenillos, los tiempos concretos de duración y presupuesto total de su tratamiento.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }} />
                                    <span>Su tratamiento se ha "frenado" y no avanza hace meses.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }} />
                                    <span>Siente dolor articular o molestias que antes no tenía.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-secondary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }} />
                                    <span>Le sugirieron cirugía ortognática y quiere confirmar si es la única opción.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Historias de Rescate</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Nunca es tarde para corregir</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>
                    <TestimonialCarousel testimonials={secondOpinionTestimonials} />
                </div>
            </section>

            {/* METHOD */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Nuestra Metodología de Rescate</h2>
                        <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>No adivinamos ni improvisamos. Re estudiamos su caso con evidencia cientifica y clínica.</p>
                    </div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <span style={{ fontSize: '3rem', color: 'var(--color-secondary)', fontWeight: 'bold', display: 'block', marginBottom: '1rem', lineHeight: 1 }}>01</span>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Re-Diagnóstico Total</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                                Ignoramos el plan anterior. Tomamos registros nuevos para ver la realidad actual y todas las posibilidades correctas y rapidas para terminar el caso.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <span style={{ fontSize: '3rem', color: 'var(--color-secondary)', fontWeight: 'bold', display: 'block', marginBottom: '1rem', lineHeight: 1 }}>02</span>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Identificación del Error</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                                Detectamos mecánicas contradictorias o diagnósticos incompletos (ej: tratar como dental un problema que es esquelético).
                            </p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <span style={{ fontSize: '3rem', color: 'var(--color-secondary)', fontWeight: 'bold', display: 'block', marginBottom: '1rem', lineHeight: 1 }}>03</span>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Propuesta Honesta</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                                Le diremos si podemos corregir el rumbo o si es necesario retirar la aparatología actual y empezar desde una base limpia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTHORITY */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <img src={drRajevicImg} alt="Dr. Rajevic" style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} />
                        <div>
                            <h3>El "Juez" Clínico</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                El Dr. Rajevic es frecuentemente consultado para resolver casos que han llegado a un punto muerto. Su enfoque no es comercial; es puramente resolutivo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section text-center" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>No pierda más tiempo ni dinero.</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Una consulta a tiempo puede salvar sus dientes y su inversión.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Agendar Segunda Opinión
                    </Link>
                </div>
            </section>

            {/* FAQs Section */}
            <FAQSection
                title="Preguntas Frecuentes sobre Segunda Opinión"
                faqs={[
                    {
                        question: "¿Cuándo debo pedir una segunda opinión en ortodoncia?",
                        answer: "Debería considerar una segunda opinión si: lleva más de 3 años en tratamiento sin progresos visibles, le han propuesto extracciones dentarias sin explicación clara, siente dolor constante en la ATM (articulación temporomandibular), su mordida empeoró durante el tratamiento, o simplemente tiene dudas sobre el diagnóstico o plan de tratamiento. Una segunda opinión nunca está de más cuando se trata de su salud."
                    },
                    {
                        question: "¿Qué incluye la evaluación de segunda opinión?",
                        answer: "Incluye un examen clínico completo, análisis de sus radiografías y registros previos, evaluación de la articulación temporomandibular (ATM), revisión del plan de tratamiento actual, y diagnóstico honesto sobre el estado real de su caso. Le entregaremos un informe detallado con opciones realistas para continuar, corregir o replantear su tratamiento."
                    },
                    {
                        question: "¿Se cobra por la segunda opinión?",
                        answer: "La consulta de segunda opinión tiene un valor diferenciado que incluye el tiempo de análisis profundo de su caso, revisión de imágenes previas y entrega de informe escrito. Si decide continuar el tratamiento con nosotros, este valor se descuenta del costo total. En casos de complejidad extrema o rescate de tratamientos fallidos, evaluamos cada situación individualmente."
                    },
                    {
                        question: "¿Qué pasa si mi tratamiento actual está mal planificado?",
                        answer: "Si detectamos problemas en la planificación o ejecución del tratamiento actual, le explicaremos honestamente las opciones: continuar con ajustes menores, replantear completamente el enfoque, o en casos severos, evaluar si es necesario revertir algunos movimientos antes de proceder correctamente. Nuestro compromiso es con su salud bucal, no con validar tratamientos incorrectos."
                    }
                ]}
            />
        </>
    );
};

export default SecondOpinion;
