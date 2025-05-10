import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../lib/auth';

// GET - Retorna todos os pacotes ou pacotes filtrados
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured') === 'true';
    
    let query = {};
    
    if (featured) {
      query.where = {
        destaque: true
      };
    }
    
    query.orderBy = {
      createdAt: 'desc'
    };
    
    const pacotes = await prisma.pacote.findMany(query);
    
    return NextResponse.json(pacotes);
  } catch (error) {
    console.error('Error fetching pacotes:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar pacotes' },
      { status: 500 }
    );
  }
}

// POST - Cria um novo pacote (requer autenticação)
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }
    
    const data = await request.json();
    
    // Validar os dados recebidos
    if (!data.nome || !data.descricao || !data.preco || !data.vagasDisponiveis) {
      return NextResponse.json(
        { error: 'Dados incompletos' },
        { status: 400 }
      );
    }
    
    // Criar o pacote
    const pacote = await prisma.pacote.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        preco: parseFloat(data.preco),
        vagasDisponiveis: parseInt(data.vagasDisponiveis),
        vagasTotais: parseInt(data.vagasTotais || data.vagasDisponiveis),
        imagemUrl: data.imagemUrl || null,
        destaque: data.destaque || false,
        datasPossiveis: data.datasPossiveis || null
      }
    });
    
    return NextResponse.json(pacote, { status: 201 });
  } catch (error) {
    console.error('Error creating pacote:', error);
    return NextResponse.json(
      { error: 'Erro ao criar pacote' },
      { status: 500 }
    );
  }
}
