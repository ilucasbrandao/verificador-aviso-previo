import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import CalculadoraAviso from "./pages/CalculadoraAviso";
import VerificadorContrato from "./pages/VerificadorContrato";
import MedidaDisciplinar from "./pages/MedidaDisciplinar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Módulo 1: Simulador Atual */}
          <Route index element={<CalculadoraAviso />} />
          <Route path="disciplinar" element={<MedidaDisciplinar />} />
          <Route path="contratos" element={<VerificadorContrato />} />

          {/* Espaços reservados para os próximos módulos */}
          <Route
            path="disciplinar"
            element={
              <div className="text-center p-10 text-slate-500">
                <h2 className="text-2xl font-bold mb-2">Medida Disciplinar</h2>
                <p>Módulo em construção...</p>
              </div>
            }
          />

          <Route
            path="contratos"
            element={
              <div className="text-center p-10 text-slate-500">
                <h2 className="text-2xl font-bold mb-2">
                  Verificador de Contratos
                </h2>
                <p>Módulo em construção...</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
