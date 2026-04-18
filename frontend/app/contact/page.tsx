'use client'

import { useState } from 'react'
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

export default function Contact() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    role_department: '',
    inquiry_type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // For static deployment, just show success message
    // In production, this would integrate with a service like Formspree or email
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        role_department: '',
        inquiry_type: '',
        message: ''
      })
    }, 1000)
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <motion.div
          className="max-w-md w-full text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-3xl font-bold mb-4"
            variants={fadeInUp}
          >
            Thank You!
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            variants={fadeInUp}
          >
            Your message has been sent successfully. We'll get back to you soon.
          </motion.p>
          <motion.button
            onClick={() => setSubmitted(false)}
            className="bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-colors"
            variants={fadeInUp}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            className="mx-auto mb-8 w-24 h-24 rounded-full overflow-hidden shadow-2xl"
            variants={fadeInUp}
          >
            <Image
              src="/logo.png"
              alt="Full Solution logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Ready to partner with Full Solution? Contact Robbie Setton directly for premium business inquiries.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl font-bold mb-6"
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xl">�</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lead Contact</h3>
                  <p className="text-gray-400">Robbie Setton</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">robbie@fullsolution.vip</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">068 707 4080</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-400">Mon-Fri: 9AM-6PM SAST</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={staggerContainer}
            >
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={fadeInUp}
              >
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={fadeInUp}
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={fadeInUp}
              >
                <div>
                  <label htmlFor="role_department" className="block text-sm font-medium mb-2">
                    Role/Department
                  </label>
                  <input
                    type="text"
                    id="role_department"
                    name="role_department"
                    value={formData.role_department}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="product_interest">Product Interest</option>
                    <option value="partnership">Partnership</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your business needs..."
                />
              </motion.div>

              <motion.div
                className="text-center"
                variants={fadeInUp}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}