
import React from 'react';
import SEO from '../components/SEO';
import BlogGrid from '../components/BlogGrid';
import { blogPosts } from '../data/blogData';
import { motion } from 'framer-motion';

const BlogIndex = () => {
    return (
        <>
            <SEO
                title="Blog de Ortodoncia y Salud Dental | Dr. Rajevic Vitacura"
                description="Consejos de ortodoncia, guías de cuidado para Invisalign y brackets, y noticias sobre salud bucal del equipo del Dr. Zdenko Rajevic."
                breadcrumbs={[{ name: 'Blog', path: '/blog' }]}
            />

            <section className="section" style={{ paddingBottom: '2rem', backgroundColor: '#f8fafc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="uppercase-tracking" style={{ color: 'var(--color-secondary)' }}>Actualidad & Pacientes</span>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Blog de Ortodoncia</h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                            Información confiable escrita por especialistas para ayudarte a tomar mejores decisiones sobre tu salud dental.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <BlogGrid posts={blogPosts} />
                </div>
            </section>
        </>
    );
};

export default BlogIndex;
