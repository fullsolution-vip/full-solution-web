'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 1, y: 0 }, // Changed from opacity: 0 for static export
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

export default function Products() {
  const products = [
    {
      name: 'Premium Skincare Line',
      description: 'High-quality skincare products designed for professional salons and spas.',
      features: ['Advanced formulations', 'Professional grade', 'Results-driven'],
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Fashion Accessories',
      description: 'Elegant fashion accessories that complement any beauty treatment.',
      features: ['Modern design', 'Quality materials', 'Versatile styling'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Beauty Tools',
      description: 'Professional-grade tools and equipment for beauty professionals.',
      features: ['Durable construction', 'Easy to use', 'Industry standard'],
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Custom Solutions',
      description: 'Tailored products and services designed for your specific business needs.',
      features: ['Personalized approach', 'Custom formulations', 'Dedicated support'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our Products
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover our comprehensive range of premium beauty and fashion solutions designed for B2B partners.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-750 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-gray-200">{product.description}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            variants={fadeInUp}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
          >
            {[
              { number: '500+', label: 'Business Partners' },
              { number: '50+', label: 'Countries Served' },
              { number: '1000+', label: 'Products Delivered' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-4"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={fadeInUp}
          >
            Interested in Our Products?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Contact us to discuss wholesale opportunities and partnership details.
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <a
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Contact Sales
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}