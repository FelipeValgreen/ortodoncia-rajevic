import ChildOrtho from '../../views/ChildOrtho';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es la edad ideal para empezar ortodoncia en niños?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La primera evaluación debería realizarse alrededor de los 6-7 años, cuando erupcionan los primeros molares permanentes. En algunos casos, la ortopedia maxilar puede iniciarse desde los 4 años para guiar el crecimiento óseo. La intervención temprana puede prevenir problemas más complejos en la adolescencia y reducir significativamente los tiempos de tratamiento futuros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es la ortopedia maxilar y por qué es importante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La ortopedia maxilar trabaja sobre el crecimiento de los huesos, no solo sobre la posición de los dientes. Durante la infancia, los huesos aún están en desarrollo y son moldeables, lo que permite corregir problemas como paladar estrecho, mandíbula pequeña o mordidas cruzadas. Este tipo de tratamiento solo es efectivo durante la etapa de crecimiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo dura el tratamiento de ortodoncia infantil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del tipo de tratamiento. La ortopedia maxilar (Fase 1) suele durar 12-18 meses. Si posteriormente se requiere ortodoncia con brackets (Fase 2), puede durar 18-24 meses adicionales. Sin embargo, al intervenir tempranamente, muchos casos se resuelven solo con la primera fase o con tratamientos más cortos en la adolescencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Mi hijo necesita ortodoncia incluso si tiene dientes de leche?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, en algunos casos es necesario. Problemas como mordida cruzada, hábitos de succión del pulgar, respiración bucal o paladar estrecho deben tratarse durante la dentición mixta (dientes de leche y permanentes). Esperar a que caigan todos los dientes de leche puede hacer que el tratamiento sea más complejo, largo y costoso."
      }
    }
  ]
};

const specialtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Ortodoncia Infantil y Ortopedia Maxilar",
  "description": "Tratamiento temprano y ortopedia maxilar para guiar el crecimiento correctivo en niños y evitar cirugías futuras.",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Orthodontic"
  }
};

export const metadata = {
  title: 'Ortodoncia Infantil Vitacura | Ortopedia Maxilar | Clínica Rajevic',
  description: 'Especialistas en ortodoncia infantil en Vitacura. Tratamiento temprano y ortopedia maxilar para guiar el crecimiento correctivo y evitar cirugías futuras. Agende la evaluación de su hijo.',
  openGraph: {
    title: 'Ortodoncia Infantil Vitacura | Ortopedia Maxilar | Clínica Rajevic',
    description: 'Especialistas en ortodoncia infantil en Vitacura. Tratamiento temprano y ortopedia maxilar para guiar el crecimiento correctivo y evitar cirugías futuras. Agende la evaluación de su hijo.',
    images: ['/assets/hero_child.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      <ChildOrtho />
    </>
  );
}