import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Providers } from './providers';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata = {
  title: 'Rumos & Remos | Passeios de Caiaque em Sorriso/MT',
  description: 'Aventure-se em passeios de caiaque pelo Rio Teles Pires. Pacotes individuais, em grupo e para empresas.',
  keywords: 'caiaque, passeios, Sorriso, Mato Grosso, rio, aventura, Teles Pires',
  openGraph: {
    title: 'Rumos & Remos | Passeios de Caiaque em Sorriso/MT',
    description: 'Aventure-se em passeios de caiaque pelo Rio Teles Pires. Pacotes individuais, em grupo e para empresas.',
    url: 'https://rumosremos.com.br',
    siteName: 'Rumos & Remos',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="min-h-screen flex flex-col font-opensans bg-background">
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
