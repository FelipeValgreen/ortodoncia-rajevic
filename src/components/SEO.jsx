import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, breadcrumbs = [] }) => {
    const location = useLocation();
    const cleanPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
    const currentUrl = `https://ortodonciarajevic.cl${cleanPath}`;

    // Base breadcrumb (Home)
    const breadcrumbList = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://ortodonciarajevic.cl"
        },
        ...breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 2,
            "name": crumb.name,
            "item": `https://ortodonciarajevic.cl${crumb.path}`
        }))
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbList
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
