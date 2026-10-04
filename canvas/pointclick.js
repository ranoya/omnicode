setTempTheme("light");
setTransparentBackground();
setZoom(.5);
multicolor();
centerControls();

newframe("https://pointandclick.vercel.app/v1/lista.html?theme=yellow70", "Tabela", 800, 600, 20, 20);
newframe("https://pointandclick.vercel.app/v1/sumario.html?theme=yellow70", "Sumário", 800, 600, 20, 800);
newframe("https://pointandclick.vercel.app/v1/semfiltros.html?theme=yellow70", "Visualização 1", 800, 600, -1000, 20);
newframe("https://pointandclick.vercel.app/v1/paralax.html?theme=yellow70", "Documento 1", 800, 600, -1000, 800);

newframe("https://docs.google.com/spreadsheets/d/15lB-WclGe0WVET1yg94tZMOc5zVi6lufmv0vQZyXmYA/preview", "Dados Ampliados", 800, 600, 1600, 20);
newframe("https://pointandclick.vercel.app/v1/timelineonly.html?theme=yellow70", "Visualização 2", 800, 600, 1600, 800);
newidoc("https://pointandclick.vercel.app/?bg=debe34&mg=ca941c&hl=#b38f08&hl2=FFFFFF", "Documento 2", 1000, 750, 2600, 250);

newidoc("https://www.ranoya.com/books/public/interfaces/informacao.php?theme=yellow70&embed=plain", "Pormenores", 1000, 750, 700, 1200);
newidoc("https://www.ranoya.com/books/public/tecnologiascriativas/visualizacaoparametrica.php?theme=yellow70&embed=plain", "Paramátrico", 1000, 750, 700, 2200);

connect("Tabela", "Sumário");
connect("Tabela", "Visualização 1");
connect("Tabela", "Documento 1");
connect("Tabela", "Dados Ampliados");
connect("Dados Ampliados", "Visualização 2");
connect("Visualização 2", "Documento 2");
connect("Documento 2", "Dados Ampliados");
connect("Tabela", "Pormenores");
connect("Dados Ampliados", "Pormenores");
connect("Paramátrico", "Pormenores");

center("Tabela");
