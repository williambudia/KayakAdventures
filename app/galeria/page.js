'use client';

import { useState } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import Lightbox from '../components/Lightbox';
import Image from 'next/image';

// Photo gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://pixabay.com/get/ge8a2b0c5d961eed554c21a1ce57a7bb5a6e340d184f62fdf3a98835aa716aff06bf3e217170c609399588c35399a7206bde56c2c9cb786bc9506fdcb66477001_1280.jpg",
    alt: "Caiaques no Rio Teles Pires durante o pôr do sol",
    category: "passeios"
  },
  {
    id: 2,
    src: "https://pixabay.com/get/g4227ed702e617ad8a2474cd66ce90697f6d609b03750e8df85f21a1ef4ac70b89ada43f45d4d9ac7375dd7feca86dbc8d108acef4b7355dcab5e31df7f09179a_1280.jpg",
    alt: "Grupo navegando em caiaques pelo rio",
    category: "grupos"
  },
  {
    id: 3,
    src: "https://pixabay.com/get/g115d5dfb0788ebb02bb654e00c50ade91ef982199f89a4988545331a03eda3a706f601045dcf59fac6d44d3c8a3245add746a831dabfe8d2f2928e676b04d1d1_1280.jpg",
    alt: "Vista aérea do Rio Teles Pires",
    category: "paisagens"
  },
  {
    id: 4,
    src: "https://pixabay.com/get/g139759a7ae15e96a5bbaa22f257c982f0924451b5a2878d65b7e3b112eb384c32af3d655d7c4614815c7a09109a3e993f4496e13194a14ad108b1b25c7ee1f45_1280.jpg",
    alt: "Caiaque em águas calmas",
    category: "passeios"
  },
  {
    id: 5,
    src: "https://pixabay.com/get/g9accbba4f37192baaf42df7a18c856cc0fb49258a3c4d08829c130ac6725b4443f8bafd4fd9800e867e45df808baee2271fa53b2dfe1fc0460eb89ddf299f6f1_1280.jpg",
    alt: "Caiaque em rio com corredeiras leves",
    category: "aventura"
  },
  {
    id: 6,
    src: "https://pixabay.com/get/gf54c4fba4d33cb3b89fb2f3f0f81ccfd95625b3307b8ed867d502ddda4d86c072b8b51e752896863bb58de4df7d9a4ca97709eb1a923edaa979c96b1700eb81e_1280.jpg",
    alt: "Caiaques coloridos na margem do rio",
    category: "equipamentos"
  },
  {
    id: 7,
    src: "https://pixabay.com/get/g3f4be8ce6a5d408f82a54393182e338b823e64f49339fb8902e68e48298e8d743f802b322d01facd808b9667976993ece485456ef8a44fd48a7b9563e86edc1d_1280.jpg",
    alt: "Praticantes de caiaque remando juntos",
    category: "grupos"
  },
  {
    id: 8,
    src: "https://pixabay.com/get/g9247612fb19d6c13f2574ef1fd0b2631983d9af3c6cf382310ada4f1b080053ab9e86c5d40a096ce50f3d6f75c1bf20bc16e080c8839ca3581e2d2fb5c1cb143_1280.jpg",
    alt: "Caiaque em águas cristalinas",
    category: "passeios"
  },
  {
    id: 9,
    src: "https://pixabay.com/get/g5bc5e47314e87d73527b70968d66932d785266fafea19c1df149c419ccccd0819016ce3cb33ac761628bd9d7431ba16873a7dad58baa6df89b00d2bd5157b59e_1280.jpg",
    alt: "Aventureiros remando em caiaque",
    category: "aventura"
  },
  {
    id: 10,
    src: "https://pixabay.com/get/g771e10263d557ce38a3fb24d4f0dd4d4e1402c0858247825681a1d0028e105ff255aacfb57d37d0390c0c17ec5470b35e5a3e3e81dcd6e30987d363f72dd9498_1280.jpg",
    alt: "Caiaque em rio com vegetação exuberante",
    category: "paisagens"
  },
  {
    id: 11,
    src: "https://pixabay.com/get/g5edb46ce1e93095b4b15d313738e59da940e9ca9bcee0cff89784c0751bb12f44eb8f9d8417a88e5db2ba975650ef0c8babdedeb741e56f99eeab4e854d7109c_1280.jpg",
    alt: "Paisagem do Rio Teles Pires ao entardecer",
    category: "paisagens"
  },
  {
    id: 12,
    src: "https://pixabay.com/get/g3d16a2009f39bdfbb3441637f6621fec15b13f948f96324007f937c61a2020d2e6ce25cb9fb061d277bab9e60cf0e89ac49cf692c1daf53aa47b7a19ad9590d8_1280.jpg",
    alt: "Vista do rio com montanhas ao fundo",
    category: "paisagens"
  },
  {
    id: 13,
    src: "https://pixabay.com/get/gebe8f5d7d1a1338e3bed37825cb565011f06f64b6acb3b906c3c19f23cedb0880418c02e98faaf4c8a87c5781cfffafe262e87cf58e0f998d91fc7741d052cfb_1280.jpg",
    alt: "Vista aérea do rio e vegetação",
    category: "paisagens"
  },
  {
    id: 14,
    src: "https://pixabay.com/get/g2c807a1058b44cb90618bb077a1cca035012ce378f26f105f280587566afe2f31fbf77433d22beb943479c91dbae1d61bd1e95fd223c018fb4cf7a7ab8198827_1280.jpg",
    alt: "Grupo fazendo passeio de caiaque",
    category: "grupos"
  },
  {
    id: 15,
    src: "https://pixabay.com/get/gd9c53841073e52d40c69ef2a010c72073568c6f54009b602b81e73ee7ed849da8171ecb34c99c1ba45fbd3fc530bc06588af0b77df9b9feec026d64157abc7a1_1280.jpg",
    alt: "Caiaques alinhados na margem",
    category: "equipamentos"
  },
  {
    id: 16,
    src: "https://pixabay.com/get/gd1f11b97850fa5e5f8d1be15e004ef4b310c092b0df6ab7a84749fd82a2482661f4e383328ac1d962e498b1744bcf3191a8cf1613e4913a00f21d0999c70e133_1280.jpg",
    alt: "Grupo praticando caiaque em rio calmo",
    category: "grupos"
  }
];

