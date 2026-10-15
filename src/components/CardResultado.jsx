export default function CardResultado({
  anosCompletos,
  diasTotais,
  dataProjetada,
}) {
  const formatarData = (data) => {
    if (!data) return "";
    return new Intl.DateTimeFormat("pt-BR").format(data);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 space-y-3">
      <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
        Resumo do Cálculo
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-700">
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
          <span className="block text-xs font-medium text-slate-500 uppercase">
            Tempo de Casa
          </span>
          <span className="text-lg font-semibold text-slate-800">
            {anosCompletos} ano(s)
          </span>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
          <span className="block text-xs font-medium text-slate-500 uppercase">
            Dias de Aviso
          </span>
          <span className="text-lg font-semibold text-slate-800">
            {diasTotais} dias
          </span>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
          <span className="block text-xs font-medium text-slate-500 uppercase">
            Término Projetado
          </span>
          <span className="text-lg font-semibold text-blue-600">
            {formatarData(dataProjetada)}
          </span>
        </div>
      </div>
    </div>
  );
}
