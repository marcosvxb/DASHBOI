import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
async function getDolar(){
  try{
    const hoje = new Date();
    const fmt=(d:Date)=>`${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}-${d.getFullYear()}`;
    const inicioDate = new Date(hoje.getTime()-10*24*60*60*1000);
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${fmt(inicioDate)}'&@dataFinalCotacao='${fmt(hoje)}'&$top=100&$orderby=dataHoraCotacao desc&$format=json`;
    const r = await fetch(url,{next:{revalidate:3600}});
    const j = await r.json();
    const item = j?.value?.[0];
    return item ? Number(item.cotacaoVenda).toFixed(4).replace('.',',') : null;
  }catch{return null}
}
export async function GET(){
  const dolar = await getDolar();
  return NextResponse.json({updatedAt:new Date().toISOString(), dolar: dolar ? `R$ ${dolar}` : 'Indisp.', status:'online'});
}
