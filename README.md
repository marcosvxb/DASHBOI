# DASHBOI

Painel web estático e responsivo de inteligência para pecuária de corte.

## Publicação

O projeto não exige build. Na Vercel, use **Framework Preset: Other** e deixe o comando de build vazio. A raiz do repositório é a pasta pública.

## Atualização dos dados

As referências operacionais ficam no objeto `market`, em `app.js`. A cotação PTAX tenta atualização automática pela API oficial do Banco Central e usa uma referência manual identificada quando a API não responde.

## Arquivos principais

- `index.html`: estrutura do painel
- `styles.css`: identidade visual e responsividade
- `app.js`: dados, interações e gráficos
- `manifest.json` e `sw.js`: instalação como aplicativo
