export default function DiretrizesContrato() {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
      <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
        <svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="font-bold text-slate-800 text-sm">
          Diretrizes de Experiência
        </h3>
      </div>

      <div className="p-6">
        <ul className="text-sm text-slate-600 space-y-4">
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
            <p>
              <strong className="text-slate-800">Contagem Inicial:</strong> O
              dia da admissão já é contabilizado como o 1º dia do contrato
              determinado.
            </p>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
            <p>
              <strong className="text-slate-800">Trava do Dia 22:</strong> Para
              não impactar as métricas e o fechamento da folha do mês, nenhum
              contrato deve ter seu vencimento caindo após o dia 22.
            </p>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
            <p>
              <strong className="text-slate-800">Finais de Semana:</strong>{" "}
              Vencimentos previstos para sábado ou domingo são automaticamente
              recuados para a <strong>Sexta-feira</strong>, garantindo que o
              contrato nunca ultrapasse a data limite legal.
            </p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
