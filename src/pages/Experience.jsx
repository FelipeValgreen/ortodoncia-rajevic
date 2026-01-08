import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <>
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '1.5rem' }}>Experiencia y Casos</h1>
                    <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '65ch' }}>
                        Resultados que hablan de planificación, paciencia y precisión.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Segunda Opinión</h2>
                            <p>
                                Una parte importante de nuestra práctica consiste en recibir pacientes que no están satisfechos con el progreso de sus tratamientos actuales o que han tenido recidivas.
                                Ofrecemos una mirada fresca, honesta y técnica sobre su situación.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Casos Complejos</h2>
                            <p>
                                Desde dientes impactados hasta asimetrías severas. El Dr. Rajevic tiene décadas de experiencia resolviendo situaciones que salen de la norma.
                            </p>
                        </div>
                    </div>

                    {/* Placeholder for Case Studies Gallery */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <div style={{ height: '300px', backgroundColor: '#e2e2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: '#888' }}>[Caso 1: Antes/Después]</p>
                        </div>
                        <div style={{ height: '300px', backgroundColor: '#e2e2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: '#888' }}>[Caso 2: Antes/Después]</p>
                        </div>
                        <div style={{ height: '300px', backgroundColor: '#e2e2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: '#888' }}>[Caso 3: Antes/Después]</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <Link to="/contacto" className="btn btn-primary">Analice su caso con nosotros</Link>
            </section>
        </>
    );
};

export default Experience;
