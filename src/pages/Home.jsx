import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      {/* Hero Section - The Axis Concept */}
      <section style={{
        backgroundColor: 'var(--color-bg-alt)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <span style={{
              display: 'inline-block',
              color: 'var(--color-secondary)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--color-secondary)',
              paddingBottom: '0.5rem'
            }}>
              Ortodoncia Clínica & Estratégica
            </span>
            <h1 style={{
              fontSize: '4rem',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              lineHeight: '1.1',
              fontFamily: 'var(--font-heading)'
            }}>
              El eje ordena. <br />
              <span style={{ color: 'var(--color-text-light)', fontStyle: 'italic', fontWeight: '400' }}>El vacío permite decidir.</span>
            </h1>
            <p style={{
              fontSize: '1.4rem',
              marginBottom: '3.5rem',
              color: 'var(--color-text)',
              lineHeight: '1.6',
              maxWidth: '650px',
              fontWeight: '300'
            }}>
              En ortodoncia, el eje no es el aparato. El verdadero tratamiento es el <strong>diagnóstico</strong>, la <strong>planificación</strong> y el <strong>criterio clínico</strong>.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link to="/diagnostico" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1rem' }}>
                Solicita un diagnóstico
              </Link>
              <Link to="/dr-rajevic" style={{
                color: 'var(--color-primary)',
                fontWeight: '500',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}>
                Conoce al Dr. Rajevic
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract Axis Element (Visual Metaphor) */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '10%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, var(--color-secondary), transparent)',
          opacity: '0.3'
        }}></div>
      </section>

      {/* The Problem with "Fast" Orthodontics */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                Cuando el eje es incorrecto, <br />
                el tratamiento pierde dirección.
              </h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-secondary)', marginBottom: '2rem' }}></div>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                La mayoría de los problemas en ortodoncia no ocurren durante el tratamiento, sino <strong>antes de comenzar</strong>. Ocurren cuando se prioriza la herramienta (brackets, alineadores) por sobre la anatomía.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                No competimos por rapidez ni por precio. Nuestra promesa es diferente: <strong>estabilidad, salud y resultados predecibles</strong> a largo plazo.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>—</span> No vendemos "brackets", diseñamos oclusiones.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>—</span> No buscamos volumen, buscamos precisión.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>—</span> No hacemos ofertas, damos certezas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Method (Preview) */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Nuestra Metodología</span>
          <h2 style={{ fontSize: '2.8rem', margin: '1rem 0 4rem' }}>Una forma de decidir</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid var(--color-border)' }}>

            {/* Step 1 */}
            <div style={{ padding: '4rem 2rem', borderRight: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <div style={{ fontSize: '4rem', color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>I</div>
              <h3 style={{ marginBottom: '1rem' }}>Niños y Avance</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                Guía de crecimiento esquelético (Ortopedia).
              </p>
              <Link to="/ortodoncia-infantil-vitacura" style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontSize: '0.9rem' }}>Ver Ortodoncia Infantil</Link>
            </div>

            {/* Step 2 */}
            <div style={{ padding: '4rem 2rem', borderRight: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <div style={{ fontSize: '4rem', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>II</div>
              <h3 style={{ marginBottom: '1rem' }}>Adultos y Estética</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                Corrección invisible y cuidado periodontal.
              </p>
              <Link to="/ortodoncia-adultos-vitacura" style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontSize: '0.9rem' }}>Ver Ortodoncia Adultos</Link>
            </div>

            {/* Step 3 */}
            <div style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
              <div style={{ fontSize: '4rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>III</div>
              <h3 style={{ marginBottom: '1rem' }}>Casos Complejos</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                Segundas opiniones y rehabilitación oral.
              </p>
              <Link to="/segunda-opinion-ortodoncia" style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontSize: '0.9rem' }}>Ver Casos Complejos</Link>
            </div>

          </div>

          <div style={{ marginTop: '4rem' }}>
            <Link to="/diagnostico" className="btn btn-primary">
              Conoce nuestro proceso de Diagnóstico <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Dr. Rajevic Showcase */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', height: '600px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" alt="Dr. Zdenko Rajevic" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(10%) contrast(95%)' }} />
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Dr. Zdenko Rajevic</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '400', color: 'var(--color-secondary)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Director Clínico
              </h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                Con más de 35 años de experiencia clínica, el Dr. Rajevic ha construido una práctica basada en la resolución de casos complejos y la honestidad profesional.
              </p>
              <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                "El éxito de un tratamiento no se mide el día que se retiran los aparatos, sino 10 años después. Esa estabilidad solo se logra con un diagnóstico que respeta la biología del paciente."
              </p>
              <Link to="/dr-rajevic" style={{ borderBottom: '1px solid var(--color-primary)', paddingBottom: '2px' }}>
                Ver trayectoria y formación
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
