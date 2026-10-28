import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  const location = useLocation();

  const menuItems = [
    {
      path: "/",
      label: "Aviso Prévio",
      icon: (
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      path: "/disciplinar",
      label: "Medida Disciplinar",
      icon: (
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
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      path: "/contratos",
      label: "Verificador de Contratos",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden font-sans">
      {/* Menu Lateral (Sidebar Premium) */}
      <aside className="w-64 bg-[#00113d] border-r border-slate-800/60 flex flex-col shadow-2xl z-20 transition-all duration-300">
        {/* Logotipo / Branding */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-100 tracking-tight leading-none">
                Departamento Pessoal
              </h1>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <p className="px-3 text-xs font-semibold text-slate-100 uppercase tracking-wider mb-3">
            Ferramentas
          </p>
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm ${
                    isActive
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-slate-100 hover:bg-slate-800/50 hover:text-slate-200"
                  }`}
                >
                  {/* Indicador Lateral Azul para o item ativo */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  )}

                  {/* Ícone */}
                  <span
                    className={`${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-400"} transition-colors`}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Área Principal de Conteúdo */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50/50">
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
