'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: "Quais são os requisitos para participar dos passeios?",
    answer: "Para participar de nossos passeios, é necessário ter mais de 7 anos de idade. Não é obrigatório saber nadar, pois todos os participantes usam coletes salva-vidas durante todo o percurso. Não recomendamos a atividade para pessoas com problemas cardíacos ou mulheres grávidas."
  },
  {
    question: "É preciso ter experiência anterior com caiaque?",
    answer: "Não, nossos passeios são adequados para iniciantes. Oferecemos uma orientação completa antes da atividade e nossos guias acompanham o grupo durante todo o percurso. Caso você nunca tenha praticado caiaque antes, recomendamos os pacotes com percursos mais curtos e águas mais calmas."
  },
  {
    question: "O que está incluso nos pacotes?",
    answer: "Todos os nossos pacotes incluem: equipamentos completos (caiaque, remo, colete salva-vidas), instruções de segurança, acompanhamento de guias experientes, seguro de acidentes, kit de primeiros socorros e fotos digitais da experiência. Alguns pacotes também incluem lanches ou refeições, dependendo da duração do passeio."
  },
  {
    question: "Como faço para reservar um passeio?",
    answer: "As reservas podem ser feitas diretamente pelo WhatsApp, clicando no botão 'Quero este!' nos pacotes disponíveis. É necessário um pagamento antecipado de 30% do valor para garantir sua vaga, e o restante pode ser pago no dia do passeio."
  },
  {
    question: "Qual a política de cancelamento?",
    answer: "Em caso de cancelamento com mais de 7 dias de antecedência, devolvemos 100% do valor pago. Com 3 a 7 dias de antecedência, devolvemos 50%. Cancelamentos com menos de 3 dias de antecedência não têm direito a reembolso. Em caso de condições climáticas desfavoráveis, oferecemos a remarcação sem custo adicional."
  },
  {
    question: "O que devo levar para o passeio?",
    answer: "Recomendamos levar: roupas leves que possam molhar (preferencialmente de secagem rápida), protetor solar, repelente, toalha, troca de roupa para após o passeio, calçado que possa molhar (sandálias fechadas ou tênis aquáticos), chapéu ou boné, e garrafa de água. Oferecemos embalagens à prova d'água para celulares e documentos."
  },
  {
    question: "Posso levar meu próprio caiaque?",
    answer: "Sim, aceitamos que participantes tragam seus próprios equipamentos. Neste caso, oferecemos um desconto de 15% no valor do pacote escolhido. No entanto, nossos guias avaliarão se o equipamento está em condições adequadas para o percurso."
  },
  {
    question: "Os passeios são seguros? Quais medidas de segurança são adotadas?",
    answer: "A segurança é nossa prioridade. Todos os participantes recebem coletes salva-vidas e instruções detalhadas antes do passeio. Nossos guias são certificados em primeiros socorros e técnicas de resgate aquático. Mantemos comunicação constante via rádio durante todo o percurso e monitoramos as condições climáticas. Além disso, contamos com seguro para todos os participantes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-gray-800">{item.question}</span>
            <svg
              className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
