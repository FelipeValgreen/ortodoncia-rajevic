import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    // Responsive visible count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setVisibleCount(3);
            else if (window.innerWidth >= 768) setVisibleCount(2);
            else setVisibleCount(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / visibleCount));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / visibleCount)) % Math.ceil(testimonials.length / visibleCount));
    };

    // Calculate which items to show
    // Simple logic: we show chunks of `visibleCount` for simplicity in this carousel version
    // A better approach for "infinite" loop is harder, let's stick to page-based for stability
    const currentTestimonials = testimonials.slice(
        currentIndex * visibleCount,
        currentIndex * visibleCount + visibleCount
    );

    // Check if we need to pad with start items to fill the row (optional, usually not needed if we just limit index)

    return (
        <div style={{ position: 'relative', padding: '0 1rem' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                <AnimatePresence mode='wait'>
                    {currentTestimonials.map((t, idx) => (
                        <motion.div
                            key={`${currentIndex}-${idx}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                            <TestimonialCard {...t} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Controls */}
            {testimonials.length > visibleCount && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <button
                        onClick={prevSlide}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'white',
                            color: 'var(--color-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                        <BsChevronLeft />
                    </button>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                style={{
                                    width: i === currentIndex ? '24px' : '12px',
                                    height: '4px',
                                    borderRadius: '2px',
                                    border: 'none',
                                    backgroundColor: i === currentIndex ? 'var(--color-secondary)' : '#ddd',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'white',
                            color: 'var(--color-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                        <BsChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestimonialCarousel;
