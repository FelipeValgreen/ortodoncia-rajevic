import BlogIndex from '../../views/BlogIndex';

export const metadata = {
  title: 'Blog de Ortodoncia y Salud Dental | Artículos Especializados Vitacura',
  description: 'Infórmese con nuestros artículos clínicos sobre Invisalign, ortodoncia estética, bruxismo y más. Guías redactadas por especialistas de Ortodoncia Rajevic.',
  openGraph: {
    title: 'Blog de Ortodoncia y Salud Dental | Artículos Especializados Vitacura',
    description: 'Infórmese con nuestros artículos clínicos sobre Invisalign, ortodoncia estética, bruxismo y más. Guías redactadas por especialistas de Ortodoncia Rajevic.',
    images: ['/assets/hero_home_v2.webp'],
  },
};

export default function Page() {
  return <BlogIndex />;
}