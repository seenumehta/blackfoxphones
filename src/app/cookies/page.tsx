'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiesPolicy() {
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
                Cookie <span className="text-gold">Policy</span>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
                <p>
                  Cookies are small pieces of data stored on your device (computer, tablet, smartphone) when you visit our website. 
                  They help us recognize you, remember your preferences, and understand how you use our website. Cookies are essential 
                  for the proper functioning of modern websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-gold mb-3 mt-4">Necessary Cookies:</h3>
                <p>
                  These cookies are essential for the website to function properly. They help with basic functions like page navigation 
                  and access to secure areas. The website cannot function properly without these cookies.
                </p>

                <h3 className="text-xl font-semibold text-gold mb-3 mt-4">Performance Cookies:</h3>
                <p>
                  These cookies collect information about how you use our website, such as which pages you visit most often and whether 
                  you receive error messages. This helps us improve the performance and usability of our website.
                </p>

                <h3 className="text-xl font-semibold text-gold mb-3 mt-4">Functional Cookies:</h3>
                <p>
                  These cookies remember your preferences and settings, allowing us to provide a more personalized experience. For example, 
                  they might remember your language preference or that you have already visited certain sections of the site.
                </p>

                <h3 className="text-xl font-semibold text-gold mb-3 mt-4">Marketing/Tracking Cookies:</h3>
                <p>
                  These cookies are used to track your activity across websites and build a profile of your interests. They may be used by 
                  us or third parties to deliver targeted advertising and promotional content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
                <p>
                  Our website may contain links to third-party websites and may use services from third parties such as analytics providers, 
                  advertising networks, and social media platforms. These third parties may also place cookies on your device.
                </p>
                <p className="mt-4">
                  We are not responsible for the cookies used by third parties. Please review the privacy and cookie policies of third-party 
                  websites directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. How to Control Cookies</h2>
                <p>
                  You have the right to accept or refuse cookies. Most web browsers allow you to control cookies through their settings. 
                  However, please note that disabling cookies may affect the functionality of our website.
                </p>
                <h3 className="text-xl font-semibold text-gold mb-3 mt-4">To manage cookies:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-gold font-semibold">Chrome:</span> Settings > Privacy and security > Cookies</li>
                  <li><span className="text-gold font-semibold">Firefox:</span> Preferences > Privacy > Cookies</li>
                  <li><span className="text-gold font-semibold">Safari:</span> Preferences > Privacy > Cookies</li>
                  <li><span className="text-gold font-semibold">Edge:</span> Settings > Privacy and services > Cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Consent</h2>
                <p>
                  By continuing to use our website without changing your cookie settings, you consent to our use of cookies as described 
                  in this policy. If you do not consent to the use of non-essential cookies, please disable them in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, 
                  or regulatory reasons. We will notify you of any significant changes by posting an updated policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies or this Cookie Policy, please contact us at:
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
