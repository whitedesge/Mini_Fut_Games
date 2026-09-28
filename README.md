# Mini Fut Games

Hub (lobby) de mini-jogos de futebol no navegador.

Inclui:

| Jogo | Descrição |
|------|-----------|
| **Leilão FC** | Leilão de jogadores (2000–2027). IA, local 2P e online 1v1. Futsal ou Campo. |
| **Nacionalidade FC** | Monte um 4-3-3 do Brasileirão sem repetir nacionalidade. |

---

## 📁 Estrutura

```
mini-fut-games/
├── index.html              ← Hub / lobby
├── css/styles.css
├── js/
│   ├── catalog.js          ← Lista de jogos (fácil de expandir)
│   └── hub.js
├── leilao-fc/              ← Jogo 1
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── README.md
├── nacionalidade-fc/       ← Jogo 2
│   ├── index.html
│   ├── data.js
│   └── game.js
└── README.md
```

---

## 🚀 Publicar no GitHub Pages

1. Crie um repositório público (ex: `mini-fut-games`)
2. Envie **toda esta pasta** (mantenha a estrutura de pastas)
3. **Settings → Pages**
4. Source: branch `main`, pasta `/ (root)`
5. Save
6. Acesse: `https://SEU-USUARIO.github.io/mini-fut-games/`

Os jogos abrem em:

- `.../mini-fut-games/leilao-fc/`
- `.../mini-fut-games/nacionalidade-fc/`

Também funciona no **Netlify** e **Vercel** (arraste a pasta ou conecte o repositório).

---

## ➕ Como adicionar um novo jogo

1. Crie uma pasta na raiz, por exemplo `draft-fc/`
2. Coloque o `index.html` (e assets) dentro dela
3. Abra `js/catalog.js` e adicione um item:

```js
{
  id: "draft-fc",
  title: "Draft Rápido",
  description: "Descrição curta do jogo.",
  path: "draft-fc/",
  icon: "⚡",
  bannerColor: "linear-gradient(135deg, #0f766e, #14532d)",
  tags: ["Draft", "Single Player"],
  status: "live"   // ou "soon"
}
```

4. Publique de novo (commit + push). O card aparece automaticamente no hub.

---

## 🛠️ Tecnologias

- HTML + CSS + JavaScript vanilla
- Tailwind (no Nacionalidade FC, via CDN)
- PeerJS (multiplayer do Leilão FC)
- 100% estático — sem servidor Node.js

---

Divirta-se! ⚽
