import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

const ChildOrtho = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Ortopedia Maxilar & Ortodoncia
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Ortodoncia Infantil en Vitacura: <br />
                        <span style={{ color: 'var(--color-primary)' }}>Guiando el crecimiento correcto.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '700px' }}>
                        Detectar a tiempo es prevenir cirugías futuras. En Vitacura, nos especializamos en guiar el desarrollo óseo de niños y adolescentes antes de que los problemas se vuelvan permanentes.
                    </p>
                    <Link to="/contacto" className="btn btn-primary">
                        Agenda tu diagnóstico
                    </Link>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>El problema no son solo los "dientes chuecos"</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Muchos padres esperan a que caigan todos los dientes de leche para consultar. <strong>Ese es el error más común.</strong>
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Los problemas de mordida a menudo tienen un origen esquelético (huesos muy angostos o mandíbulas retraídas). Si estos no se corrigen durante el "peak de crecimiento" (entre los 6 y 11 años), la única solución en la adultez podría ser la cirugía.
                            </p>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Señales de alerta en niños:</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Respiración bucal (duerme con la boca abierta).</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Chupete o succión de dedo más allá de los 3 años.</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Mandíbula que se desvía al cerrar.</li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--color-secondary)' }}>•</span> Dientes apiñados o falta de espacio evidente.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnosis Importance */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', color: 'white' }}>¿Por qué el diagnóstico es urgente?</h2>
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '3rem', opacity: '0.9' }}>
                        Porque el hueso es maleable solo durante la infancia. Un diagnóstico certero a los 7 años nos permite usar el propio crecimiento del niño a nuestro favor, logrando resultados más estables y tratamientos más cortos en el futuro.
                    </p>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', listStyle: 'none' }}>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evita extracciones</h4>
                            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Generamos espacio expandiendo el paladar, no sacando dientes sanos.</p>
                        </li>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Mejora la respiración</h4>
                            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Un paladar más ancho mejora el flujo de aire nasal y el sueño.</p>
                        </li>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Perfil Armónico</h4>
                            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Guiamos el mentón y el maxilar para una estética facial balanceada.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Rajevic Method */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }}>Método Clínico Rajevic: Ortopedia Funcional</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--color-text-light)' }}>
                        No nos limitamos a pegar brackets. Usamos aparatos ortopédicos funcionales que estimulan o frenan el crecimiento óseo según sea necesario.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                        <div className="card">
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 'bold' }}>1. Estudio</div>
                            <p>Radiografías de mano (carpales) para determinar la edad ósea exacta y el potencial de crecimiento restante.</p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 'bold' }}>2. Diseño</div>
                            <p>Selección del aparato específico (Disyuntores, Máscaras faciales, Pistas) según el patrón genético del niño.</p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 'bold' }}>3. Monitoreo</div>
                            <p>Controles periódicos para ajustar la fuerza a medida que el niño crece. Acompañamiento cercano.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dr. Authority & Differentiation */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
                        <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" alt="Dr. Zdenko Rajevic" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto' }} />
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Expertise del Dr. Rajevic</h3>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                "Tratar a un niño es una responsabilidad mayor que tratar a un adulto, porque estamos definiendo su rostro para toda la vida. Por eso no delegamos; cada control es supervisado clínicamente."
                            </p>
                            <Link to="/dr-zdenko-rajevic" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>Conocer trayectoria</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Tiene dudas sobre la mordida de su hijo?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Una evaluación temprana (7 años) no significa necesariamente comenzar tratamiento, pero sí entrega tranquilidad y control.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Agenda una evaluación preventiva
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ChildOrtho;
