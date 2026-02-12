import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
    React.useEffect(() => {
        document.title = "Política de Reembolsos | Ortodoncia Rajevic";
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
                    <h1 style={{ marginBottom: '2rem' }}>Política de Reembolsos</h1>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Última actualización: 11 de Febrero, 2026
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>1. Servicios Clínicos</h3>
                        <p>
                            En <strong>Ortodoncia Rajevic</strong>, nos comprometemos a entregar la más alta calidad en atención odontológica. Debido a la naturaleza de nuestros servicios de salud:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Tratamientos Realizados:</strong> No se realizan reembolsos por prestaciones clínicas ya ejecutadas (consultas, higienes, instalaciones de aparatos, sesiones de control), dado que insumos y tiempo profesional ya han sido utilizados.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Pagos Anticipados:</strong> Si usted ha pagado un tratamiento por adelantado y decide no realizarlo por razones personales o médicas justificadas, se evaluará la devolución del monto correspondiente a las prestaciones NO realizadas, descontando gastos administrativos si aplicara.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>2. Ortodoncia e Invisalign</h3>
                        <p>
                            Para tratamientos de ortodoncia, incluyendo alineadores Invisalign:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Costos de Laboratorio:</strong> Una vez enviados los escáneres o impresiones al laboratorio (ej. para fabricación de alineadores Invisalign), el costo asociado a la fabricación de los aparatos no es reembolsable, ya que son dispositivos personalizados de uso único.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Suspensión de Tratamiento:</strong> Si el paciente decide suspender su tratamiento a mitad de curso, deberá cancelar las mensualidades o prestaciones realizadas hasta la fecha de suspensión.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>3. Garantías</h3>
                        <p>
                            Garantizamos la calidad técnica de nuestros procedimientos. Si un tratamiento (ej. una restauración o un aparato fijo) presenta fallas por defectos de material o técnica dentro de un plazo razonable (6 meses), realizaremos la reparación o reposición sin costo adicional, siempre que el paciente haya seguido las indicaciones de cuidado y asistido a sus controles.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h3>4. Contacto</h3>
                        <p>
                            Para solicitar una revisión de su caso administrativo o financiero, por favor contacte a nuestra administración:
                            <br /><br />
                            <strong>Ortodoncia Rajevic</strong><br />
                            Email: contacto@ortodonciarajevic.cl<br />
                            Teléfono: +56 9 3342 7916
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default RefundPolicy;
