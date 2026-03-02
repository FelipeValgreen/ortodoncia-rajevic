import AdultOrtho from '../../views/AdultOrtho';

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Ortodoncia para Adultos",
  "description": "Tratamientos de ortodoncia estética, invisible y lingual diseñados específicamente para pacientes adultos corporativos.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Orthodontic"
  }
};

export const metadata = {
  title: 'Ortodoncia para Adultos en Vitacura | Invisalign y Brackets Estéticos',
  description: 'Nunca es tarde para la sonrisa perfecta. Ortodoncia invisible (Invisalign), zafiro y lingual para adultos in Vitacura. Tratamientos discretos y eficientes.',
  openGraph: {
    title: 'Ortodoncia para Adultos en Vitacura | Invisalign y Brackets Estéticos',
    description: 'Nunca es tarde para la sonrisa perfecta. Ortodoncia invisible (Invisalign), zafiro y lingual para adultos in Vitacura. Tratamientos discretos y eficientes.',
    images: ['/assets/hero_adult.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <AdultOrtho />
    </>
  );
}