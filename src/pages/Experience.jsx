import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Referente Clínico</span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '2rem' }}>
                        Donde otros ven problemas,<br /> nosotros vemos soluciones.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                        Gran parte de nuestra práctica está dedicada a corregir tratamientos que no alcanzaron sus objetivos o a resolver casos que fueron desahuciados por su complejidad.
                    </p>
                </div>
            </section>

            {/* Second Opinion Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Especialistas en Segunda Opinión</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                ¿Lleva años con brackets y no ve avances? ¿Su mordida  se siente incómoda después del tratamiento? La ortodoncia no debe ser un proceso eterno ni doloroso.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2.5rem' }}>
                                El Dr. Rajevic analiza casos detenidos o fallidos para identificar el error diagnóstico original y replantear la estrategia hacia la solución definitiva.
                            </p>
                            <Link to="/contacto" className="btn btn-primary">
                                Solicitar revisión de caso
                            </Link>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '3rem', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Señales de alerta</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>• Tratamientos que superan los 3 años sin término.</li>
                                <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>• Espacios que se abren nuevamente al terminar.</li>
                                <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>• Dolor articular (ATM) o chasquidos que no existían antes.</li>
                                <li>• Dientes que se ven "inclinados" hacia adelante.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complex Cases */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ padding: '0 0 2rem', borderBottom: '1px solid var(--color-border)', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Casos de Alta Complejidad</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ortodoncia Pre-Quirúrgica</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                                Preparación para Cirugía Ortognática. Trabajamos en coordinación estrecha con cirujanos maxilofaciales para corregir asimetrías esqueletales severas.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Pacientes Periodontales</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                                Manejo de dientes con soporte óseo reducido. Aplicamos biomecánica de fuerzas ligeras para alinear sin dañar los tejidos de soporte.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Rehabilitación Oral</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                                Ordenamiento estratégico de pilares dentales para permitir que el rehabilitador coloque implantes o coronas en la posición ideal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;
