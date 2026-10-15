export default function AlertaDezembro({ caiEmDezembro, dataLimiteSegura }) {
  const formatarData = (data) => {
    if (!data) return "";
    return new Intl.DateTimeFormat("pt-BR").format(data);
  };

  if (caiEmDezembro) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl shadow-sm space-y-2">
        <div className="flex items-center space-x-2 text-red-700 font-bold text-base">
          <span>⚠️</span>
          <h4>Atenção: Risco de Dezembro Identificado!</h4>
        </div>
        <p className="text-sm text-red-600 leading-relaxed">
          A projeção deste aviso encerra no mês de <strong>Dezembro</strong>.
          Isso resultará no impacto do 13º salário integral e encargos
          trabalhistas específicos do mês.
        </p>
        {dataLimiteSegura && (
          <div className="mt-3 pt-2 border-t border-red-100 text-sm text-red-800 font-medium">
            💡 <strong>Sugestão de Prevenção:</strong> Realize o desligamento
            até{" "}
            <span className="underline font-bold">
              {formatarData(dataLimiteSegura)}
            </span>{" "}
            para encerrar a projeção em Novembro.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl shadow-sm">
      <div className="flex items-center space-x-2 text-emerald-700 font-bold text-base">
        <span>✅</span>
        <h4>Tudo Certo!</h4>
      </div>
      <p className="text-sm text-emerald-600 mt-1">
        A projeção encerra fora do mês de Dezembro. Nenhum risco de encargo
        estendido detectado.
      </p>
    </div>
  );
}
