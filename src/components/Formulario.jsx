import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

export default function Formulario({ onCalcular }) {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border border-slate-100 space-y-4"
    >
      <div>
        <label className="block text-sm font-semibold text-slate-800 mb-1">
          Data de Admissão
        </label>
        <DatePicker
          selected={dataAdmissao}
          onChange={(date) => setDataAdmissao(date)}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          placeholderText="DD/MM/AAAA"
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-800 mb-1">
          Data do Desligamento
        </label>
        <DatePicker
          selected={dataDesligamento}
          onChange={(date) => setDataDesligamento(date)}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          placeholderText="DD/MM/AAAA"
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 shadow-sm hover:shadow"
      >
        Calcular Projeção
      </button>
    </form>
  );
}
