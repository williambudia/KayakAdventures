'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useToast } from '../../hooks/use-toast';
import { Users, User, Calendar, MapPin, MessageSquare } from 'lucide-react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PackageCardV2({ package: initialPackage }) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const { toast } = useToast();

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

  const handleReservation = (e) => {
    if (package_data.vagasDisponiveis === 0) {
      e.preventDefault();
      
      toast({
        title: "Pacote esgotado",
        description: "Este pacote está esgotado. Por favor, escolha outro pacote ou entre em contato para verificar disponibilidade futura.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-56 w-full overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src={package_data.imagemUrl || "https://pixabay.com/get/ge8a2b0c5d961eed554c21a1ce57a7bb5a6e340d184f62fdf3a98835aa716aff06bf3e217170c609399588c35399a7206bde56c2c9cb786bc9506fdcb66477001_1280.jpg"}
              alt={package_data.nome}
              className={`rounded-t-lg object-cover ${isHovering ? 'scale-105' : 'scale-100'} transition-transform duration-500`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              width={400}
              height={225}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {package_data.destaque && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground py-1.5 px-3 rounded-md text-xs font-bold shadow-md">
              Destaque
            </div>
          )}
        </div>
        
        <CardHeader className="pt-6 pb-2">
          <CardTitle className="text-xl font-bold text-primary font-montserrat">{package_data.nome}</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 flex-grow">
          <p className="text-muted-foreground font-opensans">
            {package_data.descricao.length > 120 
              ? package_data.descricao.substring(0, 120) + '...' 
              : package_data.descricao}
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-primary" />
              <span>3-5 horas</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-primary" />
              <span>Rio Teles Pires</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2">
              {package_data.vagasDisponiveis > 0 ? (
                <>
                  <Users size={18} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    {package_data.vagasDisponiveis} {package_data.vagasDisponiveis === 1 ? 'vaga' : 'vagas'}
                  </span>
                </>
              ) : (
                <>
                  <User size={18} className="text-red-500" />
                  <span className="text-sm font-medium text-red-600">
                    Esgotado
                  </span>
                </>
              )}
            </div>
            <div className="text-xl font-bold text-secondary">{formattedPrice}</div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button
            variant="secondary"
            size="lg"
            className="w-full font-medium shadow-sm"
            disabled={package_data.vagasDisponiveis === 0}
            asChild
          >
            <a
              href={`https://wa.me/5566999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleReservation}
              className="flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              Reservar agora
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}