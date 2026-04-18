import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Solution - Premium Beauty & Fashion Solutions',
  description: 'Leading B2B beauty and fashion company providing premium products and solutions for businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative min-h-screen`}>
        {/* Global Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury beauty products background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <nav className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center gap-4">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Full Solution logo"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </Link>
                  <Link href="/" className="text-xl font-bold">
                    Full Solution
                  </Link>
                </div>
                <div className="flex items-center space-x-8">
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About
                  </Link>
                  <Link href="/products" className="hover:text-accent transition-colors">
                    Products
                  </Link>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                  <Link href="/login" className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          {children}
          <footer className="border-t border-gray-700 bg-gray-900/80 backdrop-blur-md mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4 text-center text-gray-400">
              <p>Contact Robbie Setton at <a href="mailto:robbie@fullsolution.vip" className="text-accent hover:underline">robbie@fullsolution.vip</a> or call <a href="tel:+256687074080" className="text-accent hover:underline">068 707 4080</a></p>
              <p>&copy; 2026 Full Solution. Premium B2B Beauty & Fashion Solutions.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}