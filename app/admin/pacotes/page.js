import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';
import prisma from '../../../lib/prisma';

async function getPacotes() {
  noStore();
  
  try {
    const pacotes = await prisma.pacote.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return pacotes;
  } catch (error) {
    console.error('Error fetching pacotes:', error);
    return [];
  }
}

// Server Action para excluir um pacote
async function deletePacote(formData) {
  'use server';
  
  const id = formData.get('id');
  
  try {
    await prisma.pacote.delete({
      where: {
        id: id
      }
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting pacote:', error);
    return { success: false, error: 'Erro ao excluir pacote' };
  }
}

export default async function PacotesListPage() {
  const pacotes = await getPacotes();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gerenciar Pacotes</h1>
        <Link 
          href="/admin/pacotes/novo"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Novo Pacote
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {pacotes.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vagas
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destaque
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pacotes.map((pacote) => (
                  <tr key={pacote.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{pacote.nome}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{pacote.descricao}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">R$ {pacote.preco.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{pacote.vagasDisponiveis}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pacote.destaque ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Sim
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          Não
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link 
                        href={`/admin/pacotes/${pacote.id}`} 
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Editar
                      </Link>
                      <form action={deletePacote} className="inline">
                        <input type="hidden" name="id" value={pacote.id} />
                        <button 
                          type="submit"
                          className="text-red-600 hover:text-red-900"
                          onClick={(e) => {
                            if (!confirm('Tem certeza que deseja excluir este pacote?')) {
                              e.preventDefault();
                            }
                          }}
                        >
                          Excluir
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10l-8 4m-8-4V7m8 4v10M4 7v10l8-4" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">Nenhum pacote cadastrado</h3>
            <p className="mt-1 text-sm text-gray-500">
              Comece a criar pacotes de passeios para exibir no site.
            </p>
            <div className="mt-6">
              <Link 
                href="/admin/pacotes/novo"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Criar Primeiro Pacote
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
