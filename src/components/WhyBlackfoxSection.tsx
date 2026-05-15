'use client';

import { motion } from 'framer-motion';

export default function WhyBlackfoxSection() {
  const features = [
    {
      icon: '✓',
      title: 'Competitive Pricing',
      description: 'Volume discounts up to 40% with no middleman costs',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Same-day shipping in UAE, 2-day delivery in India',
    },
    {
      icon: '🔒',
      title: 'Quality Assurance',
      description: '100% authentic products with manufacturer warranty',
    },
    {
      icon: '🌍',
      title: 'Dual Location',
      description: 'Dubai HQ + India facility for optimal reach',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-charcoal">
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
            Why <span className="text-gold">Blackfox Phones</span>
          </h2>
          <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
            We're committed to providing the best wholesale experience for your business
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-8 bg-dark rounded-lg border border-gold/10 hover:border-gold/40 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:text-gold transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border */}
              <div className="mt-6 h-1 bg-gradient-to-r from-gold to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
