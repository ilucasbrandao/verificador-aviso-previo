import dayjs from "dayjs";

/**
 * 1. Calcula os dias de aviso prévio (30 a 90 dias - conforme tabela da sua empresa)
 */
export const calcularDiasAviso = (dataAdmissaoStr, dataDesligamentoStr) => {
  const admissao = dayjs(dataAdmissaoStr);
  const desligamento = dayjs(dataDesligamentoStr);

  let anosCompletos = desligamento.diff(admissao, "year");

  // Regra da tabela: até 1 ano completo = 30 dias. A partir de 2 anos = 33, 3 anos = 36...
  let diasTotais = 30;
  if (anosCompletos > 1) {
    diasTotais = 30 + anosCompletos * 3 - 3;
  }

  if (diasTotais > 90) {
    diasTotais = 90;
  }

  return {
    anosCompletos,
    diasTotais,
  };
};

/**
 * 2. Projeta a data final do aviso prévio
 */
export const calcularProjecaoAviso = (dataDesligamentoStr, diasAviso) => {
  return dayjs(dataDesligamentoStr).add(diasAviso, "day");
};

/**
 * 3. Verifica se a data projetada cai em Dezembro (Mês 11 no Day.js)
 */
export const verificarRiscoDezembro = (dataProjetadaDayjs) => {
  return dataProjetadaDayjs.month() === 11;
};

/**
 * 4. Calcula a data limite de comunicação para encerrar até 30 de Novembro
 */
export const calcularDataLimiteSegura = (dataDesligamentoStr, diasAviso) => {
  const desligamento = dayjs(dataDesligamentoStr);
  const limiteNovembro = dayjs(`${desligamento.year()}-11-30`);
  return limiteNovembro.subtract(diasAviso, "day");
};

/**
 * Helper para formatação no padrão PT-BR (DD/MM/YYYY)
 */
export const formatarDataBR = (dayjsObj) => {
  if (!dayjsObj) return "";
  return dayjsObj.format("DD/MM/YYYY");
};

// ============================================================================
// 🧪 SUÍTE DE TESTES VIA TERMINAL (EXECUTADA COM NODE)
// ============================================================================
function executarBateriaDeTestes() {
  console.log("====================================================");
  console.log("🧪 INICIANDO TESTES DO VERIFICADOR DE AVISO PRÉVIO");
  console.log("====================================================\n");

  const casosDeTeste = [
    {
      titulo:
        "Caso 1: Tabela linha 05 - 4 anos completos (Admissão: 04/07/2022 | Demissão: 03/11/2026)",
      admissao: "2022-07-04",
      demissao: "2026-11-03",
      diasEsperados: 39,
      resultadoEsperadoEmDezembro: true,
      dataFinalEsperada: "12/12/2026",
    },
    {
      titulo:
        "Caso 2: Tabela linha 03 - 2 anos completos (Admissão: 10/01/2023 | Demissão: 01/05/2025)",
      admissao: "2023-01-10",
      demissao: "2025-05-01",
      diasEsperados: 33,
      resultadoEsperadoEmDezembro: false,
      dataFinalEsperada: "03/06/2025",
    },
    {
      titulo:
        "Caso 3: Tabela linha Mais - Limite Máximo de 90 Dias (+20 Anos de Casa)",
      admissao: "2000-01-01",
      demissao: "2026-11-05",
      diasEsperados: 90,
      resultadoEsperadoEmDezembro: false, // Cai em Fevereiro de 2027
      dataFinalEsperada: "03/02/2027",
    },
  ];

  casosDeTeste.forEach((cenario, idx) => {
    console.log(`📌 [Teste ${idx + 1}] ${cenario.titulo}`);

    const { anosCompletos, diasTotais } = calcularDiasAviso(
      cenario.admissao,
      cenario.demissao,
    );
    const dataProjetada = calcularProjecaoAviso(cenario.demissao, diasTotais);
    const caiEmDezembro = verificarRiscoDezembro(dataProjetada);
    const dataFormatada = formatarDataBR(dataProjetada);

    console.log(`   • Tempo de Casa: ${anosCompletos} ano(s)`);
    console.log(
      `   • Dias de Aviso: ${diasTotais} dias (Esperado: ${cenario.diasEsperados})`,
    );
    console.log(`   • Data Final Projetada: ${dataFormatada}`);
    console.log(
      `   • Cai em Dezembro?: ${caiEmDezembro ? "🔴 SIM (ALERTA)" : "🟢 NÃO (SEGURO)"}`,
    );

    if (caiEmDezembro) {
      const dataLimite = calcularDataLimiteSegura(cenario.demissao, diasTotais);
      console.log(
        `   💡 Sugestão: Antecipar Demissão para até ${formatarDataBR(dataLimite)}`,
      );
    }

    // Validação automática de dias, data final e alerta
    const passou =
      diasTotais === cenario.diasEsperados &&
      dataFormatada === cenario.dataFinalEsperada &&
      caiEmDezembro === cenario.resultadoEsperadoEmDezembro;

    console.log(`   Status do Teste: ${passou ? "✅ PASSED" : "❌ FAILED"}\n`);
  });

  console.log("====================================================");
  console.log("🎉 TODOS OS TESTES CONCLUÍDOS!");
  console.log("====================================================");
}

executarBateriaDeTestes();
