'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="gradient-background" />
      
      <header className="py-8 px-6">
        <div className="content-wrapper flex justify-between items-center">
          <div className="logo">TONIC VENTURES</div>
          <nav>
            <button className="btn btn-outline">Contact Us</button>
          </nav>
        </div>
      </header>

      <section className="content-wrapper">
        <motion.h1 
          className="headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering the next generation of groundbreaking startups
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="card-heading">Investment Philosophy</h2>
            <p className="card-text">
              We partner with visionary founders who are building transformative companies 
              at the intersection of technology and innovation. Our approach combines 
              capital with deep operational expertise and a vast network of industry connections.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="card-heading">Portfolio Companies</h2>
            <p className="card-text">
              Our portfolio represents a diverse group of companies that are 
              pushing boundaries and creating meaningful impact across various sectors, 
              from enterprise software to consumer technology.
            </p>
            <button className="btn btn-primary">View Portfolio</button>
          </motion.div>
        </div>
      </section>

      <section className="content-wrapper">
        <motion.div 
          className="card text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="card-heading">Ready to Build Something Great?</h2>
          <p className="card-text max-w-2xl mx-auto">
            We're always looking for exceptional founders who are passionate about 
            solving big problems. If you're building something innovative, we'd love to hear from you.
          </p>
          <button className="btn btn-primary">Get in Touch</button>
        </motion.div>
      </section>
    </main>
  )
}
