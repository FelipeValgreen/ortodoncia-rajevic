import CookiePolicy from '../../views/CookiePolicy';

export const metadata = {
  title: 'Política de Cookies | Ortodoncia Rajevic',
  description: 'Información sobre el uso de cookies en nuestro sitio web para mejorar su experiencia de navegación.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function Page() {
  return <CookiePolicy />;
}