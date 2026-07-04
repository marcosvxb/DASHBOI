'use client';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CloudSun, DollarSign, Factory, Globe2, Wheat, Beef, RefreshCw } from 'lucide-react';
import { kpis, exportHistory, markets, slaughterScale, feedCost, internalDemand, sources } from '@/lib/data';

const icons = [Globe2, Globe2, Factory, Wheat, DollarSign, CloudSun];
const risks = [
  { nome:'Exportação forte + dólar alto', status:'Alta para arroba', cor:'bg-green-100 text-green-800' },
  { nome:'Escalas curtas nos frigoríficos', status:'Alta para boi', cor:'bg-green-100 text-green-800' },
  { nome:'Milho/soja subindo', status:'Pressiona custo', cor:'bg-amber-100 text-amber-800' },
  { nome:'Calor/baixa chuva', status:'Risco no desempenho', cor:'bg-red-100 text-red-800' }
];
function Card({children, className=''}:{children:React.ReactNode,className?:string}){return <div className={`card p-4 ${className}`}>{children}</div>}
export default function Page(){
  const atualizado = new Date().toLocaleDateString('pt-BR');
  return <main className="min-h-screen p-3 md:p-8">
    <section className="mx-auto max-w-7xl space-y-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div><p className="text-sm text-green-800 font-semibold">Fazenda Gruta Azul</p><h1 className="text-2xl md:text-4xl font-bold">Painel diário do mercado do boi</h1><p className="text-sm text-slate-600 mt-1">Exportação, China, escalas, alimentação, consumo interno, câmbio e clima.</p></div>
        <div className="flex items-center gap-2 text-sm bg-white border rounded-full px-3 py-2"><RefreshCw size={16}/> Atualizado: {atualizado}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">{kpis.map((k,i)=>{const Icon=icons[i];return <Card key={k.name}><Icon className="mb-2" size={22}/><p className="text-xs text-slate-500">{k.name}</p><p className="font-bold text-lg">{k.value}</p><p className="text-xs text-slate-600">{k.note}</p></Card>})}</div>
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 h-80"><h2 className="font-bold mb-1">Evolução das exportações</h2><p className="text-xs text-slate-500 mb-3">Volume mil t e receita US$ mi. Troque pelos dados mensais do Comex Stat.</p><ResponsiveContainer><AreaChart data={exportHistory}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="mes"/><YAxis/><Tooltip/><Legend/><Area dataKey="volume" name="Volume mil t"/><Area dataKey="receita" name="Receita US$ mi"/></AreaChart></ResponsiveContainer></Card>
        <Card className="h-80"><h2 className="font-bold mb-1">Demanda por mercado</h2><p className="text-xs text-slate-500 mb-3">Participação estimada por destino.</p><ResponsiveContainer><PieChart><Pie data={markets} dataKey="participacao" nameKey="mercado" outerRadius={92} label>{markets.map((_,i)=><Cell key={i}/>)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer></Card>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="h-72"><h2 className="font-bold mb-2">Escalas de abate</h2><ResponsiveContainer><BarChart data={slaughterScale}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="frigorifico"/><YAxis/><Tooltip/><Bar dataKey="dias" name="Dias de escala"/></BarChart></ResponsiveContainer></Card>
        <Card className="h-72"><h2 className="font-bold mb-2">Custo da alimentação</h2><ResponsiveContainer><LineChart data={feedCost}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="mes"/><YAxis/><Tooltip/><Legend/><Line dataKey="milho" name="Milho R$/sc"/><Line dataKey="dieta" name="Dieta R$/cab/dia"/></LineChart></ResponsiveContainer></Card>
        <Card className="h-72"><h2 className="font-bold mb-2">Consumo interno</h2><ResponsiveContainer><LineChart data={internalDemand}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="mes"/><YAxis/><Tooltip/><Line dataKey="consumo" name="Índice consumo"/></LineChart></ResponsiveContainer></Card>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Card><h2 className="font-bold mb-3">Leitura operacional de hoje</h2><div className="space-y-2">{risks.map(r=><div key={r.nome} className="flex justify-between gap-3 border rounded-xl p-3"><span>{r.nome}</span><span className={`text-xs font-semibold rounded-full px-2 py-1 ${r.cor}`}>{r.status}</span></div>)}</div></Card>
        <Card><h2 className="font-bold mb-3">Fontes confiáveis para automação</h2><div className="grid gap-2">{sources.map(s=><div key={s.nome} className="border rounded-xl p-3"><p className="font-semibold">{s.nome}</p><p className="text-sm text-slate-600">{s.uso}</p></div>)}</div></Card>
      </div>
      <Card><h2 className="font-bold mb-2">Como atualizar</h2><p className="text-sm text-slate-700">Edite <b>lib/data.ts</b> ou conecte APIs no Next.js. Para uso profissional diário, recomendo automatizar dólar pelo Banco Central, clima pelo INMET/Open-Meteo, exportações pelo Comex Stat/MDIC, custos por Conab/Cepea e escalas por fonte paga ou lançamento interno diário.</p></Card>
    </section>
  </main>
}
