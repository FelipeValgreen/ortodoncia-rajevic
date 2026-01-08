import React from 'react';
import { Link } from 'react-router-dom';

const Diagnosis = () => {
    return (
        <>
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
                <div className="container">
                    <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                        Nuestra Filosofía
                    </span>
                    <h1 style={{ marginBottom: '2rem', maxWidth: '20ch' }}>El diagnóstico es la diferencia entre un resultado temporal y uno definitivo.</h1>
                    <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '65ch' }}>
                        En Ortodoncia Rajevic, nunca comenzamos un tratamiento sin antes entender profundamente la anatomía y función de cada paciente.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>¿Por qué el 90% del éxito ocurre antes de poner los brackets?</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Muchos pacientes llegan a nuestra consulta con tratamientos fallidos o recidivas (los dientes se volvieron a chuecar).
                                Casi siempre, la causa no fue el aparato utilizado, sino un diagnóstico que no consideró la raíz del problema.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Un diente chueco es solo un síntoma. El problema real puede estar en la estructura ósea, la musculatura, la respiración o la articulación.
                                Si solo movemos dientes sin corregir la causa, el problema volverá.
                            </p>
                        </div>
                        <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '4px' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Nuestro Proceso Diagnóstico</h3>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>01.</span>
                                    <span>Análisis Clínico y Funcional completo.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>02.</span>
                                    <span>Estudio de imágenes (Radiografías, Escáner, Fotos).</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>03.</span>
                                    <span>Montaje en articulador (si es necesario) para evaluar la mordida real.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>04.</span>
                                    <span>Planificación Digital y presentación del caso al paciente.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="container text-center">
                    <h3 style={{ marginBottom: '1.5rem' }}>No adivine. Diagnostique.</h3>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                        La certeza tiene un valor incalculable en salud.
                    </p>
                    <Link to="/contacto" className="btn btn-primary">Solicita un diagnóstico profesional</Link>
                </div>
            </section>
        </>
    );
};

export default Diagnosis;
