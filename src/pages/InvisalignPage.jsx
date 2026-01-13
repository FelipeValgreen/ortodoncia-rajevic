import React from 'react';
import { Link } from 'react-router-dom';

const InvisalignPage = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Ortodoncia Digital
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Invisalign en Vitacura: <br />
                        <span style={{ color: 'var(--color-primary)' }}>El diseño lo hace el doctor, no el plástico.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '700px' }}>
                        Invisalign es la herramienta más avanzada del mundo, pero sigue siendo solo una herramienta. En Ortodoncia Rajevic, el éxito no viene de la marca de los alineadores, sino de la planificación clínica del Dr. Rajevic.
                    </p>
                    <Link to="/contacto" className="btn btn-primary">
                        Agenda tu diagnóstico
                    </Link>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Cualquiera puede escanear, pocos saben planificar.</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Hoy en día, es fácil encontrar ofertas de "Invisalign Rápido". El peligro es creer que el software hace todo el trabajo.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Un plan automatizado puede alinear los dientes en la pantalla, pero si no respeta el hueso y la articulación, el resultado clínico será inestable o dañino.
                            </p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>La diferencia Rajevic:</h4>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                                Nosotros no aprobamos el "Plan Automático" de Invisalign. El Dr. Rajevic modifica cada punto de presión, cada attachment y cada secuencia de movimiento basándose en su radiografía y examen clínico real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invisalign */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }}>Ventajas Clínicas (Bien Utilizado)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div className="card">
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Higiene Superior</h3>
                            <p>Al ser removible, permite uso de hilo dental y cepillado normal, reduciendo riesgo de caries y gingivitis durante el tratamiento.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Fuerzas Controladas</h3>
                            <p>Ideal para pacientes con poco soporte óseo, ya que el alineador empuja el diente de forma mucho más suave que un bracket.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>Visualización Previa</h3>
                            <p>Le mostramos su resultado final en 3D antes de comenzar, validando juntos el objetivo estético.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authority */}
            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ fontSize: '4rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>ClinCheck® Pro</div>
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Expertise Digital</h3>
                        <p style={{ fontSize: '1.1rem' }}>
                            El Dr. Rajevic utiliza el software ClinCheck como una herramienta de arquitectura dental, no solo de visualización. Cada movimiento es calculado para asegurar que la raíz del diente se mueva dentro del hueso de forma segura.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>¿Es usted candidato?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: '0.9' }}>
                        No todos los casos se resuelven solo con alineadores. Necesita un diagnóstico honesto para saber si esta es su mejor opción.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem', backgroundColor: 'white', color: 'var(--color-primary)', borderColor: 'white' }}>
                        Evaluación Invisalign
                    </Link>
                </div>
            </section>
        </>
    );
};

export default InvisalignPage;
