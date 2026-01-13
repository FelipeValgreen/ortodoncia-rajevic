import React from 'react';
import { Link } from 'react-router-dom';

const SecondOpinion = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Casos Complejos y Retratamientos
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'white' }}>
                        Segunda Opinión en Ortodoncia: <br />
                        <span style={{ opacity: '0.8' }}>Recupere el control de su tratamiento.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '700px', opacity: '0.9' }}>
                        Si lleva años con brackets sin ver el final, o si sus dientes se volvieron a mover tras finalizar, necesita un diagnóstico de rescate.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)', borderColor: 'white' }}>
                        Agenda tu revisión de caso
                    </Link>
                </div>
            </section>

            {/* The Problem */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>¿Por qué fallan los tratamientos?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px' }}>
                        En nuestra experiencia recibiendo casos derivados, el 90% de los fracasos no son por "falta de cooperación del paciente", sino por un <strong>error en el diagnóstico inicial</strong>.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Falta de objetivos claros</h4>
                            <p>Se empezaron a mover dientes sin visualizar dónde debían terminar, resultando en mordidas inestables que "nunca encajan".</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Ignorar la biología</h4>
                            <p>Se intentó forzar dientes en un hueso insuficiente, provocando recesión de encías (dientes largos) o reabsorción de raíces.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }}>¿Qué hacemos diferente en una Segunda Opinión?</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                        <ol style={{ listStyle: 'none', counterReset: 'item', padding: 0 }}>
                            <li style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '1.5rem' }}>
                                <span style={{ position: 'absolute', left: 0, fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.2rem' }}>1.</span>
                                <strong>Pausa y Análisis:</strong> No seguimos simplemente "apretando". Nos detenemos a re-evaluar con radiografías nuevas el estado actual de sus raíces y articulación.
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '1.5rem' }}>
                                <span style={{ position: 'absolute', left: 0, fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.2rem' }}>2.</span>
                                <strong>Diagnóstico de Causa:</strong> Identificamos por qué se detuvo el avance. ¿Hay contacto prematuro? ¿Anquilosis? ¿Hábito lingual?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '3rem' }}>
                                <span style={{ position: 'absolute', left: 0, fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.2rem' }}>3.</span>
                                <strong>Plan de Salida:</strong> Diseñamos una estrategia realista para terminar el caso de forma eficiente y segura, o para estabilizar lo logrado.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Dr Authority */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Honestidad Profesional</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                        El Dr. Rajevic es conocido por su criterio ético. Si su tratamiento actual va bien y solo requiere paciencia, se lo diremos. Si requiere un cambio de rumbo urgente, le explicaremos por qué con evidencia clínica.
                    </p>
                    <Link to="/dr-zdenko-rajevic" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>
                        Ver credenciales del Dr. Rajevic
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>No se resigne a un mal resultado</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Una mirada experta puede destrabar años de frustración.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Solicita revisión de caso
                    </Link>
                </div>
            </section>
        </>
    );
};

export default SecondOpinion;
