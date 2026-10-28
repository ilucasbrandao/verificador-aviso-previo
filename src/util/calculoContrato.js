import dayjs from "dayjs";

export const calcularTerminoContrato = (dataAdmissaoStr, diasContrato) => {
  const admissao = dayjs(dataAdmissaoStr);
  const terminoPrevistoOriginal = admissao.add(diasContrato - 1, "day");

  let dataCalculada = terminoPrevistoOriginal;
  let passouDoDia22 = false;
  let caiuNoFinalDeSemana = false;

  // O laço (while) garante que a data seja testada e ajustada repetidamente
  // até que NENHUMA das regras seja violada (efeito cascata).
  while (
    dataCalculada.date() > 22 ||
    dataCalculada.day() === 0 ||
    dataCalculada.day() === 6
  ) {
    // 1. Regra do Fechamento (Se passou do dia 22, volta para o dia 22 daquele mês)
    if (dataCalculada.date() > 22) {
      passouDoDia22 = true;
      dataCalculada = dataCalculada.date(22);
    }

    // 2. Regra do Fim de Semana (0 = Domingo, 6 = Sábado)
    if (dataCalculada.day() === 6) {
      caiuNoFinalDeSemana = true;
      dataCalculada = dataCalculada.subtract(1, "day");
    } else if (dataCalculada.day() === 0) {
      caiuNoFinalDeSemana = true;
      dataCalculada = dataCalculada.subtract(2, "day");
    }
  }

  // Recalcula os dias finais exatos
  const diasAjustados = dataCalculada.diff(admissao, "day") + 1;
  const teveAjuste = passouDoDia22 || caiuNoFinalDeSemana;

  return {
    terminoPrevistoOriginal,
    terminoFinal: dataCalculada,
    passouDoDia22,
    caiuNoFinalDeSemana,
    teveAjuste,
    diasAjustados,
  };
};

export const formatarDataBR = (dayjsObj) => {
  if (!dayjsObj) return "";
  return dayjsObj.format("DD/MM/YYYY");
};
