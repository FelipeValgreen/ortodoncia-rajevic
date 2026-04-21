import { useEffect, useRef } from 'react';

/**
 * Lightweight replacement for Framer Motion's whileInView.
 * Adds a CSS class when the element enters the viewport.
 * @param {string} className - CSS class to add when visible (default: 'animate-in')
 * @param {IntersectionObserverInit} options - IntersectionObserver options
 * @returns {{ ref }} - ref to attach to the element
 */
export function useScrollAnimation(className = 'animate-in', options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    el.classList.add(className);
                    observer.unobserve(el); // Only animate once
                }
            });
        }, options);

        observer.observe(el);
        return () => observer.disconnect();
    }, [className]);

    return { ref };
}
