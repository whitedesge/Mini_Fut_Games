/**
 * Mini Fut Games – Hub
 * Renderiza o catálogo de jogos e prepara a interface.
 */

document.addEventListener("DOMContentLoaded", () => {
  renderGames();
  updateCount();
});

function renderGames() {
  const grid = document.getElementById("games-grid");
  if (!grid || typeof GAMES_CATALOG === "undefined") return;

  grid.innerHTML = "";

  GAMES_CATALOG.forEach((game) => {
    const card = document.createElement("article");
    card.className = "game-card" + (game.status === "soon" ? " coming-soon" : "");
    card.setAttribute("data-id", game.id);

    const isLive = game.status === "live";

    card.innerHTML = `
      <div class="game-card-banner" style="background:${game.bannerColor}">
        ${game.status === "soon" ? '<span class="badge-soon">Em breve</span>' : ""}
        <span style="position:relative;z-index:1">${game.icon}</span>
      </div>
      <div class="game-card-body">
        <h4>${escapeHtml(game.title)}</h4>
        <p>${escapeHtml(game.description)}</p>
        <div class="game-tags">
          ${(game.tags || [])
            .map(
              (t) =>
                `<span class="tag${t.toLowerCase().includes("breve") ? " gold" : ""}">${escapeHtml(t)}</span>`
            )
            .join("")}
        </div>
        ${
          isLive
            ? `<a class="btn-play" href="${escapeAttr(game.path)}" target="_blank" rel="noopener">▶ Jogar</a>`
            : `<span class="btn-play secondary" aria-disabled="true">Em breve</span>`
        }
      </div>
    `;

    grid.appendChild(card);
  });
}

function updateCount() {
  const el = document.getElementById("games-count");
  if (!el || typeof GAMES_CATALOG === "undefined") return;
  const live = GAMES_CATALOG.filter((g) => g.status === "live").length;
  const total = GAMES_CATALOG.length;
  el.textContent =
    live === total
      ? `${live} jogo${live !== 1 ? "s" : ""}`
      : `${live} disponíveis · ${total - live} em breve`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}
