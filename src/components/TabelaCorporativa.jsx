export default function TabelaCorporativa() {
  return (
    <aside className="bg-white rounded-xl shadow-md border border-slate-100 p-3.5 space-y-2.5">
      {/* Cabeçalho */}
      <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
            <span>📊</span> Tabela Corporativa
          </h3>
          <p className="text-[11px] text-slate-500">
            Lei 12.506/2011 — Referência DP
          </p>
        </div>
      </div>

      {/* Imagem Limitada em Altura para Não Estourar a Tela */}
      <div className="flex justify-center bg-slate-50 p-1.5 rounded-lg border border-slate-100">
        <img
          src="/tabela-aviso-previo.png"
          alt="Tabela Corporativa Oficial de Aviso Prévio"
          className="max-h-[300px] w-auto h-auto object-contain rounded shadow-sm"
        />
      </div>

      {/* Orientação DP */}
      <div className="p-2 bg-amber-50 border-l-4 border-amber-400 rounded text-[11px] text-amber-800 leading-tight">
        ℹ️ <strong>Orientação DP:</strong> Confirme a projeção com o DP antes da
        homologação para evitar incidências no mês que antecede a
        data-base/dissídio.
      </div>
    </aside>
  );
}
