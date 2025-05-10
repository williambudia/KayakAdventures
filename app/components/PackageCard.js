'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PackageCard({ package: initialPackage }) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  // Use SWR for real-time updates to vacancy count
  const { data: packageData, error } = useSWR(
    `/api/pacotes/${initialPackage.id}`,
    fetcher,
    {
      fallbackData: initialPackage,
      refreshInterval: 10000, // Refresh every 10 seconds
    }
  );

  const package_data = error ? initialPackage : packageData;

  // Format price properly
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(package_data.preco);

  // Create a message for WhatsApp 
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no passeio "${package_data.nome}" por ${formattedPrice}. Gostaria de mais informações e reservar uma vaga.`
  );

  return (
    <div
      className="card overflow-hidden transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={package_data.imagemUrl || "https://pixabay.com/get/ge8a2b0c5d961eed554c21a1ce57a7bb5a6e340d184f62fdf3a98835aa716aff06bf3e217170c609399588c35399a7206bde56c2c9cb786bc9506fdcb66477001_1280.jpg"}
          alt={package_data.nome}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ 
            objectFit: 'cover',
            transform: isHovering ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
          className="rounded-t-lg"
        />
        {package_data.destaque && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-3 m-2 rounded text-xs font-medium">
            Destaque
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{package_data.nome}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {package_data.descricao.length > 120 
            ? package_data.descricao.substring(0, 120) + '...' 
            : package_data.descricao}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-green-600">{formattedPrice}</span>
          <div className="flex items-center">
            {package_data.vagasDisponiveis > 0 ? (
              <>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {package_data.vagasDisponiveis} {package_data.vagasDisponiveis === 1 ? 'vaga' : 'vagas'}
                </span>
              </>
            ) : (
              <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
                Esgotado
              </span>
            )}
          </div>
        </div>
        
        <a
          href={`https://wa.me/5566999999999?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full btn-secondary flex items-center justify-center ${
            package_data.vagasDisponiveis === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={(e) => {
            if (package_data.vagasDisponiveis === 0) {
              e.preventDefault();
              alert('Este pacote está esgotado. Por favor, escolha outro pacote ou entre em contato para verificar disponibilidade futura.');
            }
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Quero este!
        </a>
      </div>
    </div>
  );
}
