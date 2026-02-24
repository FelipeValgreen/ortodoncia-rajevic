import './../index.css';
import Script from 'next/script';
import Layout from '../components/Layout';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata = {
    title: 'Clínica Ortodoncia Rajevic',
    description: 'Clínica de ortodoncia en Vitacura liderada por el Dr. Zdenko Rajevic. Expertos en ortodoncia invisible, lingual y casos complejos. Agenda tu evaluación.',
    authors: [{ name: 'Ortodoncia Rajevic' }],
    keywords: 'ortodoncia vitacura, invisalign vitacura, ortodoncia infantil, ortodoncia adultos, segunda opinión ortodoncia, bruxismo, rehabilitación oral, Dr. Zdenko Rajevic',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/icon-144x144.png', sizes: '144x144', type: 'image/png' },
            { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180' },
        ],
    },
    verification: {
        google: '6Uh51YpZ6okjTKOw3Q3SYg_u4AH-e8vx5UMtCIwwm1w',
    },
};

export const viewport = {
    themeColor: '#1A3A5C',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Allow zooming for accessibility
};

export default function RootLayout({ children }) {
    return (
        <html lang="es-CL" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="preload" as="image" href="/src/assets/hero_child.webp" type="image/webp" />
            </head>
            <body>
                <Script id="gtm" strategy="afterInteractive">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MBF6FVWM');
          `}
                </Script>

                <Script src="https://www.googletagmanager.com/gtag/js?id=G-FHFNNCYZZL" strategy="afterInteractive" />
                <Script id="ga" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FHFNNCYZZL');
          `}
                </Script>

                <Script id="clarity" strategy="afterInteractive">
                    {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "vg0t3ukpiw");
          `}
                </Script>

                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBF6FVWM" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>

                <Layout>
                    <div id="root">{children}</div>
                </Layout>
            </body>
        </html>
    );
}
