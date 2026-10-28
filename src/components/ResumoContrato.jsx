import { formatarDataBR } from "../util/calculoContrato";

export default function ResumoContrato({ diasContrato, resultado }) {
  if (!resultado) return null;

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Card de Resumo Fixo */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 block"></span>
          Resumo Inicial
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Período Original
            </span>
            <span className="text-xl font-bold text-slate-800">
              {diasContrato} dias
            </span>
          </div>
          <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Término Bruto
            </span>
            <span className="text-xl font-bold text-slate-800">
              {formatarDataBR(resultado.terminoPrevistoOriginal)}
            </span>
          </div>
        </div>
      </div>

      {/* Alertas Inteligentes (Ajuste ou Sucesso) */}
      {resultado.teveAjuste ? (
        <div className="bg-white border border-amber-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-amber-50 px-5 py-4 border-b border-amber-100 flex items-start gap-3">
            <svg
              className="w-5 h-5 text-amber-600 mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <h4 className="text-sm font-bold text-amber-800">
                Ajuste de Prazo Necessário
              </h4>
              <ul className="text-sm text-amber-700 mt-1.5 space-y-1 list-disc pl-4 marker:text-amber-400">
                {resultado.passouDoDia22 && (
                  <li>
                    O vencimento original ultrapassava o fechamento do{" "}
                    <strong>Dia 22</strong>.
                  </li>
                )}
                {resultado.caiuNoFinalDeSemana && (
                  <li>
                    A data de vencimento caía em um{" "}
                    <strong>Final de Semana</strong> e precisou ser antecipada
                    para sexta-feira.
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="bg-white px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                Prazo Seguro Recomendado
              </p>
              <p className="text-sm font-medium text-slate-700">
                Data final:{" "}
                <strong>{formatarDataBR(resultado.terminoFinal)}</strong>
              </p>
            </div>
            <div className="text-right flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-slate-800">
                {resultado.diasAjustados}
              </span>
              <span className="text-sm font-bold text-slate-500">dias</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm px-5 py-4 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h4 className="text-sm font-bold text-emerald-800">
              Prazo Perfeito
            </h4>
            <p className="text-sm text-emerald-600 mt-0.5">
              O contrato finaliza em um dia útil dentro do ciclo atual, sem
              necessidade de ajustes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
