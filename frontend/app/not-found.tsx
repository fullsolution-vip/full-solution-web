'use client'

import { motion } from 'framer-motion'
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

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        className="max-w-md w-full text-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div
          className="text-8xl font-bold text-accent mb-8"
          variants={fadeInUp}
        >
          404
        </motion.div>
        <motion.h1
          className="text-4xl font-bold mb-6"
          variants={fadeInUp}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 mb-8"
          variants={fadeInUp}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
          >
            <Link
              href="/"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Go Home
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
          >
            <Link
              href="/contact"
              className="text-accent hover:underline transition-colors"
            >
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}