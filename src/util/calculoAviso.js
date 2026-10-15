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
