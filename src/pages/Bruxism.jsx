import React from 'react';
import { Link } from 'react-router-dom';

const Bruxism = () => {
    return (
        <>
            <section style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Salud Articular (ATM)
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Bruxismo y Planos en Vitacura: <br />
                        <span style={{ color: 'var(--color-primary)' }}>Proteja su articulación y sus dientes.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '700px' }}>
                        El dolor mandibular y el desgaste dentario son señales de un sistema en estrés. No normalice el dolor. Un plano de relajación bien ajustado es la primera línea de defensa.
                    </p>
                    <Link to="/contacto" className="btn btn-primary">
                        Agenda tu diagnóstico
                    </Link>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Más que "rechinar" los dientes</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                El bruxismo no tratado puede llevar a consecuencias irreversibles: fracturas de dientes, retracción de encías, dolores de cabeza crónicos y daño permanente en la Articulación Temporomandibular (ATM).
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Síntomas frecuentes:</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '1.05rem', color: 'var(--color-text-light)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Dolor o cansancio muscular al despertar.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Dificultad para abrir la boca por completo.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Chasquidos o "conejos" en la mandíbula.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Desgaste visible en los bordes de los dientes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnosis & Method */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }}>El Plano de Relajación: Un Dispositivo de Precisión</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
                        Un plano no es un simple pedazo de acrílico. Es una órtesis que debe ser ajustada micra a micra para desprogramar la musculatura y permitir que la articulación descanse en su posición fisiológica.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div className="card">
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Diseño Rígido y Ajustado</h4>
                            <p>Utilizamos acrílico termocurado rígido (no de silicona blanda), que es el estándar de oro médico para dar estabilidad real a la mandíbula.</p>
                        </div>
                        <div className="card">
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Control de Contactos</h4>
                            <p>El Dr. Rajevic ajusta los puntos de contacto para asegurar que su mordida sea balanceada y no provoque más tensión muscular.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>¿Por qué evitar los planos "blandos" o de farmacia?</h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                        Los dispositivos blandos o prefabricados suelen incentivar el "masticamiento" inconsciente durante la noche, empeorando la fatiga muscular y pudiendo alterar irreversiblemente su mordida.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Recupere su calidad de sueño</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Un diagnóstico articular correcto es el primer paso para vivir sin dolor.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Agenda tu evaluación de ATM
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Bruxism;
