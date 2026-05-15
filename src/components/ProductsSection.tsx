'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'iPhone Chargers', 'iPad Cables', 'Cases', 'Power Banks', 'Audio', 'Adapters'];

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Fast Charger',
      category: 'iPhone Chargers',
      stock: 'In Stock',
      moq: '50',
      price: '$8.50',
      image: 'https://images.unsplash.com/photo-1591290619897-743aaa9f8367?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'USB-C Lightning Cable',
      category: 'iPad Cables',
      stock: 'In Stock',
      moq: '100',
      price: '$3.20',
      image: 'https://images.unsplash.com/photo-1505394033641-9a60baad3149?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Premium Leather Case',
      category: 'Cases',
      stock: 'In Stock',
      moq: '75',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1599286513879-c8b5cfb6c4c4?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: '20000mAh Power Bank',
      category: 'Power Banks',
      stock: 'Limited',
      moq: '30',
      price: '$18.50',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'AirPods Pro Replacement',
      category: 'Audio',
      stock: 'In Stock',
      moq: '25',
      price: '$65.00',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'USB-C to HDMI Adapter',
      category: 'Adapters',
      stock: 'In Stock',
      moq: '40',
      price: '$15.75',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="products" className="section-padding bg-dark">
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
            Product <span className="text-gold">Catalog</span>
          </h2>
          <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
            Browse our extensive range of premium Apple accessories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-gold text-black shadow-lg shadow-gold/40'
                  : 'bg-charcoal text-white border border-gold/20 hover:border-gold/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group bg-charcoal rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-br from-charcoal to-dark relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs text-gold font-semibold mb-1">{product.category}</p>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    product.stock === 'In Stock'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {product.stock}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm text-text-gray">
                  <div className="flex justify-between">
                    <span>MOQ:</span>
                    <span className="text-gold font-semibold">{product.moq} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="text-gold font-semibold">{product.price}</span>
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-gold/10 text-gold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 font-semibold text-sm"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ borderColor: '#d4af37', color: '#d4af37' }}
            className="px-8 py-3 border-2 rounded-lg transition-all duration-300 font-bold hover:bg-opacity-100"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#d4af37';
            }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
