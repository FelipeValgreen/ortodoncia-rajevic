import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, breadcrumbs = [], schema = null }) => {
    const location = useLocation();
    const cleanPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
    const currentUrl = `https://www.ortodonciarajevic.cl${cleanPath}`;

    // Base breadcrumb (Home)
    const breadcrumbList = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.ortodonciarajevic.cl"
        },
        ...breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 2,
            "name": crumb.name,
            "item": `https://www.ortodonciarajevic.cl${crumb.path}`
        }))
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbList
    };

    const schemas = [breadcrumbSchema];
    if (schema) {
        if (Array.isArray(schema)) {
            schemas.push(...schema);
        } else {
            schemas.push(schema);
        }
    }

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
            {schemas.map((s, idx) => (
                <script
                    key={idx}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
                />
            ))}
        </Helmet>
    );
};

export default SEO;
