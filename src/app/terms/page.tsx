'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Header />
      <main className="flex-1 pt-32">
        <section className="section-padding bg-charcoal">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Terms & <span className="text-gold">Conditions</span>
              </h1>
              <p className="text-text-gray text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 text-text-gray leading-relaxed"
            >
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Blackfox Phones' 
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Wholesale Business Terms</h2>
                <h3 className="text-xl font-semibold text-gold mb-2">Minimum Order Quantity (MOQ):</h3>
                <p className="mb-4">
                  All orders must meet the minimum order quantities as specified for each product. Orders below MOQ will not be accepted 
                  unless otherwise agreed in writing.
                </p>
                <h3 className="text-xl font-semibold text-gold mb-2">Pricing:</h3>
                <p>
                  Prices are subject to change without notice. Pricing provided is valid only for quotes generated within 30 days. 
                  Volume discounts are available and will be communicated based on order quantities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Product Information</h2>
                <p>
                  All product descriptions, images, and specifications on our website are provided for informational purposes only. 
                  While we strive for accuracy, we do not warrant that product descriptions, pricing, or other content is accurate, 
                  complete, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Order Fulfillment</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All orders are subject to acceptance and confirmation by Blackfox Phones</li>
                  <li>Delivery times are estimates and not guarantees</li>
                  <li>Blackfox Phones is not responsible for delays caused by shipping carriers or customs</li>
                  <li>Risk of loss transfers to buyer upon delivery to shipping carrier</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                <p>
                  Payment terms will be communicated in the quote and invoice. We accept various payment methods including bank transfers, 
                  letters of credit, and agreed payment plans. Payment must be made in full before shipment unless otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Returns and Warranty</h2>
                <p>
                  All products are sold as-is with manufacturer warranty. Defective products must be reported within 7 days of receipt. 
                  Returns must be approved in writing before shipment. Blackfox Phones will replace or refund defective products at its discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p>
                  In no event shall Blackfox Phones, its suppliers, or any parties involved in creating, producing, or delivering this website 
                  be liable for any damages, including lost profits, lost revenue, lost data, or any indirect, consequential, special, or punitive damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably 
                  submit to the exclusive jurisdiction of the courts in Dubai.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <div className="p-4 bg-dark rounded-lg border border-gold/20">
                  <p className="text-white font-semibold mb-2">For questions regarding these Terms, please contact:</p>
                  <p>Email: info@blackfoxphones.com</p>
                  <p>Phone: +91 9811112254 (Mr. Neeraj)</p>
                  <p>Phone: +91 9717212357 (Mr. Saket)</p>
                </div>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
