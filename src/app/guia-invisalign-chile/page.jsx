import InvisalignGuide from '../../views/InvisalignGuide';

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guía Definitiva de Invisalign en Chile: Precios, Tiempos y Resultados",
  "description": "Análisis clínico completo sobre el uso de alineadores invisibles Invisalign, elaborado por especialistas certificados.",
  "author": {
    "@type": "Person",
    "name": "Dr. Zdenko Rajevic"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Clínica Ortodoncia Rajevic"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es exactamente Invisalign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Invisalign es un sistema robótico de ortodoncia que utiliza una secuencia de placas de poliuretano transparentes (SmartTrack) impresas en 3D para mover gradualmente los dientes hacia la posición ideal planificada digitalmente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta Invisalign en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El valor de Invisalign en Chile varía según la complejidad del caso (Express, Lite, Comprehensive). En promedio, los tratamientos oscilan entre $1.800.000 y $3.500.000 CLP. Es fundamental una evaluación clínica con Escáner iTero para obtener un presupuesto exacto."
      }
    }
  ]
};

export const metadata = {
  title: 'Todo sobre Invisalign en Chile | Guía Completa de Alineadores Invisibles',
  description: 'Descubra precios, tiempos de tratamiento, cuidados y comparativas exhaustivas sobre Invisalign. Respuestas directas preparadas por el Dr. Zdenko Rajevic.',
  openGraph: {
    title: 'Todo sobre Invisalign en Chile | Guía Completa de Alineadores Invisibles',
    description: 'Descubra precios, tiempos de tratamiento, cuidados y comparativas exhaustivas sobre Invisalign. Respuestas directas preparadas por el Dr. Zdenko Rajevic.',
    images: ['/assets/hero_invisalign.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <InvisalignGuide />
    </>
  );
}