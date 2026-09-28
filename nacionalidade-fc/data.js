const CLUBS = ["Flamengo","Palmeiras","Cruzeiro","Corinthians","Vasco da Gama","Botafogo","Fluminense","Bahia","Santos","Red Bull Bragantino","Atlético Mineiro","São Paulo","Grêmio","Internacional","Athletico Paranaense","Vitória","Coritiba","Mirassol","Remo","Chapecoense"];

const PLAYERS_DB = [
    {
        "name":  "Agustín Rossi",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina / Itália",
        "flag":  "🇦🇷",
        "position":  "Goleiro",
        "age":  31
    },
    {
        "name":  "Andrew",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  25
    },
    {
        "name":  "Dyogo Alves",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  22
    },
    {
        "name":  "Léo Ortiz",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil / Itália",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Léo Pereira",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Vitão",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Danilo",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  35
    },
    {
        "name":  "João Souza",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  19
    },
    {
        "name":  "Ayrton Lucas",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Alex Sandro",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  35
    },
    {
        "name":  "Emerson Royal",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  27
    },
    {
        "name":  "Guillermo Varela",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai / Itália",
        "flag":  "🇺🇾",
        "position":  "Lateral Direito",
        "age":  33
    },
    {
        "name":  "Evertton Araújo",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  23
    },
    {
        "name":  "Erick Pulgar",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Chile",
        "flag":  "🇨🇱",
        "position":  "Volante",
        "age":  32
    },
    {
        "name":  "Jorginho",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Itália / Brasil",
        "flag":  "🇮🇹",
        "position":  "Volante",
        "age":  34
    },
    {
        "name":  "Nicolás de la Cruz",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai / Argentina",
        "flag":  "🇺🇾",
        "position":  "Meia Central",
        "age":  29
    },
    {
        "name":  "Saúl Ñíguez",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Espanha",
        "flag":  "🇪🇸",
        "position":  "Meia Central",
        "age":  31
    },
    {
        "name":  "Lucas Paquetá",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  29
    },
    {
        "name":  "Giorgian de Arrascaeta",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai / Itália",
        "flag":  "🇺🇾",
        "position":  "Meia Ofensivo",
        "age":  32
    },
    {
        "name":  "Jorge Carrascal",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Meia Ofensivo",
        "age":  28
    },
    {
        "name":  "Samuel Lino",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  26
    },
    {
        "name":  "Gonzalo Plata",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Ponta Direita",
        "age":  25
    },
    {
        "name":  "Luiz Araújo",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  30
    },
    {
        "name":  "Anthony Valencia",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Ponta Direita",
        "age":  23
    },
    {
        "name":  "Pedro",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Joaquín Freitas",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Centroavante",
        "age":  19
    },
    {
        "name":  "Bruno Henrique",
        "club":  "Flamengo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  35
    },
    {
        "name":  "Carlos Miguel",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  27
    },
    {
        "name":  "Marcelo Lomba",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  39
    },
    {
        "name":  "Bruno Bertinato",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  28
    },
    {
        "name":  "Alexander Barboza",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Murilo",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Bruno Fuchs",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Luis Benedetti",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  20
    },
    {
        "name":  "Gustavo Gómez",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Zagueiro",
        "age":  33
    },
    {
        "name":  "Joaquín Piquerez",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Lateral Esquerdo",
        "age":  28
    },
    {
        "name":  "Jefté",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  22
    },
    {
        "name":  "Arthur Gabriel",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  21
    },
    {
        "name":  "Agustín Giay",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Direito",
        "age":  22
    },
    {
        "name":  "Khellven",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  25
    },
    {
        "name":  "Emiliano Martínez",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Marlon Freitas",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  31
    },
    {
        "name":  "Luis Pacheco",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  18
    },
    {
        "name":  "Andreas Pereira",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil / Bélgica",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  30
    },
    {
        "name":  "Lucas Evangelista",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  31
    },
    {
        "name":  "Larson",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  21
    },
    {
        "name":  "Mauricio",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  25
    },
    {
        "name":  "Erick Belé",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "Ramón Sosa",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Felipe Anderson",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  33
    },
    {
        "name":  "Jhon Arias",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Direita",
        "age":  29
    },
    {
        "name":  "Paulinho",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Segundo Atacante",
        "age":  26
    },
    {
        "name":  "Vitor Roque",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  21
    },
    {
        "name":  "José Manuel López",
        "club":  "Palmeiras",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  25
    },
    {
        "name":  "Léo Aragão",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  24
    },
    {
        "name":  "Otávio",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  20
    },
    {
        "name":  "Cássio",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  39
    },
    {
        "name":  "Fabrício Bruno",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Jonathan Jesus",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "João Marcelo",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Lucas Villalba",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  32
    },
    {
        "name":  "Gabriel Rojas",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Matías Viña",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai / Itália",
        "flag":  "🇺🇾",
        "position":  "Lateral Esquerdo",
        "age":  28
    },
    {
        "name":  "William",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  31
    },
    {
        "name":  "Kauã Moraes",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  19
    },
    {
        "name":  "Fagner",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  37
    },
    {
        "name":  "Zé Lucas",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  18
    },
    {
        "name":  "Lucas Romero",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Volante",
        "age":  32
    },
    {
        "name":  "Lucas Silva",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  33
    },
    {
        "name":  "Gerson",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  29
    },
    {
        "name":  "Matheus Henrique",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "Fabrizio Peralta",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Meia Central",
        "age":  24
    },
    {
        "name":  "Matheus Pereira",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil / Portugal",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  30
    },
    {
        "name":  "Felipe Morais",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  18
    },
    {
        "name":  "Luis Sinisterra",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Wesley",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  21
    },
    {
        "name":  "Kaique Kenji",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  20
    },
    {
        "name":  "Wanderson",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  31
    },
    {
        "name":  "Bruno Rodrigues",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  29
    },
    {
        "name":  "Keny Arroyo",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Ponta Direita",
        "age":  20
    },
    {
        "name":  "Gabriel Pec",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  25
    },
    {
        "name":  "Marquinhos",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  23
    },
    {
        "name":  "João Costa",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  21
    },
    {
        "name":  "Kaio Jorge",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  24
    },
    {
        "name":  "Luciano Rodríguez",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Centroavante",
        "age":  23
    },
    {
        "name":  "Néiser Villarreal",
        "club":  "Cruzeiro",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Centroavante",
        "age":  21
    },
    {
        "name":  "Hugo Souza",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  27
    },
    {
        "name":  "Felipe Longo",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  21
    },
    {
        "name":  "Kauê",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  22
    },
    {
        "name":  "João Pedro Tchoca",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "André Ramalho",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  34
    },
    {
        "name":  "Gustavo Henrique",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  33
    },
    {
        "name":  "Gabriel Paulista",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  35
    },
    {
        "name":  "Renato Santos",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  21
    },
    {
        "name":  "Iago Machado",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  17
    },
    {
        "name":  "Matheus Bidu",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  27
    },
    {
        "name":  "Hugo",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Fabrizio Angileri",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Esquerdo",
        "age":  32
    },
    {
        "name":  "Matheuzinho",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  26
    },
    {
        "name":  "Pedro Milans",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Lateral Direito",
        "age":  24
    },
    {
        "name":  "Léo Mana",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  22
    },
    {
        "name":  "Raniele",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  29
    },
    {
        "name":  "Allan",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  29
    },
    {
        "name":  "Charles",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Breno Bidon",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  21
    },
    {
        "name":  "André",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  20
    },
    {
        "name":  "Matheus Pereira",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "Alex Santana",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  31
    },
    {
        "name":  "André Carrillo",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Peru",
        "flag":  "🇵🇪",
        "position":  "Meia Central",
        "age":  35
    },
    {
        "name":  "Bahia",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  20
    },
    {
        "name":  "Rodrigo Garro",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Ofensivo",
        "age":  28
    },
    {
        "name":  "Jesse Lingard",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Inglaterra",
        "flag":  "🏴",
        "position":  "Meia Ofensivo",
        "age":  33
    },
    {
        "name":  "Zakaria Labyad",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Marrocos / Holanda",
        "flag":  "🇲🇦",
        "position":  "Meia Ofensivo",
        "age":  33
    },
    {
        "name":  "Kayke",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  22
    },
    {
        "name":  "Vitinho",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  32
    },
    {
        "name":  "Kaio César",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  22
    },
    {
        "name":  "Dieguinho",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  19
    },
    {
        "name":  "Yuri Alberto",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  25
    },
    {
        "name":  "Memphis Depay",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Holanda / Gana",
        "flag":  "🇳🇱",
        "position":  "Centroavante",
        "age":  32
    },
    {
        "name":  "Gui Negão",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  19
    },
    {
        "name":  "Pedro Raul",
        "club":  "Corinthians",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Léo Jardim",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  31
    },
    {
        "name":  "Daniel Fuzato",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  29
    },
    {
        "name":  "Pablo",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  23
    },
    {
        "name":  "Robert Renan",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "Carlos Cuesta",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Gabriel Pereira",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Alan Saldivia",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Zagueiro",
        "age":  24
    },
    {
        "name":  "Lucas Freitas",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  25
    },
    {
        "name":  "Walace Falcão",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  21
    },
    {
        "name":  "Cuiabano",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  23
    },
    {
        "name":  "Lucas Piton",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  25
    },
    {
        "name":  "Riquelme",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  24
    },
    {
        "name":  "Paulinho",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  22
    },
    {
        "name":  "Paulo Henrique",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  30
    },
    {
        "name":  "José Luis Rodríguez",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Lateral Direito",
        "age":  29
    },
    {
        "name":  "JV Fonseca",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  21
    },
    {
        "name":  "Santiago Sosa",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Cauan Barros",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  22
    },
    {
        "name":  "Thiago Mendes",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  34
    },
    {
        "name":  "Mateus Carvalho",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  24
    },
    {
        "name":  "Jair",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  32
    },
    {
        "name":  "Euder",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  21
    },
    {
        "name":  "Ramon Rique",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  18
    },
    {
        "name":  "Tchê Tchê",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  34
    },
    {
        "name":  "Alan Lescano",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Ofensivo",
        "age":  24
    },
    {
        "name":  "Johan Rojas",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Meia Ofensivo",
        "age":  24
    },
    {
        "name":  "Guilherme Estrella",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  21
    },
    {
        "name":  "Lukas Zuccarello",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "Andrés Gómez",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Esquerda",
        "age":  24
    },
    {
        "name":  "David",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  30
    },
    {
        "name":  "Nuno Moreira",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Portugal",
        "flag":  "🇵🇹",
        "position":  "Ponta Direita",
        "age":  27
    },
    {
        "name":  "Marino Hinestroza",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Direita",
        "age":  24
    },
    {
        "name":  "Adson",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  25
    },
    {
        "name":  "Loide Augusto",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Angola",
        "flag":  "🇦🇴",
        "position":  "Ponta Direita",
        "age":  26
    },
    {
        "name":  "Facundo Colidio",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina / Itália",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  26
    },
    {
        "name":  "Bruno Duarte",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  30
    },
    {
        "name":  "Brenner",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  26
    },
    {
        "name":  "Claudio Spinelli",
        "club":  "Vasco da Gama",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Gabriel Batista",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  28
    },
    {
        "name":  "Warleson",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  30
    },
    {
        "name":  "Cristhian Loor",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Goleiro",
        "age":  20
    },
    {
        "name":  "Arthur Chaves",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  25
    },
    {
        "name":  "Nahuel Ferraresi",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Venezuela",
        "flag":  "🇻🇪",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Kaio",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Lucas Monzón",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Zagueiro",
        "age":  24
    },
    {
        "name":  "Gabriel Justino",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  20
    },
    {
        "name":  "Anthony",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  21
    },
    {
        "name":  "Kawan",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  23
    },
    {
        "name":  "Alex Telles",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  33
    },
    {
        "name":  "Paulinho",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  31
    },
    {
        "name":  "Marçal",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  37
    },
    {
        "name":  "Jhoan Hernández",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Lateral Esquerdo",
        "age":  20
    },
    {
        "name":  "Vitinho",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  27
    },
    {
        "name":  "Mateo Ponte",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Lateral Direito",
        "age":  23
    },
    {
        "name":  "Domingos Andrade",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Angola",
        "flag":  "🇦🇴",
        "position":  "Volante",
        "age":  23
    },
    {
        "name":  "Allan",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  35
    },
    {
        "name":  "Wallace Davi",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  19
    },
    {
        "name":  "Huguinho",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  19
    },
    {
        "name":  "Danilo (Meia Central)",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  25
    },
    {
        "name":  "Cristian Medina",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Central",
        "age":  24
    },
    {
        "name":  "Edenilson",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  36
    },
    {
        "name":  "Jordan Barrera",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Meia Ofensivo",
        "age":  20
    },
    {
        "name":  "Álvaro Montoro",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Esquerda",
        "age":  19
    },
    {
        "name":  "Matheus Martins",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  23
    },
    {
        "name":  "Júnior Santos",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  31
    },
    {
        "name":  "Hakim Ziyech",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Marrocos / Holanda",
        "flag":  "🇲🇦",
        "position":  "Ponta Direita",
        "age":  33
    },
    {
        "name":  "Lucas Villalba",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Direita",
        "age":  25
    },
    {
        "name":  "Kauan Toledo",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  20
    },
    {
        "name":  "Arthur Cabral",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  28
    },
    {
        "name":  "Kadir Barría",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Panamá",
        "flag":  "🇵🇦",
        "position":  "Centroavante",
        "age":  19
    },
    {
        "name":  "Danilo (Centroavante)",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  27
    },
    {
        "name":  "Tiquinho Soares",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil / Portugal",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  35
    },
    {
        "name":  "Lucas Emanuel",
        "club":  "Botafogo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  17
    },
    {
        "name":  "Vitor Eudes",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  27
    },
    {
        "name":  "Marcelo Pitaluga",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  23
    },
    {
        "name":  "Fábio",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  45
    },
    {
        "name":  "Juan Pablo Freytes",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Julián Millán",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Jemmes",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Ignácio",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Igor Rabello",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Thiago Silva",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  42
    },
    {
        "name":  "Guilherme Arana",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Renê",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  34
    },
    {
        "name":  "Léo Jance",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  21
    },
    {
        "name":  "Guga",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  28
    },
    {
        "name":  "Jhonny",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  24
    },
    {
        "name":  "Julio Fidelis",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  19
    },
    {
        "name":  "Samuel Xavier",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  36
    },
    {
        "name":  "Martinelli",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  24
    },
    {
        "name":  "Otávio",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  32
    },
    {
        "name":  "Luis Fernando",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  21
    },
    {
        "name":  "Hércules",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  25
    },
    {
        "name":  "Nonato",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "Alisson",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  33
    },
    {
        "name":  "Jefferson Savarino",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Venezuela",
        "flag":  "🇻🇪",
        "position":  "Meia Ofensivo",
        "age":  29
    },
    {
        "name":  "Luciano Acosta",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Ofensivo",
        "age":  32
    },
    {
        "name":  "Ganso",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  36
    },
    {
        "name":  "Yago Ferreira",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  25
    },
    {
        "name":  "Yeferson Soteldo",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Venezuela",
        "flag":  "🇻🇪",
        "position":  "Ponta Esquerda",
        "age":  29
    },
    {
        "name":  "Matheus Reis",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  19
    },
    {
        "name":  "Wesley Natã",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  18
    },
    {
        "name":  "Agustín Canobbio",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Direita",
        "age":  27
    },
    {
        "name":  "Riquelme",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  19
    },
    {
        "name":  "Kevin Serna",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Direita",
        "age":  28
    },
    {
        "name":  "John Kennedy",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  24
    },
    {
        "name":  "Rodrigo Castillo",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  27
    },
    {
        "name":  "Hulk",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  40
    },
    {
        "name":  "Germán Cano",
        "club":  "Fluminense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  38
    },
    {
        "name":  "Ronaldo",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  30
    },
    {
        "name":  "Guido Herrera",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Goleiro",
        "age":  34
    },
    {
        "name":  "Léo Vieira",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  36
    },
    {
        "name":  "Victor",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  20
    },
    {
        "name":  "Kanu",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "David Duarte",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Marco Moreno",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Espanha",
        "flag":  "🇪🇸",
        "position":  "Zagueiro",
        "age":  25
    },
    {
        "name":  "Luiz Gustavo",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  20
    },
    {
        "name":  "Marcos Victor",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  24
    },
    {
        "name":  "Fredi Gomes",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  20
    },
    {
        "name":  "Luciano Juba",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  27
    },
    {
        "name":  "Zé Guilherme",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  21
    },
    {
        "name":  "Román Gómez",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Direito",
        "age":  22
    },
    {
        "name":  "Caio Alexandre",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Nicolás Acevedo",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Erick",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  28
    },
    {
        "name":  "Lautaro López",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Volante",
        "age":  21
    },
    {
        "name":  "Jean Lucas",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "Rodrigo Nestor",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  26
    },
    {
        "name":  "Everton Ribeiro",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  37
    },
    {
        "name":  "Roger Gabriel",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "David Martins",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "Erick Pulga",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  25
    },
    {
        "name":  "Ruan Pablo",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  18
    },
    {
        "name":  "Mateo Sanabria",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Esquerda",
        "age":  22
    },
    {
        "name":  "Cristian Olivera",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Direita",
        "age":  24
    },
    {
        "name":  "Michel Araújo",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Direita",
        "age":  30
    },
    {
        "name":  "Kauê Furquim",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  17
    },
    {
        "name":  "Ademir",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  31
    },
    {
        "name":  "Alejo Véliz",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  23
    },
    {
        "name":  "Dell",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  18
    },
    {
        "name":  "Willian José",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  34
    },
    {
        "name":  "Everaldo",
        "club":  "Bahia",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  35
    },
    {
        "name":  "Gabriel Brazão",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  25
    },
    {
        "name":  "João Paulo",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  31
    },
    {
        "name":  "Diógenes",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  25
    },
    {
        "name":  "João Fernandes",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  22
    },
    {
        "name":  "Rodrigo Falcão",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  21
    },
    {
        "name":  "Lucas Veríssimo",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Alexis Duarte",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Luan Peres",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  32
    },
    {
        "name":  "João Ananias",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  19
    },
    {
        "name":  "João Alencar",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  19
    },
    {
        "name":  "Vinicius Lira",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  18
    },
    {
        "name":  "Gonzalo Escobar",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Gabriel Menino",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  25
    },
    {
        "name":  "Igor Vinícius",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  29
    },
    {
        "name":  "Rodinei",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  34
    },
    {
        "name":  "Arthur Melo",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Christian Oliva",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Willian Arão",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  34
    },
    {
        "name":  "João Schmidt",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  33
    },
    {
        "name":  "Gustavinho",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  21
    },
    {
        "name":  "Gabriel Bontempo",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  21
    },
    {
        "name":  "Neymar",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  34
    },
    {
        "name":  "Miguelito",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Bolívia",
        "flag":  "🇧🇴",
        "position":  "Meia Ofensivo",
        "age":  22
    },
    {
        "name":  "Philippe Coutinho",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  34
    },
    {
        "name":  "Lima",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  30
    },
    {
        "name":  "Thaciano",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  31
    },
    {
        "name":  "Pepê Fermino",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "Nadson",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  17
    },
    {
        "name":  "Everton",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  30
    },
    {
        "name":  "Álvaro Barreal",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Esquerda",
        "age":  26
    },
    {
        "name":  "Moisés",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  30
    },
    {
        "name":  "Gustavo Caballero",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Ponta Esquerda",
        "age":  25
    },
    {
        "name":  "Mateus Xavier",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  19
    },
    {
        "name":  "Benjamín Rollheiser",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Direita",
        "age":  26
    },
    {
        "name":  "Andrey Quintino",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  24
    },
    {
        "name":  "Enzo Boer",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  21
    },
    {
        "name":  "Rony",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  31
    },
    {
        "name":  "Gabriel Barbosa",
        "club":  "Santos",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  30
    },
    {
        "name":  "Cleiton",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  29
    },
    {
        "name":  "Tiago Volpi",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  35
    },
    {
        "name":  "Fabrício",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  26
    },
    {
        "name":  "Gustavo Reis",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  21
    },
    {
        "name":  "Gustavo Marques",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  24
    },
    {
        "name":  "Guzmán Rodríguez",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Alix",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Eduardo",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Juninho Capixaba",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Vanderlan",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  24
    },
    {
        "name":  "Cauê Nascimento",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  19
    },
    {
        "name":  "Agustín Sant\u0027Anna",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Lateral Direito",
        "age":  29
    },
    {
        "name":  "José Andrés Hurtado",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Lateral Direito",
        "age":  24
    },
    {
        "name":  "Ryan Augusto",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  19
    },
    {
        "name":  "Fabinho",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  24
    },
    {
        "name":  "Patrick",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  22
    },
    {
        "name":  "Matheus Fernandes",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  28
    },
    {
        "name":  "Gabriel",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  34
    },
    {
        "name":  "Ignacio Sosa",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Meia Central",
        "age":  23
    },
    {
        "name":  "Eric Ramires",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  26
    },
    {
        "name":  "Gustavo Neves",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  22
    },
    {
        "name":  "Praxedes",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  24
    },
    {
        "name":  "Rodriguinho",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  22
    },
    {
        "name":  "Bruninho",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  23
    },
    {
        "name":  "Marcelinho Braz",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  22
    },
    {
        "name":  "Vinicinho",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  22
    },
    {
        "name":  "Henry Mosquera",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Esquerda",
        "age":  24
    },
    {
        "name":  "Davi Gomes",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  21
    },
    {
        "name":  "Lucas Barbosa",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  25
    },
    {
        "name":  "José Herrera",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Venezuela",
        "flag":  "🇻🇪",
        "position":  "Ponta Direita",
        "age":  23
    },
    {
        "name":  "Kawê",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  24
    },
    {
        "name":  "Isidro Pitta",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Centroavante",
        "age":  27
    },
    {
        "name":  "Wallace Yan",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  21
    },
    {
        "name":  "Fernando",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  27
    },
    {
        "name":  "Eduardo Sasha",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  34
    },
    {
        "name":  "Gabriel Novaes",
        "club":  "Red Bull Bragantino",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  27
    },
    {
        "name":  "Everson",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  36
    },
    {
        "name":  "Pedro Cobra",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  20
    },
    {
        "name":  "Gabriel Delfim",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  24
    },
    {
        "name":  "Robert",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  21
    },
    {
        "name":  "Lyanco",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil / Itália",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Ruan",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Léo Duarte",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Vitor Hugo",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  35
    },
    {
        "name":  "Vitão",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  18
    },
    {
        "name":  "Renan Lodi",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  28
    },
    {
        "name":  "Kauã Pascini",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  18
    },
    {
        "name":  "Natanael",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  24
    },
    {
        "name":  "Angelo Preciado",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Lateral Direito",
        "age":  28
    },
    {
        "name":  "Alexsander",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  22
    },
    {
        "name":  "Kevin Castaño",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Volante",
        "age":  25
    },
    {
        "name":  "Tomás Pérez",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Venezuela",
        "flag":  "🇻🇪",
        "position":  "Volante",
        "age":  21
    },
    {
        "name":  "Victor Hugo",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  22
    },
    {
        "name":  "Fred",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  33
    },
    {
        "name":  "Alan Franco",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "Maycon",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  29
    },
    {
        "name":  "Mamady Cissé",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Guiné",
        "flag":  "🇬🇳",
        "position":  "Meia Central",
        "age":  19
    },
    {
        "name":  "Índio",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  18
    },
    {
        "name":  "Gustavo Scarpa",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  32
    },
    {
        "name":  "Igor Gomes",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  27
    },
    {
        "name":  "Reinier",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  24
    },
    {
        "name":  "Tomás Cuello",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Esquerda",
        "age":  26
    },
    {
        "name":  "Dudu",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  34
    },
    {
        "name":  "Bernard",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  34
    },
    {
        "name":  "Alan Minda",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Ponta Direita",
        "age":  23
    },
    {
        "name":  "Mateo Cassierra",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Thiago Borbas",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Centroavante",
        "age":  24
    },
    {
        "name":  "Cauã Soares",
        "club":  "Atlético Mineiro",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  18
    },
    {
        "name":  "Carlos Coronel",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Goleiro",
        "age":  29
    },
    {
        "name":  "Rafael",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  37
    },
    {
        "name":  "Young",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  24
    },
    {
        "name":  "João Pedro",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  20
    },
    {
        "name":  "Felipe Preis",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  20
    },
    {
        "name":  "Sabino",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Matheus Belém",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  23
    },
    {
        "name":  "Rafael Tolói",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil / Itália",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  35
    },
    {
        "name":  "Domingos Duarte",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Portugal",
        "flag":  "🇵🇹",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Robert Arboleda",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Zagueiro",
        "age":  34
    },
    {
        "name":  "Isac",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  20
    },
    {
        "name":  "Luis Osorio",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Zagueiro",
        "age":  20
    },
    {
        "name":  "Iago",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Enzo Díaz",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Esquerdo",
        "age":  30
    },
    {
        "name":  "Wendell",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  33
    },
    {
        "name":  "Nicolas",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  19
    },
    {
        "name":  "Pedro Lima",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  20
    },
    {
        "name":  "Aurélio Buta",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Portugal / Angola",
        "flag":  "🇵🇹",
        "position":  "Lateral Direito",
        "age":  29
    },
    {
        "name":  "Lucas Ramon",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  32
    },
    {
        "name":  "Cédric Soares",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Portugal",
        "flag":  "🇵🇹",
        "position":  "Lateral Direito",
        "age":  35
    },
    {
        "name":  "Igor Felisberto",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  19
    },
    {
        "name":  "Pablo Maia",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  24
    },
    {
        "name":  "Newton",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  26
    },
    {
        "name":  "Marcos Antônio",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  26
    },
    {
        "name":  "Damián Bobadilla",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Meia Central",
        "age":  25
    },
    {
        "name":  "Danielzinho",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  31
    },
    {
        "name":  "Djhordney",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  19
    },
    {
        "name":  "Cauly",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  31
    },
    {
        "name":  "Pedro Ferreira",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "Ferreirinha",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  28
    },
    {
        "name":  "Lucca",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  19
    },
    {
        "name":  "Victor Sá",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  32
    },
    {
        "name":  "Tetê",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  19
    },
    {
        "name":  "Artur",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  28
    },
    {
        "name":  "Lucas Moura",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  34
    },
    {
        "name":  "Ryan Francisco",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  19
    },
    {
        "name":  "André Silva",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Jonathan Calleri",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  33
    },
    {
        "name":  "Luciano",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  33
    },
    {
        "name":  "Gustavo Santana",
        "club":  "São Paulo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  21
    },
    {
        "name":  "Gabriel Grando",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  26
    },
    {
        "name":  "Weverton",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  38
    },
    {
        "name":  "Thiago Beltrame",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  23
    },
    {
        "name":  "Gabriel Menegon",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  17
    },
    {
        "name":  "Gustavo Martins",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  24
    },
    {
        "name":  "Wagner Leonardo",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Fabián Balbuena",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Zagueiro",
        "age":  35
    },
    {
        "name":  "Walter Kannemann",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  35
    },
    {
        "name":  "Wallace",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  21
    },
    {
        "name":  "Athos Thawan",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  21
    },
    {
        "name":  "Luis Eduardo",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  18
    },
    {
        "name":  "Marlon",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  29
    },
    {
        "name":  "Caio Paulista",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  28
    },
    {
        "name":  "Pedro Gabriel",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  19
    },
    {
        "name":  "João Pedro",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  29
    },
    {
        "name":  "Diego Caito",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  22
    },
    {
        "name":  "Marcos Rocha",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  37
    },
    {
        "name":  "Erick Noriega",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Peru",
        "flag":  "🇵🇪",
        "position":  "Volante",
        "age":  24
    },
    {
        "name":  "Mathías Villasanti",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Volante",
        "age":  29
    },
    {
        "name":  "Danilo Barbosa",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Filip Krovinović",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Croácia",
        "flag":  "🇭🇷",
        "position":  "Volante",
        "age":  31
    },
    {
        "name":  "Dodi",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Juan Nardoni",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Central",
        "age":  24
    },
    {
        "name":  "Tiago Augusto",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  18
    },
    {
        "name":  "Riquelme",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  20
    },
    {
        "name":  "Francis Amuzu",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Bélgica / Gana",
        "flag":  "🇧🇪",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Jovane Cabral",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Cabo Verde",
        "flag":  "🇨🇻",
        "position":  "Ponta Esquerda",
        "age":  28
    },
    {
        "name":  "Tetê",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  26
    },
    {
        "name":  "José Enamorado",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Direita",
        "age":  27
    },
    {
        "name":  "Cristian Pavón",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Direita",
        "age":  30
    },
    {
        "name":  "Roger",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  18
    },
    {
        "name":  "Carlos Vinícius",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  31
    },
    {
        "name":  "Matheus Nascimento",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  22
    },
    {
        "name":  "Martin Braithwaite",
        "club":  "Grêmio",
        "years":  [
                      2026
                  ],
        "nation":  "Dinamarca / Guiana",
        "flag":  "🇩🇰",
        "position":  "Centroavante",
        "age":  35
    },
    {
        "name":  "Anthoni",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  24
    },
    {
        "name":  "Matheus Cunha",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  25
    },
    {
        "name":  "Sergio Rochet",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Goleiro",
        "age":  33
    },
    {
        "name":  "Kauan",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  23
    },
    {
        "name":  "Diego Esser",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  21
    },
    {
        "name":  "Victor Gabriel",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "Guillermo Maripán",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Chile",
        "flag":  "🇨🇱",
        "position":  "Zagueiro",
        "age":  32
    },
    {
        "name":  "Félix Torres",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Equador",
        "flag":  "🇪🇨",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Juninho",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  31
    },
    {
        "name":  "Gabriel Mercado",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  39
    },
    {
        "name":  "Alexandro Bernabei",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Esquerdo",
        "age":  26
    },
    {
        "name":  "Matheus Bahia",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  27
    },
    {
        "name":  "Bruno Gomes",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  25
    },
    {
        "name":  "Braian Aguirre",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Direito",
        "age":  26
    },
    {
        "name":  "Rodrigo Villagra",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Volante",
        "age":  25
    },
    {
        "name":  "Thiago Maia",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  29
    },
    {
        "name":  "Ronaldo",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  29
    },
    {
        "name":  "Benjamin",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  20
    },
    {
        "name":  "Paulinho Paula",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  29
    },
    {
        "name":  "Bruno Henrique",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  36
    },
    {
        "name":  "Niclas Eliasson",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Suécia",
        "flag":  "🇸🇪",
        "position":  "Meia Direita",
        "age":  30
    },
    {
        "name":  "Alan Patrick",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  35
    },
    {
        "name":  "Calebe",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  26
    },
    {
        "name":  "Allex",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  20
    },
    {
        "name":  "Yago Noal",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  19
    },
    {
        "name":  "Johan Carbonero",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Vitinho",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Kayky",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  23
    },
    {
        "name":  "Alerrandro",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  26
    },
    {
        "name":  "Antonio Sanabria",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Centroavante",
        "age":  30
    },
    {
        "name":  "Raykkonen",
        "club":  "Internacional",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  18
    },
    {
        "name":  "Mycael",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  22
    },
    {
        "name":  "Santos",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  36
    },
    {
        "name":  "Matheus Soares",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  21
    },
    {
        "name":  "Arthur Dias",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  19
    },
    {
        "name":  "Carlos Terán",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Juan Felipe Aguirre",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Léo",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Dantas",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "Lucas Esquivel",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Esquerdo",
        "age":  24
    },
    {
        "name":  "Léo Derik",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  21
    },
    {
        "name":  "Claudinho",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  20
    },
    {
        "name":  "Gastón Benavídez",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Direito",
        "age":  30
    },
    {
        "name":  "Gilberto",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  33
    },
    {
        "name":  "Gilberto Junior",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  21
    },
    {
        "name":  "Luiz Gustavo",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  39
    },
    {
        "name":  "Juan Portilla",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "João Cruz",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  20
    },
    {
        "name":  "Felipinho",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  24
    },
    {
        "name":  "Jádson",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  33
    },
    {
        "name":  "Alejandro García",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Meia Central",
        "age":  25
    },
    {
        "name":  "Dudu",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  20
    },
    {
        "name":  "Bruno Zapelli",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Ofensivo",
        "age":  24
    },
    {
        "name":  "Chiqueti",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  21
    },
    {
        "name":  "Stiven Mendoza",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Esquerda",
        "age":  34
    },
    {
        "name":  "Kerwin Vargas",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Direita",
        "age":  24
    },
    {
        "name":  "Leozinho",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  27
    },
    {
        "name":  "Kevin Viveros",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Centroavante",
        "age":  26
    },
    {
        "name":  "Jorge Rivaldo",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  23
    },
    {
        "name":  "Renan Peixoto",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  26
    },
    {
        "name":  "Renan Viana",
        "club":  "Athletico Paranaense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  23
    },
    {
        "name":  "Lucas Arcanjo",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  28
    },
    {
        "name":  "Fintelman",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  25
    },
    {
        "name":  "Yuri Sena",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  25
    },
    {
        "name":  "Riccieli",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Cacá",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Zé Marcos",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Edu Ribeiro",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  26
    },
    {
        "name":  "Emanuel Brítez",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Zagueiro",
        "age":  34
    },
    {
        "name":  "Camutanga",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  33
    },
    {
        "name":  "Darlan",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  23
    },
    {
        "name":  "Luan Cândido",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  25
    },
    {
        "name":  "Ramon",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  25
    },
    {
        "name":  "Jamerson",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  28
    },
    {
        "name":  "Nathan Mendes",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  24
    },
    {
        "name":  "Fabiano",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  26
    },
    {
        "name":  "Mateus Silva",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  27
    },
    {
        "name":  "Walace",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  31
    },
    {
        "name":  "Baralhas",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Rúben Ismael",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Portugal",
        "flag":  "🇵🇹",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Dudu",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Caíque Gonçalves",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Zé Vitor",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  26
    },
    {
        "name":  "Tomás Pochettino",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Ofensivo",
        "age":  30
    },
    {
        "name":  "Matheuzinho",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  28
    },
    {
        "name":  "Emmanuel Martínez",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Meia Ofensivo",
        "age":  32
    },
    {
        "name":  "Diego Tarzia",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Ponta Esquerda",
        "age":  23
    },
    {
        "name":  "Renê",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  22
    },
    {
        "name":  "Anderson Pato",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  24
    },
    {
        "name":  "Erick",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  28
    },
    {
        "name":  "Ignacio Laquintana",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Direita",
        "age":  27
    },
    {
        "name":  "Lucas Silva",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  27
    },
    {
        "name":  "Marinho",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  36
    },
    {
        "name":  "Osvaldo",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  39
    },
    {
        "name":  "Renato Kayzer",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  30
    },
    {
        "name":  "Fabri",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Centroavante",
        "age":  25
    },
    {
        "name":  "Alex Bruno",
        "club":  "Vitória",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  27
    },
    {
        "name":  "Pedro Morisco",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  22
    },
    {
        "name":  "Pedro Rangel",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  26
    },
    {
        "name":  "Keiller",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  29
    },
    {
        "name":  "Benassi",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  22
    },
    {
        "name":  "Jacy",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Tiago Cóser",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "Maicon",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  38
    },
    {
        "name":  "Rodrigo Moledo",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  38
    },
    {
        "name":  "Thiago Santos",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  37
    },
    {
        "name":  "Felipe Jonatan",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  28
    },
    {
        "name":  "Rodrigo Gelado",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  23
    },
    {
        "name":  "Bruno Melo",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  33
    },
    {
        "name":  "Fabricio Bustos",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Lateral Direito",
        "age":  30
    },
    {
        "name":  "Tinga",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  33
    },
    {
        "name":  "Lucas Taverna",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  19
    },
    {
        "name":  "Nicolás Fonseca",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Richard",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  32
    },
    {
        "name":  "Tissi",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  19
    },
    {
        "name":  "Sebastián Gómez",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Meia Central",
        "age":  30
    },
    {
        "name":  "Vini Paulista",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  25
    },
    {
        "name":  "Gustavo",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  24
    },
    {
        "name":  "Josué",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Portugal",
        "flag":  "🇵🇹",
        "position":  "Meia Ofensivo",
        "age":  36
    },
    {
        "name":  "Joaquín Lavega",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Esquerda",
        "age":  21
    },
    {
        "name":  "Breno Lopes",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  30
    },
    {
        "name":  "Brian Ocampo",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Keno",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  37
    },
    {
        "name":  "Lucas Ronier",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  21
    },
    {
        "name":  "Fabinho",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  26
    },
    {
        "name":  "Pedro Rocha",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  31
    },
    {
        "name":  "Renato Marques",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  22
    },
    {
        "name":  "Rodrigo Rodrigues",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  30
    },
    {
        "name":  "Éberth",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  23
    },
    {
        "name":  "Paulo Roberto",
        "club":  "Coritiba",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  21
    },
    {
        "name":  "Walter",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  38
    },
    {
        "name":  "Alex Muralha",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  36
    },
    {
        "name":  "Georgemy",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  31
    },
    {
        "name":  "Thomazella",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  36
    },
    {
        "name":  "Willian Machado",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "João Victor",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Lucas Oliveira",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Gabriel",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  22
    },
    {
        "name":  "Reinaldo",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  37
    },
    {
        "name":  "Victor Luís",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  33
    },
    {
        "name":  "Igor Formiga",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  27
    },
    {
        "name":  "Elias",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  27
    },
    {
        "name":  "Daniel Borges",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  33
    },
    {
        "name":  "Wesley Santos",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  22
    },
    {
        "name":  "Neto Moura",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Wallisson",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  29
    },
    {
        "name":  "Gustavo Cazonatti",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  30
    },
    {
        "name":  "Denilson",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  25
    },
    {
        "name":  "Aldo Filho",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  28
    },
    {
        "name":  "Japa",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  22
    },
    {
        "name":  "Shaylon",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  29
    },
    {
        "name":  "Eduardo",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  36
    },
    {
        "name":  "Chico Kim",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  35
    },
    {
        "name":  "Alesson",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Fernandinho",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  29
    },
    {
        "name":  "Negueba",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  26
    },
    {
        "name":  "Gustavo Silva",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  29
    },
    {
        "name":  "Carlos Eduardo",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  29
    },
    {
        "name":  "Luiz Filipe",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  25
    },
    {
        "name":  "Edson Carioca",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "André Luis",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  32
    },
    {
        "name":  "Zé Roberto",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  33
    },
    {
        "name":  "Bruno Santos",
        "club":  "Mirassol",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Ivan",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  29
    },
    {
        "name":  "Marcelo Rangel",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  38
    },
    {
        "name":  "Ygor Vinhas",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  32
    },
    {
        "name":  "Zé Ivaldo",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Tchamba",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Camarões",
        "flag":  "🇨🇲",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Matheus Felipe",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  27
    },
    {
        "name":  "Léo Andrade",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Marllon",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  34
    },
    {
        "name":  "Cristian Tassano",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Zagueiro",
        "age":  30
    },
    {
        "name":  "Mayk",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  27
    },
    {
        "name":  "Marlon",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  32
    },
    {
        "name":  "Edson Kauã",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  22
    },
    {
        "name":  "João Lucas",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  28
    },
    {
        "name":  "Matheus Alexandre",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  27
    },
    {
        "name":  "Marcelinho",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  28
    },
    {
        "name":  "Caio Magalhães",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  21
    },
    {
        "name":  "Leonel Picco",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Argentina",
        "flag":  "🇦🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Zé Welison",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  31
    },
    {
        "name":  "David Braga",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  24
    },
    {
        "name":  "Edson Fernando",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  28
    },
    {
        "name":  "Zé Ricardo",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Patrick",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  34
    },
    {
        "name":  "Franco Catarozzi",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Meia Central",
        "age":  26
    },
    {
        "name":  "Vitor Bueno",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  32
    },
    {
        "name":  "Jajá",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  27
    },
    {
        "name":  "Jáderson",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  26
    },
    {
        "name":  "Alef Manga",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  31
    },
    {
        "name":  "Antonio Galeano",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Paraguai",
        "flag":  "🇵🇾",
        "position":  "Ponta Direita",
        "age":  26
    },
    {
        "name":  "Yago Pikachu",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  34
    },
    {
        "name":  "Tico",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  20
    },
    {
        "name":  "Gabriel Taliari",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  29
    },
    {
        "name":  "Gabriel Poveda",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  28
    },
    {
        "name":  "Eduardo Melo",
        "club":  "Remo",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  25
    },
    {
        "name":  "Anderson",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  28
    },
    {
        "name":  "Rafael Santos",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  37
    },
    {
        "name":  "Gabriel Werner",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  23
    },
    {
        "name":  "Matheus Aurélio",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Goleiro",
        "age":  27
    },
    {
        "name":  "Doma",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "João Paulo",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  29
    },
    {
        "name":  "Victor Caetano",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  28
    },
    {
        "name":  "Rafael Thyere",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  33
    },
    {
        "name":  "Kauan Faria",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  23
    },
    {
        "name":  "Vinicius Eduardo",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Zagueiro",
        "age":  21
    },
    {
        "name":  "Mancha",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  25
    },
    {
        "name":  "Fernando",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  27
    },
    {
        "name":  "Bruno Pacheco",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  34
    },
    {
        "name":  "Da Silva",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Esquerdo",
        "age":  26
    },
    {
        "name":  "Dudu",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  29
    },
    {
        "name":  "Heitor",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  25
    },
    {
        "name":  "Everton",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  31
    },
    {
        "name":  "Gustavo Talles",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Lateral Direito",
        "age":  23
    },
    {
        "name":  "Carvalheira",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Camilo",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Vinicius Balieiro",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  27
    },
    {
        "name":  "Rosivan",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Volante",
        "age":  26
    },
    {
        "name":  "Yago Felipe",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  31
    },
    {
        "name":  "Bruno Matias",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  27
    },
    {
        "name":  "David Antunes",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Central",
        "age":  21
    },
    {
        "name":  "Robert Santos",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  23
    },
    {
        "name":  "Max",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  25
    },
    {
        "name":  "Miguel Carvalho",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  21
    },
    {
        "name":  "Giovanni Augusto",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Meia Ofensivo",
        "age":  37
    },
    {
        "name":  "Dylan Borrero",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Colômbia",
        "flag":  "🇨🇴",
        "position":  "Ponta Esquerda",
        "age":  24
    },
    {
        "name":  "Maurício Garcez",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Esquerda",
        "age":  29
    },
    {
        "name":  "Kevin Ramírez",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Ponta Esquerda",
        "age":  32
    },
    {
        "name":  "Marcinho",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  31
    },
    {
        "name":  "Bruno Tubarão",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  31
    },
    {
        "name":  "Rubens",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Ponta Direita",
        "age":  23
    },
    {
        "name":  "Franco Rossi",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Uruguai",
        "flag":  "🇺🇾",
        "position":  "Centroavante",
        "age":  24
    },
    {
        "name":  "Yannick Bolasie",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "RD Congo / Inglaterra",
        "flag":  "🇨🇩",
        "position":  "Centroavante",
        "age":  37
    },
    {
        "name":  "Tulio Eduardo",
        "club":  "Chapecoense",
        "years":  [
                      2026
                  ],
        "nation":  "Brasil",
        "flag":  "🇧🇷",
        "position":  "Centroavante",
        "age":  21
    }
];

const CLEAN_DB = PLAYERS_DB.filter(player => player.nation && player.club && player.years.includes(2026));

