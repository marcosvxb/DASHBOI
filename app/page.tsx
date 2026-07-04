import { Activity, Beef, CloudRain, DollarSign, Factory, Globe2, Ship, Wheat } from "lucide-react";
import { TrendChart } from "@/components/MarketChart";
import { fontes, indicadores, leitura } from "@/lib/data";

function Card({ title, value, sub, icon: Icon, tone = "" }: any) {
  return <div className="card p-4"><div className="flex items-center justify-between"><div><p className="muted text-xs uppercase tracking-wider">{title}</p><p className={`text-2xl font-bold mt-1 ${tone}`}>{value}</p><p className="muted text-xs mt-1">{sub}</p></div><Icon className="opacity-70" size={26}/></div></div>
}

export default function Home() {
  const status = indicadores.pressao >= 70 ? "Alta" : indicadores.pressao >= 45 ? "Neutro" : "Baixa";
  return <main className="min-h-screen px-4 py-5 sm:px-8 max-w-7xl mx-auto">
    <section className="mb-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="muted text-sm">Fazenda Gruta Azul</p>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">Painel diário do boi gordo</h1>
          <p className="muted mt-2">Atualizado em {indicadores.atualizado}. Dados demonstrativos prontos para conexão com APIs oficiais.</p>
        </div>
        <div className="card px-4 py-3 text-right min-w-28"><p className="muted text-xs">Sinal</p><p className="text-2xl font-black good">{status}</p></div>
      </div>
    </section>

    <section className="card p-5 mb-5 bg-gradient-to-br from-white/10 to-white/5">
      <p className="muted uppercase tracking-wider text-xs">Índice de pressão da arroba</p>
      <div className="flex items-end gap-4 mt-2"><span className="text-6xl font-black good">{indicadores.pressao}</span><span className="text-2xl muted mb-2">/100</span></div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden mt-4"><div className="h-full bg-white/70 rounded-full" style={{ width: `${indicadores.pressao}%` }} /></div>
      <p className="muted mt-3">Quanto maior o índice, maior a pressão de alta da arroba considerando exportação, China, câmbio, escalas, custo de alimentação, consumo interno e clima.</p>
    </section>

    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      <Card title="Arroba MS" value={`R$ ${indicadores.arrobaMs.toFixed(2).replace('.', ',')}`} sub="Referência regional" icon={Beef} tone="good" />
      <Card title="Dólar" value={`R$ ${indicadores.dolar.toFixed(2).replace('.', ',')}`} sub="BCB/PTAX" icon={DollarSign} />
      <Card title="Milho" value={`R$ ${indicadores.milho.toFixed(2).replace('.', ',')}`} sub="R$/saca" icon={Wheat} tone="warn" />
      <Card title="Farelo soja" value={`R$ ${indicadores.fareloSoja.toLocaleString('pt-BR')}`} sub="R$/t" icon={Wheat} />
      <Card title="Exportação" value={`${indicadores.exportMes.toFixed(1).replace('.', ',')} mil t`} sub="Mês corrente" icon={Ship} tone="good" />
      <Card title="China" value={`${indicadores.chinaShare.toFixed(1).replace('.', ',')}%`} sub="Participação estimada" icon={Globe2} />
      <Card title="Escalas" value={`${indicadores.escalaMedia.toFixed(1).replace('.', ',')} dias`} sub="Frigoríficos" icon={Factory} tone="good" />
      <Card title="Clima" value={indicadores.clima} sub="MS e regiões produtoras" icon={CloudRain} tone="warn" />
    </section>

    <section className="grid lg:grid-cols-2 gap-4 mb-5">
      <div className="card p-4"><h2 className="text-xl font-bold mb-3">Arroba × câmbio</h2><TrendChart tipo="arroba" /></div>
      <div className="card p-4"><h2 className="text-xl font-bold mb-3">Exportações × China</h2><TrendChart tipo="exportacao" /></div>
      <div className="card p-4"><h2 className="text-xl font-bold mb-3">Custo alimentação × arroba</h2><TrendChart tipo="custo" /></div>
      <div className="card p-4"><h2 className="text-xl font-bold mb-3">Clima × escalas de abate</h2><TrendChart tipo="clima" /></div>
    </section>

    <section className="grid lg:grid-cols-2 gap-4 mb-5">
      <div className="card p-5"><h2 className="text-xl font-bold flex gap-2 items-center"><Activity size={20}/> Leitura automática</h2><div className="mt-4 space-y-3">{leitura.map((x, i)=><p key={i} className="muted border-l-2 border-white/30 pl-3">{x}</p>)}</div></div>
      <div className="card p-5"><h2 className="text-xl font-bold">Fontes confiáveis</h2><div className="mt-3 space-y-2">{fontes.map((f)=><div key={f.nome} className="border-b border-white/10 pb-2"><p className="font-semibold">{f.nome}</p><p className="muted text-sm">{f.uso}</p></div>)}</div></div>
    </section>

    <section className="card p-5 mb-8"><h2 className="text-xl font-bold">Próximo passo para automação</h2><p className="muted mt-2">Conectar as APIs: Banco Central para câmbio, INMET para clima, Comex Stat/MDIC para exportações, CEPEA/Scot/B3 para preços e uma planilha própria para escalas de abate. A estrutura do app já está preparada para trocar os dados demonstrativos por dados reais.</p></section>
  </main>
}
