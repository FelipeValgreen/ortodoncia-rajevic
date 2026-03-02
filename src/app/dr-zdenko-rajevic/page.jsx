import Profile from '../../views/Profile';

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Zdenko Rajevic",
  "jobTitle": "Especialista en Ortodoncia y Ortopedia Dento Maxilar",
  "worksFor": {
    "@type": "Dentist",
    "name": "Clínica Ortodoncia Rajevic"
  },
  "alumniOf": "Universidad de Chile"
};

export const metadata = {
  title: 'Dr. Zdenko Rajevic | Especialista en Ortodoncia y Ortopedia Maxilar',
  description: 'Conozca al Dr. Rajevic. Más de 35 años resolviendo casos complejos de ortodoncia, cirugía ortognática e Invisalign en Vitacura con enfoque biológico.',
  openGraph: {
    title: 'Dr. Zdenko Rajevic | Especialista en Ortodoncia y Ortopedia Maxilar',
    description: 'Conozca al Dr. Rajevic. Más de 35 años resolviendo casos complejos de ortodoncia, cirugía ortognática e Invisalign en Vitacura con enfoque biológico.',
    images: ['/assets/dr-rajevic.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Profile />
    </>
  );
}