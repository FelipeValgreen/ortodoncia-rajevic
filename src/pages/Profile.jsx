import React from 'react';

const Profile = () => {
    return (
        <>
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
                        <div style={{ backgroundColor: '#e2e2e2', height: '400px' }}>
                            {/* Photo Placeholder */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                                [Foto Retrato Dr. Rajevic]
                            </div>
                        </div>
                        <div>
                            <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                                Director Clínico
                            </span>
                            <h1 style={{ marginBottom: '2rem' }}>Dr. Zdenko Rajevic</h1>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                                "La ortodoncia moderna a menudo busca la rapidez. Mi enfoque busca la estabilidad y la salud a largo plazo."
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem' }}>Formación y Trayectoria</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)' }}>
                                        <strong>Cirujano Dentista</strong>, Universidad de Chile.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)' }}>
                                        <strong>Especialista en Ortodoncia y Ortopedia Dento Maxilofacial</strong>.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)' }}>
                                        <strong>Magíster en Ortodoncia</strong>.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)' }}>
                                        35+ años de práctica clínica exclusiva.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ marginBottom: '1rem' }}>Filosofía de Trabajo</h3>
                                <p>
                                    El Dr. Rajevic se involucra personalmente en el diagnóstico y planificación de cada paciente de la clínica.
                                    Su experiencia le permite anticipar problemas que ortodoncias más rápidas podrían pasar por alto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
