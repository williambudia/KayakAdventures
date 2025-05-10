'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminForm({ pacote }) {
  const router = useRouter();
  const isEditing = !!pacote;
  
  const [formData, setFormData] = useState({
    nome: pacote?.nome || '',
    descricao: pacote?.descricao || '',
    preco: pacote?.preco || '',
    vagasDisponiveis: pacote?.vagasDisponiveis || '',
    vagasTotais: pacote?.vagasTotais || '',
    imagemUrl: pacote?.imagemUrl || '',
    destaque: pacote?.destaque || false,
    datasPossiveis: pacote?.datasPossiveis || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const url = isEditing
        ? `/api/pacotes/${pacote.id}`
        : '/api/pacotes';
      
      const method = isEditing ? 'PATCH' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao salvar o pacote');
      }

      setSuccess(isEditing ? 'Pacote atualizado com sucesso!' : 'Pacote criado com sucesso!');
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/admin/pacotes');
        router.refresh();
      }, 1500);
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="bg-green-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-800">{success}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Pacote*
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Passeio Individual no Rio Teles Pires"
          />
        </div>

        <div>
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">
            Preço (R$)*
          </label>
          <input
            type="number"
            id="preco"
            name="preco"
            required
            min="0"
            step="0.01"
            value={formData.preco}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: 150.00"
          />
        </div>

        <div>
          <label htmlFor="vagasDisponiveis" className="block text-sm font-medium text-gray-700 mb-1">
            Vagas Disponíveis*
          </label>
          <input
            type="number"
            id="vagasDisponiveis"
            name="vagasDisponiveis"
            required
            min="0"
            value={formData.vagasDisponiveis}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: 10"
          />
        </div>

        <div>
          <label htmlFor="vagasTotais" className="block text-sm font-medium text-gray-700 mb-1">
            Vagas Totais
          </label>
          <input
            type="number"
            id="vagasTotais"
            name="vagasTotais"
            min="0"
            value={formData.vagasTotais}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: 20"
          />
          <p className="mt-1 text-xs text-gray-500">
            Se não preenchido, será igual a vagas disponíveis
          </p>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
            Descrição do Pacote*
          </label>
          <textarea
            id="descricao"
            name="descricao"
            required
            rows="4"
            value={formData.descricao}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Descreva o pacote de caiaque, incluindo duração, nível de dificuldade, etc."
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="imagemUrl" className="block text-sm font-medium text-gray-700 mb-1">
            URL da Imagem
          </label>
          <input
            type="url"
            id="imagemUrl"
            name="imagemUrl"
            value={formData.imagemUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: https://exemplo.com/imagem.jpg"
          />
          <p className="mt-1 text-xs text-gray-500">
            Se não preenchido, uma imagem padrão será usada
          </p>
        </div>

        <div>
          <label htmlFor="datasPossiveis" className="block text-sm font-medium text-gray-700 mb-1">
            Datas Possíveis
          </label>
          <input
            type="text"
            id="datasPossiveis"
            name="datasPossiveis"
            value={formData.datasPossiveis}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Sábados e domingos, 9h e 14h"
          />
        </div>

        <div className="flex items-center h-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="destaque"
              name="destaque"
              checked={formData.destaque}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="destaque" className="ml-2 block text-sm font-medium text-gray-700">
              Destaque na página inicial
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={() => router.push('/admin/pacotes')}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Salvando...
            </>
          ) : (
            isEditing ? 'Atualizar Pacote' : 'Criar Pacote'
          )}
        </button>
      </div>
    </form>
  );
}
