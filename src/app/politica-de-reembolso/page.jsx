import RefundPolicy from '../../views/RefundPolicy';

export const metadata = {
  title: 'Política de Reembolso | Ortodoncia Rajevic',
  description: 'Información sobre nuestra política de reembolsos y cancelaciones para servicios clínicos.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function Page() {
  return <RefundPolicy />;
}