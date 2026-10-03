setTempTheme("solarized-light");
setTransparentBackground();
setZoom(.5);

newframe(
  "https://www.ranoya.com/pt/arqueologia/?nomenu=true&temptheme=cleantext",
  "Projeto",
  1100,
  780,
  30,
  30,
);

polaroid(
  "https://www.youtube.com/embed/0r0-RjoZ8Wk?si=x-7b-UhhOZuRt8Dj&start=920%22", "Palestra realizada no laboratório Lexus da UFRN sobre os softwares de design utilizados nas décadas de 1980 e 1990",
  "Palestra",
  670,
  500,
  -630,
  -820,
);

connect("Projeto", "Palestra");

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiadesign",
  "Arqueologia do Design",
  900,
  500,
  -1200,
  -200,
);

connect("Arqueologia do Design", "Palestra");
connect("Arqueologia do Design", "Projeto");

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiaeditorial",
  "Arqueologia do Editorial",

  900,
  550,
  -1340,
  650,
);

connect("Arqueologia do Design", "Arqueologia do Editorial");

newframe(
  "https://slidelines.vercel.app/level/?s=init&allowverticalscroll=true&file=jhttps://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=1688013862&theme=https://slidelines.vercel.app/styles/fit.css",
  "Bullet Points",

  700,
  600,
  280,
  1100,
);

connect("Projeto", "Bullet Points");
connect("Arqueologia do Editorial", "Bullet Points");

newidoc(
  "https://drive.google.com/file/d/1HEZdZPYt0vF7JFJfyn7SuHfVGZ28c-zn/preview",
  "Método de Pesquisa",

  780,
  900,
  -100,
  1900,
);

connect("Método de Pesquisa", "Bullet Points");

newframe(
  "https://visse.vercel.app/v2-arqueologia/bulletpoint.html?bg=555555&fg=ffffff&",
  "Acervo de Pesquisa (v.1)",

  900,
  700,
  -1400,
  1700,
);

connect("Método de Pesquisa", "Acervo de Pesquisa (v.1)");

newframe(
  "https://docs.superhuman.com/embed/4BHBLxS_54/_su-Ls7dY?hideSections=true",
  "Acervo de Pesquisa (v.2)",

  1300,
  950,
  -2200,
  2800,
);

connect("Método de Pesquisa", "Acervo de Pesquisa (v.2)");

newframe(
  "https://visse.vercel.app/v2-arqueologia/more.html?filtra=_appsonly&bg=6e4106&fg=ffffff&",
  "Emulação",

  900,
  600,
  -2700,
  1000,
);

connect("Emulação", "Arqueologia do Editorial");
connect("Emulação", "Arqueologia do Design");
connect("Emulação", "Bullet Points");
connect("Emulação", "Acervo de Pesquisa (v.2)");
connect("Emulação", "Acervo de Pesquisa (v.1)");

newframe(
  "https://omniboards.vercel.app/?nomenu=true&filtra=PIXELART_PESSOAL&limita=0&contentonly=true&titulo=Pixel%20Art&temptheme=narrativas",
  "Pixel Art",

  720,
  840,
  1530,
  -730,
);

connect("Pixel Art", "Projeto");

newframe(
  "https://omniboards.vercel.app/?nomenu=true&filtra=_DEMOSCENE&limita=0&contentonly=true&titulo=Demoscene&temptheme=narrativas",
  "Demoscene",

  720,
  840,
  1430,
  -1930,
);

connect("Pixel Art", "Demoscene");

newidoc(
  "https://www.ranoya.com/pt/textos/culturavisual.php?id=T018&temptheme=cleantext&nomenu=true",
  "Cultura Visual",

  1100,
  940,
  4200,
  -730,
);

connect("Pixel Art", "Cultura Visual");

newidoc(
  "https://www.ranoya.com/pt/textos/interfacetexto.php?id=T003&temptheme=cleantext&nomenu=tru",
  "Interfaces de Texto",

  1050,
  800,
  -2700,
  -550,
);

connect("Interfaces de Texto", "Arqueologia do Design");
connect("Interfaces de Texto", "Emulação");

newidoc(
  "https://www.ranoya.com/pt/textos/transformacaointerfaces.php?id=T005&temptheme=cleantext&nomenu=true",
  "Mais Interfaces de Texto",

  1050,
  800,
  -3900,
  -950,
);

connect("Interfaces de Texto", "Mais Interfaces de Texto");
connect("Emulação", "Mais Interfaces de Texto");

newidoc(
  "https://www.ranoya.com/pt/textos/dropdown.php?id=T002&temptheme=cleantext&nomenu=true",
  "Menus",

  1050,
  800,
  -4400,
  150,
);

connect("Menus", "Mais Interfaces de Texto");
connect("Menus", "Emulação");

