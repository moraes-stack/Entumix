# Entumix — MazyOS

> Operação da Entumix dentro do Claude Code. Locação de caçambas e remoção de entulhos em Cascavel/PR.

## O que é esse workspace

Pasta central da operação da Entumix. Aqui ficam o site, os conteúdos de marketing, os dados da empresa e todas as saídas que o sistema gera — desde posts até campanhas de anúncio.

**Estrutura de pastas:**
- `_memoria/` — quem é a empresa, como falamos, foco atual
- `identidade/` — logos e guia visual aplicado em tudo que o sistema gera (fonte original)
- `marketing/` — campanhas, conteúdo, mídia paga
- `saidas/` — documentos e projetos pontuais (site em `saidas/site/`; `saidas/site/identidade/` é cópia de deploy)
- `dados/` — arquivos a analisar (CSV, XLSX, PDF)
- `scripts/` — automações e scripts internos
- `templates/` — templates de skills, design guides e perfis de CLAUDE.md

## Sobre a empresa

A Entumix é especializada em locação de caçambas (3m³, 5m³ e 7m³) e remoção de entulhos em Cascavel/PR. Com 2 anos de mercado, frota própria de 20+ caçambas e nota 4,9 no Google com +50 avaliações.

- **Telefone/WhatsApp:** (45) 99155-3233
- **Endereço:** R. Recife, 1340 – Centro, Cascavel/PR
- **Horário:** Seg-Sex 07:30-18h | Sáb 08-12h
- **Site:** `saidas/site/index.html`

## Serviços

- Locação de caçambas (3m³, 5m³, 7m³) — entrega e retirada inclusas
- Remoção de entulhos — coleta programada, destinação ecológica
- Obras comerciais — contratos mensais, desconto por volume
- Reformas residenciais — caçambas compactas, sem burocracia
- Limpeza de terrenos

## Tom de voz

Direto, confiante, sem enrolação. Frases curtas. Foco no resultado prático — rapidez, pontualidade, preço justo. Usa segunda pessoa ("você", "sua obra"). Evitar jargão corporativo, termos de guru e excesso de exclamação.

Evitar: "alavancar", "sinergia", "entregar valor", "caro cliente", termos técnicos de construção desnecessários.

## Regras do sistema

- Conteúdo de marketing salvar em `marketing/`
- Arquivos do site ficam em `saidas/site/`
- Logos sempre buscar em `identidade/` (nunca recriar)
- Ao gerar qualquer visual ou texto de marca, ler `identidade/design-guide.md` primeiro

## Contexto do negócio

No início de toda conversa, ler:
1. `_memoria/empresa.md` — quem é a empresa, contatos, números
2. `_memoria/preferencias.md` — tom de voz e o que evitar
3. `_memoria/estrategia.md` — foco atual e prioridades

Usar essas informações como base pra qualquer resposta. Não listar o que foi lido — só usar o contexto naturalmente.

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante em `.claude/skills/`. Se encontrar, seguir as instruções da skill.

Ao concluir uma tarefa repetível, perguntar:
> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

## Aprender com correções

Quando o usuário corrigir algo com caráter permanente, perguntar:
> "Quer que eu salve isso pra não precisar repetir?"

Onde salvar:
- Sobre o negócio → `_memoria/empresa.md`
- Sobre estilo → `_memoria/preferencias.md`
- Sobre prioridades → `_memoria/estrategia.md`
- Regra de comportamento → `CLAUDE.md`

## Ferramentas conectadas

- [ ] Google Ads
- [ ] Meta Ads
- [ ] Google Meu Negócio
- [ ] WhatsApp Business
