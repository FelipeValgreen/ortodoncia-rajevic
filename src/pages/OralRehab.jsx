import React from 'react';
import { Link } from 'react-router-dom';

const OralRehab = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Trabajo Interdisciplinario
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Rehabilitación Oral en Vitacura: <br />
                        <span style={{ color: 'var(--color-primary)' }}>La base de una restauración perfecta.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '700px' }}>
                        Antes de colocar implantes, carillas o coronas, los cimientos deben estar alineados. Trabajamos junto a su rehabilitador para optimizar el espacio y la posición de sus dientes.
                    </p>
                    <Link to="/contacto" className="btn btn-primary">
                        Agenda tu diagnóstico
                    </Link>
                </div>
            </section>

            {/* The Problem */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Ortodoncia Pre-Protésica</h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '3rem' }}>
                        Intentar restaurar una boca con dientes volcados o espacios irregulares suele llevar a resultados estéticos pobres y biológicamente inestables. La ortodoncia prepara "el terreno" para que el trabajo del rehabilitador brille.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div className="card">
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Verticalización de Molares</h4>
                            <p style={{ fontSize: '0.95rem' }}>Enderezamos molares inclinados (común tras pérdidas dentales) para permitir la colocación de un implante recto y fuerte.</p>
                        </div>
                        <div className="card">
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Redistribución de Espacios</h4>
                            <p style={{ fontSize: '0.95rem' }}>Organizamos los espacios con precisión milimétrica para que las carillas o coronas tengan proporciones estéticas ideales.</p>
                        </div>
                        <div className="card">
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Extrusión Ortodóncica</h4>
                            <p style={{ fontSize: '0.95rem' }}>Técnicas para regenerar hueso y encía de forma natural traccionando la raíz antes de un implante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dr Authority */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Coordinación Clínica</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        El Dr. Rajevic habla el mismo idioma que su rehabilitador oral. Entendemos de oclusión, guías caninas y estética gingival, asegurando que nuestro tratamiento ortodóncico facilite y mejore el pronóstico de su rehabilitación final.
                    </p>
                    <Link to="/dr-zdenko-rajevic" style={{ color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'underline' }}>
                        Conocer experiencia del Dr. Rajevic
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Planificación Integral</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Si está pensando en renovar su sonrisa con carillas o implantes, consúltenos primero.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Solicita evaluación conjunta
                    </Link>
                </div>
            </section>
        </>
    );
};

export default OralRehab;
