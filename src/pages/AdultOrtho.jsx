import React from 'react';
import { Link } from 'react-router-dom';

const AdultOrtho = () => {
    return (
        <>
            <section style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Estética y Función
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Ortodoncia Adultos en Vitacura: <br />
                        <span style={{ color: 'var(--color-primary)' }}>Precisión en estructuras maduras.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '700px' }}>
                        Nunca es tarde para corregir su sonrisa, pero el adulto requiere un cuidado periodontal y biomecánico superior. En Ortodoncia Rajevic, priorizamos su salud gingival y hueso.
                    </p>
                    <Link to="/contacto" className="btn btn-primary">
                        Agenda tu diagnóstico
                    </Link>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>El desafío de la ortodoncia en adultos</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                A diferencia de los niños, los adultos ya no están creciendo. Además, es común encontrar dientes con restauraciones previas, implantes o encías retraídas.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Tratar a un adulto como si fuera un niño grande es un error clínico grave que puede causar pérdida de hueso o reabsorción de raíces.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Nuestra diferenciación clínica:</h4>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                                <strong>Biomecánica Específica:</strong> Usamos fuerzas más ligeras y continuas para proteger sus raíces y encías.
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                                <strong>Estética Invisible:</strong> Entendemos que su imagen profesional es vital. Ofrecemos Invisalign y ortodoncia lingual para que el tratamiento no interfiera con su vida laboral.
                            </p>
                            <p style={{ fontSize: '1.05rem' }}>
                                <strong>Interdisciplina:</strong> Trabajamos coordinados con su rehabilitador si necesita implantes o carillas posteriores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Method Rajevic */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Opciones de Tratamiento</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--color-text-light)' }}>
                        Seleccionamos la herramienta según su estilo de vida y complejidad clínica.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'left' }}>
                        <div className="card">
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Alineadores (Invisalign)</h3>
                            <p>La opción preferida por nuestros pacientes adultos. Removible, transparente y facilita la higiene.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Brackets Zafiro</h3>
                            <p>Cristal puro que no se mancha. Una opción fija estética de alta eficacia biomecánica.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Ortodoncia Lingual</h3>
                            <p>Sistema incógnito adherido detrás de los dientes. 100% invisible desde el exterior.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authority */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'white' }}>Dirección Clínica Senior</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
                            El Dr. Rajevic planifica personalmente cada caso de adultos, evaluando cuidadosamente la condición periodontal y articular antes de aplicar cualquier fuerza. La seguridad biológica es nuestra prioridad n°1.
                        </p>
                        <Link to="/dr-zdenko-rajevic" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Conocer al Doctor</Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Hablemos de su sonrisa</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Analicemos sus expectativas y diseñemos un plan realista, estético y estable.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Solicita tu evaluación clínica
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AdultOrtho;
