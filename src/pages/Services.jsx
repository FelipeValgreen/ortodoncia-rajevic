import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '5rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Servicios Clínicos</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', color: 'var(--color-text-light)' }}>
                        Nuestra práctica se divide por áreas de necesidad clínica, no por productos comerciales.
                        Adaptamos la técnica a la biología de cada paciente.
                    </p>
                </div>
            </section>

            {/* Children & Adolescents */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            {/* Placeholder for Child Ortho Image */}
                            <div style={{ width: '100%', height: '400px', backgroundColor: '#f0f4f8', borderRadius: '8px' }}></div>
                        </div>
                        <div style={{ order: 1 }}>
                            <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Crecimiento y Desarrollo</span>
                            <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Niños y Adolescentes</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                La "Ortopedia Maxilar" es la oportunidad única de guiar el crecimiento de los huesos. Intervenir en el momento correcto (niñez temprana) puede evitar cirugías o extracciones en la adultez.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                <li>Corrección de mordidas cruzadas y abiertas.</li>
                                <li>Guía de erupción dental.</li>
                                <li>Control de hábitos (succión de dedo, respiración bucal).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adults */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                        <div>
                            {/* Placeholder for Adult Ortho Image */}
                            <div style={{ width: '100%', height: '400px', backgroundColor: '#f0f4f8', borderRadius: '8px' }}></div>
                        </div>
                        <div>
                            <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Corrección y Estabilidad</span>
                            <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Ortodoncia en Adultos</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Nunca es tarde para corregir la función y la estética. En adultos, el desafío es mover dientes en un hueso maduro, muchas veces con desgastes o pérdidas previas. Requiere una planificación biomecánica de precisión.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                <li>Preparación para implantes y rehabilitación.</li>
                                <li>Alineación estética de alta discreción.</li>
                                <li>Manejo de enfermedad periodontal.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Invisalign / Aesthetics */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Técnicas Invisibles</span>
                        <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Invisalign y Ortodoncia Estética</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                            Somos expertos en alineadores transparentes, pero no los vendemos como un producto mágico. Invisalign es una herramienta poderosa que funciona solo bajo el diseño de un experto. Nosotros diseñamos el movimiento; el alineador solo lo ejecuta.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem' }}>Invisalign</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Alineadores removibles, cómodos y transparentes. Planificados digitalmente por el Dr. Rajevic.</p>
                        </div>
                        <div className="card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem' }}>Brackets Zafiro</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Translucidez cristalina que se mimetiza con el diente. Alta estética con control fijo.</p>
                        </div>
                        <div className="card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem' }}>Ortodoncia Lingual</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Aparatología cementada en la cara interna del diente. Totalmente invisible.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>¿Busca una segunda opinión?</h2>
                    <Link to="/experiencia" className="btn btn-primary">Ver casos complejos</Link>
                </div>
            </section>
        </>
    );
};

export default Services;
