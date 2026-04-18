'use client'

import { motion } from 'framer-motion'

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

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        className="max-w-md w-full"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          Login
        </motion.h1>
        <motion.p
          className="text-lg text-center mb-8"
          variants={fadeInUp}
        >
          Access your business account to view products, manage your profile, and communicate with our team.
        </motion.p>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          variants={fadeInUp}
        >
          <motion.p
            className="text-center text-gray-400 mb-6"
            variants={fadeInUp}
          >
            Authentication system coming soon with Supabase integration.
          </motion.p>
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <a
              href="/contact"
              className="bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Contact Us Instead
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}