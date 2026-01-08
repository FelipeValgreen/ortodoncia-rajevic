import React from 'react';
import { Link } from 'react-router-dom';
import { FaTooth, FaUserMd, FaNotesMedical, FaRegCalendarCheck } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{ backgroundColor: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden', padding: '8rem 0 10rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <div>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'white',
                            color: 'var(--color-primary)',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                        }}>
                            EL EJE ORDENA. EL VACÍO PERMITE DECIDIR.
                        </span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            Ortodoncia basada en <br />
                            <span style={{ color: 'var(--color-secondary)', fontStyle: 'italic' }}>diagnóstico y planificación</span>.
                        </h1>
                        <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                            El aparato es solo la herramienta. El verdadero tratamiento comienza con una decisión clínica correcta.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/contacto" className="btn btn-primary">
                                Agenda tu evaluación <BsArrowRight />
                            </Link>
                            <Link to="/diagnostico" className="btn">
                                Nuestro enfoque
                            </Link>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        {/* Abstract shape background for image */}
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%', backgroundColor: 'var(--color-accent)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', zIndex: -1 }}></div>
                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '20px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            height: '500px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Dr. Rajevic Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        {/* Floating Badge */}
                        <div style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '-30px',
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            maxWidth: '250px'
                        }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>35+</div>
                            <div style={{ fontSize: '0.9rem', lineHeight: '1.2', color: 'var(--color-text)' }}>Años de<br />Experiencia Clínica</div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="shape-divider" style={{ bottom: 0, transform: 'rotate(180deg)' }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Nuestras Especialidades</span>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Soluciones Clínicas Integrales</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {/* Core Service 1 */}
                        <div className="card">
                            <div className="icon-box">
                                <FaTooth />
                            </div>
                            <h3>Ortodoncia Niños</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Intervención temprana (Ortopedia) para guiar el crecimiento y evitar problemas complejos en el futuro.
                            </p>
                            <Link to="/servicios" style={{ color: 'var(--color-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Ver más <BsArrowRight />
                            </Link>
                        </div>

                        {/* Core Service 2 */}
                        <div className="card">
                            <div className="icon-box">
                                <FaUserMd />
                            </div>
                            <h3>Ortodoncia Adultos</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Tratamientos discretos y eficientes. Manejo de casos complejos, retratamientos y preparación para implantes.
                            </p>
                            <Link to="/servicios" style={{ color: 'var(--color-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Ver más <BsArrowRight />
                            </Link>
                        </div>

                        {/* Core Service 3 */}
                        <div className="card">
                            <div className="icon-box">
                                <FaNotesMedical />
                            </div>
                            <h3>Diagnóstico Avanzado</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Análisis funcional de ATM, escáner intraoral y planificación digital antes de colocar cualquier aparato.
                            </p>
                            <Link to="/diagnostico" style={{ color: 'var(--color-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Ver más <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Side by Side */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Dental Clinic"
                                style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                            {/* Pattern overlay idea */}
                            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', backgroundColor: 'var(--color-secondary)', borderRadius: '12px', zIndex: -1 }}></div>
                        </div>
                        <div>
                            <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Sobre Nosotros</span>
                            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>No adivine. Diagnostique.</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                La mayoría de los fracasos en ortodoncia no ocurren por una mala técnica, sino por un diagnóstico incompleto.
                            </p>
                            <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                                En Ortodoncia Rajevic, invertimos el tiempo necesario en entender la raíz del problema. Nuestro enfoque es 100% clínico, priorizando la estabilidad y la salud a largo plazo por sobre la rapidez comercial.
                            </p>

                            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'grid', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <FaRegCalendarCheck style={{ color: 'var(--color-secondary)' }} /> Atención personalizada por el Dr. Rajevic
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <FaRegCalendarCheck style={{ color: 'var(--color-secondary)' }} /> Tecnología de escaneo digital 3D
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <FaRegCalendarCheck style={{ color: 'var(--color-secondary)' }} /> Especialistas en segundas opiniones
                                </li>
                            </ul>

                            <Link to="/dr-rajevic" className="btn btn-primary">Conoce al Dr. Rajevic</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '20px',
                margin: '0 2rem 4rem',
                padding: '6rem 2rem'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Comience con el pie derecho</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                        Evite tratamientos innecesarios. Solicite una evaluación profesional que le dará certeza sobre su salud bucal.
                    </p>
                    <Link to="/contacto" className="btn" style={{ backgroundColor: '#fff', color: 'var(--color-secondary)', border: 'none', padding: '1.2rem 3rem' }}>
                        Agenda tu evaluación ahora
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
