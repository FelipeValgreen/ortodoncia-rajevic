import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import drRajevicImg from '../assets/dr-rajevic.jpg';
import heroHome from '../assets/hero_home_v2.jpg';
import FAQSection from '../components/FAQSection';
import TestimonialCarousel from '../components/TestimonialCarousel';

import navChild from '../assets/nav_child.png';
import navAdult from '../assets/nav_adult.png';
import navInvisalign from '../assets/nav_invisalign.png';

const Home = () => {
  React.useEffect(() => {
    document.title = "Ortodoncia Rajevic | Diagnóstico y Planificación Vitacura";
  }, []);

  const homeTestimonials = [
    {
      name: "María José L.",
      role: "Mamá de paciente (10 años)",
      text: "Llegué preocupada porque me decían que mi hijo necesitaba cirugía. El Dr. Rajevic nos explicó que con ortopedia podíamos guiar su crecimiento. Hoy tiene una mordida perfecta y evitamos el pabellón. La paciencia con los niños es única.",
      image: navChild,
      date: "Hace 2 meses en Google"
    },
    {
      name: "Sofía R.",
      role: "Estudiante Universitaria",
      text: "Usé frenillos de niña y se me volvieron a enchuecar. No quería metales de nuevo. Con Invisalign en la clínica fue todo invisible y rapidísimo. Lo mejor fue ver la planificación en 3D antes de empezar.",
      image: navInvisalign,
      date: "Hace 1 mes en Google"
    },
    {
      name: "Carlos M.",
      role: "Ejecutivo (45 años)",
      text: "Sufría de dolores cervicales y bruxismo. No buscaba estética, buscaba salud. El diagnóstico del Dr. Rajevic fue certero: mi mordida estaba causando todo. Ahora duermo sin dolor y mis dientes están alineados. Un cambio de vida.",
      image: navAdult,
      date: "Hace 3 semanas en Google"
    }
  ];

  return (
    <>
      {/* 1. HERO MANIFESTO */}
      <section style={{
        position: 'relative',
        height: '90vh',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#f8fafc', // Light background as fallback
        color: 'var(--color-primary)' // Default text to dark blue
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <img src={heroHome} alt="Ortodoncia Rajevic - Sonrisas Reales" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '85% center' }} />
          {/* Strategic overlay: transparent left, solid white right for text */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to left, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 30%, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, 0) 75%)'
          }}></div>
        </div>

        {/* Content Container (Text) */}
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '550px', textAlign: 'right' }}
          >
            <span className="uppercase-tracking" style={{
              color: 'var(--color-secondary)',
              fontWeight: 700,
              display: 'inline-block',
              marginBottom: '1rem',
              borderBottom: '2px solid var(--color-secondary)',
              paddingBottom: '2px',
              textAlign: 'right'
            }}>
              Clínica de Especialidad
            </span>
            <h1 style={{
              fontSize: 'clamp(1.875rem, 5vw, 4.2rem)',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              maxWidth: '550px',
              marginLeft: 'auto',
              color: 'var(--color-primary)', // Strong Dark Blue
              textShadow: '0 2px 20px rgba(255,255,255,0.8)' // Light glow for readability
            }}>
              Clínica Ortodoncia en Vitacura
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              marginBottom: '2rem',
              maxWidth: '480px',
              marginLeft: 'auto',
              opacity: '1',
              lineHeight: '1.6',
              fontWeight: '500',
              color: 'var(--color-primary)'
            }}>
              Porque mover dientes sin un diagnóstico integral y sin entender la articulación no es un tratamiento, es un riesgo.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <Link to="/diagnostico-ortodoncia-vitacura" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', backgroundColor: 'var(--color-primary)', color: 'white', borderColor: 'var(--color-primary)', fontWeight: 'bold' }}>
                Conozca el Método de Diagnóstico
              </Link>
            </div>
          </motion.div>
        </div>
      </section >

      {/* 2. THE PROBLEM (Why we exist) */}
      < section className="section" >
        <div className="container">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ marginBottom: '2rem' }}>El peligro de la "invisibilidad"</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                Hoy en día, se puede comprar un tratamiento de ortodoncia casi como un producto de supermercado. Alineadores por correo, franquicias de paso rápido, diagnósticos por selfie.
              </p>
              <h4 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Lo que nadie dice:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <BsCheckCircle style={{ color: 'var(--color-alert)', flexShrink: 0, fontSize: '1.2rem', marginTop: '3px' }} />
                  <span>Unos lindos dientes recién enderezados pueden durar muy poco derechos si no hay detrás una buena mordida funcional.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <BsCheckCircle style={{ color: 'var(--color-alert)', flexShrink: 0, fontSize: '1.2rem', marginTop: '3px' }} />
                  <span>Una mala mordida puede volver a enchuecar los dientes y afectar su articulación mandibular si no es funcional.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <BsCheckCircle style={{ color: 'var(--color-alert)', flexShrink: 0, fontSize: '1.2rem', marginTop: '3px' }} />
                  <span>La evaluación de las encías y del hueso donde se insertan los dientes es primordial: Mover dientes en encías enfermas puede causar la pérdida de piezas dentarias.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ backgroundColor: '#f0f4f8', padding: '3rem', borderRadius: 'var(--border-radius)' }}
            >
              <h3 style={{ marginBottom: '1.5rem' }}>Nuestra promesa:</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Usamos escáneres 3D, software avanzado y simuladores de mordida.
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                Medir y pensar antes de actuar.
              </p>
              <Link to="/dr-rajevic" style={{ marginTop: '2rem', display: 'inline-block', textDecoration: 'underline', color: 'var(--color-primary)' }}>
                Conozca al Dr. Zdenko Rajevic &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section >

      {/* 3. CORE SERVICES (Direct Access) */}
      < section className="section section-alt" >
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="uppercase-tracking text-light">Enfoque Integral</span>
            <h2 style={{ marginTop: '1rem' }}>Áreas de Experticia</h2>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {/* Child */}
            <motion.div
              className="card"
              whileHover={{ y: -5 }}
              style={{ padding: '2.5rem' }}
            >
              <div style={{ color: 'var(--color-secondary)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>01</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Ortodoncia infantil</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                No esperamos que salgan todos los dientes. Mientras los niños crecen, guiamos el desarrollo de los huesos y la erupción dentaria para evitar futuros tratamientos complicados con extracciones o cirugías.
              </p>
              <Link to="/ortodoncia-infantil-vitacura" className="btn-link">Ver Tratamiento &rarr;</Link>
            </motion.div>

            {/* Adult */}
            <motion.div
              className="card"
              whileHover={{ y: -5 }}
              style={{ padding: '2.5rem' }}
            >
              <div style={{ color: 'var(--color-secondary)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>02</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Adultos & Estética</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                Alineadores invisibles y frenillos de zafiro. Porque corregir su sonrisa no tiene que interrumpir su vida personal y profesional.
              </p>
              <Link to="/ortodoncia-adultos-vitacura" className="btn-link">Ver Opciones &rarr;</Link>
            </motion.div>

            {/* Complex */}
            <motion.div
              className="card"
              whileHover={{ y: -5 }}
              style={{ padding: '2.5rem' }}
            >
              <div style={{ color: 'var(--color-secondary)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>03</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Casos Complejos</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                Casos de cirugías maxilofaciales (ortognáticas), rehabilitaciones orales complejas, bruxismo severo, disfunción temporomandibular y segundas opiniones de casos complicados.
              </p>
              <Link to="/segunda-opinion-ortodoncia" className="btn-link">Ver Soluciones &rarr;</Link>
            </motion.div>
          </div>
        </div>
      </section >

      {/* TESTIMONIALS SECTION */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="uppercase-tracking text-secondary">Testimonios Reales</span>
            <h2 style={{ marginTop: '0.5rem' }}>Lo que dicen nuestros pacientes</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#ffc107', fontSize: '1.5rem' }}>
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
            </div>
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>5.0 Estrellas en Google Reviews</p>
          </div>

          <TestimonialCarousel testimonials={homeTestimonials} />

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="https://www.google.com/maps/place/Ortodoncia+Rajevic" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontWeight: '600' }}>
              Ver todas las reseñas en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / AUTHORITY */}
      < section className="section" >
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ position: 'relative' }}>
              <img src={drRajevicImg} alt="Dr Rajevic en Consulta" style={{ borderRadius: 'var(--border-radius)', width: '100%', filter: 'grayscale(100%)', transition: 'filter 0.3s' }} onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'} />
            </div>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>35 Años de "Bocas Difíciles"</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                El Dr. Zdenko Rajevic no es solo un ortodoncista; es un profesional con años de experiencia, muy cercano y empatico con sus pacientes. Más de 5000 casos tratados con exito.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                "La paciencia es nuestra herramienta más valiosa. Hay casos en que un tratamiento lento y estable es preferible a uno rápido que fracasa en el tiempo."
              </p>
              <Link to="/contacto" className="btn btn-outline">
                Agendar Hora
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* FAQs Section */}
      < FAQSection
        title="Preguntas Frecuentes"
        faqs={
          [
            {
              question: "¿Cuánto dura un tratamiento de ortodoncia?",
              answer: "La duración varía según la complejidad del caso. Un tratamiento simple puede durar entre 12-18 meses, mientras que casos más complejos pueden extenderse hasta 24-30 meses. Durante la evaluación inicial, le entregaremos un plan de tratamiento con tiempos realistas basados en su diagnóstico específico."
            },
            {
              question: "¿Atienden con convenio Isapre?",
              answer: "Sí, trabajamos con todas las isapres. Emitimos bonos electrónicos y le ayudamos con la gestión para maximizar su cobertura. También aceptamos pago con tarjetas de crédito y débito."
            },
            {
              question: "¿Desde qué edad pueden empezar los niños con ortodoncia?",
              answer: "La edad ideal para una primera evaluación es alrededor de los 6-7 años. En algunos casos, la ortopedia maxilar puede iniciarse desde los 4 años para guiar el crecimiento de los huesos. La intervención temprana puede prevenir tratamientos más complejos en el futuro."
            },
            {
              question: "¿Cómo funciona la evaluación inicial?",
              answer: "La primera consulta incluye un examen clínico completo, análisis de mordida, evaluación articular (ATM) y una explicación detallada del diagnóstico. Si es necesario, solicitamos radiografías y fotografías para crear un plan de tratamiento personalizado. La duración aproximada es de 30-45 minutos."
            }
          ]}
      />
    </>
  );
};

export default Home;
