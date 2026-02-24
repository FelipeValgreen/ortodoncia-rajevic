import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Emular variables mágicas __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.ortodonciarajevic.cl';

// Rutas estáticas clave
const staticRoutes = [
    '/',
    '/ortodoncia-infantil-vitacura',
    '/ortodoncia-adultos-vitacura',
    '/invisalign-vitacura',
    '/rehabilitacion-oral-vitacura',
    '/bruxismo-planos-relajacion-vitacura',
    '/segunda-opinion-ortodoncia',
    '/diagnostico-ortodoncia-vitacura',
    '/servicios',
    '/dr-zdenko-rajevic',
    '/contacto',
    '/blog'
];

// Rutas dinámicas (Blogs)
const blogDataPath = path.resolve(__dirname, '../src/data/blogData.js');
let blogSlugs = [];

try {
    const rawData = fs.readFileSync(blogDataPath, 'utf8');
    // Regex cruda para extraer slugs
    const regex = /slug:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(rawData)) !== null) {
        blogSlugs.push(`/blog/${match[1]}`);
    }
} catch (e) {
    console.error("No se pudo leer la data del blog:", e);
}

const allRoutes = [...staticRoutes, ...blogSlugs];

const generateSitemap = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
            .map((route) => {
                const priority = route === '/' ? '1.0' : route.includes('/blog/') ? '0.6' : '0.8';
                const changefreq = route === '/blog' ? 'weekly' : 'monthly';
                return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(publicPath, xml, 'utf8');
    console.log(`✅ Sitemap generado con éxito en ${publicPath}`);
};

const generateRobots = () => {
    const robotsContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: ${BASE_URL}/sitemap.xml
`;
    const publicPath = path.resolve(__dirname, '../public/robots.txt');
    fs.writeFileSync(publicPath, robotsContent, 'utf8');
    console.log(`✅ robots.txt generado con éxito en ${publicPath}`);
};

generateSitemap();
generateRobots();
