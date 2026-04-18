'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Full Solution
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Premium B2B Beauty & Fashion Solutions
          </motion.p>
          <motion.p
            className="text-lg mb-12 max-w-3xl mx-auto text-gray-400"
            variants={fadeInUp}
          >
            Leading provider of high-quality beauty and fashion products for businesses.
            Partner with us for innovative solutions that enhance your brand.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link
              href="/products"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold mb-4"
              variants={fadeInUp}
            >
              Why Choose Full Solution?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              We deliver premium products and exceptional service to beauty and fashion businesses worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Premium Quality',
                description: 'Industry-leading products designed for professional use and exceptional results.',
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Expert Support',
                description: 'Dedicated business consultants and technical support for your success.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Innovation Focus',
                description: 'Cutting-edge formulations and modern business solutions for the beauty industry.',
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold mb-4"
              variants={fadeInUp}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 mb-8"
              variants={fadeInUp}
            >
              Join leading beauty and fashion brands who trust Full Solution for their premium product needs.
            </motion.p>
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Start Your Partnership
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { href: '/products', title: 'Products', desc: 'Explore our premium beauty and fashion solutions.' },
              { href: '/about', title: 'About', desc: 'Learn about our mission and values.' },
              { href: '/contact', title: 'Contact', desc: 'Start a business partnership with us.' },
              { href: '/login', title: 'Login', desc: 'Access your business account.' }
            ].map((link, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-300 group"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}