newframe(
  "https://omniboards.vercel.app/?limita=0&titulo=ASCII%20Art&subtitulo=Refer%C3%AAncia&filtra=ANSI_ASCII_ART&nomenu=true&temptheme=ayu",
  "ASCII Art",

  820,
  840,
  -50,
  -1830,
);

connect("ASCII Art", "Pixel Art");

connect("ASCII Art", "Interfaces de Texto");

newframe(
  "https://omniboards.vercel.app/?limita=0&titulo=BBS&subtitulo=Bullet%20Board%20Systems&filtra=_BBSs&nomenu=true&contentonly=true&nomenu=true&contentonly=true",
  "BBS",

  820,
  840,
  -1950,
  -2700,
);

connect("ASCII Art", "BBS");




newidoc(
  "https://drive.google.com/file/d/1yNAfpLxgX3xW1JQtY2KSI2xsSiLSV8K_/preview",
  "Erthos Albino de Souza",

  780,
  900,
  -930,
  -3330,
);

connect("Erthos Albino de Souza", "ASCII Art");
connect("Erthos Albino de Souza", "BBS");

newframe(
  "https://slidelines.vercel.app/timelineh/?allblocks=true&timeheight=110&followbg=true&startmiddle=true&allblocks=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=13412068&theme=https://slidelines.vercel.app/styles/pixelart.css",
  "Tranformações na Pixel Art",

  720,
  840,
  2830,
  -1740,
);

connect("Tranformações na Pixel Art", "Pixel Art");
connect("Tranformações na Pixel Art", "Cultura Visual");

newframe(
  "https://slidelines.vercel.app/timelineh/?allblocks=true&timeheight=110&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1898658317#gid=1898658317&theme=https://slidelines.vercel.app/level/hypermedia.css",
  "Hipertexto",

  880,
  780,
  1430,
  1200,
);

connect("Projeto", "Hipertexto");



newframe(
  "https://slidelines.vercel.app/level/?s=0&order=ord&filtra=_iFiction&allowverticalscroll=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=137178476#gid=137178476&theme=https://slidelines.vercel.app/styles/fit.css",
  "Ficção Interativa",

  880,
  780,
  1580,
  2500,
);

connect("Hipertexto", "Ficção Interativa");


newframe(
  "https://visse.vercel.app/v2-arqueologia/more.html?bg=06696e&fg=ffffff&filtra=_narratifonly",
  "Emulação de Narrativas Interativas",

  900,
  600,
  800,
  3600,
);

connect("Emulação de Narrativas Interativas", "Ficção Interativa");
connect("Emulação de Narrativas Interativas", "Emulação");



newframe(
  "https://slides.com/ranoya/componenetesnarrativoswhite/embed",
  "Mapeamento Point & Clicks",

  850,
  750,
  2240,
  360,
);




connect("Projeto", "Mapeamento Point & Clicks");

newframe(
  "https://pointandclick.vercel.app/v1/timelineonly.html",
  "Mapeamento Point & Clicks v.4",

  1050,
  750,
  3880,
  1050,
);

connect("Mapeamento Point & Clicks v.4", "Mapeamento Point & Clicks");

newframe(
  "https://omniboards.vercel.app/?titulo=text%20mode&limita=0&contentonly=true&filtra=TEXT_MODE_INTERFACE",
  "Acervo de Interfaces de Texto",

  820,
  840,
  -3000,
  -2250,
);

connect("Acervo de Interfaces de Texto", "Interfaces de Texto");
connect("Acervo de Interfaces de Texto", "BBS");

newframe(
  "https://pointandclick.vercel.app",
  "Point and Clicks",

  1100,
  940,
  5230,
  470,
);


connect("Point and Clicks", "Emulação");
connect("Point and Clicks", "Pixel Art");
connect("Point and Clicks", "Mapeamento Point & Clicks v.4");


newframe(
  "https://omnidocs.vercel.app/docs/estudodecasopnca",
  "Estudo de Caso",

  1050,
  750,
  3540,
  2400,
);

connect("Point and Clicks", "Estudo de Caso");
connect("Mapeamento Point & Clicks v.4", "Estudo de Caso");
connect("Mapeamento Point & Clicks", "Estudo de Caso");
connect("Mapeamento Point & Clicks", "Ficção Interativa");
connect("Mapeamento Point & Clicks v.4", "Ficção Interativa");
connect("Point and Clicks", "Ficção Interativa");
connect("Point and Clicks", "Cultura Visual");


newframe(
  "https://slidelines.vercel.app/timelineh/?startmiddle=true&pattern=true&allowverticalscroll=true&timeheight=110&followbg=true&bgscroll=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=81325473&theme=https://slidelines.vercel.app/level/small.css",
  "História das Interfaces Computacionais",

  900,
  800,
  -5000,
  -1450,
);

connect("História das Interfaces Computacionais", "Mais Interfaces de Texto");

center("Projeto");