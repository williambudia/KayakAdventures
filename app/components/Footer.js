'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  // Check if we're on an admin page
  const isAdminPage = pathname.startsWith('/admin');
  
  // If we're on an admin page, don't show the footer
  if (isAdminPage) {
    return null;
  }
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rumos & Remos</h3>
            <p className="text-blue-200 mb-4">
              Passeios de caiaque pelo Rio Teles Pires em Sorriso/MT. 
              Venha viver esta aventura com a gente!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={`https://wa.me/5566999999999?text=${encodeURIComponent('Olá! Gostaria de informações sobre os passeios de caiaque.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M18.403,5.633C16.708,3.936,14.454,3.001,12.053,3C7.062,3,3.002,7.06,3.002,12.051c0,1.594,0.413,3.15,1.199,4.523l-1.274,4.656c-0.1,0.369,0.029,0.758,0.328,0.988c0.183,0.15,0.408,0.227,0.637,0.227c0.12,0,0.238-0.019,0.353-0.059l4.703-1.209c1.335,0.725,2.836,1.109,4.374,1.109c4.99,0,9.05-4.06,9.05-9.052C21.998,9.582,21.063,7.328,18.403,5.633z M12.073,19.801c-1.307,0-2.585-0.349-3.707-1.007c-0.147-0.085-0.315-0.13-0.486-0.13c-0.111,0-0.221,0.021-0.326,0.061l-2.937,0.757l0.757-2.769c0.1-0.363-0.009-0.751-0.292-0.98c-0.742-0.606-1.328-1.4-1.704-2.3C3.125,12.563,3,11.673,3.002,10.766c0-4.142,3.386-7.529,7.527-7.529c2.01,0,3.895,0.778,5.313,2.199c1.42,1.422,2.198,3.306,2.197,5.305C18.037,16.437,15.278,19.801,12.073,19.801z M15.665,13.974c-0.225-0.113-1.327-0.655-1.533-0.731c-0.205-0.075-0.354-0.112-0.504,0.112s-0.58,0.731-0.711,0.881c-0.131,0.15-0.262,0.168-0.487,0.056c-0.225-0.113-0.95-0.35-1.808-1.115c-0.67-0.598-1.121-1.335-1.252-1.56c-0.131-0.225-0.014-0.347,0.099-0.458c0.101-0.1,0.224-0.262,0.337-0.393c0.112-0.131,0.149-0.225,0.224-0.375c0.075-0.15,0.037-0.281-0.019-0.393c-0.056-0.113-0.505-1.217-0.692-1.667C9.125,7.777,8.935,7.845,8.8,7.839c-0.13-0.006-0.28-0.008-0.429-0.008c-0.15,0-0.393,0.056-0.599,0.28C7.565,8.336,7,8.878,7,9.984c0,1.099,0.805,2.162,0.918,2.312c0.112,0.15,1.581,2.415,3.832,3.387c0.537,0.231,0.955,0.369,1.279,0.473c0.537,0.171,1.026,0.146,1.413,0.089c0.431-0.064,1.327-0.542,1.515-1.066c0.187-0.524,0.187-0.973,0.131-1.067C16.033,14.142,15.89,14.086,15.665,13.974z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pacotes" className="text-blue-200 hover:text-white transition-colors">
                  Pacotes
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-blue-200 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Pacotes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pacotes" className="text-blue-200 hover:text-white transition-colors">
                  Individual
                </Link>
              </li>
              <li>
                <Link href="/pacotes" className="text-blue-200 hover:text-white transition-colors">
                  Grupos
                </Link>
              </li>
              <li>
                <Link href="/pacotes" className="text-blue-200 hover:text-white transition-colors">
                  Empresas
                </Link>
              </li>
              <li>
                <Link href="/pacotes" className="text-blue-200 hover:text-white transition-colors">
                  Personalizados
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-blue-200">
                  Sorriso, Mato Grosso, Brasil
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-200">
                  contato@rumosremos.com.br
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-blue-200">
                  (66) 99999-9999
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6">
          <p className="text-center text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Rumos & Remos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
