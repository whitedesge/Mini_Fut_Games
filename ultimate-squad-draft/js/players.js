/**
 * Ultimate Squad Draft – Banco de jogadores
 * Valores inspirados em cotações Transfermarkt (estimativas 2025/2026)
 */

const LEAGUES = {
  brasileirao: { name: "Brasileirão Série A", flag: "🇧🇷", unit: "M €" },
  champions: { name: "UEFA Champions League", flag: "🇪🇺", unit: "M €" },
  premier: { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", unit: "M €" },
  laliga: { name: "La Liga", flag: "🇪🇸", unit: "M €" },
  seriea: { name: "Serie A Italiana", flag: "🇮🇹", unit: "M €" }
};

const PLAYERS_DB = {
  brasileirao: [
    // Goleiros
    { name: "Weverton", pos: "GOL", club: "Palmeiras", value: 6, nation: "Brasil" },
    { name: "Everson", pos: "GOL", club: "Atlético-MG", value: 5, nation: "Brasil" },
    { name: "Agustín Rossi", pos: "GOL", club: "Flamengo", value: 8, nation: "Argentina" },
    { name: "John", pos: "GOL", club: "Botafogo", value: 7, nation: "Brasil" },
    { name: "Léo Jardim", pos: "GOL", club: "Vasco", value: 5, nation: "Brasil" },
    { name: "Bento", pos: "GOL", club: "Athletico-PR", value: 12, nation: "Brasil" },
    { name: "Fábio", pos: "GOL", club: "Fluminense", value: 1.5, nation: "Brasil" },
    { name: "Hugo Souza", pos: "GOL", club: "Corinthians", value: 6, nation: "Brasil" },
    // Defensores
    { name: "Gustavo Gómez", pos: "DEF", club: "Palmeiras", value: 10, nation: "Paraguai" },
    { name: "Léo Ortiz", pos: "DEF", club: "Flamengo", value: 14, nation: "Brasil" },
    { name: "Murilo", pos: "DEF", club: "Palmeiras", value: 12, nation: "Brasil" },
    { name: "Fabrício Bruno", pos: "DEF", club: "Flamengo", value: 10, nation: "Brasil" },
    { name: "Arboleda", pos: "DEF", club: "São Paulo", value: 6, nation: "Equador" },
    { name: "Bastos", pos: "DEF", club: "Botafogo", value: 4, nation: "Angola" },
    { name: "Piquerez", pos: "DEF", club: "Palmeiras", value: 12, nation: "Uruguai" },
    { name: "Guilherme Arana", pos: "DEF", club: "Atlético-MG", value: 12, nation: "Brasil" },
    { name: "Ayrton Lucas", pos: "DEF", club: "Flamengo", value: 10, nation: "Brasil" },
    { name: "Alex Sandro", pos: "DEF", club: "Flamengo", value: 3, nation: "Brasil" },
    { name: "Kannemann", pos: "DEF", club: "Grêmio", value: 2, nation: "Argentina" },
    { name: "Mercado", pos: "DEF", club: "Internacional", value: 1.5, nation: "Argentina" },
    // Meias
    { name: "Arrascaeta", pos: "MEI", club: "Flamengo", value: 14, nation: "Uruguai" },
    { name: "Raphael Veiga", pos: "MEI", club: "Palmeiras", value: 16, nation: "Brasil" },
    { name: "Gerson", pos: "MEI", club: "Flamengo", value: 18, nation: "Brasil" },
    { name: "De la Cruz", pos: "MEI", club: "Flamengo", value: 28, nation: "Uruguai" },
    { name: "Alan Patrick", pos: "MEI", club: "Internacional", value: 8, nation: "Brasil" },
    { name: "André", pos: "MEI", club: "Fluminense", value: 30, nation: "Brasil" },
    { name: "Ganso", pos: "MEI", club: "Fluminense", value: 2, nation: "Brasil" },
    { name: "Cauly", pos: "MEI", club: "Bahia", value: 8, nation: "Brasil" },
    { name: "Jhon Arias", pos: "MEI", club: "Fluminense", value: 18, nation: "Colômbia" },
    { name: "Estêvão", pos: "MEI", club: "Palmeiras", value: 45, nation: "Brasil" },
    { name: "Richard Ríos", pos: "MEI", club: "Palmeiras", value: 18, nation: "Colômbia" },
    { name: "Marlon Freitas", pos: "MEI", club: "Botafogo", value: 6, nation: "Brasil" },
    // Atacantes
    { name: "Pedro", pos: "ATA", club: "Flamengo", value: 22, nation: "Brasil" },
    { name: "Vitor Roque", pos: "ATA", club: "Palmeiras", value: 30, nation: "Brasil" },
    { name: "Hulk", pos: "ATA", club: "Atlético-MG", value: 4, nation: "Brasil" },
    { name: "Calleri", pos: "ATA", club: "São Paulo", value: 8, nation: "Argentina" },
    { name: "Yuri Alberto", pos: "ATA", club: "Corinthians", value: 16, nation: "Brasil" },
    { name: "Germán Cano", pos: "ATA", club: "Fluminense", value: 6, nation: "Argentina" },
    { name: "Tiquinho Soares", pos: "ATA", club: "Botafogo", value: 5, nation: "Brasil" },
    { name: "Vegetti", pos: "ATA", club: "Vasco", value: 4, nation: "Argentina" },
    { name: "Luiz Henrique", pos: "ATA", club: "Botafogo", value: 22, nation: "Brasil" },
    { name: "Endrick", pos: "ATA", club: "Palmeiras", value: 45, nation: "Brasil" },
    { name: "Gabigol", pos: "ATA", club: "Flamengo", value: 8, nation: "Brasil" },
    { name: "Bruno Henrique", pos: "ATA", club: "Flamengo", value: 5, nation: "Brasil" },
    { name: "Luciano", pos: "ATA", club: "São Paulo", value: 6, nation: "Brasil" },
    { name: "Memphis Depay", pos: "ATA", club: "Corinthians", value: 8, nation: "Holanda" }
  ],

  champions: [
    { name: "Thibaut Courtois", pos: "GOL", club: "Real Madrid", value: 25, nation: "Bélgica" },
    { name: "Alisson", pos: "GOL", club: "Liverpool", value: 35, nation: "Brasil" },
    { name: "Ederson", pos: "GOL", club: "Man City", value: 30, nation: "Brasil" },
    { name: "Donnarumma", pos: "GOL", club: "PSG", value: 40, nation: "Itália" },
    { name: "Ter Stegen", pos: "GOL", club: "Barcelona", value: 28, nation: "Alemanha" },
    { name: "Virgil van Dijk", pos: "DEF", club: "Liverpool", value: 30, nation: "Holanda" },
    { name: "William Saliba", pos: "DEF", club: "Arsenal", value: 80, nation: "França" },
    { name: "Rúben Dias", pos: "DEF", club: "Man City", value: 70, nation: "Portugal" },
    { name: "Antonio Rüdiger", pos: "DEF", club: "Real Madrid", value: 25, nation: "Alemanha" },
    { name: "Alejandro Balde", pos: "DEF", club: "Barcelona", value: 50, nation: "Espanha" },
    { name: "Nuno Mendes", pos: "DEF", club: "PSG", value: 60, nation: "Portugal" },
    { name: "Trent Alexander-Arnold", pos: "DEF", club: "Liverpool", value: 65, nation: "Inglaterra" },
    { name: "Theo Hernández", pos: "DEF", club: "Milan", value: 50, nation: "França" },
    { name: "Jude Bellingham", pos: "MEI", club: "Real Madrid", value: 180, nation: "Inglaterra" },
    { name: "Pedri", pos: "MEI", club: "Barcelona", value: 100, nation: "Espanha" },
    { name: "Rodri", pos: "MEI", club: "Man City", value: 110, nation: "Espanha" },
    { name: "Kevin De Bruyne", pos: "MEI", club: "Man City", value: 35, nation: "Bélgica" },
    { name: "Vitinha", pos: "MEI", club: "PSG", value: 80, nation: "Portugal" },
    { name: "Federico Valverde", pos: "MEI", club: "Real Madrid", value: 130, nation: "Uruguai" },
    { name: "Florian Wirtz", pos: "MEI", club: "Bayer Leverkusen", value: 130, nation: "Alemanha" },
    { name: "Jamal Musiala", pos: "MEI", club: "Bayern", value: 140, nation: "Alemanha" },
    { name: "Lamine Yamal", pos: "ATA", club: "Barcelona", value: 200, nation: "Espanha" },
    { name: "Erling Haaland", pos: "ATA", club: "Man City", value: 200, nation: "Noruega" },
    { name: "Kylian Mbappé", pos: "ATA", club: "Real Madrid", value: 180, nation: "França" },
    { name: "Vinícius Jr", pos: "ATA", club: "Real Madrid", value: 150, nation: "Brasil" },
    { name: "Mohamed Salah", pos: "ATA", club: "Liverpool", value: 55, nation: "Egito" },
    { name: "Harry Kane", pos: "ATA", club: "Bayern", value: 80, nation: "Inglaterra" },
    { name: "Bukayo Saka", pos: "ATA", club: "Arsenal", value: 140, nation: "Inglaterra" },
    { name: "Phil Foden", pos: "ATA", club: "Man City", value: 130, nation: "Inglaterra" },
    { name: "Ousmane Dembélé", pos: "ATA", club: "PSG", value: 80, nation: "França" },
    { name: "Raphinha", pos: "ATA", club: "Barcelona", value: 70, nation: "Brasil" },
    { name: "Rodrygo", pos: "ATA", club: "Real Madrid", value: 100, nation: "Brasil" }
  ],

  premier: [
    { name: "Alisson", pos: "GOL", club: "Liverpool", value: 35, nation: "Brasil" },
    { name: "Ederson", pos: "GOL", club: "Man City", value: 30, nation: "Brasil" },
    { name: "David Raya", pos: "GOL", club: "Arsenal", value: 35, nation: "Espanha" },
    { name: "André Onana", pos: "GOL", club: "Man United", value: 35, nation: "Camarões" },
    { name: "William Saliba", pos: "DEF", club: "Arsenal", value: 80, nation: "França" },
    { name: "Virgil van Dijk", pos: "DEF", club: "Liverpool", value: 30, nation: "Holanda" },
    { name: "Rúben Dias", pos: "DEF", club: "Man City", value: 70, nation: "Portugal" },
    { name: "Gabriel Magalhães", pos: "DEF", club: "Arsenal", value: 75, nation: "Brasil" },
    { name: "Trent Alexander-Arnold", pos: "DEF", club: "Liverpool", value: 65, nation: "Inglaterra" },
    { name: "Josko Gvardiol", pos: "DEF", club: "Man City", value: 75, nation: "Croácia" },
    { name: "Kyle Walker", pos: "DEF", club: "Man City", value: 12, nation: "Inglaterra" },
    { name: "Declan Rice", pos: "MEI", club: "Arsenal", value: 110, nation: "Inglaterra" },
    { name: "Rodri", pos: "MEI", club: "Man City", value: 110, nation: "Espanha" },
    { name: "Martin Ødegaard", pos: "MEI", club: "Arsenal", value: 100, nation: "Noruega" },
    { name: "Bruno Fernandes", pos: "MEI", club: "Man United", value: 55, nation: "Portugal" },
    { name: "Kevin De Bruyne", pos: "MEI", club: "Man City", value: 35, nation: "Bélgica" },
    { name: "Alexis Mac Allister", pos: "MEI", club: "Liverpool", value: 70, nation: "Argentina" },
    { name: "Cole Palmer", pos: "MEI", club: "Chelsea", value: 90, nation: "Inglaterra" },
    { name: "Erling Haaland", pos: "ATA", club: "Man City", value: 200, nation: "Noruega" },
    { name: "Mohamed Salah", pos: "ATA", club: "Liverpool", value: 55, nation: "Egito" },
    { name: "Bukayo Saka", pos: "ATA", club: "Arsenal", value: 140, nation: "Inglaterra" },
    { name: "Phil Foden", pos: "ATA", club: "Man City", value: 130, nation: "Inglaterra" },
    { name: "Alexander Isak", pos: "ATA", club: "Newcastle", value: 120, nation: "Suécia" },
    { name: "Kai Havertz", pos: "ATA", club: "Arsenal", value: 55, nation: "Alemanha" },
    { name: "Luis Díaz", pos: "ATA", club: "Liverpool", value: 65, nation: "Colômbia" },
    { name: "Bryan Mbeumo", pos: "ATA", club: "Brentford", value: 50, nation: "Camarões" },
    { name: "Christopher Nkunku", pos: "ATA", club: "Chelsea", value: 40, nation: "França" }
  ],

  laliga: [
    { name: "Thibaut Courtois", pos: "GOL", club: "Real Madrid", value: 25, nation: "Bélgica" },
    { name: "Ter Stegen", pos: "GOL", club: "Barcelona", value: 28, nation: "Alemanha" },
    { name: "Jan Oblak", pos: "GOL", club: "Atlético Madrid", value: 20, nation: "Eslovênia" },
    { name: "Unai Simón", pos: "GOL", club: "Athletic Bilbao", value: 25, nation: "Espanha" },
    { name: "Antonio Rüdiger", pos: "DEF", club: "Real Madrid", value: 25, nation: "Alemanha" },
    { name: "Éder Militão", pos: "DEF", club: "Real Madrid", value: 50, nation: "Brasil" },
    { name: "Alejandro Balde", pos: "DEF", club: "Barcelona", value: 50, nation: "Espanha" },
    { name: "Pau Cubarsí", pos: "DEF", club: "Barcelona", value: 70, nation: "Espanha" },
    { name: "Dani Carvajal", pos: "DEF", club: "Real Madrid", value: 12, nation: "Espanha" },
    { name: "Jules Koundé", pos: "DEF", club: "Barcelona", value: 50, nation: "França" },
    { name: "Ronald Araújo", pos: "DEF", club: "Barcelona", value: 60, nation: "Uruguai" },
    { name: "Jude Bellingham", pos: "MEI", club: "Real Madrid", value: 180, nation: "Inglaterra" },
    { name: "Pedri", pos: "MEI", club: "Barcelona", value: 100, nation: "Espanha" },
    { name: "Federico Valverde", pos: "MEI", club: "Real Madrid", value: 130, nation: "Uruguai" },
    { name: "Gavi", pos: "MEI", club: "Barcelona", value: 80, nation: "Espanha" },
    { name: "Aurélien Tchouaméni", pos: "MEI", club: "Real Madrid", value: 80, nation: "França" },
    { name: "Frenkie de Jong", pos: "MEI", club: "Barcelona", value: 60, nation: "Holanda" },
    { name: "Dani Olmo", pos: "MEI", club: "Barcelona", value: 50, nation: "Espanha" },
    { name: "Lamine Yamal", pos: "ATA", club: "Barcelona", value: 200, nation: "Espanha" },
    { name: "Kylian Mbappé", pos: "ATA", club: "Real Madrid", value: 180, nation: "França" },
    { name: "Vinícius Jr", pos: "ATA", club: "Real Madrid", value: 150, nation: "Brasil" },
    { name: "Rodrygo", pos: "ATA", club: "Real Madrid", value: 100, nation: "Brasil" },
    { name: "Raphinha", pos: "ATA", club: "Barcelona", value: 70, nation: "Brasil" },
    { name: "Robert Lewandowski", pos: "ATA", club: "Barcelona", value: 15, nation: "Polônia" },
    { name: "Antoine Griezmann", pos: "ATA", club: "Atlético Madrid", value: 15, nation: "França" },
    { name: "Álvaro Morata", pos: "ATA", club: "Milan / Atleti", value: 12, nation: "Espanha" },
    { name: "Nico Williams", pos: "ATA", club: "Athletic Bilbao", value: 70, nation: "Espanha" }
  ],

  seriea: [
    { name: "Mike Maignan", pos: "GOL", club: "Milan", value: 35, nation: "França" },
    { name: "Yann Sommer", pos: "GOL", club: "Inter", value: 5, nation: "Suíça" },
    { name: "Diogo Costa", pos: "GOL", club: "Porto / Napoli", value: 40, nation: "Portugal" },
    { name: "Alessandro Bastoni", pos: "DEF", club: "Inter", value: 70, nation: "Itália" },
    { name: "Theo Hernández", pos: "DEF", club: "Milan", value: 50, nation: "França" },
    { name: "Bremer", pos: "DEF", club: "Juventus", value: 55, nation: "Brasil" },
    { name: "Kim Min-jae", pos: "DEF", club: "Bayern / Napoli", value: 50, nation: "Coreia do Sul" },
    { name: "Federico Dimarco", pos: "DEF", club: "Inter", value: 45, nation: "Itália" },
    { name: "Gleison Bremer", pos: "DEF", club: "Juventus", value: 55, nation: "Brasil" },
    { name: "Nicolò Barella", pos: "MEI", club: "Inter", value: 70, nation: "Itália" },
    { name: "Hakan Çalhanoğlu", pos: "MEI", club: "Inter", value: 30, nation: "Turquia" },
    { name: "Khvicha Kvaratskhelia", pos: "MEI", club: "Napoli / PSG", value: 70, nation: "Geórgia" },
    { name: "Scott McTominay", pos: "MEI", club: "Napoli", value: 40, nation: "Escócia" },
    { name: "Adrien Rabiot", pos: "MEI", club: "Marseille / Juve", value: 15, nation: "França" },
    { name: "Teun Koopmeiners", pos: "MEI", club: "Juventus", value: 45, nation: "Holanda" },
    { name: "Lautaro Martínez", pos: "ATA", club: "Inter", value: 100, nation: "Argentina" },
    { name: "Victor Osimhen", pos: "ATA", club: "Galatasaray / Napoli", value: 60, nation: "Nigéria" },
    { name: "Rafael Leão", pos: "ATA", club: "Milan", value: 70, nation: "Portugal" },
    { name: "Dušan Vlahović", pos: "ATA", club: "Juventus", value: 50, nation: "Sérvia" },
    { name: "Marcus Thuram", pos: "ATA", club: "Inter", value: 55, nation: "França" },
    { name: "Christian Pulisic", pos: "ATA", club: "Milan", value: 40, nation: "EUA" },
    { name: "Romelu Lukaku", pos: "ATA", club: "Napoli / Roma", value: 20, nation: "Bélgica" },
    { name: "Ademola Lookman", pos: "ATA", club: "Atalanta", value: 45, nation: "Nigéria" }
  ]
};

/** Posições fixas do draft (5 slots) */
const SLOTS = [
  { id: "gol", label: "GOL", posFilter: "GOL" },
  { id: "def", label: "DEF", posFilter: "DEF" },
  { id: "mei", label: "MEI", posFilter: "MEI" },
  { id: "ata", label: "ATA", posFilter: "ATA" },
  { id: "coringa", label: "CORINGA", posFilter: null } // qualquer posição
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatValue(v, unit = "M €") {
  if (v >= 1) return `€ ${v}${unit.includes("M") ? "M" : ""}`;
  return `€ ${(v * 1000).toFixed(0)}k`;
}
