import { useState } from "react";
import CardMedida from "../components/CardMedida";
import {
  MODELOS_DISCIPLINARES,
  CORES_CATEGORIA,
} from "../data/modelosDisciplinar";

const CATEGORIAS = [
  "Todas",
  ...new Set(MODELOS_DISCIPLINARES.map((m) => m.categoria)),
];

export default function MedidaDisciplinar() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todas");

  const modelosFiltrados = MODELOS_DISCIPLINARES.filter(
    (modelo) => filtroAtivo === "Todas" || modelo.categoria === filtroAtivo,
  );

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto w-full px-2 sm:px-4 py-6">
      {/* Cabeçalho */}
      <header className="mb-6 shrink-0">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Biblioteca de Medidas
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Selecione a categoria e copie a descrição padronizada para o sistema.
        </p>
      </header>

      {/* Barra de Filtros Rolável */}
      <div className="shrink-0 w-full overflow-x-auto pb-4 mb-2 scrollbar-hide">
        <div className="flex flex-nowrap gap-2 w-max">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroAtivo(categoria)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 border ${
                filtroAtivo === categoria
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="flex-1 overflow-y-auto pr-2 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modelosFiltrados.map((modelo) => {
            // Busca as cores definidas; se não encontrar, usa o Padrão
            const cores =
              CORES_CATEGORIA[modelo.categoria] || CORES_CATEGORIA["Padrão"];

            return (
              <CardMedida
                key={modelo.id}
                categoria={modelo.categoria}
                severidade={modelo.severidade}
                titulo={modelo.titulo}
                texto={modelo.texto}
                cores={cores}
              />
            );
          })}

          {modelosFiltrados.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-xl border border-slate-200 border-dashed">
              Nenhum modelo encontrado para esta categoria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
