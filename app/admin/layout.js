import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Área Administrativa | Rumos & Remos',
  description: 'Área de administração para gerenciamento de pacotes e passeios',
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  
  // If not authenticated, redirect to login page
  if (!session) {
    redirect('/admin/login');
  }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="bg-blue-800 text-white w-full md:w-64 p-6 md:min-h-screen">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-xl font-bold">Rumos & Remos</h1>
          <p className="text-blue-200 text-sm">Área Administrativa</p>
        </div>
        
        <nav className="mt-8">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/admin" 
                className="block px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/pacotes" 
                className="block px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10l-8 4m-8-4V7m8 4v10M4 7v10l8-4" />
                  </svg>
                  Pacotes
                </div>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/pacotes/novo" 
                className="block px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Novo Pacote
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-8">
          <div className="border-t border-blue-700 pt-4">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <span className="font-medium">{session?.user?.name?.charAt(0) || 'U'}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{session?.user?.name || 'Usuário'}</p>
                <p className="text-xs text-blue-300">{session?.user?.email || 'email@example.com'}</p>
              </div>
            </div>
            <form action="/api/auth/signout" method="POST">
              <button type="submit" className="w-full text-center px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600 transition-colors duration-200 text-sm">
                Sair
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
