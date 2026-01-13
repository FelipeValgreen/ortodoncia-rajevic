import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

const Diagnosis = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
                <div className="container">
                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--color-accent)' }}>Nuestro Enfoque Principal</span>
                    <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', maxWidth: '800px', color: 'white' }}>
                        El Diagnóstico es el Tratamiento.
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '2rem', maxWidth: '700px', opacity: '0.9', lineHeight: '1.6' }}>
                        Un aparato bien colocado en un diagnóstico incorrecto solo lleva más rápido al fracaso.
                        Por eso, nuestra inversión principal está en entender antes de actuar.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Lo que no se ve, no se cura</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Muchos pacientes llegan a nuestra consulta buscando "frenillos" o "alineadores". Sin embargo, estos son solo dispostivos de fuerza. Quien decide dónde aplicar esa fuerza y por qué, es el ortodoncista.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                                En Ortodoncia Rajevic, el proceso diagnóstico no es un trámite administrativo de 15 minutos. Es una fase de ingeniería clínica donde analizamos:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }}>01</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Salud Articular (ATM)</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Antes de mover dientes, debemos asegurar que la articulación de la mandíbula esté estable y sana. Ignorar esto es la causa #1 de dolores y recidivas.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }}>02</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Soporte Óseo y Periodontal</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Los dientes se mueven a través del hueso. Evaluamos la densidad y calidad de sus tejidos para asegurar movimientos seguros.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-secondary)', fontSize: '1.5rem' }}>03</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Función y Estética Facial</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>No solo miramos dientes rectos. Miramos cómo su sonrisa se integra con su rostro y cómo funciona al hablar y comer.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '3rem', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Nuestra Evaluación</h3>
                            <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
                                Para emitir un diagnóstico responsable, realizamos un estudio completo que incluye:
                            </p>
                            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><BsCheckCircle color="var(--color-secondary)" /> Escáner Intraoral 3D</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><BsCheckCircle color="var(--color-secondary)" /> Fotografías Clínicas</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><BsCheckCircle color="var(--color-secondary)" /> Radiografías Digitales</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><BsCheckCircle color="var(--color-secondary)" /> Montaje en Articulador (si aplica)</li>
                            </ul>

                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                    "Un diagnóstico correcto ahorra años de tratamientos fallidos."
                                </p>
                                <Link to="/contacto" className="btn btn-primary" style={{ width: '100%' }}>
                                    Solicitar Evaluación Diagnóstica
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Diagnosis;
