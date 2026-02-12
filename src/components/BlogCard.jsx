
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const BlogCard = ({ post }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
            className="blog-card"
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            }}
        >
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-secondary)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                }}>
                    {post.category}
                </div>
                <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    lineHeight: '1.4',
                    color: 'var(--color-primary)'
                }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                    </Link>
                </h3>
                <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-light)',
                    marginBottom: '1.5rem',
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                }}>
                    Leer artículo <BsArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
