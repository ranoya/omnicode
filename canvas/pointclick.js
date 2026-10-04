setTempTheme("light");
setTransparentBackground();
setZoom(.7);
singlecolor();
centerControls();

newframe("https://pointandclick.vercel.app/v1/lista.html?theme=yellow70", "Tabela", 1415, 810, -232, -224);
newframe("https://pointandclick.vercel.app/v1/sumario.html?theme=yellow70", "Sumário", 800, 600, -185, 1062);
newframe("https://pointandclick.vercel.app/v1/semfiltros.html?theme=yellow70", "Visualização 1", 1382, 865, -1818, -610);
newframe("https://pointandclick.vercel.app/v1/paralax.html?theme=yellow70", "Documento 1", 1372, 820, -1800, 655);

newframe("https://docs.google.com/spreadsheets/d/15lB-WclGe0WVET1yg94tZMOc5zVi6lufmv0vQZyXmYA/preview", "Dados Ampliados", 800, 600, 2106, -117);
newframe("https://pointandclick.vercel.app/v1/timelineonly.html?theme=yellow70", "Visualização 2", 997, 570, 2292, 733);
newidoc("https://pointandclick.vercel.app/?bg=debe34&mg=ca941c&hl=#b38f08&hl2=FFFFFF", "Documento 2", 1000, 750, 3504, 173);

newidoc("https://www.ranoya.com/books/public/interfaces/informacao.php?theme=yellow70&embed=plain", "Pormenores", 1000, 750, 978, 1312);
newidoc("https://www.ranoya.com/books/public/tecnologiascriativas/visualizacaoparametrica.php?theme=yellow70&embed=plain", "Paramátrico", 1000, 750, 845, 2349);

connect("Tabela", "Sumário");
connect("Tabela", "Visualização 1");
connect("Tabela", "Documento 1");
connect("Visualização 1", "Documento 1");
connect("Tabela", "Dados Ampliados");
connect("Dados Ampliados", "Visualização 2");
connect("Visualização 2", "Documento 2");
connect("Documento 2", "Dados Ampliados");
connect("Tabela", "Pormenores");
connect("Dados Ampliados", "Pormenores");
connect("Paramátrico", "Pormenores");

center("Tabela");
