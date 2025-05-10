'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="hero-container relative h-[70vh] min-h-[500px] overflow-hidden bg-cover bg-center" 
      style={{ 
        backgroundImage: `url('https://pixabay.com/get/ge8a2b0c5d961eed554c21a1ce57a7bb5a6e340d184f62fdf3a98835aa716aff06bf3e217170c609399588c35399a7206bde56c2c9cb786bc9506fdcb66477001_1280.jpg')` 
      }}
    >
      {/* Gradient Overlay com gradiente com opacidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-secondary/50"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <div className="container-custom text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto font-opensans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(255, 209, 102, 0.7)",
                  "0 0 0 12px rgba(255, 209, 102, 0)",
                  "0 0 0 0 rgba(255, 209, 102, 0)"
                ] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="inline-block"
            >
              <Link 
                href={ctaLink} 
                className="bg-accent hover:bg-accent-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg 
                shadow-lg transition-all duration-300 inline-block font-montserrat"
              >
                {ctaText}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
