/**
 * Nacionalidade FC – Lógica do jogo
 */

const POSITIONS = [
  { id: "gk",  label: "GOL",  css: "pos-gk", area: "defense" },
  { id: "lb",  label: "LE",   css: "pos-lb", area: "defense" },
  { id: "cb1", label: "ZAG",  css: "pos-cb1", area: "defense" },
  { id: "cb2", label: "ZAG",  css: "pos-cb2", area: "defense" },
  { id: "rb",  label: "LD",   css: "pos-rb", area: "defense" },
  { id: "cm1", label: "VOL",  css: "pos-cm1", area: "midfield" },
  { id: "cm2", label: "MEI",  css: "pos-cm2", area: "midfield" },
  { id: "cm3", label: "MEI",  css: "pos-cm3", area: "midfield" },
  { id: "lw",  label: "PE",   css: "pos-lw", area: "attack" },
  { id: "st",  label: "ATA",  css: "pos-st", area: "attack" },
  { id: "rw",  label: "PD",   css: "pos-rw", area: "attack" }
];

const AREAS = [
  { id: "attack", label: "Ataque", hint: "PE · ATA · PD" },
  { id: "midfield", label: "Meio-campo", hint: "VOL · MEI · MEI" },
  { id: "defense", label: "Defesa", hint: "LE · ZAG · ZAG · LD · GOL" }
];

const GAME_YEAR = 2026;

const State = {
  squad: {},           // { positionId: playerObj }
  usedNations: new Set(),
  currentClub: null,
  currentYear: null,
  selectedPlayer: null,
  phase: "menu",       // menu | choosing | placing | ended
  rounds: 0
};

/* ===== UI HELPERS ===== */
function showScreen(id) {
  document.getElementById("screen-menu").classList.toggle("hidden", id !== "menu");
  document.getElementById("screen-game").classList.toggle("hidden", id !== "game");
}

function setBadge(text) {
  document.getElementById("badge").textContent = text;
}

function toast(msg) {
  const t = document.createElement("div");
  t.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-dark-700 border border-accent text-sm px-4 py-2 rounded-lg z-50 shadow-lg";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-start").onclick = startGame;
  document.getElementById("btn-confirm-player").onclick = confirmPlayer;
  document.getElementById("btn-resign").onclick = () => endGame(false, "Você desistiu.");
  document.getElementById("btn-replay").onclick = () => location.reload();

  document.getElementById("player-input").addEventListener("input", updateSuggestions);
  document.getElementById("player-input").addEventListener("keydown", e => {
    if (e.key === "Enter") confirmPlayer();
  });
});

function startGame() {
  State.squad = {};
  State.usedNations = new Set();
  State.selectedPlayer = null;
  State.phase = "choosing";
  State.rounds = 0;
  showScreen("game");
  setBadge("Em jogo");
  renderPitch();
  updateNations();
  updateProgress();
  updateSquadList();
  nextDraw();
}

/* ===== DRAW ===== */
function nextDraw() {
  State.selectedPlayer = null;
  State.phase = "choosing";
  document.getElementById("player-input").value = "";
  document.getElementById("player-input").disabled = false;
  document.getElementById("btn-confirm-player").disabled = false;

  const selectedPlayers = Object.values(State.squad);
  const availablePlayers = getAvailablePlayers();
  const remainingSlots = POSITIONS.length - selectedPlayers.length;
  if (availablePlayers.length < remainingSlots) {
    endGame(false, `Restam apenas ${availablePlayers.length} opções sem repetir nacionalidade para ${remainingSlots} posições vazias.`);
    return;
  }

  const eligibleClubs = [...new Set(availablePlayers.map(player => player.club))];
  if (eligibleClubs.length === 0) {
    endGame(false, `Não há jogadores cadastrados para a temporada ${GAME_YEAR}.`);
    return;
  }

  State.currentClub = eligibleClubs[Math.floor(Math.random() * eligibleClubs.length)];
  State.currentYear = GAME_YEAR;
  State.rounds++;

  document.getElementById("draw-club").textContent = State.currentClub;
  document.getElementById("draw-year").textContent = GAME_YEAR;
  updateSuggestions();
  renderPitch(); // remove selectable
  toast(`Sorteado: ${State.currentClub} ${GAME_YEAR}`);
}

function getPlayerNationalities(player) {
  return player.nation.split("/").map(nation => nation.trim());
}

function getAvailablePlayers() {
  const selectedPlayers = Object.values(State.squad);
  return CLEAN_DB.filter(player =>
    player.years.includes(GAME_YEAR) &&
    !selectedPlayers.includes(player) &&
    !getPlayerNationalities(player).some(nation => State.usedNations.has(nation))
  );
}

