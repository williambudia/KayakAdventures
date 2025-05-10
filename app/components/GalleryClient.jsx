'use client';

import { useState } from 'react';
import GalleryGrid from './GalleryGrid';
import Lightbox from './Lightbox';

export default function GalleryClient({ images, categories }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');
  
  const filteredImages = filter === 'todos' 
    ? images 
    : images.filter(image => image.category === filter);
  
  const handleOpenModal = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`m-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filter === category.id 
                ? 'bg-primary text-white' 
                : 'bg-white text-primary hover:bg-primary-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <GalleryGrid 
        images={filteredImages} 
        onImageClick={handleOpenModal} 
      />
      
      {selectedImage && (
        <Lightbox 
          image={selectedImage} 
          onClose={handleCloseModal} 
          images={filteredImages}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
}