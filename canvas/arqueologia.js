setTempTheme("solarized-light");

newframe(
  "https://visse.vercel.app/v3-projetoarqueologia",
  "Projeto",
  30,
  30,
  1100,
  780,
);

newframe(
  "https://www.youtube.com/embed/0r0-RjoZ8Wk?si=x-7b-UhhOZuRt8Dj&start=920%22",
  "Palestra",
  130,
  -900,
  670,
  500,
);

connect("Projeto", "Palestra");

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiadesign",
  "Arqueologia do Design",
  -1200,
  -750,
  900,
  500,
);

connect("Arqueologia do Design", "Palestra");
connect("Arqueologia do Design", "Projeto");

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiaeditorial",
  "Arqueologia do Editorial",
  -1300,
  150,
  900,
  550,
);

connect("Arqueologia do Design", "Arqueologia do Editorial");

newframe(
  "https://slidelines.vercel.app/level/?s=init&allowverticalscroll=true&file=jhttps://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=1688013862&theme=https://slidelines.vercel.app/styles/fit.css",
  "Bullet Points",
  180,
  1000,
  700,
  600,
);

connect("Projeto", "Bullet Points");
connect("Arqueologia do Editorial", "Bullet Points");

newframe(
  "https://drive.google.com/file/d/1HEZdZPYt0vF7JFJfyn7SuHfVGZ28c-zn/preview",
  "Método de Pesquisa",
  -100,
  1900,
  780,
  900,
);

connect("Método de Pesquisa", "Bullet Points");

newframe(
  "https://visse.vercel.app/v2-arqueologia/bulletpoint.html?bg=555555&fg=ffffff&",
  "Acervo de Pesquisa (v.1)",
  -1400,
  1700,
  900,
  700,
);

connect("Método de Pesquisa", "Acervo de Pesquisa (v.1)");

newframe(
  "https://docs.superhuman.com/embed/4BHBLxS_54/_su-Ls7dY?hideSections=true",
  "Acervo de Pesquisa (v.2)",
  -2200,
  2800,
  1300,
  950,
);

connect("Método de Pesquisa", "Acervo de Pesquisa (v.2)");

newframe(
  "https://visse.vercel.app/v2-arqueologia/more.html?filtra=_appsonly&bg=6e4106&fg=ffffff&",
  "Emulação",
  -2600,
  1000,
  700,
  600,
);

connect("Emulação", "Arqueologia do Editorial");
connect("Emulação", "Arqueologia do Design");
connect("Emulação", "Bullet Points");
connect("Emulação", "Acervo de Pesquisa (v.2)");
connect("Emulação", "Acervo de Pesquisa (v.1)");

newframe(
  "https://omniboards.vercel.app/?nomenu=true&filtra=PIXELART_PESSOAL&limita=0&contentonly=true&titulo=Pixel%20Art&temptheme=narrativas",
  "Pixel Art",
  1230,
  -430,
  720,
  640,
);

connect("Pixel Art", "Projeto");

newframe(
  "https://www.ranoya.com/pt/textos/culturavisual.php?id=T018&temptheme=cleantext&nomenu=true",
  "Cultura Visual",
  2230,
  -130,
  1080,
  840,
);

connect("Pixel Art", "Cultura Visual");

newframe(
  "https://www.ranoya.com/pt/textos/interfacetexto.php?id=T003&temptheme=cleantext&nomenu=tru",
  "Interfaces de Texto",
  -2700,
  -550,
  1050,
  800,
);

connect("Interfaces de Texto", "Arqueologia do Design");
connect("Interfaces de Texto", "Emulação");

newframe(
  "https://www.ranoya.com/pt/textos/transformacaointerfaces.php?id=T005&temptheme=cleantext&nomenu=true",
  "Mais Interfaces de Texto",
  -3900,
  -950,
  1050,
  800,
);

connect("Interfaces de Texto", "Mais Interfaces de Texto");
connect("Emulação", "Mais Interfaces de Texto");

newframe(
  "https://www.ranoya.com/pt/textos/dropdown.php?id=T002&temptheme=cleantext&nomenu=true",
  "Menus",
  -5000,
  -450,
  1050,
  800,
);

connect("Menus", "Mais Interfaces de Texto");
connect("Menus", "Emulação");
