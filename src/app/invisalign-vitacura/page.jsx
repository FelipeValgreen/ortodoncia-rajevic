import InvisalignPage from '../../views/InvisalignPage';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta Invisalign en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo de Invisalign varía según la complejidad del caso y la duración del tratamiento. En promedio, puede ir desde $2.500.000 a $4.500.000 CLP. Durante la evaluación inicial le entregaremos un presupuesto detallado. Aceptamos pago con Isapre, tarjetas de crédito y ofrecemos facilidades de pago."
      }
    },
    {
      "@type": "Question",
      "name": "¿Invisalign funciona para casos complejos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Con los avances tecnológicos actuales, Invisalign puede tratar la mayoría de los casos complejos incluyendo apiñamiento severo, mordidas abiertas, sobremordida y maloclusiones. Sin embargo, cada caso requiere evaluación individual para determinar si es el tratamiento más adecuado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura el tratamiento con Invisalign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La duración promedio es de 12 a 18 meses, aunque casos simples pueden resolverse en 6-9 meses y casos complejos pueden extenderse hasta 24 meses. El tiempo exacto depende de la complejidad de su caso y la disciplina en el uso de los alineadores (22 horas diarias)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es verdad que Invisalign es más rápido que los brackets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesariamente. La velocidad del tratamiento depende más de la biomecánica y planificación que del sistema utilizado. En algunos casos Invisalign puede ser igual o más rápido, pero en otros los brackets tradicionales pueden ser más eficientes. Lo importante es elegir el tratamiento correcto para su caso específico."
      }
    }
  ]
};

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Ortodoncia Invisible Invisalign",
  "description": "Tratamiento de ortodoncia mediante alineadores transparentes planificados digitalmente en 3D.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Orthodontic"
  }
};

export const metadata = {
  title: 'Invisalign Vitacura | Ortodoncia Invisible Certificada | Clínica Rajevic',
  description: 'Especialista Invisalign en Vitacura. Alineadores transparentes planificados 3D para máxima estética y rapidez sin metales. Agende su simulación de sonrisa.',
  openGraph: {
    title: 'Invisalign Vitacura | Ortodoncia Invisible Certificada | Clínica Rajevic',
    description: 'Especialista Invisalign en Vitacura. Alineadores transparentes planificados 3D para máxima estética y rapidez sin metales. Agende su simulación de sonrisa.',
    images: ['/assets/hero_invisalign.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <InvisalignPage />
    </>
  );
}