'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

export default function About() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            About Full Solution
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Leading B2B beauty and fashion company providing premium products and innovative solutions for businesses worldwide.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              Full Solution is a modern B2B beauty, fashion, and skincare company that provides premium products and solutions for businesses in the beauty industry. We focus on delivering high-quality products and innovative solutions that help our business partners enhance their offerings.
            </p>
            <p className="text-lg text-gray-300">
              Our commitment to excellence, sustainability, and cutting-edge technology drives everything we do, ensuring our partners receive the best possible support for their success.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden"
            variants={fadeInUp}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            What We Do
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: 'Premium Products',
                description: 'High-quality skincare products and fashion accessories designed for professional use.',
                icon: '✨'
              },
              {
                title: 'Wholesale Distribution',
                description: 'Comprehensive distribution services for beauty salons, spas, and fashion retailers.',
                icon: '🚚'
              },
              {
                title: 'Business Consulting',
                description: 'Expert consulting services to help beauty brands optimize their operations.',
                icon: '💼'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored products and services designed for your specific business needs.',
                icon: '🎯'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-300 text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { value: 'Quality & Innovation', desc: 'Excellence in everything we do' },
              { value: 'Professional Excellence', desc: 'Customer-focused service' },
              { value: 'Sustainability', desc: 'Ethical business practices' },
              { value: 'Modern Technology', desc: 'Cutting-edge solutions' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-2 text-accent">{item.value}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={fadeInUp}
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            variants={fadeInUp}
          >
            Join our network of successful beauty and fashion businesses.
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <a
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}