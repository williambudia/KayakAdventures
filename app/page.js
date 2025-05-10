import Hero from './components/Hero';
import PackageCardV2 from './components/PackageCardV2';
import FeatureCard from './components/FeatureCard';
import FAQ from './components/FAQ';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { User, Users, Briefcase, Check, MapPin, Shield, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

async function getFeaturedPackages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/pacotes?featured=true`, { 
    cache: 'no-store'
  });
  
  if (!res.ok) {
    return [];
  }
  
  return res.json();
}

export default async function Home() {
  const featuredPackages = await getFeaturedPackages();
  
  return (
    <>
      <Hero 
        title="Rumos & Remos" 
        subtitle="Passeios de Caiaque em Sorriso/MT"
        ctaText="Reservar Agora"
        ctaLink="/pacotes"
        videoSrc="/videos/hero-background.mp4" // This would be your actual video
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center">Aventure-se Pelo Rio Teles Pires</h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            Descubra a beleza natural de Mato Grosso através de emocionantes passeios de caiaque. Experiências únicas para indivíduos, grupos e empresas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              title="Passeios Individuais"
              description="Explore o rio no seu próprio ritmo, com equipamentos de qualidade e instruções de segurança."
              bgColorClass="bg-primary-100"
              icon={<User size={24} className="text-primary" />}
            />
            
            <FeatureCard 
              title="Passeios em Grupo"
              description="Reúna amigos e familiares para uma aventura compartilhada com descontos especiais para grupos."
              bgColorClass="bg-secondary-100"
              icon={<Users size={24} className="text-secondary" />}
            />
            
            <FeatureCard 
              title="Eventos Corporativos"
              description="Proporcione uma experiência única de team building para sua equipe, com pacotes personalizados."
              bgColorClass="bg-accent-100"
              icon={<Briefcase size={24} className="text-accent-foreground" />}
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/pacotes">
                Ver Todos os Pacotes
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section bg-blue-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center">Pacotes em Destaque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Suspense fallback={<p>Carregando pacotes...</p>}>
              {featuredPackages && featuredPackages.length > 0 ? (
                featuredPackages.map(pkg => (
                  <PackageCardV2 key={pkg.id} package={pkg} />
                ))
              ) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-lg text-gray-600">Nenhum pacote em destaque no momento.</p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2">Experiências Inesquecíveis no Rio Teles Pires</h2>
              <p className="text-lg mb-6 text-gray-700">
                O Rio Teles Pires oferece paisagens deslumbrantes e águas cristalinas perfeitas para a prática de caiaque. 
                Com a Rumos & Remos, você desfruta dessa beleza natural com segurança e conforto.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" strokeWidth={2.5} />
                  <span>Equipamentos de alta qualidade e segurança</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" strokeWidth={2.5} />
                  <span>Guias experientes e certificados</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" strokeWidth={2.5} />
                  <span>Rotas adaptadas para diferentes níveis de experiência</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" strokeWidth={2.5} />
                  <span>Kit de primeiros socorros e treinamento básico incluso</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button asChild variant="outline" size="lg" className="shadow-sm">
                  <Link href="/galeria">
                    Ver Nossa Galeria
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://pixabay.com/get/ge8a2b0c5d961eed554c21a1ce57a7bb5a6e340d184f62fdf3a98835aa716aff06bf3e217170c609399588c35399a7206bde56c2c9cb786bc9506fdcb66477001_1280.jpg"
                alt="Passeio de caiaque no Rio Teles Pires"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para uma Aventura?</h2>
            <p className="text-lg mb-8">
              Reserve seu passeio de caiaque agora e descubra as maravilhas do Rio Teles Pires.
              Temos pacotes para todos os gostos e níveis de experiência.
            </p>
            <Button asChild size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 border-none shadow-md">
              <Link href="/pacotes">
                Reservar Meu Passeio
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto mt-8">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}
