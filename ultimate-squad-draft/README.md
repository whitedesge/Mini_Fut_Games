# Ultimate Squad Draft (Transfermarkt Edition)

Monte um time de **5 jogadores** (GOL, DEF, MEI, ATA, CORINGA) com o **maior valor de mercado** possível.

Valores inspirados nas cotações do [Transfermarkt](https://www.transfermarkt.com.br/).

---

## 🎮 Modos de jogo

| Modo | Descrição |
|------|-----------|
| **Contratação mais cara** | Disponível: monte 5 jogadores com o maior valor de mercado |
| **Elenco com mais gols** | Em desenvolvimento |
| **Elenco com mais cartões vermelhos** | Em desenvolvimento |
| **Elenco com mais trocas de times** | Em desenvolvimento |
| **Elenco com mais assistências** | Em desenvolvimento |

## 👥 Formas de partida

- **Local 2 Jogadores** — mesmo dispositivo; passe e jogue
- **Online 1v1** — PeerJS (WebRTC); compartilhe o ID da sala

## 🏆 Ligas

- 🇧🇷 Brasileirão Série A  
- 🇪🇺 UEFA Champions League  
- 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League  
- 🇪🇸 La Liga  
- 🇮🇹 Serie A Italiana  

## 📋 Como jogar

1. Escolha o modo **Contratação mais cara** e a forma de partida
2. Escolha a **liga**
3. Em cada uma das **5 rodadas**, aparecem **4 jogadores** aleatórios
4. Escolha **1** para preencher a vaga da rodada (GOL → DEF → MEI → ATA → CORINGA)
5. No final, quem tiver o **maior valor total de mercado** vence

## 📁 Estrutura

```
ultimate-squad-draft/
├── index.html
├── css/styles.css
├── js/
│   ├── players.js   # Banco de dados + ligas
│   └── game.js      # Lógica do draft
└── README.md
```

## 🚀 Deploy

100% estático. Funciona em **GitHub Pages**, **Netlify** ou **Vercel**.

Para adicionar ao **Mini Fut Games** hub, copie a pasta `ultimate-squad-draft` para a raiz do hub e registre no `js/catalog.js`.

---

Tecnologias: HTML5 · CSS3 · JavaScript vanilla · PeerJS
