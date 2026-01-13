import React from 'react';

const Profile = () => {
    return (
        <>
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>

                        {/* Image Side */}
                        <div>
                            <div style={{ width: '100%', height: '500px', backgroundColor: '#e2e8f0', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" alt="Dr. Zdenko Rajevic" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
                            </div>

                            <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '8px' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Credenciales</h4>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: 'var(--color-text)', display: 'grid', gap: '0.8rem' }}>
                                    <li><strong>Cirujano Dentista</strong> <br /><span style={{ color: 'var(--color-text-light)' }}>Universidad de Chile</span></li>
                                    <li><strong>Especialista en Ortodoncia</strong> <br /><span style={{ color: 'var(--color-text-light)' }}>Universidad de Chile</span></li>
                                    <li><strong>Magíster en Ortodoncia</strong> <br /><span style={{ color: 'var(--color-text-light)' }}>Universidad Andrés Bello</span></li>
                                    <li><strong>35+ Años de Práctica Clínica</strong></li>
                                </ul>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Director Clínico</span>
                            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>Dr. Zdenko Rajevic</h1>

                            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '3rem' }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    La ortodoncia moderna a menudo cae en la trampa de la inmediatez. Se venden sonrisas como productos terminados, ignorando que cada paciente es un sistema biológico único y complejo.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Mi práctica se ha construido sobre un principio opuesto: <strong>el respeto profundo por la biología y la función</strong>. No veo aparatos, veo articulaciones, músculos y huesos. Los dientes son solo la consecuencia de ese equilibrio.
                                </p>
                                <p>
                                    Dedico mi tiempo a los casos diagnósticos complejos, a las segundas opiniones y a los pacientes que buscan la tranquilidad de saber que están en manos de un experto que no improvisa.
                                </p>
                            </div>

                            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Filosofía Clínica</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                                    <div>
                                        <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Diagnóstico sobre Técnica</h5>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                                            La mejor técnica del mundo (Invisalign, Lingual) fracasa si el diagnóstico inicial es erróneo. Primero el qué, luego el cómo.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Estabilidad a Largo Plazo</h5>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                                            El objetivo no es solo alinear dientes hoy, sino asegurar que permanezcan sanos y estables dentro de 10, 20 o 30 años.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
