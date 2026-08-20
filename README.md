# DASHBOI

Painel web estático e responsivo de inteligência para pecuária de corte.

## Publicação

O projeto usa uma etapa mínima, sem dependências externas, para copiar os arquivos públicos para `dist`. A configuração da Vercel está versionada em `vercel.json`.

## Atualização dos dados

As referências operacionais ficam no objeto `market`, em `app.js`. A cotação PTAX tenta atualização automática pela API oficial do Banco Central e usa uma referência manual identificada quando a API não responde.

## Arquivos principais

- `index.html`: estrutura do painel
- `styles.css`: identidade visual e responsividade
- `app.js`: dados, interações e gráficos
- `manifest.json` e `sw.js`: instalação como aplicativo
