import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section className="section" style={{ padding: '6rem 0 3rem' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '1.5rem' }}>Tratamientos</h1>
                    <p style={{ maxWidth: '60ch', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        No vendemos aparatos. Ofrecemos soluciones clínicas basadas en evidencia y experiencia, seleccionando la herramienta adecuada para cada caso.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gap: '4rem' }}>

                        {/* Service Item */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem' }}>Ortodoncia en Niños y Adolescentes</h3>
                            </div>
                            <div>
                                <p style={{ marginBottom: '1rem' }}>
                                    La "Ortopedia" o "Ortodoncia Interceptiva" permite guiar el crecimiento de los huesos de la cara.
                                    Detectar problemas a tiempo (7-9 años) puede evitar extracciones o cirugías en la adultez.
                                </p>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', color: 'var(--color-text-light)' }}>
                                    <li>Expansión palatina</li>
                                    <li>Avance mandibular</li>
                                    <li>Corrección de hábitos</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem' }}>Ortodoncia Correctiva Adultos</h3>
                            </div>
                            <div>
                                <p style={{ marginBottom: '1rem' }}>
                                    Nunca es tarde. Los dientes se pueden mover a cualquier edad si el hueso y las encías están sanos.
                                    Nos especializamos en casos complejos que requieren coordinación con otros especialistas (rehabilitadores, periodoncistas).
                                </p>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem' }}>Invisalign y Ortodoncia Invisible</h3>
                            </div>
                            <div>
                                <p style={{ marginBottom: '1rem' }}>
                                    Alineadores transparentes hechos a medida. Una opción estética y cómoda, planificada digitalmente por el Dr. Rajevic.
                                    Recuerde: Invisalign es la herramienta; el éxito depende de quién planifica los movimientos.
                                </p>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem' }}>Bruxismo y ATM</h3>
                            </div>
                            <div>
                                <p style={{ marginBottom: '1rem' }}>
                                    El dolor articular y el desgaste dentario deben ser tratados antes de mover los dientes.
                                    Confeccionamos planos de relajación y terapias para estabilizar la articulación temporomandibular.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', textAlign: 'center' }}>
                <div className="container">
                    <h3 style={{ marginBottom: '1rem' }}>¿Dudas sobre qué necesita?</h3>
                    <Link to="/contacto" className="btn btn-primary">Agenda una evaluación diagnóstica</Link>
                </div>
            </section>
        </>
    );
};

export default Services;
