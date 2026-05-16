'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { products } from '../data/products';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Extract unique categories from products
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
  const categories = ['All', ...uniqueCategories.sort()];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Display only 5 products initially, or all if showAll is true
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 5);

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
              onClick={() => {
                setSelectedCategory(category === 'All' ? 'all' : category);
                setShowAll(false); // Reset expand state when changing category
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                (category === 'All' && selectedCategory === 'all') || selectedCategory === category
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
          key={displayedProducts.length}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group bg-charcoal rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-300 h-full"
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
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-gold font-semibold mb-2">{product.category}</p>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors mb-3">
                      {product.name}
                    </h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded flex-shrink-0 ml-2 ${
                    product.stock === 'In Stock'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {product.stock}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6 text-sm text-text-gray flex-grow">
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
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-2 bg-gold/10 text-gold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 font-semibold text-sm"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Button - Show only if there are more products than displayed */}
        {filteredProducts.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
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
              {showAll ? 'Show Less' : `Explore More Products (${filteredProducts.length - 5} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gold/40"
            >
              {/* Modal Header */}
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gold/20 bg-charcoal">
                <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-white hover:text-gold transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Product Image */}
                <div className="mb-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-gray text-sm mb-1">Brand</p>
                      <p className="text-white font-semibold">{selectedProduct.brand}</p>
                    </div>
                    <div>
                      <p className="text-text-gray text-sm mb-1">Category</p>
                      <p className="text-white font-semibold">{selectedProduct.category}</p>
                    </div>
                    <div>
                      <p className="text-text-gray text-sm mb-1">Stock Status</p>
                      <span className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                        selectedProduct.stock === 'In Stock'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {selectedProduct.stock}
                      </span>
                    </div>
                    <div>
                      <p className="text-text-gray text-sm mb-1">Minimum Order Quantity</p>
                      <p className="text-gold font-semibold">{selectedProduct.moq} units</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="border-t border-gold/20 pt-4">
                    <p className="text-text-gray text-sm mb-2">Price per Unit</p>
                    <p className="text-4xl font-bold text-gold">{selectedProduct.price}</p>
                  </div>

                  {/* Product Quality/Specifications */}
                  {selectedProduct.quality && (
                    <div className="border-t border-gold/20 pt-4">
                      <p className="text-text-gray text-sm mb-3 font-semibold">Product Quality & Features:</p>
                      <div className="bg-charcoal/50 p-4 rounded-lg border border-gold/10">
                        <p className="text-white text-sm leading-relaxed">
                          {selectedProduct.quality}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="border-t border-gold/20 pt-4 flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-gold text-black rounded-lg font-bold hover:bg-gold/90 transition-all"
                    >
                      Request Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 py-3 border border-gold text-gold rounded-lg font-bold hover:bg-gold/10 transition-all"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
