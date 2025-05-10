'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);
  
  // Check if we're on an admin page
  const isAdminPage = pathname.startsWith('/admin');
  
  // Only show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Don't show the button on admin pages
  if (isAdminPage) {
    return null;
  }
  
  // Default message with URL encoding
  const defaultMessage = encodeURIComponent('Olá! Gostaria de informações sobre passeios de caiaque.');
  
  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(0, 194, 209, 0.7)",
                "0 0 0 15px rgba(0, 194, 209, 0)",
                "0 0 0 0 rgba(0, 194, 209, 0)"
              ] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <motion.a
              href={`https://wa.me/5566999999999?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
              aria-label="Contato via WhatsApp"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="h-9 w-9" strokeWidth={2} />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
