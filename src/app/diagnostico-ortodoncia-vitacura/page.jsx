import Diagnosis from '../../views/Diagnosis';

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Diagnóstico de Precisión Facial y Dental",
  "description": "Análisis clínico, radiográfico y articular exhaustivo para la planificación predecible en tratamientos de ortodoncia.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Orthodontic"
  }
};

export const metadata = {
  title: 'Diagnóstico Clínico de Precisión en Ortodoncia | Vitacura',
  description: 'Lo invisible no se cura. Realizamos un análisis articular, periodontal y cefalométrico exhaustivo antes de colocar aparatos. Evite sorpresas y dolores futuros.',
  openGraph: {
    title: 'Diagnóstico Clínico de Precisión en Ortodoncia | Vitacura',
    description: 'Lo invisible no se cura. Realizamos un análisis articular, periodontal y cefalométrico exhaustivo antes de colocar aparatos. Evite sorpresas y dolores futuros.',
    images: ['/assets/hero_diagnosis_real.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <Diagnosis />
    </>
  );
}