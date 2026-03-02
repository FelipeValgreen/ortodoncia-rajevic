import Home from '../views/Home';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Clínica Ortodoncia Rajevic",
  "image": "https://www.ortodonciarajevic.cl/assets/dr-rajevic.webp",
  "@id": "https://www.ortodonciarajevic.cl",
  "url": "https://www.ortodonciarajevic.cl",
  "telephone": "+56933427916",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Las Hualtatas 8999",
    "addressLocality": "Vitacura",
    "addressRegion": "Santiago",
    "addressCountry": "CL"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  }
};

export const metadata = {
  title: 'Clínica Ortodoncia en Vitacura | Dr. Rajevic | Invisalign y Estética',
  description: 'Ortodoncista experto en Vitacura, Santiago. Especialistas en Invisalign, ortodoncia invisible para adultos, niños y casos complejos. Agende su evaluación.',
  openGraph: {
    title: 'Clínica Ortodoncia en Vitacura | Dr. Rajevic | Invisalign y Estética',
    description: 'Ortodoncista experto en Vitacura, Santiago. Especialistas en Invisalign, ortodoncia invisible para adultos, niños y casos complejos. Agende su evaluación.',
    images: [
      {
        url: '/assets/hero_home_v2.webp',
        width: 1200,
        height: 630,
        alt: 'Clínica Ortodoncia Rajevic',
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}