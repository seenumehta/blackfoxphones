'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Partner With Us'],
    },
    {
      title: 'Products',
      links: ['iPhone Chargers', 'iPad Cables', 'Cases', 'Power Banks', 'Audio', 'Adapters'],
    },
    {
      title: 'Support',
      links: ['Contact', 'FAQ', 'Shipping Info', 'Returns', 'Warranty'],
    },
  ];

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
    <footer className="bg-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">B</span>
              </div>
              <h3 className="text-lg font-bold text-white">BLACKFOX</h3>
            </div>
            <p className="text-text-gray text-sm mb-4">
              Premium wholesale distribution of Apple accessories across MENA and South Asia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-charcoal hover:bg-gold/20 transition-colors text-gold">
                f
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-charcoal hover:bg-gold/20 transition-colors text-gold">
                in
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-charcoal hover:bg-gold/20 transition-colors text-gold">
                tw
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-text-gray hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gold/20"
        >
          <div className="text-center md:text-left">
            <h4 className="text-gold font-bold mb-2 text-sm">DUBAI HEADQUARTERS</h4>
            <p className="text-text-gray text-sm">
              Dubai, United Arab Emirates<br />
              +971 XX XXX XXXX<br />
              hello@blackfoxphones.com
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-gold font-bold mb-2 text-sm">INDIA FACILITY</h4>
            <p className="text-text-gray text-sm">
              Bangalore, India<br />
              +91 XXXX XXXX XXXX<br />
              info@blackfoxphones.in
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-gold font-bold mb-2 text-sm">BUSINESS HOURS</h4>
            <p className="text-text-gray text-sm">
              Mon - Fri: 9 AM - 6 PM<br />
              Sat - Sun: Closed<br />
              Emergency: 24/7 Support
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-text-gray text-sm"
        >
          <p>© {currentYear} Blackfox Phones Trading LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
