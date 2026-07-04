export type Point = { label: string; value: number };
export const historicoArroba: Point[] = [
  {label:'Jan',value:288},{label:'Fev',value:294},{label:'Mar',value:302},{label:'Abr',value:309},{label:'Mai',value:315},{label:'Jun',value:321},{label:'Jul',value:318},{label:'Ago',value:326},{label:'Set',value:334},{label:'Out',value:331},{label:'Nov',value:338},{label:'Dez',value:342}
];
export const exportacoes: Point[] = [
  {label:'Jan',value:186},{label:'Fev',value:172},{label:'Mar',value:205},{label:'Abr',value:218},{label:'Mai',value:236},{label:'Jun',value:241},{label:'Jul',value:255},{label:'Ago',value:263},{label:'Set',value:251},{label:'Out',value:270},{label:'Nov',value:282},{label:'Dez',value:291}
];
export const custos: Point[] = [
  {label:'Jan',value:12.8},{label:'Fev',value:12.9},{label:'Mar',value:13.3},{label:'Abr',value:13.6},{label:'Mai',value:13.8},{label:'Jun',value:14.1},{label:'Jul',value:14.0},{label:'Ago',value:14.3},{label:'Set',value:14.6},{label:'Out',value:14.4},{label:'Nov',value:14.7},{label:'Dez',value:14.9}
];
export const indicadoresBase = [
  {title:'Arroba MS', value:'R$ 342,00', sub:'Base manual editável em lib/data.ts'},
  {title:'Milho MS', value:'R$ 58,40', sub:'Saca 60 kg | atualizar CEPEA/CONAB'},
  {title:'Farelo soja', value:'R$ 1.820', sub:'t | referência de custo alimentar'},
  {title:'Escalas abate', value:'6 dias', sub:'Indicador manual por frigorífico/região'},
  {title:'Exportações', value:'291 mil t', sub:'Volume mensal equivalente carcaça'},
  {title:'China', value:'52%', sub:'Participação estimada no mês'},
  {title:'Custo diário', value:'R$ 14,90', sub:'Confinamento estimado/cab/dia'},
  {title:'Clima MS', value:'Favorável', sub:'Monitorar INMET/NOAA diariamente'}
];
export const fontes = [
  ['Banco Central','Dólar/PTAX e séries temporais oficiais'],
  ['Comex Stat/MDIC','Exportações brasileiras por NCM e destino'],
  ['ABIEC','Relatórios de carne bovina e mercados compradores'],
  ['CEPEA','Indicadores agropecuários: boi, milho e soja'],
  ['CONAB','Safras, oferta de grãos e custos agropecuários'],
  ['INMET','Clima observado e previsão no Brasil'],
  ['IBGE','Abate, produção e consumo interno'],
  ['USDA/NOAA','Demanda externa e clima internacional'],
  ['B3/CME','Futuros e expectativas de mercado']
];
