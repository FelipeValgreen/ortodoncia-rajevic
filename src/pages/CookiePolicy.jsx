import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';

const CookiePolicy = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="Política de Cookies | Ortodoncia Rajevic"
                description="Política de uso de cookies y tecnologías de seguimiento."
                breadcrumbs={[{ name: 'Política de Cookies', path: '/politica-de-cookies' }]}
            />
            <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 style={{ marginBottom: '2rem' }}>Política de Cookies</h1>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                            Última actualización: 11 de Febrero, 2026
                        </p>

                        <section style={{ marginBottom: '3rem' }}>
                            <h3>1. ¿Qué son las Cookies?</h3>
                            <p>
                                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tableta o móvil) cuando visita nuestro sitio web. No causan daño a su equipo y nos ayudan a ofrecerle una mejor experiencia de navegación.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h3>2. ¿Qué Cookies utilizamos?</h3>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', marginTop: '1rem' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                            <th style={{ textAlign: 'left', padding: '1rem' }}>Nombre</th>
                                            <th style={{ textAlign: 'left', padding: '1rem' }}>Tipo</th>
                                            <th style={{ textAlign: 'left', padding: '1rem' }}>Propósito</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '1rem' }}>_ga, _gid</td>
                                            <td style={{ padding: '1rem' }}>Analítica</td>
                                            <td style={{ padding: '1rem' }}>Google Analytics. Nos ayuda a entender cómo los visitantes interactúan con el sitio web (páginas visitadas, tiempo en el sitio).</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '1rem' }}>cookie_consent</td>
                                            <td style={{ padding: '1rem' }}>Funcional</td>
                                            <td style={{ padding: '1rem' }}>Guarda su preferencia sobre la aceptación de cookies para no mostrar el aviso nuevamente.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h3>3. Gestión de Cookies</h3>
                            <p>
                                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Google Chrome</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Mozilla Firefox</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="https://support.apple.com/es-cl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Safari</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Microsoft Edge</a></li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h3>4. Más Información</h3>
                            <p>
                                Para más detalles sobre cómo manejamos sus datos personales, consulte nuestra <Link to="/politica-de-privacidad" style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>Política de Privacidad</Link>.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CookiePolicy;
