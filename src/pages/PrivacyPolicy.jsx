import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    React.useEffect(() => {
        document.title = "Política de Privacidad | Ortodoncia Rajevic";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ marginBottom: '2rem' }}>Política de Privacidad</h1>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Última actualización: 11 de Febrero, 2026
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>1. Introducción</h3>
                        <p>
                            En <strong>Ortodoncia Rajevic</strong> ("nosotros", "nuestro"), respetamos su privacidad y estamos comprometidos con la protección de sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>2. Información que Recopilamos</h3>
                        <p>Podemos recopilar y procesar los siguientes datos:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, número de teléfono y RUT, proporcionados voluntariamente al agendar una cita o completar formularios de contacto.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Datos de Salud:</strong> Información clínica básica necesaria para la evaluación o tratamiento, tratada con estricta confidencialidad médica conforme a la Ley N° 19.628 sobre Protección de la Vida Privada.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, tiempo de visita y páginas vistas (a través de cookies).</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>3. Uso de la Información</h3>
                        <p>Utilizamos su información para los siguientes fines:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Gestionar y agendar sus horas médicas.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Comunicarnos con usted sobre recordatorios de citas o seguimiento de tratamientos.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Mejorar nuestro sitio web y la experiencia del paciente.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Cumplir con obligaciones legales y normativas de salud.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>4. Protección de Datos</h3>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Solo el personal clínico y administrativo autorizado tiene acceso a su información sensible.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>5. Sus Derechos</h3>
                        <p>
                            Usted tiene derecho a solicitar el acceso, rectificación o eliminación de sus datos personales en cualquier momento. Para ejercer estos derechos, puede contactarnos directamente a través de los canales oficiales.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>6. Contacto</h3>
                        <p>
                            Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
                            <br /><br />
                            <strong>Ortodoncia Rajevic</strong><br />
                            Av. Vitacura 5951, Oficina 403, Vitacura, Chile<br />
                            Email: contacto@ortodonciarajevic.cl
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
