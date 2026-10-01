/**
 * Ultimate Squad Draft – Lógica principal
 */

const State = {
  gameMode: null,
  mode: null,       // 'local' | 'online'
  league: null,
  phase: "menu",
  round: 0,         // 0..4
  turn: 0,          // 0 = P1, 1 = P2/IA
  options: [],
  players: [
    { name: "Você", squad: {}, total: 0 },
    { name: "Adversário", squad: {}, total: 0 }
  ],
  peer: null,
  conn: null,
  isHost: false
};

/* ========== UI ========== */
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function setBadge(t) {
  const b = document.getElementById("mode-badge");
  if (b) b.textContent = t;
}

function toast(msg, ms = 2600) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  bindMenu();
  show("screen-menu");
});

function bindMenu() {
  document.getElementById("btn-home")?.addEventListener("click", event => {
    event.preventDefault();
    if (State.peer) {
      try { State.peer.destroy(); } catch (e) {}
    }
    State.peer = null;
    State.conn = null;
    State.mode = null;
    State.gameMode = null;
    State.league = null;
    setBadge("Menu");
    show("screen-menu");
  });

  document.querySelectorAll("[data-game-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      State.gameMode = btn.dataset.gameMode;
      show("screen-match");
    });
  });

  document.querySelectorAll("[data-match-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      State.mode = btn.dataset.matchMode;
      if (State.mode === "online") {
        show("screen-online");
        initPeer();
      } else {
        show("screen-league");
      }
    });
  });

  document.querySelectorAll("[data-league]").forEach(btn => {
    btn.addEventListener("click", () => {
      State.league = btn.dataset.league;
      startDraft();
    });
  });

  document.getElementById("btn-back-menu")?.addEventListener("click", () => {
    if (State.peer) try { State.peer.destroy(); } catch (e) {}
    show("screen-match");
  });

  document.getElementById("btn-back-modes")?.addEventListener("click", () => show("screen-menu"));
  document.getElementById("btn-join")?.addEventListener("click", joinRoom);
  document.getElementById("btn-replay")?.addEventListener("click", () => location.reload());
}

/* ========== ONLINE ========== */
function initPeer() {
  const status = document.getElementById("online-status");
  status.textContent = "Conectando ao PeerJS...";
  State.peer = new Peer({ debug: 0 });

  State.peer.on("open", id => {
    document.getElementById("my-peer-id").textContent = id;
    status.textContent = "Pronto! Compartilhe o ID com o oponente.";
    document.getElementById("create-box").style.display = "block";
  });

  State.peer.on("connection", conn => {
    State.conn = conn;
    State.isHost = true;
    setupConn(conn);
    toast("Oponente conectado!");
    show("screen-league");
  });

  State.peer.on("error", err => {
    status.textContent = "Erro: " + (err.type || err);
  });
}

function joinRoom() {
  const id = document.getElementById("join-id").value.trim();
  if (!id) return toast("Cole o ID do host");
  const conn = State.peer.connect(id);
  State.conn = conn;
  State.isHost = false;
  setupConn(conn);
}

function setupConn(conn) {
  conn.on("open", () => {
    toast("Conexão estabelecida!");
    if (!State.isHost) {
      document.getElementById("online-status").textContent = "Conectado! Aguardando host escolher a liga...";
    }
  });
  conn.on("data", handlePeerData);
  conn.on("close", () => {
    toast("Oponente desconectou");
    show("screen-menu");
  });
}

function handlePeerData(data) {
  if (data.type === "start") {
    State.league = data.league;
    State.players[0].name = State.isHost ? "Você" : "Você";
    State.players[1].name = "Oponente";
    State.round = 0;
    State.turn = data.hostStarts ? (State.isHost ? 0 : 1) : (State.isHost ? 1 : 0);
    State.players[0].squad = {};
    State.players[1].squad = {};
    State.players[0].total = 0;
    State.players[1].total = 0;
    setBadge(LEAGUES[State.league].flag + " Online");
    show("screen-game");
    if (data.options) {
      State.options = data.options;
      renderRound();
    } else {
      beginRound();
    }
  } else if (data.type === "pick") {
    applyPick(data.playerIndex, data.slotId, data.player);
    State.turn = State.isHost ? 0 : 1;
    renderRound();
    if (State.round >= 5) endGame();
    else if (State.turn === (State.isHost ? 0 : 1)) {
      // minha vez – opções já devem estar sincronizadas no próximo start round
    }
  } else if (data.type === "options") {
    State.options = data.options;
    State.round = data.round;
    renderRound();
  }
}

