/**
 * Catálogo de jogos do Mini Fut Games
 * Para adicionar um novo jogo, basta incluir um objeto neste array.
 *
 * Campos:
 * - id: identificador único
 * - title: nome do jogo
 * - description: resumo curto
 * - path: pasta relativa (ex: "leilao-fc/")
 * - icon: emoji
 * - bannerColor: cor de fundo do banner do card
 * - tags: lista de tags
 * - status: "live" | "soon"
 */
const GAMES_CATALOG = [
  {
    id: "leilao-fc",
    title: "Leilão FC",
    description:
      "Monte seu elenco de lendas e estrelas (2000–2027) em leilão. Modos: contra a IA, local 2 jogadores e online 1v1. Futsal ou Campo 4-3-3.",
    path: "leilao-fc/",
    icon: "💰",
    bannerColor: "linear-gradient(135deg, #0f766e, #14532d)",
    tags: ["Leilão", "Multiplayer", "IA", "Futsal / Campo"],
    status: "live"
  },
  {
    id: "nacionalidade-fc",
    title: "Nacionalidade FC",
    description:
      "Monte um 4-3-3 com jogadores do Brasileirão 2026 sem repetir nacionalidades. Escolha o modo normal, com pistas, ou o difícil, sem dicas de nacionalidade.",
    path: "nacionalidade-fc/",
    icon: "🌍",
    bannerColor: "linear-gradient(135deg, #1e3a5f, #0f172a)",
    tags: ["Brasileirão 2026", "Desafio", "4-3-3", "Normal / Difícil"],
    status: "live"
  },
  {
    id: "ultimate-squad-draft",
    title: "Ultimate Squad Draft",
    description:
      "Monte o elenco de maior valor de mercado em uma disputa local ou online. Outros desafios de estatísticas chegam em breve.",
    path: "ultimate-squad-draft/",
    icon: "💎",
    bannerColor: "linear-gradient(135deg, #0f766e, #1e3a5f)",
    tags: ["Draft", "Local 2P", "Online 1v1"],
    status: "live"
  },
  {
    id: "em-breve-1",
    title: "Draft Rápido",
    description:
      "Em breve: faça um draft de 11 jogadores em tempo limitado e dispute o overall do elenco.",
    path: "#",
    icon: "⚡",
    bannerColor: "linear-gradient(135deg, #334155, #1e293b)",
    tags: ["Em breve"],
    status: "soon"
  },
  {
    id: "em-breve-2",
    title: "Quiz de Camisas",
    description:
      "Em breve: adivinhe o clube pela camisa clássica ou pelo escudo em modo cronometrado.",
    path: "#",
    icon: "👕",
    bannerColor: "linear-gradient(135deg, #3f1d1d, #1e293b)",
    tags: ["Em breve"],
    status: "soon"
  }
]
