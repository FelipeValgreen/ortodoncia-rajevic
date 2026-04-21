import SecondOpinion from '../../views/SecondOpinion';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo debo pedir una segunda opinión en ortodoncia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Debería considerar una segunda opinión si: lleva más de 3 años en tratamiento sin progresos visibles, le han propuesto extracciones dentarias sin explicación clara, siente dolor constante en la ATM (articulación temporomandibular), su mordida empeoró durante el tratamiento, o simplemente tiene dudas sobre el diagnóstico o plan de tratamiento. Una segunda opinión nunca está de más cuando se trata de su salud."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye la evaluación de segunda opinión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incluye un examen clínico completo, análisis de sus radiografías y registros previos, evaluación de la articulación temporomandibular (ATM), revisión del plan de tratamiento actual, y diagnóstico honesto sobre el estado real de su caso. Le entregaremos un informe detallado con opciones realistas para continuar, corregir o replantear su tratamiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se cobra por la segunda opinión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La consulta de segunda opinión tiene un valor diferenciado que incluye el tiempo de análisis profundo de su caso, revisión de imágenes previas y entrega de informe escrito. Si decide continuar el tratamiento con nosotros, este valor se descuenta del costo total. En casos de complejidad extrema o rescate de tratamientos fallidos, evaluamos cada situación individualmente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si mi tratamiento actual está mal planificado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si detectamos problemas en la planificación o ejecución del tratamiento actual, le explicaremos honestamente las opciones: continuar con ajustes menores, replantear completamente el enfoque, o en casos severos, evaluar si es necesario revertir algunos movimientos antes de proceder correctamente. Nuestro compromiso es con su salud bucal, no con validar tratamientos incorrectos."
      }
    }
  ]
};

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Segunda Opinión y Casos Complejos",
  "description": "Auditoría clínica y re-diagnóstico de tratamientos de ortodoncia estancados o mal planificados.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Orthodontic"
  }
};

export const metadata = {
  title: 'Segunda Opinión en Ortodoncia | Diagnóstico Especializado Vitacura',
  description: '¿Tratamiento estancado? Ofrecemos una auditoría clínica integral y un re-diagnóstico honesto para corregir el rumbo clínico. Salve su inversión y su salud.',
  openGraph: {
    title: 'Segunda Opinión en Ortodoncia | Diagnóstico Especializado Vitacura',
    description: '¿Tratamiento estancado? Ofrecemos una auditoría clínica integral y un re-diagnóstico honesto para corregir el rumbo clínico. Salve su inversión y su salud.',
    images: ['/assets/hero_complex_cases.png'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <SecondOpinion />
    </>
  );
}