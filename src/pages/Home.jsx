import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import drRajevicImg from '../assets/dr-rajevic.jpg';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-alt" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <span className="uppercase-tracking text-secondary" style={{ display: 'block', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-secondary)', paddingBottom: '0.5rem', width: 'fit-content' }}>
              Ortodoncia Clínica & Estratégica
            </span>
            <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
              El eje ordena. <br />
              <span style={{ color: 'var(--color-text-light)', fontStyle: 'italic', fontWeight: '400' }}>El vacío permite decidir.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: '300' }}>
              En ortodoncia, el eje no es el aparato. El verdadero tratamiento es el <strong>diagnóstico</strong>, la <strong>planificación</strong> y el <strong>criterio clínico</strong>.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/diagnostico" className="btn btn-primary">
                Solicita un diagnóstico
              </Link>
              <Link to="/dr-rajevic" className="btn btn-outline" style={{ border: 'none' }}>
                Conoce al Dr. Rajevic <BsArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Abstract Visual Element */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100%', opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '0',
            right: '15%',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, var(--color-secondary), transparent)',
          }}
        />
      </section>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ marginBottom: '2rem' }}>
                Cuando el eje es incorrecto, <br />
                el tratamiento pierde dirección.
              </h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-secondary)', marginBottom: '2rem' }}></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                La mayoría de los problemas en ortodoncia no ocurren durante el tratamiento, sino <strong>antes de comenzar</strong>. Ocurren cuando se prioriza la herramienta (brackets, alineadores) por sobre la anatomía.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                No competimos por rapidez ni por precio. Nuestra promesa es diferente: <strong>estabilidad, salud y resultados predecibles</strong> a largo plazo.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem' }}>
                  <span className="text-secondary">—</span> No vendemos "brackets", diseñamos oclusiones.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem' }}>
                  <span className="text-secondary">—</span> No buscamos volumen, buscamos precisión.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem' }}>
                  <span className="text-secondary">—</span> No hacemos ofertas, damos certezas.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="uppercase-tracking text-light">Nuestra Metodología</span>
            <h2 style={{ marginTop: '1rem', marginBottom: '0' }}>Una forma de decidir</h2>
          </div>

          <div className="grid-3" style={{ gap: '2px', backgroundColor: 'var(--color-border)', border: '1px solid var(--color-border)' }}>
            {/* Card 1 */}
            <motion.div
              className="card"
              style={{ borderRadius: 0, border: 'none' }}
              whileHover={{ backgroundColor: '#fafbfc' }}
            >
              <div style={{ fontSize: '4rem', color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1 }}>I</div>
              <h3>Niños y Avance</h3>
              <p className="text-light">Guía de crecimiento esquelético (Ortopedia). Es el momento de las bases.</p>
              <Link to="/ortodoncia-infantil-vitacura" className="text-secondary" style={{ fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}>
                Ver Ortodoncia Infantil
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="card"
              style={{ borderRadius: 0, border: 'none' }}
              whileHover={{ backgroundColor: '#fafbfc' }}
            >
              <div style={{ fontSize: '4rem', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1 }}>II</div>
              <h3>Adultos y Estética</h3>
              <p className="text-light">Corrección invisible y cuidado periodontal. Soluciones discretas y eficientes.</p>
              <Link to="/ortodoncia-adultos-vitacura" className="text-secondary" style={{ fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}>
                Ver Ortodoncia Adultos
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="card"
              style={{ borderRadius: 0, border: 'none' }}
              whileHover={{ backgroundColor: '#fafbfc' }}
            >
              <div style={{ fontSize: '4rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1 }}>III</div>
              <h3>Casos Complejos</h3>
              <p className="text-light">Segundas opiniones y rehabilitación oral. Cuando el caso no avanza.</p>
              <Link to="/segunda-opinion-ortodoncia" className="text-secondary" style={{ fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}>
                Ver Casos Complejos
              </Link>
            </motion.div>
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/diagnostico" className="btn btn-primary">
              Conoce nuestro proceso de Diagnóstico <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Dr. Rajevic Showcase */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              style={{ position: 'relative' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <img
                  src={drRajevicImg}
                  alt="Dr. Zdenko Rajevic"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)' }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 style={{ marginBottom: '1rem' }}>Dr. Zdenko Rajevic</h2>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-secondary)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Director Clínico
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                Con más de 35 años de experiencia clínica, el Dr. Rajevic ha construido una práctica basada en la resolución de casos complejos y la honestidad profesional.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2.5rem' }}>
                "El éxito de un tratamiento no se mide el día que se retiran los aparatos, sino 10 años después. Esa estabilidad solo se logra con un diagnóstico que respeta la biología del paciente."
              </p>
              <Link to="/dr-rajevic" className="btn btn-outline" style={{ borderRadius: '4px', padding: '0.8rem 2rem' }}>
                Ver trayectoria
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
