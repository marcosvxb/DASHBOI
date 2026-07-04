import type { Point } from '../lib/data';
export function SparkChart({data,title,unit='',variant='line'}:{data:Point[];title:string;unit?:string;variant?:'line'|'line2'}){
  const w=680,h=210,p=28;
  const min=Math.min(...data.map(d=>d.value)); const max=Math.max(...data.map(d=>d.value));
  const sx=(i:number)=>p+(i*(w-p*2))/(data.length-1);
  const sy=(v:number)=>h-p-((v-min)/(max-min||1))*(h-p*2);
  const d=data.map((pt,i)=>`${i===0?'M':'L'} ${sx(i)} ${sy(pt.value)}`).join(' ');
  return <div className="card"><h3>{title}</h3><svg className="chart" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={title}>{[0,1,2,3].map(i=><line key={i} className="axis" x1={p} x2={w-p} y1={p+i*(h-p*2)/3} y2={p+i*(h-p*2)/3}/>) }<path d={d} className={variant==='line2'?'line2':'line'}/>{data.map((pt,i)=><g key={pt.label}><circle className="dot" cx={sx(i)} cy={sy(pt.value)} r="3"/><text x={sx(i)} y={h-6} textAnchor="middle" fill="#9bb8a8" fontSize="12">{pt.label}</text>{i===data.length-1&&<text x={sx(i)-8} y={sy(pt.value)-12} textAnchor="end" fill="#e9fff3" fontSize="13" fontWeight="700">{unit}{pt.value.toLocaleString('pt-BR')}</text>}</g>)}</svg></div>
}
