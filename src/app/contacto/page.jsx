import Contact from '../../views/Contact';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Ortodoncia Rajevic",
  "image": "https://ortodonciarajevic.cl/assets/dr-rajevic.webp",
  "url": "https://ortodonciarajevic.cl",
  "telephone": "+56933427916",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Las Hualtatas 8999",
    "addressLocality": "Vitacura",
    "addressRegion": "RM",
    "postalCode": "7630000",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.403,
    "longitude": -70.596
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
  },
  "priceRange": "$$"
};

export const metadata = {
  title: 'Contacto y Reservas | Clínica Ortodoncia Rajevic Vitacura',
  description: 'Agende su evaluación con el Dr. Zdenko Rajevic en Vitacura. Ortodoncia estética, invisible e infantil. Envíenos un mensaje o contáctenos por WhatsApp.',
  openGraph: {
    title: 'Contacto y Reservas | Clínica Ortodoncia Rajevic Vitacura',
    description: 'Agende su evaluación con el Dr. Zdenko Rajevic en Vitacura. Ortodoncia estética, invisible e infantil. Envíenos un mensaje o contáctenos por WhatsApp.',
    images: ['/assets/dr-rajevic.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />
    </>
  );
}