function getValidPlayers() {
  return CLEAN_DB.filter(p =>
    p.club === State.currentClub &&
    p.years.includes(State.currentYear)
  );
}

function updateSuggestions() {
  const input = document.getElementById("player-input").value.trim().toLowerCase();
  const list = document.getElementById("player-list");
  const count = document.getElementById("player-count");
  list.innerHTML = "";
  const valid = getValidPlayers();
  const filtered = input
    ? valid.filter(p =>
      p.name.toLowerCase().includes(input) ||
      p.nation.toLowerCase().includes(input) ||
      p.position.toLowerCase().includes(input)
    )
    : valid;
  count.textContent = input ? `${filtered.length} de ${valid.length} jogadores` : `${valid.length} jogadores`;

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "px-3 py-4 text-center text-sm text-slate-500";
    empty.textContent = "Nenhum jogador encontrado para esta busca.";
    list.appendChild(empty);
    return;
  }

  filtered.forEach(player => {
    const item = document.createElement("button");
    const playerUsed = Object.values(State.squad).includes(player);
    const nationUsed = getPlayerNationalities(player).some(nation => State.usedNations.has(nation));
    item.type = "button";
    item.className = "flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition hover:bg-dark-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-60";
    item.disabled = State.phase !== "choosing" || playerUsed || nationUsed;
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(player.name.toLowerCase() === input));

    const identity = document.createElement("span");
    identity.className = "flex min-w-0 items-center gap-3";
    const flag = document.createElement("span");
    flag.className = "text-xl";
    flag.textContent = player.flag;
    const details = document.createElement("span");
    details.className = "min-w-0";
    const name = document.createElement("span");
    name.className = "block truncate text-sm font-semibold text-white";
    name.textContent = player.name;
    const detailsLine = document.createElement("span");
    detailsLine.className = "block text-xs text-slate-400";
    detailsLine.textContent = `${player.position} · ${player.age} anos`;
    const nation = document.createElement("span");
    nation.className = "block text-xs text-slate-500";
    nation.textContent = player.nation;
    details.append(name, detailsLine, nation);
    identity.append(flag, details);
    item.appendChild(identity);

    if (playerUsed) {
      const status = document.createElement("span");
      status.className = "shrink-0 text-right text-[0.65rem] font-semibold text-slate-400";
      status.textContent = "Já escalado";
      item.appendChild(status);
    } else if (nationUsed) {
      const status = document.createElement("span");
      status.className = "shrink-0 text-right text-[0.65rem] font-semibold text-red-300";
      status.textContent = "Nacionalidade já usada";
      item.appendChild(status);
    }

    item.addEventListener("click", () => {
      document.getElementById("player-input").value = player.name;
      updateSuggestions();
    });
    list.appendChild(item);
  });
}

/* ===== CONFIRM PLAYER ===== */
function confirmPlayer() {
  if (State.phase !== "choosing") return;
  const name = document.getElementById("player-input").value.trim();
  if (!name) return toast("Digite o nome de um jogador!");

  const valid = getValidPlayers();
  const player = valid.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (!player) {
    toast("Jogador inválido para este clube/ano. Tente outro.");
    return;
  }

  if (Object.values(State.squad).includes(player)) {
    toast("Este jogador já está escalado no time.");
    return;
  }

  const usedNationalities = getPlayerNationalities(player).filter(nation => State.usedNations.has(nation));
  if (usedNationalities.length > 0) {
    toast(`Nacionalidade já usada: ${usedNationalities.join(", ")}.`);
    return;
  }

  State.selectedPlayer = player;
  State.phase = "placing";
  document.getElementById("player-input").disabled = true;
  document.getElementById("btn-confirm-player").disabled = true;
  updateSuggestions();
  toast(`${player.flag} ${player.name} confirmado! Clique em uma posição vazia.`);
  renderPitch(true); // highlight empty slots
}

