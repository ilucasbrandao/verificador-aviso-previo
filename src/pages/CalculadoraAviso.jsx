import { useState } from "react";
import Formulario from "../components/Formulario";
import CardResultado from "../components/CardResultado";
import AlertaDezembro from "../components/AlertaDezembro";
import TabelaCorporativa from "../components/TabelaCorporativa";
import Header from "../components/Header";
import {
  calcularDiasAviso,
  calcularProjecaoAviso,
  verificarRiscoDezembro,
  calcularDataLimiteSegura,
} from "../util/calculoAviso.js";

export default function CalculadoraAviso() {
  const [resultado, setResultado] = useState(null);

  const handleCalcular = ({ dataAdmissao, dataDesligamento }) => {
    const { anosCompletos, diasTotais } = calcularDiasAviso(
      dataAdmissao,
      dataDesligamento,
    );
    const dataProjetada = calcularProjecaoAviso(dataDesligamento, diasTotais);
    const caiEmDezembro = verificarRiscoDezembro(dataProjetada);

    let dataLimiteSegura = null;
    if (caiEmDezembro) {
      dataLimiteSegura = calcularDataLimiteSegura(dataDesligamento, diasTotais);
    }

    setResultado({
      anosCompletos,
      diasTotais,
      dataProjetada,
      caiEmDezembro,
      dataLimiteSegura,
    });
  };

  const handleLimpar = () => {
    setResultado(null);
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start mt-2">
        <section className="lg:col-span-7 space-y-3">
          <Formulario onCalcular={handleCalcular} onLimpar={handleLimpar} />
          {resultado && (
            <div className="space-y-3 animate-fade-in">
              <CardResultado
                anosCompletos={resultado.anosCompletos}
                diasTotais={resultado.diasTotais}
                dataProjetada={resultado.dataProjetada}
              />
              <AlertaDezembro
                caiEmDezembro={resultado.caiEmDezembro}
                dataLimiteSegura={resultado.dataLimiteSegura}
              />
            </div>
          )}
        </section>
        <section className="lg:col-span-5">
          <TabelaCorporativa />
        </section>
      </div>
    </div>
  );
}
