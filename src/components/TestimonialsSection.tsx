'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Mehta',
      title: 'Director, RetailHub UAE',
      text: 'Blackfox is our go-to wholesaler. Competitive pricing, quality products, and exceptional service. They handle our bulk orders with precision.',
      rating: 5,
    },
    {
      name: 'Sara Al-Mansouri',
      title: 'CEO, Tech Solutions Resellers',
      text: 'The fastest delivery times in the region. We receive orders in Dubai same-day and they always arrive in perfect condition.',
      rating: 5,
    },
    {
      name: 'Priya Kumar',
      title: 'Founder, Digital Ventures',
      text: 'Outstanding support team and transparent pricing. They made scaling our e-commerce business seamless with drop-shipping options.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6 md:px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gold">500+ Retailers</span>
          </h2>
          <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
            See what our partners across the MENA region and South Asia have to say
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-charcoal rounded-lg p-8 md:p-12 border border-gold/20"
          >
            {/* Quote Mark */}
            <div className="text-6xl text-gold mb-4 opacity-50">"</div>

            {/* Text */}
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-gold text-xl">
                  ⭐
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="border-t border-gold/20 pt-6">
              <h4 className="text-lg font-bold text-white">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-text-gray text-sm">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="p-3 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            ←
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gold/30 w-2'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="p-3 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            →
          </motion.button>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-text-gray text-sm mb-8 uppercase tracking-wide font-semibold">
            Trusted Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: '#d4af37' }}
                className="flex items-center justify-center h-16 rounded-lg border border-gold/10 hover:border-gold/40 transition-all duration-300 bg-charcoal cursor-pointer"
              >
                <span className="text-2xl">🏢</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
