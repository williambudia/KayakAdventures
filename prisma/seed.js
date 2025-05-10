const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@rumosremos.com.br' },
    update: {},
    create: {
      email: 'admin@rumosremos.com.br',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  });
  
  console.log({ adminUser });

  // Create sample packages
  const packages = [
    {
      nome: 'Passeio Individual',
      descricao: 'Explore o Rio Teles Pires no seu próprio ritmo, com equipamentos de qualidade e instruções de segurança. Ideal para quem busca uma experiência mais tranquila e personalizada.',
      preco: 150.00,
      vagasDisponiveis: 8,
      vagasTotais: 10,
      imagemUrl: 'https://pixabay.com/get/g139759a7ae15e96a5bbaa22f257c982f0924451b5a2878d65b7e3b112eb384c32af3d655d7c4614815c7a09109a3e993f4496e13194a14ad108b1b25c7ee1f45_1280.jpg',
      destaque: true,
      datasPossiveis: 'Sábados e domingos, 9h e 14h',
    },
    {
      nome: 'Passeio em Grupo',
      descricao: 'Reúna amigos e familiares para uma aventura compartilhada. Pacote com descontos especiais para grupos de 5 a 15 pessoas. Inclui lanche e fotos digitais da experiência.',
      preco: 120.00,
      vagasDisponiveis: 12,
      vagasTotais: 15,
      imagemUrl: 'https://pixabay.com/get/g2c807a1058b44cb90618bb077a1cca035012ce378f26f105f280587566afe2f31fbf77433d22beb943479c91dbae1d61bd1e95fd223c018fb4cf7a7ab8198827_1280.jpg',
      destaque: true,
      datasPossiveis: 'Sábados, domingos e feriados, 8h30 e 14h',
    },
    {
      nome: 'Pacote Empresarial',
      descricao: 'Proporcione uma experiência única de team building para sua equipe. Pacotes personalizados para empresas, com atividades de integração e desenvolvimento de equipe.',
      preco: 180.00,
      vagasDisponiveis: 20,
      vagasTotais: 30,
      imagemUrl: 'https://pixabay.com/get/gd1f11b97850fa5e5f8d1be15e004ef4b310c092b0df6ab7a84749fd82a2482661f4e383328ac1d962e498b1744bcf3191a8cf1613e4913a00f21d0999c70e133_1280.jpg',
      destaque: false,
      datasPossiveis: 'Dias úteis, horário comercial',
    },
    {
      nome: 'Passeio Noturno',
      descricao: 'Uma experiência única sob o luar das noites de Mato Grosso. Explore o Rio Teles Pires sob uma perspectiva completamente diferente, com equipamentos especiais para navegação noturna.',
      preco: 200.00,
      vagasDisponiveis: 5,
      vagasTotais: 8,
      imagemUrl: 'https://pixabay.com/get/g5edb46ce1e93095b4b15d313738e59da940e9ca9bcee0cff89784c0751bb12f44eb8f9d8417a88e5db2ba975650ef0c8babdedeb741e56f99eeab4e854d7109c_1280.jpg',
      destaque: true,
      datasPossiveis: 'Sextas e sábados, 19h (apenas durante lua cheia)',
    },
  ];

  for (const pkg of packages) {
    const result = await prisma.pacote.create({
      data: pkg,
    });
    console.log(`Created package: ${result.nome}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });