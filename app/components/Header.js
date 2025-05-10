'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on an admin page
  const isAdminPage = pathname.startsWith('/admin');
  
  // Handle scroll for transparent header on homepage
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Only add event listener if we're not on an admin page
    if (!isAdminPage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // Always solid background on admin pages
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAdminPage]);
  
  // If we're on an admin page, don't show the header
  if (isAdminPage) {
    return null;
  }
  
  // Get the correct header class based on scroll state and current page
  const getHeaderClass = () => {
    const isHomePage = pathname === '/';
    
    if (isHomePage && !isScrolled) {
      return 'fixed w-full z-30 transition-all duration-300 bg-transparent';
    }
    
    return 'fixed w-full z-30 transition-all duration-300 bg-white shadow-md';
  };
  
  return (
    <header className={getHeaderClass()}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled || pathname !== '/' ? 'text-blue-600' : 'text-white'}`}>
              Rumos & Remos
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium ${isScrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/pacotes" 
              className={`text-sm font-medium ${isScrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}
            >
              Pacotes
            </Link>
            <Link 
              href="/galeria" 
              className={`text-sm font-medium ${isScrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}
            >
              Galeria
            </Link>
            <a 
              href={`https://wa.me/5566999999999?text=${encodeURIComponent('Olá! Gostaria de informações sobre os passeios de caiaque.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Contato
            </a>
          </nav>
          
          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pacotes" 
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pacotes
              </Link>
              <Link 
                href="/galeria" 
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </Link>
              <a 
                href={`https://wa.me/5566999999999?text=${encodeURIComponent('Olá! Gostaria de informações sobre os passeios de caiaque.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