/* ========== START ========== */
function startDraft() {
  const league = LEAGUES[State.league];
  State.round = 0;
  State.turn = 0;
  State.players[0].squad = {};
  State.players[1].squad = {};
  State.players[0].total = 0;
  State.players[1].total = 0;
  State.players[0].name = State.mode === "local" ? "Jogador 1" : "Você";
  State.players[1].name = State.mode === "local" ? "Jogador 2" : "Oponente";

  setBadge(league.flag + " " + league.name.split(" ")[0]);

  if (State.mode === "online" && State.isHost && State.conn) {
    State.conn.send({ type: "start", league: State.league, hostStarts: true });
  }

  show("screen-game");
  beginRound();
}

/* ========== ROUND ========== */
function beginRound() {
  if (State.round >= 5) {
    endGame();
    return;
  }

  const slot = SLOTS[State.round];
  const pool = PLAYERS_DB[State.league] || [];
  let candidates;

  if (slot.posFilter) {
    candidates = pool.filter(p => p.pos === slot.posFilter);
  } else {
    candidates = [...pool];
  }

  // Evita repetir jogadores já escolhidos por qualquer um
  const taken = new Set([
    ...Object.values(State.players[0].squad).map(p => p.name),
    ...Object.values(State.players[1].squad).map(p => p.name)
  ]);
  candidates = candidates.filter(p => !taken.has(p.name));

  if (candidates.length < 4) {
    candidates = shuffle(pool.filter(p => !taken.has(p.name))).slice(0, Math.max(4, candidates.length));
  }

  State.options = shuffle(candidates).slice(0, 4);

  if (State.mode === "online" && State.isHost && State.conn) {
    State.conn.send({ type: "options", options: State.options, round: State.round });
  }

  renderRound();

}

function renderRound() {
  const slot = SLOTS[State.round] || SLOTS[4];
  document.getElementById("round-label").textContent = `Rodada ${State.round + 1}/5 · ${slot.label}`;
  document.getElementById("turn-label").textContent =
    State.mode === "local"
      ? (State.turn === 0 ? "Vez do Jogador 1" : "Vez do Jogador 2 — passe o dispositivo")
      : State.turn === 0
        ? "Sua vez — escolha 1 jogador"
        : "Aguardando oponente...";

  document.getElementById("turn-label").className =
    "turn-label " + (State.turn === 0 || State.mode === "local" ? "yours" : "theirs");

  // Totais
  document.getElementById("total-p0").textContent = "€ " + State.players[0].total + "M";
  document.getElementById("total-p1").textContent = "€ " + State.players[1].total + "M";
  document.getElementById("name-p0").textContent = State.players[0].name;
  document.getElementById("name-p1").textContent = State.players[1].name;

  // Squad slots
  renderSquad("squad-p0", State.players[0].squad);
  renderSquad("squad-p1", State.players[1].squad);

  // Options
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  const canPick =
    (State.mode === "local") ||
    (State.mode === "online" && ((State.isHost && State.turn === 0) || (!State.isHost && State.turn === 1)));

  State.options.forEach((p, i) => {
    const card = document.createElement("button");
    card.className = "player-card" + (canPick ? "" : " disabled");
    card.disabled = !canPick;
    card.innerHTML = `
      <div class="pc-pos">${p.pos}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-club">${p.club}</div>
      <div class="pc-value">€ ${p.value}M</div>
    `;
    if (canPick) {
      card.addEventListener("click", () => pickPlayer(p));
    }
    grid.appendChild(card);
  });
}

