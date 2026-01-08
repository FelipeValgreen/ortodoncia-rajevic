import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h1 style={{ marginBottom: '2rem' }}>Agenda tu evaluación</h1>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Estamos ubicados en Vitacura, Santiago. Atendemos de Lunes a Viernes previa cita.
                            </p>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Contacto Directo</h3>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Teléfono:</strong> +56 9 1234 5678</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>WhatsApp:</strong> +56 9 1234 5678</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Correo:</strong> contacto@ortodonciarajevic.cl</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Dirección:</strong> Av. Vitacura 1234, Oficina 505, Vitacura.</p>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '4px' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Formulario de Solicitud</h3>
                            <form>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nombre Completo</label>
                                    <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                                    <input type="email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Teléfono</label>
                                    <input type="tel" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Motivo de consulta</label>
                                    <textarea rows="4" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>Solicitar hora</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
