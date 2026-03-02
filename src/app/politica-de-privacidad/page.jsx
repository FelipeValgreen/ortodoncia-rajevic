import PrivacyPolicy from '../../views/PrivacyPolicy';

export const metadata = {
  title: 'Política de Privacidad | Ortodoncia Rajevic',
  description: 'Conozca cómo tratamos sus datos personales y protegemos su privacidad en Clínica Ortodoncia Rajevic.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function Page() {
  return <PrivacyPolicy />;
}