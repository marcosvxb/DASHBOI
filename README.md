# Painel Boi Gordo FGA - Vercel

App Next.js responsivo para acompanhar diariamente: exportações, demanda externa, escalas de abate, custo de alimentação, consumo interno, câmbio e clima.

## Rodar localmente
```bash
npm install
npm run dev
```

## Publicar na Vercel
1. Crie uma conta em vercel.com.
2. Suba esta pasta para um repositório GitHub.
3. Na Vercel: Add New Project > importe o repositório > Deploy.
4. Abra o link pelo celular e adicione à tela inicial.

## Onde atualizar dados
Edite `lib/data.ts`.

## Fontes recomendadas
- Comex Stat/MDIC: exportações por NCM e destino.
- ABIEC: análise setorial das exportações.
- Banco Central do Brasil: dólar/PTAX/SGS.
- Conab: safra, milho, soja e informações agropecuárias.
- Cepea/Esalq: preços agropecuários.
- INMET: clima, chuva, temperatura e alertas.
- IBGE: abate e consumo aparente.
