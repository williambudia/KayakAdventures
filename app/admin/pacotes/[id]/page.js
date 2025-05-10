import AdminForm from '../../../components/AdminForm';
import { notFound } from 'next/navigation';
import prisma from '../../../../lib/prisma';

async function getPacote(id) {
  try {
    const pacote = await prisma.pacote.findUnique({
      where: {
        id: id
      }
    });
    
    if (!pacote) {
      return null;
    }
    
    return pacote;
  } catch (error) {
    console.error('Error fetching pacote:', error);
    return null;
  }
}

export default async function EditarPacotePage({ params }) {
  const pacote = await getPacote(params.id);
  
  if (!pacote) {
    notFound();
  }
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Editar Pacote</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <AdminForm pacote={pacote} />
      </div>
    </div>
  );
}
