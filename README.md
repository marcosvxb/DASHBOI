# DASHBOI funcionando

Projeto testado com `npm run build` antes de compactar.

## Publicar na Vercel
1. Extraia o ZIP.
2. Apague o conteúdo antigo do repositório, ou crie um repositório novo.
3. Envie estes arquivos para o GitHub.
4. Na Vercel, importe o repositório.
5. Framework: Next.js. Build command: `npm run build`. Output: automático.

## Atualizar dados manuais
Edite `lib/data.ts`.

## API pronta
`/api/market` consulta a PTAX do Banco Central. Use essa rota como modelo para integrar Comex Stat, INMET, CONAB, CEPEA, etc.
