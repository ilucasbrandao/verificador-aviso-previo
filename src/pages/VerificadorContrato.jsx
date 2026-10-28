import { useState } from "react";
import dayjs from "dayjs";
import FormularioContrato from "../components/FormularioContrato";
import ResumoContrato from "../components/ResumoContrato";
import DiretrizesContrato from "../components/DiretrizesContrato";
import { calcularTerminoContrato } from "../util/calculoContrato.js";

export default function VerificadorContrato() {
  const [dataAdmissao, setDataAdmissao] = useState(null);
  const [diasContrato, setDiasContrato] = useState(180);
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataAdmissao || !diasContrato) return;

    const dataISO = dayjs(dataAdmissao).format("YYYY-MM-DD");
    const calculo = calcularTerminoContrato(dataISO, Number(diasContrato));
    setResultado(calculo);
  };

  const handleLimpar = () => {
    setDataAdmissao(null);
    setDiasContrato(180);
    setResultado(null);
  };

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho da Página */}
      <header className="mb-8 shrink-0">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Verificador de Contratos
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">
          Simule a data de término e evite ultrapassar o fechamento da folha
          (Dia 22).
        </p>
      </header>

      {/* Grid de Estrutura */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
        {/* Coluna Esquerda: Ações e Resultados */}
        <section className="lg:col-span-7 space-y-6">
          <FormularioContrato
            dataAdmissao={dataAdmissao}
            setDataAdmissao={setDataAdmissao}
            diasContrato={diasContrato}
            setDiasContrato={setDiasContrato}
            onSubmit={handleSubmit}
            onLimpar={handleLimpar}
          />

          <ResumoContrato diasContrato={diasContrato} resultado={resultado} />
        </section>

        {/* Coluna Direita: Informações Estáticas (Sticky) */}
        <section className="lg:col-span-5 lg:sticky lg:top-8">
          <DiretrizesContrato />
        </section>
      </div>
    </div>
  );
}
