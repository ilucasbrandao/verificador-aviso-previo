# 🗓️ Verificador de Aviso Prévio Indenizado & Alerta de Dezembro

Uma aplicação web _client-side_ reativa desenvolvida para automatizar a análise e projeção de datas do Aviso Prévio Indenizado. O sistema otimiza a rotina do departamento Departamento Pessoal (DP), identificando preventivamente se o término da projeção do aviso incidirá no mês de **Dezembro** (evitando o encargo de 13º salário integral e penalidades/impactos de convenção coletiva ou dissídio).

---

## 📌 Funcionalidades Principais

- **Cálculo da Tabela Proporcional Corporativa:** Aplica automaticamente os dias de aviso proporcional conforme o tempo de casa do colaborador (Lei nº 12.506/2011 / Regra Corporativa).
- **Projeção Precisa de Datas:** Calcula a data final projetada considerando o início do aviso no dia seguinte à comunicação da demissão.
- **Detector Automático de Risco (Dezembro):** Identifica se a data final projetada encerra entre `01/12` e `31/12`.
- **Sugestão de Prevenção:** Para cenários com risco de término em dezembro, calcula automaticamente a data limite recomendada para a comunicação da demissão a fim de encerrar o aviso até 30 de Novembro.
- **Interface Responsiva & Dashboard Compacto:** Projetado em 2 colunas para exibição em tela cheia (_Above the Fold_), contando com formulário com calendário adaptado (`DD/MM/AAAA`) e painel com a Tabela Corporativa de Referência.

---

## 📐 Regras de Negócio & Tabela Corporativa

A contagem dos dias segue a régua corporativa de aviso proporcional:

| Tempo de Casa (Anos)      |    Dias de Aviso Prévio     |
| :------------------------ | :-------------------------: |
| Até 1 ano completo        |         **30 dias**         |
| 2 anos completos          |         **33 dias**         |
| 3 anos completos          |         **36 dias**         |
| 4 anos completos          |         **39 dias**         |
| ... (+3 dias por ano)     |             ...             |
| 20 anos completos ou mais | **90 dias** (Limite Máximo) |

> **Fórmula Aplicada:**
>
> - Para $Anos \le 1$: $30\text{ dias}$
> - Para $Anos > 1$: $\min(90, 30 + (Anos \times 3) - 3)$

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React.js](https://react.dev/) (com [Vite](https://vitejs.dev/))
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Manipulação de Datas:** [Day.js](https://day.js.org/) (com plugin `customParseFormat`)
- **Componentes de Entrada:** [react-datepicker](https://reactdatepicker.com/) + [date-fns](https://date-fns.org/) (`pt-BR`)
- **Testes Unitários/CLI:** Node.js Nativo

---

## 📁 Estrutura do Projeto

```text
verificador-aviso/
├── public/
│   ├── favicon.svg               # Ícone do projeto
│   └── tabela-aviso-previo.png   # Imagem oficial da tabela corporativa
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Cabeçalho da aplicação
│   │   ├── Formulario.jsx        # Formulário com campos de data (React Datepicker)
│   │   ├── CardResultado.jsx     # Card exibindo o resumo dos dias e data projetada
│   │   ├── AlertaDezembro.jsx    # Banner condicional (Verde/Vermelho com sugestão)
│   │   ├── TabelaCorporativa.jsx # Painel lateral com visualização da tabela
│   │   └── Footer.jsx            # Rodapé com créditos e link do GitHub
│   ├── util/
│   │   ├── calculoAviso.js       # Funções de regra de negócio e cálculo de datas
│   │   └── testeCalculos.js      # Suíte de testes para execução via terminal (CLI)
│   ├── App.jsx                   # Componente principal / Layout do Dashboard
│   ├── index.css                 # Importação do Tailwind CSS
│   └── main.jsx                  # Ponto de entrada do React
├── index.html
├── package.json
└── vite.config.js
```
