
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getPostBySlug, getLatestPosts } from '../data/blogData';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsCalendar, BsPerson } from 'react-icons/bs';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Get suggestions (excluding current)
    const suggestions = getLatestPosts(3).filter(p => p.id !== post.id).slice(0, 2);

    return (
        <>
            <SEO
                title={post.metaTitle}
                description={post.metaDescription}
                breadcrumbs={[
                    { name: 'Blog', path: '/blog' },
                    { name: post.title, path: `/blog/${post.slug}` }
                ]}
            />

            <article className="blog-post-page">
                {/* Header */}
                <div className="section" style={{ backgroundColor: '#f8fafc', paddingBottom: '0' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)', marginBottom: '2rem', textDecoration: 'none', fontWeight: '500' }}>
                            <BsArrowLeft /> Volver al Blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span style={{
                                display: 'inline-block',
                                backgroundColor: 'rgba(57, 169, 219, 0.1)',
                                color: 'var(--color-secondary)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem'
                            }}>
                                {post.category}
                            </span>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                {post.title}
                            </h1>
                            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <BsPerson /> {post.author}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <BsCalendar /> {post.date}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Content */}
                <div className="section">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div style={{ marginBottom: '3rem' }}>
                            <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 'var(--border-radius)', maxHeight: '500px', objectFit: 'cover' }} />
                        </div>

                        <div
                            className="blog-content"
                            style={{
                                fontSize: '1.15rem',
                                lineHeight: '1.8',
                                color: 'var(--color-text)'
                            }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share / CTA */}
                        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f0f9ff', borderRadius: 'var(--border-radius)', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>¿Tienes dudas sobre tu caso?</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Agenda una evaluación inicial y conversemos sobre la mejor opción para ti.</p>
                            <Link to="/contacto" className="btn btn-primary">Agendar Evaluación</Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* Read More */}
            {suggestions.length > 0 && (
                <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                    <div className="container">
                        <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>También te puede interesar</h3>
                        <div className="grid-2" style={{ gap: '2rem', justifyContent: 'center' }}>
                            {suggestions.map(p => <div key={p.id}><Link to={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}><div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{p.title}</div></Link><div style={{ color: 'var(--color-text-light)' }}>{p.excerpt}</div></div>)}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BlogPost;