/* ===== PITCH ===== */
function renderPitch(selectable = false) {
  const container = document.getElementById("formation");
  container.innerHTML = "";

  AREAS.forEach(area => {
    const areaPositions = POSITIONS.filter(position => position.area === area.id);
    const availableSlots = areaPositions.filter(position => !State.squad[position.id]).length;
    const section = document.createElement("section");
    section.className = `formation-zone zone-${area.id}${availableSlots === 0 ? " complete" : ""}`;
    section.setAttribute("aria-label", `${area.label}: ${availableSlots} posições livres de ${areaPositions.length}`);

    const heading = document.createElement("div");
    heading.className = "formation-zone-heading";
    const title = document.createElement("span");
    title.className = "formation-zone-title";
    title.textContent = area.label;
    const count = document.createElement("span");
    count.className = "formation-zone-count";
    count.textContent = availableSlots === 0 ? "Completa" : `${availableSlots}/${areaPositions.length} livres`;
    heading.append(title, count);

    const slots = document.createElement("div");
    slots.className = "formation-slots";
    areaPositions.forEach(pos => {
      const div = document.createElement("div");
      div.className = `slot ${pos.css}`;
      div.dataset.pos = pos.id;

      if (State.squad[pos.id]) {
        const player = State.squad[pos.id];
        div.classList.add("filled");
        div.style.borderColor = "#22c55e";
        div.innerHTML = `
          <span class="font-bold text-white text-[0.65rem] leading-tight">${player.name.split(" ").pop()}</span>
          <span class="text-[0.6rem]">${player.flag}</span>
        `;
      } else {
        div.innerHTML = `<span class="text-slate-400 text-[0.65rem]">${pos.label}</span>`;
        if (selectable && State.phase === "placing" && availableSlots > 0) {
          div.classList.add("selectable");
          div.onclick = () => placePlayer(pos.id);
        }
      }
      slots.appendChild(div);
    });

    section.append(heading, slots);
    container.appendChild(section);
  });
}

function placePlayer(posId) {
  if (State.phase !== "placing" || !State.selectedPlayer) return;
  if (!POSITIONS.some(position => position.id === posId) || State.squad[posId]) return;

  const player = State.selectedPlayer;
  const repeatedNationalities = getPlayerNationalities(player).filter(nation => State.usedNations.has(nation));
  if (repeatedNationalities.length > 0) {
    toast(`Nacionalidade já usada: ${repeatedNationalities.join(", ")}.`);
    return;
  }

  State.squad[posId] = player;
  getPlayerNationalities(player).forEach(nation => State.usedNations.add(nation));
  State.selectedPlayer = null;
  State.phase = "choosing";

  updateNations();
  updateProgress();
  updateSquadList();
  renderPitch();

  // Vitória?
  if (Object.keys(State.squad).length >= 11) {
    endGame(true, `Parabéns! Você completou seu 4-3-3 na temporada ${GAME_YEAR}!`);
    return;
  }

  setTimeout(nextDraw, 600);
}

/* ===== SIDE PANELS ===== */
function updateNations() {
  const el = document.getElementById("nations-list");
  if (State.usedNations.size === 0) {
    el.innerHTML = '<span class="text-xs text-slate-500">Nenhuma ainda</span>';
    return;
  }
  el.innerHTML = "";
  // Use each player's primary nationality to resolve its flag.
  const flagMap = {};
  CLEAN_DB.forEach(player => {
    const primaryNation = getPlayerNationalities(player)[0];
    if (!flagMap[primaryNation]) flagMap[primaryNation] = player.flag;
  });

  [...State.usedNations].sort().forEach(n => {
    const span = document.createElement("span");
    span.className = "inline-flex items-center gap-1 bg-dark-900 border border-dark-600 rounded-lg px-2 py-1 text-xs";
    span.innerHTML = `<span class="flag">${flagMap[n] || "🏳️"}</span> ${n}`;
    el.appendChild(span);
  });
}

function updateProgress() {
  const count = Object.keys(State.squad).length;
  document.getElementById("progress-bar").style.width = `${(count / 11) * 100}%`;
  document.getElementById("progress-text").textContent = `${count}/11`;
}

function updateSquadList() {
  const ul = document.getElementById("squad-list");
  ul.innerHTML = "";
  POSITIONS.forEach(pos => {
    const p = State.squad[pos.id];
    const li = document.createElement("li");
    if (p) {
      li.innerHTML = `<span class="text-slate-500">${pos.label}</span> ${p.flag} ${p.name}`;
    } else {
      li.innerHTML = `<span class="text-slate-600">${pos.label}: —</span>`;
    }
    ul.appendChild(li);
  });
}

/* ===== END ===== */
function endGame(won, message) {
  State.phase = "ended";
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.getElementById("modal-icon").textContent = won ? "🏆" : "💀";
  document.getElementById("modal-title").textContent = won ? "Vitória!" : "Game Over";
  document.getElementById("modal-title").className = won
    ? "text-2xl font-extrabold mb-2 text-accent"
    : "text-2xl font-extrabold mb-2 text-red-400";
  document.getElementById("modal-msg").textContent = message;

  const stats = document.getElementById("modal-stats");
  stats.innerHTML = `
    <p>Jogadores escalados: <strong>${Object.keys(State.squad).length}/11</strong></p>
    <p>Nacionalidades usadas: <strong>${State.usedNations.size}</strong></p>
    <p>Rodadas: <strong>${State.rounds}</strong></p>
  `;
}
