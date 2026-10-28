import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

export default function FormularioContrato({
  dataAdmissao,
  setDataAdmissao,
  diasContrato,
  setDiasContrato,
  onSubmit,
  onLimpar,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Campo de Data */}
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-slate-700">
            Data de Admissão
          </label>
          <DatePicker
            selected={dataAdmissao}
            onChange={(date) => setDataAdmissao(date)}
            dateFormat="dd/MM/yyyy"
            locale="pt-BR"
            placeholderText="DD/MM/AAAA"
            required
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800/20 focus:border-slate-800 text-slate-700 transition-all duration-200 placeholder:text-slate-400 font-medium"
          />
        </div>

        {/* Campo de Dias */}
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-slate-700">
            Prazo (Dias)
          </label>
          <input
            type="number"
            min="1"
            value={diasContrato}
            onChange={(e) => setDiasContrato(e.target.value)}
            required
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-800/20 focus:border-slate-800 text-slate-700 transition-all duration-200 font-medium"
          />
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 text-sm rounded-lg transition duration-200 shadow-sm hover:shadow"
        >
          <span>Verificar Vencimento</span>
        </button>

        <button
          type="button"
          onClick={onLimpar}
          title="Limpar campos e resultados"
          className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-600 font-semibold rounded-lg border border-slate-200 transition-colors duration-200 flex items-center gap-2 shadow-sm"
        >
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="hidden sm:inline">Limpar</span>
        </button>
      </div>
    </form>
  );
}
