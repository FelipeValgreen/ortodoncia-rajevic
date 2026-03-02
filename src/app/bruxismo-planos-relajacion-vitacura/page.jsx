import Bruxism from '../../views/Bruxism';

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Tratamiento de Bruxismo y ATM",
  "description": "Diagnóstico y tratamiento del bruxismo y trastornos de la articulación temporomandibular mediante planos de relajación rígidos tipo Míchigan.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Dentistry"
  }
};

export const metadata = {
  title: 'Tratamiento Bruxismo Vitacura | Plano de Relajación Míchigan',
  description: 'Clínica experta en bruxismo y dolor de ATM en Vitacura. Detenga el desgaste dental y el dolor de cabeza con un plano de relajación médico a medida.',
  openGraph: {
    title: 'Tratamiento Bruxismo Vitacura | Plano de Relajación Míchigan',
    description: 'Clínica experta en bruxismo y dolor de ATM en Vitacura. Detenga el desgaste dental y el dolor de cabeza con un plano de relajación médico a medida.',
    images: ['/assets/hero_bruxism.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <Bruxism />
    </>
  );
}