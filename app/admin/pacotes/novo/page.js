import AdminForm from '../../../components/AdminForm';

export default function NovoPacotePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Novo Pacote</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <AdminForm />
      </div>
    </div>
  );
}
