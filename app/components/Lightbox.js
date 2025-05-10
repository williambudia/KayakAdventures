'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Lightbox({ image, onClose, images, setSelectedImage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Find the index of the current image
    const index = images.findIndex(img => img.id === image.id);
    setCurrentIndex(index);

    // Add event listener for keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigateToNext();
      } else if (e.key === 'ArrowLeft') {
        navigateToPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Re-enable scrolling when lightbox is closed
    };
  }, [image, images]);

  const navigateToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsLoading(true);
  };

  const navigateToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsLoading(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <button 
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        onClick={onClose}
        aria-label="Fechar galeria"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button 
        className="absolute left-4 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        onClick={navigateToPrevious}
        aria-label="Imagem anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="object-contain max-h-[80vh] w-auto"
          width={1200}
          height={800}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <button 
        className="absolute right-4 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        onClick={navigateToNext}
        aria-label="Próxima imagem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 text-center w-full">
        <p className="text-white text-sm md:text-base">
          {images[currentIndex].alt}
        </p>
        <p className="text-gray-400 text-xs mt-1">
          {currentIndex + 1} de {images.length}
        </p>
      </div>
    </div>
  );
}
