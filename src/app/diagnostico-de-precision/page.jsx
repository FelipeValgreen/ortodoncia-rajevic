import PrecisionDiagnosis from '../../views/PrecisionDiagnosis';

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Diagnóstico de Ortodoncia de Precisión",
  "description": "Evaluación clínica integral que incluye el análisis de la articulación temporomandibular (ATM), soporte óseo periodontal y simulación digital 3D.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Orthodontic"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué incluye el Diagnóstico de Precisión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incluye una sesión de 45 minutos con el Dr. Zdenko Rajevic, análisis de la articulación temporomandibular (ATM), examen de soporte óseo periodontal, escáner intraoral 3D con simulación de mordida y entrega de un plan clínico con presupuesto escrito cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el valor del diagnóstico y tiene reembolso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El diagnóstico tiene un valor de $45.000 CLP. Emitimos boleta médica para reembolso en todas las Isapres y contamos con bono electrónico. Con reembolso, el costo final puede ser de $0. Además, si decides realizar el tratamiento con nosotros, este valor se abona íntegramente al costo total."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué es importante evaluar la articulación ATM antes de la ortodoncia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mover los dientes sin respetar el eje natural de la articulación temporomandibular (ATM) puede provocar dolores crónicos de cabeza, cuello o mandíbula, además de recidivas (dientes que vuelven a torcerse)."
      }
    }
  ]
};

export const metadata = {
  title: 'Diagnóstico Clínico de Precisión en Ortodoncia | Dr. Zdenko Rajevic',
  description: 'Mover dientes sin diagnóstico daña tu articulación. Evaluación completa de 45 min con el Dr. Zdenko Rajevic. Simulación 3D y cobertura Isapre.',
  alternates: {
    canonical: '/diagnostico-de-precision',
  },
  openGraph: {
    title: 'Diagnóstico Clínico de Precisión en Ortodoncia | Dr. Zdenko Rajevic',
    description: 'Mover dientes sin diagnóstico daña tu articulación. Evaluación completa de 45 min con el Dr. Zdenko Rajevic. Simulación 3D y cobertura Isapre.',
    url: 'https://www.ortodonciarajevic.cl/diagnostico-de-precision',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PrecisionDiagnosis />
    </>
  );
}
