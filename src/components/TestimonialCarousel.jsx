"use client";
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) setVisibleCount(4);
            else if (window.innerWidth >= 1024) setVisibleCount(3);
            else if (window.innerWidth >= 768) setVisibleCount(2);
            else setVisibleCount(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(testimonials.length / visibleCount);

    const changePage = (newIndex) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsAnimating(false), 350);
    };

    const nextSlide = () => changePage((currentIndex + 1) % totalPages);
    const prevSlide = () => changePage((currentIndex - 1 + totalPages) % totalPages);

    const currentTestimonials = testimonials.slice(
        currentIndex * visibleCount,
        currentIndex * visibleCount + visibleCount
    );

    return (
        <div style={{ position: 'relative', padding: '0 1rem' }}>
            <div
                ref={containerRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                    gap: '2rem',
                    marginBottom: '2rem',
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
            >
                {currentTestimonials.map((t, idx) => (
                    <div key={`${currentIndex}-${idx}`}>
                        <TestimonialCard {...t} />
                    </div>
                ))}
            </div>

            {/* Controls */}
            {testimonials.length > visibleCount && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <button
                        onClick={prevSlide}
                        aria-label="Ver testimonios anteriores"
                        style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'white', color: 'var(--color-primary)',
                            cursor: 'pointer', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                        <BsChevronLeft />
                    </button>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => changePage(i)}
                                aria-label={`Ir al grupo de testimonios ${i + 1}`}
                                style={{
                                    width: i === currentIndex ? '32px' : '24px',
                                    height: '32px', borderRadius: '16px', border: 'none',
                                    backgroundColor: 'transparent', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', padding: 0, margin: '0 2px',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <div style={{
                                    width: i === currentIndex ? '24px' : '12px',
                                    height: '4px', borderRadius: '2px',
                                    backgroundColor: i === currentIndex ? 'var(--color-secondary)' : '#ddd',
                                    transition: 'all 0.3s'
                                }} />
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        aria-label="Ver siguientes testimonios"
                        style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'white', color: 'var(--color-primary)',
                            cursor: 'pointer', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                        <BsChevronRight />
                    </button>
                </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a
                    href="https://www.google.com/search?q=ortodoncia+rajevic+vitacura#lrd=0x9662cbe8b2c4d8e5:0x52482e1eef45cda1,1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '1rem', fontWeight: '600', color: 'var(--color-primary)',
                        textDecoration: 'none', borderBottom: '2px solid var(--color-secondary)',
                        paddingBottom: '0.2rem', transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                        <path d="M24.48 48.0016C30.9525 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                        <path d="M11.0051 28.5997C10.0139 25.6457 10.0139 22.3557 11.0051 19.4017V13.2198H3.033A24.0137 24.0137 0 0 0 0 24.0007C0 27.999 1.09241 31.657 3.033 34.7816L11.0051 28.5997Z" fill="#FBBC04" />
                        <path d="M24.48 9.49932C27.9016 9.4446 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4418 -0.0632324 24.48 0.000305176C15.4056 0.000305176 7.10718 5.11516 3.03296 13.2206L11.0051 19.4025C12.901 13.7233 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                    </svg>
                    Ver todas las reseñas en Google
                </a>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
