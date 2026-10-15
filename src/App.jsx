import { useState } from "react";
import Formulario from "./components/Formulario";
import CardResultado from "./components/CardResultado";
import AlertaDezembro from "./components/AlertaDezembro";
import {
  calcularDiasAviso,
  calcularProjecaoAviso,
  verificarRiscoDezembro,
  calcularDataLimiteSegura,
} from "./util/calculoAviso.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TabelaCorporativa from "./components/TabelaCorporativa.jsx";

export default function App() {
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

  return (
    <div className="h-screen bg-slate-100 flex flex-col justify-between overflow-x-hidden overflow-y-auto lg:overflow-y-hidden">
      <main className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start mt-2">
          {/* Coluna Esquerda: Formulário e Resultados */}
          <section className="lg:col-span-7 space-y-3">
            <Formulario onCalcular={handleCalcular} />

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
      </main>

      <Footer />
    </div>
  );
}
