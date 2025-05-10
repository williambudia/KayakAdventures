import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../lib/auth';

// GET - Retorna um pacote específico pelo ID
export async function GET(request, { params }) {
  try {
    const id = params.id;
    const pacote = await prisma.pacote.findUnique({
      where: {
        id
      }
    });
    
    if (!pacote) {
      return NextResponse.json(
        { error: 'Pacote não encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(pacote);
  } catch (error) {
    console.error('Error fetching pacote:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar pacote' },
      { status: 500 }
    );
  }
}

// PATCH - Atualiza um pacote existente (requer autenticação)
export async function PATCH(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }
    
    const data = await request.json();
    const id = params.id;
    
    // Verificar se o pacote existe
    const existingPacote = await prisma.pacote.findUnique({
      where: {
        id
      }
    });
    
    if (!existingPacote) {
      return NextResponse.json(
        { error: 'Pacote não encontrado' },
        { status: 404 }
      );
    }
    
    // Atualizar o pacote
    const updatedPacote = await prisma.pacote.update({
      where: {
        id: params.id
      },
      data: {
        nome: data.nome !== undefined ? data.nome : existingPacote.nome,
        descricao: data.descricao !== undefined ? data.descricao : existingPacote.descricao,
        preco: data.preco !== undefined ? parseFloat(data.preco) : existingPacote.preco,
        vagasDisponiveis: data.vagasDisponiveis !== undefined ? parseInt(data.vagasDisponiveis) : existingPacote.vagasDisponiveis,
        vagasTotais: data.vagasTotais !== undefined ? parseInt(data.vagasTotais) : existingPacote.vagasTotais,
        imagemUrl: data.imagemUrl !== undefined ? data.imagemUrl : existingPacote.imagemUrl,
        destaque: data.destaque !== undefined ? data.destaque : existingPacote.destaque,
        datasPossiveis: data.datasPossiveis !== undefined ? data.datasPossiveis : existingPacote.datasPossiveis
      }
    });
    
    return NextResponse.json(updatedPacote);
  } catch (error) {
    console.error('Error updating pacote:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar pacote' },
      { status: 500 }
    );
  }
}

// DELETE - Remove um pacote (requer autenticação)
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }
    
    const id = params.id;
    
    // Verificar se o pacote existe
    const existingPacote = await prisma.pacote.findUnique({
      where: {
        id
      }
    });
    
    if (!existingPacote) {
      return NextResponse.json(
        { error: 'Pacote não encontrado' },
        { status: 404 }
      );
    }
    
    // Excluir o pacote
    await prisma.pacote.delete({
      where: {
        id
      }
    });
    
    return NextResponse.json(
      { message: 'Pacote excluído com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting pacote:', error);
    return NextResponse.json(
      { error: 'Erro ao excluir pacote' },
      { status: 500 }
    );
  }
}
