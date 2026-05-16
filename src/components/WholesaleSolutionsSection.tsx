'use client';

import { motion } from 'framer-motion';

export default function WholesaleSolutionsSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      title: 'Competitive Pricing',
      description: 'Volume discounts up to 40% Direct manufacturer rates No middleman costs',
      image: '💰',
    },
    {
      title: 'Guaranteed Authenticity',
      description: '100% Original Products Manufacturer Warranty Certificate of Authenticity',
      image: '✓',
    },
    {
      title: 'Flexible Solutions',
      description: 'Custom Packaging Available Drop-shipping Options Flexible Payment Terms',
      image: '🎁',
    },
    {
      title: 'Direct China Sourcing',
      description: 'Access to manufacturers in China Factory direct pricing Bulk ordering capabilities Custom product development',
      image: '🏭',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="solutions" className="section-padding bg-charcoal">
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
            Wholesale <span className="text-gold">Advantages</span>
          </h2>
          <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to scale your business
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-dark rounded-lg p-8 border border-gold/10 hover:border-gold/40 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                className="text-6xl mb-6 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {solution.image}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Description as bullet points */}
              <div className="space-y-2 text-text-gray text-sm">
                {solution.description.split('\n').map((line, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Distribution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-dark rounded-lg p-8 md:p-12 border border-gold/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-80 bg-gradient-to-br from-gold/20 to-blue/20 rounded-lg overflow-hidden flex items-center justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop"
                alt="Global Distribution Hub"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right - Content */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Global Distribution<span className="text-gold">Hub</span>
              </h3>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                With operations in Dubai, Hong Kong, Gurgaon (India), and direct access to China's manufacturing hubs, we provide strategic logistics coverage across MENA, Asia Pacific, 
                South Asia, and China. Our multi-location advantage means faster delivery times, competitive pricing, and direct sourcing capabilities for your global business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div>
                  <h4 className="text-gold font-bold mb-2">Dubai HQ</h4>
                  <ul className="text-text-gray text-sm space-y-1">
                    <li>• UAE Headquarters</li>
                    <li>• Same-day shipping</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-2">Hong Kong Office</h4>
                  <ul className="text-text-gray text-sm space-y-1">
                    <li>• Asia Pacific Hub</li>
                    <li>• 3-day delivery</li>
                    <li>• Regional logistics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-2">Gurgaon, India</h4>
                  <ul className="text-text-gray text-sm space-y-1">
                    <li>• India Facility</li>
                    <li>• 2-day delivery</li>
                    <li>• Cost optimized</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-2">China Sourcing</h4>
                  <ul className="text-text-gray text-sm space-y-1">
                    <li>• Factory Direct Access</li>
                    <li>• Bulk Orders Welcome</li>
                    <li>• Custom Development</li>
                  </ul>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProducts}
                style={{ backgroundColor: '#d4af37', color: '#000000' }}
                className="px-8 py-3 font-bold rounded-lg transition-all duration-300 cursor-pointer"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
