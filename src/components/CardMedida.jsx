import { useState } from "react";

export default function CardMedida({
  categoria,
  severidade,
  titulo,
  texto,
  cores,
}) {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = () => {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div
      className={`bg-white border-y border-r border-slate-200 border-l-4 ${cores.bordaLateral} rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden`}
    >
      {/* Cabeçalho do Card */}
      <div className="bg-slate-50/80 px-5 py-3 border-b border-slate-100 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            {/* Badge de Categoria Colorido */}
            <span
              className={`inline-block ${cores.fundoBadge} ${cores.textoBadge} text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded`}
            >
              {categoria}
            </span>
            {/* Texto de Severidade */}
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              {severidade}
            </span>
          </div>
          <h3 className="text-sm font-bold text-slate-800 leading-tight">
            {titulo}
          </h3>
        </div>

        {/* Botão de Copiar */}
        <button
          onClick={handleCopiar}
          title="Copiar texto"
          className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
            copiado
              ? "bg-emerald-100 text-emerald-600"
              : "text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          {copiado ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Área do Texto */}
      <div className="p-5 flex-1 bg-white">
        <p className="text-sm text-slate-600 font-mono leading-relaxed whitespace-pre-wrap">
          {texto}
        </p>
      </div>
    </div>
  );
}
