export type MarketPoint = {
  mes: string;
  arroba: number;
  dolar: number;
  milho: number;
  exportacao: number;
  china: number;
  escala: number;
  chuva: number;
};

export const indicadores = {
  atualizado: "04/07/2026 11:30",
  arrobaMs: 309.5,
  dolar: 5.45,
  milho: 68.2,
  fareloSoja: 1780,
  exportMes: 256.4,
  chinaShare: 49.2,
  escalaMedia: 8.5,
  consumoInterno: "Neutro",
  clima: "Atenção",
  pressao: 72
};

export const historico: MarketPoint[] = [
  { mes: "Jan/25", arroba: 296, dolar: 5.12, milho: 61, exportacao: 198, china: 88, escala: 10, chuva: 180 },
  { mes: "Fev/25", arroba: 301, dolar: 5.02, milho: 63, exportacao: 205, china: 94, escala: 9, chuva: 150 },
  { mes: "Mar/25", arroba: 294, dolar: 5.08, milho: 65, exportacao: 216, china: 101, escala: 11, chuva: 120 },
  { mes: "Abr/25", arroba: 287, dolar: 5.15, milho: 64, exportacao: 222, china: 107, escala: 12, chuva: 80 },
  { mes: "Mai/25", arroba: 291, dolar: 5.20, milho: 62, exportacao: 231, china: 112, escala: 10, chuva: 55 },
  { mes: "Jun/25", arroba: 304, dolar: 5.34, milho: 66, exportacao: 244, china: 124, escala: 8, chuva: 34 },
  { mes: "Jul/25", arroba: 309, dolar: 5.45, milho: 68, exportacao: 256, china: 126, escala: 8.5, chuva: 28 }
];

export const fontes = [
  { nome: "Comex Stat / MDIC", uso: "Exportações brasileiras por NCM, destino, volume e valor." },
  { nome: "ABIEC", uso: "Relatórios de exportação e leitura setorial da carne bovina." },
  { nome: "Banco Central do Brasil", uso: "PTAX, séries temporais e câmbio oficial." },
  { nome: "CEPEA/Esalq", uso: "Indicadores de boi gordo, milho, soja e insumos." },
  { nome: "CONAB", uso: "Safras, estoques, milho, farelo e custos agropecuários." },
  { nome: "IBGE", uso: "Abate, consumo aparente, IPCA alimentação e dados de mercado interno." },
  { nome: "INMET", uso: "Chuva, temperatura e anomalias climáticas por estação." },
  { nome: "USDA / CME / B3", uso: "Mercado internacional, futuros e referência de risco." }
];

export const leitura = [
  "Exportações e compras da China acima da média elevam a pressão de alta.",
  "Escalas abaixo de 9 dias indicam menor oferta imediata para os frigoríficos.",
  "Milho e farelo firmes reduzem margem de confinamento e devem ser monitorados.",
  "Câmbio valorizado aumenta competitividade da carne brasileira no exterior.",
  "Clima seco pode reduzir ganho de peso a pasto e antecipar oferta regional."
];
