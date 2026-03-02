import OralRehab from '../../views/OralRehab';

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Ortodoncia Pre-Protésica y Rehabilitación Oral Compleja",
  "description": "Preparación ortodóncica interdisciplinaria para la posterior colocación de implantes, coronas o carillas dentales.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Dentistry"
  }
};

export const metadata = {
  title: 'Rehabilitación Oral e Implantes Vitacura | Ortodoncia Pre-Protésica',
  description: 'Trabajo interdisciplinario para casos complejos en Vitacura. Ortodoncia para preparar espacios antes de implantes o carillas. Recupere la función de su boca.',
  openGraph: {
    title: 'Rehabilitación Oral e Implantes Vitacura | Ortodoncia Pre-Protésica',
    description: 'Trabajo interdisciplinario para casos complejos en Vitacura. Ortodoncia para preparar espacios antes de implantes o carillas. Recupere la función de su boca.',
    images: ['/assets/hero_rehab.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <OralRehab />
    </>
  );
}