setTempTheme("solarized-light");
newframe(
  "https://omniboards.vercel.app/?limita=0&titulo=BBS&subtitulo=Bullet%20Board%20Systems&filtra=ANSI_ASCII_ART%20PINBOARDCOMPATIBLE&nomenu=true&contentonly=true",
  "Modo Texto",
  30,
  30,
  700,
  880,
);

newframe(
  "https://www.ranoya.com/pt/textos/interfacetexto.php?id=T003&temptheme=cleantext&nomenu=true",
  "Texto",
  950,
  50,
  1000,
  800,
);

connect("Modo Texto", "Texto");

newframe(
  "https://slidelines.vercel.app/timelineh/?allblocks=true&startmiddle=true&pattern=true&allowverticalscroll=true&timeheight=125&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1461285437#gid=1461285437&theme=https://slidelines.vercel.app/level/altsmall.css",
  "Comunicação Digital",
  950,
  120,
  800,
  500,
);

connect("Modo Texto", "Comunicação Digital");

newframe(
  "https://omniboards.vercel.app/?nomenu=true&filtra=_DEMOSCENE&limita=0&contentonly=true&titulo=Demoscene&temptheme=narrativas",
  "Demoscene",
  120,
  900,
  500,
  700,
);

connect("Demoscene", "Comunicação Digital");

connect("Demoscene", "Modo Texto");

newframe(
  "https://slidelines.vercel.app/timelineh/?allblocks=true&startmiddle=true&pattern=true&allowverticalscroll=true&timeheight=110&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1604470644#gid=1604470644&theme=https://slidelines.vercel.app/level/altsmall.css",
  "Workstations",
  1000,
  -800,
  900,
  600,
);

connect("Comunicação Digital", "Workstations");
