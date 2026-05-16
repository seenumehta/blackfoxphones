'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop")',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-dark to-dark opacity-70"></div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-4 md:px-8 py-20 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Superheading */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs md:text-sm font-semibold tracking-wide">
            Premium Wholesale Distribution
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight max-w-4xl leading-tight"
        >
          Premium <span className="text-gold">Apple</span> Accessories
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-text-gray max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Wholesale distribution from Dubai and India. Trusted by 500+ retailers across the MENA region and South Asia. 
          Competitive pricing, authentic products, and lightning-fast delivery.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-3xl mx-auto mb-12 py-8 border-y border-gold/20"
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold">10+</div>
            <div className="text-xs md:text-sm text-text-gray mt-2">Years in Business</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold">500+</div>
            <div className="text-xs md:text-sm text-text-gray mt-2">Active Clients</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold">99.2%</div>
            <div className="text-xs md:text-sm text-text-gray mt-2">On-Time Delivery</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ backgroundColor: '#d4af37', color: '#000000' }}
            className="px-8 md:px-12 py-4 font-bold rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Explore Catalog
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 md:px-12 py-4 border-2 border-silver text-white font-bold rounded-lg hover:bg-silver/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Request Quote
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
