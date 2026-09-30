setTempTheme("solarized-light");

newframe(
  "https://visse.vercel.app/v3-projetoarqueologia",
  "Projeto",
  30,
  30,
  1100,
  880,
);

newframe(
  "https://www.youtube.com/embed/0r0-RjoZ8Wk?si=x-7b-UhhOZuRt8Dj&start=920%22",
  "Palestra",
  130,
  -1000,
  700,
  500,
);

connect("Projeto", "Palestra");

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiadesign",
  "Arqueologia do Design",
  -1000,
  -600,
  800,
  500,
);

connect("Arqueologia do Design", "Palestra");
connect("Arqueologia do Design", "Projeto");

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiadesign",
  "Arqueologia do Design",
  -1000,
  -600,
  800,
  500,
);

newframe(
  "https://omnidocs.vercel.app/materiais/arqueologiaeditorial",
  "Arqueologia do Editorial",
  -1300,
  -100,
  850,
  550,
);

connect("Arqueologia do Design", "Arqueologia do Editorial");

newframe(
  "https://slidelines.vercel.app/level/?s=init&allowverticalscroll=true&file=jhttps://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=1688013862&theme=https://slidelines.vercel.app/styles/fit.css",
  "Bullet Points",
  100,
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
  700,
  900,
);

connect("Método de Pesquisa", "Bullet Points");

newframe(
  "https://visse.vercel.app/v2-arqueologia/bulletpoint.html?bg=555555&fg=ffffff&",
  "Acervo de Pesquisa (v.1)",
  -1200,
  1900,
  900,
  700,
);

connect("Método de Pesquisa", "Acervo de Pesquisa (v.1)");

newframe(
  "https://docs.superhuman.com/embed/4BHBLxS_54/_su-Ls7dY?hideSections=true",
  "Acervo de Pesquisa (v.2)",
  -1000,
  2800,
  900,
  950,
);

connect("Método de Pesquisa", "Acervo de Pesquisa (v.2)");
