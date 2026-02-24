import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroAdult from '../assets/hero_adult.webp';
import drRajevicImg from '../assets/dr-rajevic.webp';
import { BsCheckCircle, BsStarFill } from 'react-icons/bs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

// Data dictionary for different geographical target areas
const geoData = {
    'las-condes': {
        name: 'Las Condes',
        title: 'Ortodoncia en Las Condes | Dr. Zdenko Rajevic',
        description: 'Buscando ortodoncia cerca de Las Condes? A minutos de distancia en Vitacura, encuentre al Dr. Rajevic experto en Invisalign y brackets estéticos.',
        distance: 'A 5 minutos de Las Condes',
        keywords: 'ortodoncia las condes, invisalign las condes, frenillos las condes',
        testimonials: [
            {
                name: "Magdalena S.",
                role: "Paciente de Las Condes",
                text: "Buscaba ortodoncista cerca de mi oficina en Las Condes y llegué al Dr Rajevic en Vitacura. Fue la mejor decisión, súper rápido el trayecto y la atención de primera.",
                image: null,
                date: "Hace 1 mes en Google"
            },
            {
                name: "Andrés V.",
                role: "Paciente",
                text: "Excelente servicio y tecnología. Trabajo en El Golf y los controles de mis alineadores invisibles se me hacen comodísimos por la cercanía. Recomendado.",
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
        ]
    },
    'lo-barnechea': {
        name: 'Lo Barnechea',
        title: 'Ortodoncia Lo Barnechea y La Dehesa | Clínica Dr. Rajevic',
        description: 'Expertos en Ortodoncia e Invisalign para pacientes de Lo Barnechea y La Dehesa. Conectividad directa e instalaciones premium.',
        distance: 'Directo por Costanera a minutos de Lo Barnechea',
        keywords: 'ortodoncia lo barnechea, ortodoncista la dehesa, invisalign lo barnechea',
        testimonials: [
            {
                name: "Consuelo Valdés",
                role: "Mamá de paciente (La Dehesa)",
                text: "Mis hijos se atienden con el doctor y nos queda comodísimo bajar desde La Dehesa. Excelente trato y las instalaciones de primer nivel. Un agrado total.",
                image: null,
                date: "Hace 3 semanas en Google"
            },
            {
                name: "Ignacio H.",
                role: "Paciente de Lo Barnechea",
                text: "Comencé mi tratamiento de Invisalign y es increíble lo rápido y estético que es. El acceso a la clínica es facilísimo. Doctor muy profesional y directo.",
                image: null,
                date: "Hace 4 meses en Google"
            },
            {
                name: "Catalina Izcue",
                role: "Paciente",
                text: "Mi experiencia con la clínica y el Dr. Zdenko ha sido realmente excelente. Desde lo administrativo, como atender siempre a tiempo o la amabilidad del equipo, hasta lo clínico. Excelente nivel.",
                image: null,
                date: "Hace 5 días en Google"
            }
        ]
    }
};

const GeoLanding = () => {
    const { commune } = useParams();
    // Default to a generic view if the URL parameter doesn't match our specific targets
    const locationInfo = geoData[commune] || {
        name: 'Santiago Oriente',
        title: 'Ortodoncia Especializada en Santiago Oriente',
        description: 'Tratamientos de ortodoncia, ortopedia dentomaxilar e invisalign de máxima calidad.',
        distance: 'Ubicación privilegiada con rápidos accesos',
        keywords: 'ortodoncia santiago oriente',
        testimonials: geoData['las-condes'].testimonials // fallback
    };

    return (
        <>
            <SEO
                title={locationInfo.title}
                description={locationInfo.description}
                breadcrumbs={[
                    { name: 'Ubicaciones', path: '/ubicaciones' },
                    { name: locationInfo.name, path: `/ortodoncia-${commune}` }
                ]}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalSpecialty",
                        "name": `Ortodoncia Avanzada para Pacientes de ${locationInfo.name}`,
                        "description": locationInfo.description,
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
                display: 'grid',
                placeItems: 'center',
                padding: '6rem 1rem',
                minHeight: '70vh',
                color: 'white'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 0
                }}>
                    <img src={heroAdult} alt={`Paciente sonriendo luego de ortodoncia cerca de ${locationInfo.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" width="1920" height="1080" />
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(to right, rgba(26, 58, 92, 0.95) 0%, rgba(26, 58, 92, 0.7) 100%)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px' }}
                    >
                        <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'var(--color-secondary)' }}>
                            {locationInfo.distance}
                        </span>
                        <h1 className="hero-title" style={{ color: 'white' }}>
                            Ortodoncia de Especialidad para Pacientes en {locationInfo.name}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9, color: 'white' }}>
                            Tecnología Invisalign, Brackets Estéticos y Ortopedia Maxilar.
                            Agende en nuestra clínica en Vitacura, con rápido acceso y estacionamiento exclusivo a pasos de su comuna.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contacto" className="btn btn-primary" style={{ backgroundColor: 'var(--color-secondary)', borderColor: 'var(--color-secondary)' }}>
                                Agendar Evaluación Clínica
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. VALUE PROP */}
            <section className="section" style={{ backgroundColor: 'var(--color-light)' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <span className="uppercase-tracking text-secondary">¿Por qué Elegirnos?</span>
                            <h2 style={{ marginBottom: '1.5rem' }}>A minutos de {locationInfo.name}, una clínica pensada en la excelencia</h2>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                                Entendemos que su tiempo es valioso. Nuestra ubicación en Av. Las Hualtatas permite una conexión directa
                                rápida para nuestros pacientes de {locationInfo.name}.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Tecnología de Vanguardia</h4>
                                        <p style={{ color: 'var(--color-text-light)' }}>Planificación 3D digital y escáner intraoral.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Tratamientos Discretos</h4>
                                        <p style={{ color: 'var(--color-text-light)' }}>Expertos certificados en Invisalign y Ortodoncia Lingual.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <BsCheckCircle style={{ color: 'var(--color-primary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Comodidad Maximizada</h4>
                                        <p style={{ color: 'var(--color-text-light)' }}>Estacionamientos a la puerta y atención impecablemente puntual.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src={drRajevicImg} alt="Dr. Rajevic evaluando en clínica" style={{ borderRadius: 'var(--border-radius)', width: '100%', boxShadow: 'var(--box-shadow)' }} loading="lazy" width="600" height="600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="uppercase-tracking text-secondary">Testimonios Reales</span>
                        <h2 style={{ marginTop: '0.5rem' }}>Lo que dicen nuestros pacientes de {locationInfo.name}</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
                            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                        </div>
                    </div>

                    <TestimonialCarousel testimonials={locationInfo.testimonials} />
                </div>
            </section>

            <FAQSection
                title="Dudas Frecuentes"
                faqs={[
                    {
                        question: `¿A qué distancia se encuentran de ${locationInfo.name}?`,
                        answer: "Nos encontramos en Av. Las Hualtatas 8999, Vitacura. Una ubicación con excelente conectividad a las principales vías, a un corto trayecto en automóvil."
                    },
                    {
                        question: "¿Cuentan con estacionamiento?",
                        answer: "Sí, disponemos de estacionamiento cómodo y seguro para la tranquilidad de nuestros pacientes durante sus citas."
                    },
                    {
                        question: "¿Atienden emergencias ortodóncicas?",
                        answer: "Por supuesto. Nuestros pacientes en tratamiento tienen canal directo para resolución rápida de molestias con brackets o alineadores."
                    }
                ]}
            />
        </>
    );
};

export default GeoLanding;
