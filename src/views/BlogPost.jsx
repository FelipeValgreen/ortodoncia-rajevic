"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { getPostBySlug, getLatestPosts } from '../data/blogData';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsCalendar, BsPerson } from 'react-icons/bs';

const BlogPost = ({ slug }) => {
    const post = getPostBySlug(slug);

    if (!post) {
        // Fallback for Next.js to handle missing posts
        return (
            <div style={{ textAlign: 'center', padding: '10rem 0' }}>
                <h2>Post no encontrado</h2>
                <Link href="/blog">Volver al Blog</Link>
            </div>
        );
    }

    // Get suggestions (excluding current)
    const suggestions = getLatestPosts(3).filter(p => p.id !== post.id).slice(0, 2);

    return (
        <>
            <article className="blog-post-page">
                {/* Header */}
                <div className="section" style={{ backgroundColor: '#f8fafc', paddingBottom: '0' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)', marginBottom: '2rem', textDecoration: 'none', fontWeight: '500' }}>
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

                <div className="section">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div style={{ marginBottom: '3rem', position: 'relative', width: '100%', height: '500px' }}>
                            <Image src={post.image} alt={post.title} fill sizes="(max-width: 800px) 100vw, 800px" style={{ borderRadius: 'var(--border-radius)', objectFit: 'cover' }} />
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
                            <Link href="/contacto" className="btn btn-primary">Agendar Evaluación</Link>
                        </div>
                    </div>
                </div >
            </article >

            {/* Read More */}
            {
                suggestions.length > 0 && (
                    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                        <div className="container">
                            <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>También te puede interesar</h3>
                            <div className="grid-2" style={{ gap: '2rem', justifyContent: 'center' }}>
                                {suggestions.map(p => <div key={p.id}><Link href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}><div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{p.title}</div></Link><div style={{ color: 'var(--color-text-light)' }}>{p.excerpt}</div></div>)}
                            </div>
                        </div>
                    </section >
                )
            }
        </>
    );
};

export default BlogPost;
