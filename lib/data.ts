export const kpis = [
  { name: 'Exportações BR carne bovina', value: 'Atualizar mensal', trend: '+/-', note: 'Comex Stat / MDIC' },
  { name: 'China e Hong Kong', value: 'Share destino', trend: 'monitorar', note: 'Comex Stat / ABIEC' },
  { name: 'Escala de abate', value: 'Manual/API', trend: 'dias', note: 'Scot/Cepea/relatórios internos' },
  { name: 'Milho MS', value: 'R$/sc', trend: 'custo', note: 'Conab/Cepea' },
  { name: 'Dólar venda', value: 'BCB SGS 1', trend: 'diário', note: 'Banco Central' },
  { name: 'Clima fazenda', value: 'INMET', trend: 'risco', note: 'chuva/temp/umidade' }
];
export const exportHistory = [
  { mes: 'Jan', volume: 185, receita: 890 }, { mes: 'Fev', volume: 176, receita: 840 },
  { mes: 'Mar', volume: 202, receita: 975 }, { mes: 'Abr', volume: 215, receita: 1030 },
  { mes: 'Mai', volume: 228, receita: 1105 }, { mes: 'Jun', volume: 236, receita: 1160 }
];
export const markets = [
  { mercado:'China/HK', participacao: 48 }, { mercado:'EUA', participacao: 9 }, { mercado:'UE', participacao: 8 },
  { mercado:'Chile', participacao: 6 }, { mercado:'Oriente Médio', participacao: 12 }, { mercado:'Outros', participacao: 17 }
];
export const slaughterScale = [
  { frigorifico:'JBS CG', dias: 8 }, { frigorifico:'Marfrig', dias: 7 }, { frigorifico:'Frizelo', dias: 5 }, { frigorifico:'Buriti', dias: 4 }
];
export const feedCost = [
  { mes:'Jan', milho: 58, soja: 122, dieta: 13.8 }, { mes:'Fev', milho: 61, soja: 119, dieta: 14.1 },
  { mes:'Mar', milho: 64, soja: 125, dieta: 14.7 }, { mes:'Abr', milho: 62, soja: 128, dieta: 14.5 },
  { mes:'Mai', milho: 59, soja: 130, dieta: 14.2 }, { mes:'Jun', milho: 57, soja: 127, dieta: 13.9 }
];
export const internalDemand = [
  { mes:'Jan', consumo: 100 }, { mes:'Fev', consumo: 96 }, { mes:'Mar', consumo: 101 }, { mes:'Abr', consumo: 103 }, { mes:'Mai', consumo: 99 }, { mes:'Jun', consumo: 104 }
];
export const sources = [
  { nome:'Comex Stat / MDIC', uso:'Exportações por NCM, país de destino, volume e valor.' },
  { nome:'ABIEC', uso:'Leituras setoriais e consolidação do mercado externo de carne bovina.' },
  { nome:'Banco Central do Brasil', uso:'Dólar comercial/PTAX e séries SGS.' },
  { nome:'Conab', uso:'Safra, milho, soja e informações agropecuárias oficiais.' },
  { nome:'Cepea/Esalq', uso:'Indicadores agropecuários e preços de referência.' },
  { nome:'INMET', uso:'Chuva, temperatura, umidade, alerta e histórico climático.' },
  { nome:'IBGE', uso:'Abate, produção e consumo aparente em séries oficiais.' }
];
