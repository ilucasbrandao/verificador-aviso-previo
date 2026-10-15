import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

export default function Formulario({ onCalcular, onLimpar }) {
  const [dataAdmissao, setDataAdmissao] = useState(null);
  const [dataDesligamento, setDataDesligamento] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataAdmissao || !dataDesligamento) return;

    onCalcular({
      dataAdmissao: dayjs(dataAdmissao).format("YYYY-MM-DD"),
      dataDesligamento: dayjs(dataDesligamento).format("YYYY-MM-DD"),
    });
  };

  const handleReset = () => {
    setDataAdmissao(null);
    setDataDesligamento(null);
    if (onLimpar) onLimpar();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md border border-slate-100 space-y-3"
    >
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Data de Admissão
        </label>
        <DatePicker
          selected={dataAdmissao}
          onChange={(date) => setDataAdmissao(date)}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          placeholderText="DD/MM/AAAA"
          required
          className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Data de Comunicação do Desligamento
        </label>
        <DatePicker
          selected={dataDesligamento}
          onChange={(date) => setDataDesligamento(date)}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          placeholderText="DD/MM/AAAA"
          required
          className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
        />
      </div>

      {/* Botões de Ação */}
      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 text-sm rounded-lg transition duration-200 shadow-sm hover:shadow"
        >
          Calcular Projeção
        </button>

        <button
          type="button"
          onClick={handleReset}
          title="Limpar campos e resultados"
          className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-sm rounded-lg border border-slate-200 transition duration-200 flex items-center justify-center gap-1"
        >
          <span>🔄</span>
          <span className="hidden sm:inline">Limpar</span>
        </button>
      </div>
    </form>
  );
}
