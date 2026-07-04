"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend } from "recharts";
import { historico } from "../lib/data";

export function TrendChart({ tipo }: { tipo: "arroba" | "exportacao" | "custo" | "clima" }) {
  if (tipo === "exportacao") {
    return <ResponsiveContainer width="100%" height={260}><BarChart data={historico}><CartesianGrid strokeDasharray="3 3" opacity={0.18}/><XAxis dataKey="mes" tick={{fill:'#b8c3bc', fontSize:12}}/><YAxis tick={{fill:'#b8c3bc', fontSize:12}}/><Tooltip/><Legend/><Bar dataKey="exportacao" name="Exportações mil t" radius={[8,8,0,0]}/><Bar dataKey="china" name="China mil t" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer>
  }
  if (tipo === "custo") {
    return <ResponsiveContainer width="100%" height={260}><LineChart data={historico}><CartesianGrid strokeDasharray="3 3" opacity={0.18}/><XAxis dataKey="mes" tick={{fill:'#b8c3bc', fontSize:12}}/><YAxis tick={{fill:'#b8c3bc', fontSize:12}}/><Tooltip/><Legend/><Line type="monotone" dataKey="milho" name="Milho R$/sc" strokeWidth={3}/><Line type="monotone" dataKey="arroba" name="Arroba MS R$" strokeWidth={3}/></LineChart></ResponsiveContainer>
  }
  if (tipo === "clima") {
    return <ResponsiveContainer width="100%" height={260}><LineChart data={historico}><CartesianGrid strokeDasharray="3 3" opacity={0.18}/><XAxis dataKey="mes" tick={{fill:'#b8c3bc', fontSize:12}}/><YAxis tick={{fill:'#b8c3bc', fontSize:12}}/><Tooltip/><Legend/><Line type="monotone" dataKey="chuva" name="Chuva mm" strokeWidth={3}/><Line type="monotone" dataKey="escala" name="Escala dias" strokeWidth={3}/></LineChart></ResponsiveContainer>
  }
  return <ResponsiveContainer width="100%" height={260}><LineChart data={historico}><CartesianGrid strokeDasharray="3 3" opacity={0.18}/><XAxis dataKey="mes" tick={{fill:'#b8c3bc', fontSize:12}}/><YAxis tick={{fill:'#b8c3bc', fontSize:12}}/><Tooltip/><Legend/><Line type="monotone" dataKey="arroba" name="Arroba MS R$" strokeWidth={3}/><Line type="monotone" dataKey="dolar" name="Dólar R$" strokeWidth={3}/></LineChart></ResponsiveContainer>
}
