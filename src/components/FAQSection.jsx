import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = ({ faqs, title = "Preguntas Frecuentes" }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generar Schema markup para FAQs
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <div className="container">
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '2.5rem',
                    color: 'var(--color-primary)'
                }}>
                    {title}
                </h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                marginBottom: '1rem',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    textAlign: 'left',
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: 'var(--color-primary)',
                                    transition: 'color 0.3s'
                                }}
                            >
                                <span>{faq.question}</span>
                                <span style={{
                                    fontSize: '1.5rem',
                                    transition: 'transform 0.3s',
                                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}>
                                    +
                                </span>
                            </button>

                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        padding: '0 1.5rem 1.5rem 1.5rem',
                                        color: '#555',
                                        lineHeight: '1.8'
                                    }}
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
