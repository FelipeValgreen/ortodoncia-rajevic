import OrtognaticaGuide from '../../views/OrtognaticaGuide';

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guía Definitiva de Cirugía Ortognática y Casos Complejos",
  "description": "Explicación detallada del proceso quirúrgico, ortodoncia pre-quirúrgica temporalidad, y abordaje de asimetrías faciales severas en Santiago de Chile.",
  "author": {
    "@type": "Person",
    "name": "Dr. Zdenko Rajevic"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la cirugía ortognática?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una intervención maxilofacial que corrige deformidades dento-cráneo-maxilofaciales severas. Mueve los maxilares (superior, inferior o ambos) a su posición correcta cuando la discrepancia es tan grande que los puros brackets o alineadores no pueden compensarla."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué necesito ortodoncia antes de la cirugía?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La ortodoncia pre-quirúrgica dura entre 12 y 18 meses. Su objetivo no es lograr una sonrisa bonita en ese momento, sino alinear los dientes en base a sus respectivos huesos basales. A veces la mordida empeora intencionalmente antes de la cirugía para que, en pabellón, cuando el cirujano mueva los huesos, los dientes encajen perfectamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una cirugía ortognática en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un tratamiento integral (Ortodoncia + Honorarios de Cirujanos Maxilofaciales + Clínicas) es una inversión importante. Dependiendo de su plan de Isapre o cobertura PAD, los costos de pabellón pueden mitigarse. La ortodoncia pre y post quirúrgica suele valorizarse de forma separada al equipo médico."
      }
    }
  ]
};

export const metadata = {
  title: 'Guía de Cirugía Ortognática en Chile | Tratamiento y Costos',
  description: 'Lo que nadie le dice sobre la ortodoncia pre y post quirúrgica. Guía clínica para casos complejos, labio leporino y asimetrías maxilares con el Dr. Rajevic.',
  openGraph: {
    title: 'Guía de Cirugía Ortognática en Chile | Tratamiento y Costos',
    description: 'Lo que nadie le dice sobre la ortodoncia pre y post quirúrgica. Guía clínica para casos complejos, labio leporino y asimetrías maxilares con el Dr. Rajevic.',
    images: ['/assets/dr-rajevic.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <OrtognaticaGuide />
    </>
  );
}