function renderSquad(containerId, squad) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  SLOTS.forEach(s => {
    const div = document.createElement("div");
    div.className = "slot-mini" + (squad[s.id] ? " filled" : "");
    if (squad[s.id]) {
      const p = squad[s.id];
      div.innerHTML = `<span class="sm-pos">${s.label}</span><span class="sm-name">${p.name.split(" ").pop()}</span><span class="sm-val">€${p.value}M</span>`;
    } else {
      div.innerHTML = `<span class="sm-pos empty">${s.label}</span>`;
    }
    el.appendChild(div);
  });
}

function pickPlayer(player) {
  const actor = State.mode === "local" ? State.turn : 0;
  const slotId = SLOTS[State.round].id;

  applyPick(actor, slotId, player);

  if (State.mode === "online" && State.conn) {
    State.conn.send({ type: "pick", playerIndex: actor, slotId, player });
  }

  // Avança turno / rodada
  if (State.mode === "local") {
    // Ambos escolhem na mesma rodada: P1 depois P2, aí avança rodada
    if (State.turn === 0) {
      State.turn = 1;
      // Gera novas opções para o P2 (mesmo slot, sem o escolhido)
      const taken = new Set([
        ...Object.values(State.players[0].squad).map(p => p.name),
        ...Object.values(State.players[1].squad).map(p => p.name)
      ]);
      const slot = SLOTS[State.round];
      let pool = PLAYERS_DB[State.league] || [];
      if (slot.posFilter) pool = pool.filter(p => p.pos === slot.posFilter);
      pool = pool.filter(p => !taken.has(p.name));
      State.options = shuffle(pool).slice(0, 4);
      renderRound();
    } else {
      State.turn = 0;
      State.round++;
      beginRound();
    }
  } else {
    // online: após minha escolha, passa a vez; host controla avanço de rodada de forma simplificada
    State.turn = State.isHost ? 1 : 0;
    // Ambos precisam ter escolhido — simplificação: cada um escolhe e avança localmente após 2 picks
    // Para robustez em P2P simples: cada jogador escolhe na sua vez e a rodada avança quando ambos tiverem o slot
    const p0has = !!State.players[0].squad[slotId];
    const p1has = !!State.players[1].squad[slotId];
    if (p0has && p1has) {
      State.round++;
      State.turn = 0;
      beginRound();
    } else {
      renderRound();
    }
  }
}

function applyPick(playerIndex, slotId, player) {
  const pl = State.players[playerIndex];
  if (pl.squad[slotId]) return; // já preenchido
  pl.squad[slotId] = player;
  pl.total = Object.values(pl.squad).reduce((s, p) => s + p.value, 0);
}

/* ========== FIM ========== */
function endGame() {
  show("screen-end");
  const t0 = State.players[0].total;
  const t1 = State.players[1].total;

  document.getElementById("end-total-0").textContent = "€ " + t0 + "M";
  document.getElementById("end-total-1").textContent = "€ " + t1 + "M";
  document.getElementById("end-name-0").textContent = State.players[0].name;
  document.getElementById("end-name-1").textContent = State.players[1].name;

  const box0 = document.getElementById("end-box-0");
  const box1 = document.getElementById("end-box-1");
  box0.classList.remove("winner");
  box1.classList.remove("winner");

  if (t0 > t1) {
    document.getElementById("end-title").textContent = "🏆 Vitória de " + State.players[0].name + "!";
    box0.classList.add("winner");
  } else if (t1 > t0) {
    document.getElementById("end-title").textContent = "🏆 Vitória de " + State.players[1].name + "!";
    box1.classList.add("winner");
  } else {
    document.getElementById("end-title").textContent = "🤝 Empate!";
  }

  renderEndSquad("end-squad-0", State.players[0].squad);
  renderEndSquad("end-squad-1", State.players[1].squad);
}

function renderEndSquad(id, squad) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  SLOTS.forEach(s => {
    const li = document.createElement("li");
    if (squad[s.id]) {
      const p = squad[s.id];
      li.textContent = `${s.label}: ${p.name} — €${p.value}M`;
    } else {
      li.textContent = `${s.label}: —`;
    }
    el.appendChild(li);
  });
}
