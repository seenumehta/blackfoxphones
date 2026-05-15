'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    quantityRange: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', phone: '', businessType: '', quantityRange: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6 md:px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Request Your <span className="text-gold">Wholesale Quote</span>
          </h2>
          <p className="text-text-gray text-base md:text-lg">
            Get in touch with our team to discuss your wholesale needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-dark rounded-lg p-8 md:p-12 border border-gold/20"
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-gray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-text-dark-gray"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-gray mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-text-dark-gray"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Company and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-gray mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-text-dark-gray"
                  placeholder="Your company"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-gray mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-text-dark-gray"
                  placeholder="+971 XX XXX XXXX"
                />
              </motion.div>
            </div>

            {/* Business Type and Quantity Range Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-gray mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                >
                  <option value="">Select your business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="corporate">Corporate</option>
                  <option value="distributor">Distributor</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-gray mb-2">
                  Quantity Range *
                </label>
                <select
                  name="quantityRange"
                  value={formData.quantityRange}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                >
                  <option value="">Select quantity range</option>
                  <option value="50-100">50 - 100 units</option>
                  <option value="100-500">100 - 500 units</option>
                  <option value="500-1000">500 - 1000 units</option>
                  <option value="1000+">1000+ units</option>
                </select>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{
                  backgroundColor: '#d4af37',
                  color: '#000000',
                }}
                className="w-full md:w-auto px-10 py-4 font-bold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Quote Request
              </motion.button>
            </motion.div>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-semibold"
            >
              ✓ Quote request submitted! We'll contact you soon.
            </motion.div>
          )}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-gold/20 pt-8 mt-8"
          >
            <p className="text-center text-text-gray mb-6 text-sm">
              Or reach out directly through any of these channels
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-gold font-bold mb-2">Email</h4>
                <a href="mailto:info@blackfoxphones.com" className="text-white hover:text-gold transition-colors">
                  info@blackfoxphones.com
                </a>
              </div>
              <div>
                <h4 className="text-gold font-bold mb-2">Phone (Dubai)</h4>
                <a href="tel:+971XXXXXXXXX" className="text-white hover:text-gold transition-colors">
                  +971 XX XXX XXXX
                </a>
              </div>
              <div>
                <h4 className="text-gold font-bold mb-2">WhatsApp</h4>
                <a href="https://wa.me/971XXXXXXXXX" className="text-white hover:text-gold transition-colors">
                  +971 XXXX XXXX
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
