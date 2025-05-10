import { Suspense } from 'react';
import PackageCard from '../components/PackageCard';

async function getPackages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/pacotes`, { 
    cache: 'no-store'
  });
  
  if (!res.ok) {
    return [];
  }
  
  return res.json();
}

export const metadata = {
  title: 'Pacotes de Passeios | Rumos & Remos',
  description: 'Conheça nossos pacotes de passeios de caiaque no Rio Teles Pires. Opções para indivíduos, grupos e empresas.',
};

export default async function PackagesPage() {
  const packages = await getPackages();
  
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="bg-blue-700 py-20 px-4">
        <div className="container-custom">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Nossos Pacotes</h1>
          <p className="text-blue-100 text-xl text-center mt-4 max-w-2xl mx-auto">
            Escolha o passeio perfeito para sua aventura no Rio Teles Pires
          </p>
        </div>
      </div>
      
      <section className="section container-custom">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="heading-3 mb-4">Sobre Nossos Passeios</h2>
          <p className="text-gray-700 mb-4">
            Todos os nossos passeios incluem:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Equipamentos completos</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instruções de segurança</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Guias experientes</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Kit de primeiros socorros</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Seguro de acidentes</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Fotos da experiência</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<p className="text-center col-span-3">Carregando pacotes...</p>}>
            {packages && packages.length > 0 ? (
              packages.map(pkg => (
                <PackageCard key={pkg.id} package={pkg} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10l-8 4m-8-4V7m8 4v10M4 7v10l8-4" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum pacote disponível</h3>
                <p className="text-gray-500">
                  No momento, não temos pacotes cadastrados. Por favor, tente novamente mais tarde.
                </p>
              </div>
            )}
          </Suspense>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-blue-50 rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="heading-3 mb-4">Pacotes Personalizados</h2>
            <p className="text-gray-700 mb-6">
              Não encontrou o pacote ideal para você? Entre em contato conosco para criar um passeio personalizado
              que atenda às suas necessidades específicas.
            </p>
            <a 
              href={`https://wa.me/5566999999999?text=${encodeURIComponent('Olá! Gostaria de informações sobre pacotes personalizados de passeios de caiaque.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
