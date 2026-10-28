// Dicionário de Cores por Categoria para o Tailwind
export const CORES_CATEGORIA = {
  Qualidade: {
    bordaLateral: "border-l-emerald-500",
    fundoBadge: "bg-emerald-100",
    textoBadge: "text-emerald-700",
  },
  Conduta: {
    bordaLateral: "border-l-slate-800",
    fundoBadge: "bg-slate-800",
    textoBadge: "text-white",
  },
  Indisciplina: {
    bordaLateral: "border-l-violet-500",
    fundoBadge: "bg-violet-100",
    textoBadge: "text-violet-700",
  },
  Faltas: {
    bordaLateral: "border-l-amber-500",
    fundoBadge: "bg-amber-100",
    textoBadge: "text-amber-700",
  },
  Atrasos: {
    bordaLateral: "border-l-orange-500",
    fundoBadge: "bg-orange-100",
    textoBadge: "text-orange-700",
  },
  "Graves / Justa Causa": {
    bordaLateral: "border-l-red-600",
    fundoBadge: "bg-red-100",
    textoBadge: "text-red-700",
  },
  Padrão: {
    bordaLateral: "border-l-blue-500",
    fundoBadge: "bg-blue-100",
    textoBadge: "text-blue-700",
  },
};

export const MODELOS_DISCIPLINARES = [
  // ADVERTÊNCIA POR MOTIVO DE FALTAS
  {
    id: 1,
    categoria: "Faltas",
    severidade: "Advertência Escrita",
    titulo: "Faltas ao Trabalho",
    texto: "Advertência por faltar sem justificativa, no dia XX/XX/XXXX.",
  },
  {
    id: 2,
    categoria: "Faltas",
    severidade: "Advertência Escrita",
    titulo: "Faltas ao Trabalho",
    texto:
      "Advertência por faltar sem justificativa, do dia XX/XX/XXXX à XX/XX/XXXX.",
  },
  {
    id: 3,
    categoria: "Faltas",
    severidade: "Advertência Escrita",
    titulo: "Faltas ao Trabalho",
    texto:
      "Advertência por faltar sem justificativa, no dia XX/XX/XXXX (primeiro horário).",
  },
  {
    id: 4,
    categoria: "Faltas",
    severidade: "Advertência Escrita",
    titulo: "Faltas ao Trabalho",
    texto:
      "Advertência por faltar sem justificativa, no dia XX/XX/XXXX (segundo horário).",
  },

  // ADVERTÊNCIA POR MOTIVO DE ATRASOS
  {
    id: 5,
    categoria: "Atrasos",
    severidade: "Advertência Escrita",
    titulo: "Atrasos ao Trabalho",
    texto: "Advertência por atrasar sem justificativa, no dia XX/XX/XXXX.",
  },

  // ADVERTÊNCIA POR MOTIVO DE CONDUTA
  {
    id: 6,
    categoria: "Conduta",
    severidade: "Advertência Escrita",
    titulo: "Saída sem Autorização",
    texto:
      "Advertência por conduta inadequada (no dia XX/XX/XXXX o mesmo foi embora sem autorização, pelo motivo: [MOTIVO]).",
  },
  {
    id: 7,
    categoria: "Conduta",
    severidade: "Advertência Escrita",
    titulo: "Ausência de EPI",
    texto:
      "Advertência por reincidência da falta de uso de Equipamento de Proteção Individual (EPI).",
  },

  // ADVERTÊNCIA POR MOTIVO DE INDISCIPLINA
  {
    id: 8,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Indisciplina (Recusa)",
    texto:
      "Advertência por indisciplina, o colaborador(a) se recusou a executar a operação na qual a sua liderança lhe solicitou.",
  },
  {
    id: 9,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Indisciplina (Organização)",
    texto:
      "Advertência por indisciplina (o colaborador(a) não atendeu ao pedido da coordenação do setor, indo embora e deixando o posto de trabalho sujo e desorganizado).",
  },
  {
    id: 10,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Ofensas)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) utilizou palavras ofensivas e desrespeitosas ao se dirigir ao líder do seu setor).",
  },
  {
    id: 11,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Urbanidade)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) agiu com desrespeito em relação à liderança do setor, demonstrando falta de urbanidade no trato com os demais colegas de trabalho).",
  },
  {
    id: 12,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Feedbacks)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) apresenta sérias dificuldades em receber feedbacks da liderança, demonstrando recusa em ouvir, dialogar e aceitar os pontos de melhoria necessários para o desempenho de suas funções).",
  },
  {
    id: 13,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Depredação)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) foi flagrado em ato de depredação, caracterizado pela destruição ou dano no patrimônio da empresa).",
  },
  {
    id: 14,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Uso de celular)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) estava utilizando o celular durante o expediente de trabalho).",
  },
  {
    id: 15,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Brincadeiras)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) apresentou comportamento inadequado com brincadeiras no setor).",
  },
  {
    id: 16,
    categoria: "Indisciplina",
    severidade: "Advertência Escrita",
    titulo: "Conduta Inadequada (Banheiro)",
    texto:
      "Advertência por conduta inadequada (o colaborador(a) se ausenta do seu posto de trabalho por períodos excessivos e com frequência desproporcional com idas ao banheiro).",
  },

  // ADVERTÊNCIA POR MOTIVO DE MAU PROCEDIMENTO (QUALIDADE)
  {
    id: 17,
    categoria: "Qualidade",
    severidade: "Advertência Escrita",
    titulo: "Mau procedimento (Omissão)",
    texto:
      "Advertência em decorrência de omissão de qualidade, motivada pela falta de acompanhamento adequado dos processos sob sua responsabilidade.",
  },
  {
    id: 18,
    categoria: "Qualidade",
    severidade: "Advertência Escrita",
    titulo: "Mau procedimento (Ferramentas)",
    texto:
      "Advertência por mau procedimento (colaborador(a) não utilizou as ferramentas de qualidade para a realização dos processos).",
  },
  {
    id: 19,
    categoria: "Qualidade",
    severidade: "Advertência Escrita",
    titulo: "Mau procedimento (Liderança)",
    texto:
      "Advertência por mau procedimento (líder não acompanhou o processo, o que ocasionou a perda de material devido à operação não realizada corretamente pelo operador(a)).",
  },
  {
    id: 22,
    categoria: "Qualidade",
    severidade: "Advertência Escrita",
    titulo: "Mau procedimento (Fora dos Padrões)",
    texto:
      "Advertência por conduta inadequada, (o colaborador(a) costurou fora dos padrões de qualidade exigidos e orientados pela empresa. Esta falha na execução de suas atividades gerou a devolução do material e a necessidade de retrabalho para o cliente).",
  },
  {
    id: 23,
    categoria: "Qualidade",
    severidade: "Suspensão Disciplinar",
    titulo: "Mau procedimento (Fora dos Padrões)",
    texto:
      "O colaborador(a) apropriou-se de um pertence pessoal ([OBJETO]) de propriedade de um colega de trabalho, sem o devido consentimento ou autorização.",
  },
  {
    id: 24,
    categoria: "Indisciplina",
    severidade: "Suspensão Disciplinar",
    titulo: "Conduta Inadequada (Registro por Outro Funcionário)",
    texto:
      "Funcionário(a) faltou e solicitou para um colega de trabalho registrar seu ponto.",
  },

  // SUSPENSÃO POR MOTIVO DE FALTAS
  {
    id: 20,
    categoria: "Faltas",
    severidade: "Suspensão Disciplinar",
    titulo: "Faltas (Suspensão de X Dias)",
    texto:
      "Suspensão de XX (escrita por extenso) dias por faltar sem justificativa no dia XX/XX/XXXX.",
  },
  {
    id: 21,
    categoria: "Faltas",
    severidade: "Suspensão Disciplinar",
    titulo: "Faltas (Suspensão de X Dias)",
    texto:
      "Suspensão de XX (escrita por extenso) dias por faltar sem justificativa do dia XX/XX/XXXX à XX/XX/XXXX.",
  },
];