export const metadata = {
  title: 'Galeria | Rumos & Remos',
  description: 'Veja fotos dos nossos passeios de caiaque no Rio Teles Pires. Paisagens deslumbrantes, aventuras e momentos inesquecíveis.',
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');
  
  const filteredImages = filter === 'todos' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'passeios', label: 'Passeios' },
    { id: 'grupos', label: 'Grupos' },
    { id: 'paisagens', label: 'Paisagens' },
    { id: 'aventura', label: 'Aventura' },
    { id: 'equipamentos', label: 'Equipamentos' }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="bg-blue-700 py-20 px-4">
        <div className="container-custom">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Galeria de Fotos</h1>
          <p className="text-blue-100 text-xl text-center mt-4 max-w-2xl mx-auto">
            Conheça nossos passeios, equipamentos e as paisagens deslumbrantes do Rio Teles Pires
          </p>
        </div>
      </div>
      
      <section className="section container-custom">
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`m-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <GalleryGrid images={filteredImages} onImageClick={handleImageClick} />
        
        {selectedImage && (
          <Lightbox 
            image={selectedImage} 
            onClose={handleCloseModal} 
            images={filteredImages}
            setSelectedImage={setSelectedImage}
          />
        )}
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-blue-50 rounded-lg p-6 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 md:w-1/3">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://pixabay.com/get/g2c807a1058b44cb90618bb077a1cca035012ce378f26f105f280587566afe2f31fbf77433d22beb943479c91dbae1d61bd1e95fd223c018fb4cf7a7ab8198827_1280.jpg"
                    alt="Grupo fazendo passeio de caiaque"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{objectFit: 'cover'}}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="heading-3 mb-4">Faça Parte da Nossa Galeria</h2>
                <p className="text-gray-700 mb-6">
                  Reserve seu passeio de caiaque e compartilhe conosco as fotos da sua aventura.
                  As melhores imagens podem entrar para nossa galeria oficial!
                </p>
                <a 
                  href={`https://wa.me/5566999999999?text=${encodeURIComponent('Olá! Gostaria de reservar um passeio de caiaque.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Reservar Meu Passeio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
