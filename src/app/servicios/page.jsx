import Services from '../../views/Services';

export const metadata = {
  title: 'Especialidades en Ortodoncia | Clínica Rajevic Vitacura',
  description: 'Conozca nuestros servicios clínicos: Ortodoncia Infantil, Adultos, ortodoncia Invisible (Invisalign), Rehabilitación Oral y Diagnóstico de Segunda Opinión.',
  openGraph: {
    title: 'Especialidades en Ortodoncia | Clínica Rajevic Vitacura',
    description: 'Conozca nuestros servicios clínicos: Ortodoncia Infantil, Adultos, ortodoncia Invisible (Invisalign), Rehabilitación Oral y Diagnóstico de Segunda Opinión.',
    images: ['/assets/hero_diagnosis.webp'],
  },
};

export default function Page() {
  return <Services />;
}