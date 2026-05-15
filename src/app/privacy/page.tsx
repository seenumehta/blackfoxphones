'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
                Privacy <span className="text-gold">Policy</span>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  Blackfox Phones Trading LLC ("Company", "we", "our", or "us") operates the blackfoxphones.com website 
                  (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of 
                  personal data when you use our Service and the choices you have associated with that data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection and Use</h2>
                <p className="mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="text-xl font-semibold text-gold mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal Data: Name, email address, phone number, company name, physical address</li>
                  <li>Usage Data: Pages visited, time and date of visit, time spent on pages</li>
                  <li>Device Data: Browser type, IP address, operating system, device information</li>
                  <li>Cookie Data: Information collected through cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
                <p>Blackfox Phones uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer care and support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical and security issues</li>
                  <li>For business purposes and business development</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Security of Data</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet 
                  or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
                  your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                  Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-dark rounded-lg border border-gold/20">
                  <p className="text-white font-semibold mb-2">Blackfox Phones Trading LLC</p>
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
