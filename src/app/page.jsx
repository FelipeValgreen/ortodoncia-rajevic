import Home from '../views/Home';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Clínica Ortodoncia Rajevic",
  "image": "https://www.ortodonciarajevic.cl/assets/dr-rajevic.webp",
  "@id": "https://www.ortodonciarajevic.cl",
  "url": "https://www.ortodonciarajevic.cl",
  "telephone": "+56988897033",
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
  title: 'Ortodoncia en Vitacura | Dr. Zdenko Rajevic | Invisalign y Estética Dental',
  description: 'Clínica de ortodoncia líder en Vitacura, Santiago. Especialistas en Invisalign, ortodoncia para adultos y niños. Diagnóstico integral con tecnología 3D. Agende su cita.',
  openGraph: {
    title: 'Ortodoncia en Vitacura | Dr. Zdenko Rajevic | Invisalign y Estética Dental',
    description: 'Más de 35 años de experiencia en ortodoncia estética y funcional en Vitacura. Especialistas en Invisalign y casos complejos. ¡Sonría con confianza!',
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