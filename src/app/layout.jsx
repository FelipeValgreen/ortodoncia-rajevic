import './../index.css';
import Script from 'next/script';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';
import CookieConsent from '../components/CookieConsent';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap', preload: true });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap', preload: true });

export const metadata = {
    title: {
        default: 'Clínica Ortodoncia Rajevic | Vitacura, Santiago',
        template: '%s | Ortodoncia Rajevic'
    },
    description: 'Especialistas en ortodoncia invisible Invisalign, ortodoncia lingual y casos complejos en Vitacura. Clínica Dr. Zdenko Rajevic con más de 35 años de experiencia.',
    authors: [{ name: 'Dr. Zdenko Rajevic' }],
    keywords: 'ortodoncia vitacura, dentista vitacura, invisalign santiago, ortodoncia invisible chile, ortodoncia infantil vitacura, frenillos invisibles, Dr. Zdenko Rajevic, clínica dental vitacura',
    metadataBase: new URL('https://www.ortodonciarajevic.cl'),
    alternates: {
        canonical: '/',
    },
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
    openGraph: {
        title: 'Clínica Ortodoncia Rajevic',
        description: 'Clínica de ortodoncia en Vitacura liderada por el Dr. Zdenko Rajevic. Expertos en ortodoncia invisible, lingual y casos complejos.',
        url: 'https://www.ortodonciarajevic.cl',
        siteName: 'Ortodoncia Rajevic',
        images: [
            {
                url: '/assets/hero_home_v2.webp',
                width: 1200,
                height: 630,
                alt: 'Ortodoncia Rajevic Vitacura',
            },
        ],
        locale: 'es-CL',
        type: 'website',
    },
    verification: {
        google: [
            '6Uh51YpZ6okjTKOw3Q3SYg_u4AH-e8vx5UMtCIwwm1w',
            'rRjdvBpy2S5hNAzoF2AhN-HVGhRluKIn-jsQzMpmPEg'
        ],
    },
};

export const viewport = {
    themeColor: '#1A3A5C',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="es-CL" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <Script id="consent-mode" strategy="beforeInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
            });
          `}
                </Script>
                <Script id="gtm" strategy="lazyOnload">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MBF6FVWM');
          `}
                </Script>
                {/* Meta Pixel Code */}
                <Script id="facebook-pixel" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'REPLACE_WITH_YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
                </Script>
                <noscript>
                    <img height="1" width="1" style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=REPLACE_WITH_YOUR_PIXEL_ID&ev=PageView&noscript=1"
                    />
                </noscript>
                <Script id="clarity" strategy="afterInteractive">
                    {`(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window,document,"clarity","script","vg0t3ukpiw");`}
                </Script>
                {/* Calendly script */}
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            </head>
            <body>
                <ScrollToTop />


                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBF6FVWM" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>

                <Layout>
                    <div id="root">{children}</div>
                </Layout>
                <CookieConsent />
                {/* Metricool Pixel */}
                <img src="https://tracker.metricool.com/c3po.jpg?hash=17253b9d209320b77af554c41cf9cbd0" alt="" style={{ display: 'none', position: 'absolute', left: '-9999px' }} loading="lazy" decoding="async" />
            </body>
        </html>
    );
}
