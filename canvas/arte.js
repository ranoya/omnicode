setTempTheme("light");

polaroid("https://omnifolio.vercel.app/omnifiles/atari800_computer.png", "Computador Atari 800, 1979", "Atari 800", 350, 340, 300, 300);

newidoc("https://www.ranoya.com/Art/Singles/1980.html?bgcolor=417cd7&fcolor=FFFFFF", "Gráficos Programados", 600, 500, 600, 700);
connect("Atari 800", "Gráficos Programados");

polaroid("https://omnifolio.vercel.app/omnifiles/manual_Atari800_VideoEasel.jpg", "Video Easel, 1979", "Video Easel", 400, 550, -300, -200);
connect("Atari 800", "Video Easel");

polaroid("https://www.youtube.com/embed/mnznqaGYc-U?si=V1cubWhP-TyMbbI_", "Demonstração do Video Easel, 1979", "Demo", 670, 500, 230, -320);
connect("Demo", "Video Easel");
connect("Demo", "Atari 800");

polaroid("https://omnifolio.vercel.app/omnifiles/Sharp_HotBit_MSX_computer.jpg", "Computador MSX Sharp Hotbit HB-8000, 1985", "MSX", 500, 350, 1780, 681);


polaroid("https://omnifolio.vercel.app/omnifiles/computers_Apple2_cgi.png", "Computador Apple II, 1979", "Apple II", 500, 490, 1050, 50);

connect("Gráficos Programados", "MSX");
connect("Gráficos Programados", "Apple II");
connect("Gráficos Programados", "Atari 800");

newframe("https://namco.vercel.app/a8/?cart=bas.c", "BASIC", 560, 450, -600, 450);
connect("BASIC", "Atari 800");


newframe("https://slidelines.vercel.app/timelineh/?inverttopicos=true&allblocks=true&startmiddle=true&pattern=true&allowverticalscroll=true&timeheight=110&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=745718333#gid=745718333&theme=https://slidelines.vercel.app/level/altsmall.css", "Computação Pessoal", 700, 650, 970, -690);

connect("Computação Pessoal", "Atari 800");
connect("Computação Pessoal", "MSX");
connect("Computação Pessoal", "Apple II");


newframe("https://namco.vercel.app/sx/?DISK_FILES=print2.bas&BASIC_RUN=print2.bas", "10 Print, MSX", 600, 450, 2300, 100);
connect("10 Print, MSX", "MSX");

newframe("https://apple2ts.com/?appmode=embed&crtdistort=off&color=amber&scanlines=on&ghosting=off&text=TO%20MAGIC%20%3ASTART%20%3AANGLE%20%3AINC%20%3AN%0AFORWARD%20%3ASTART%20RIGHT%20%3AANGLE%0AIF%20%3AN%20%3D%200%20%5BSTOP%5D%0AMAGIC%20%3ASTART%20%2B%20%3AINC%20%3AANGLE%20%3AINC%20%3AN%20-%201%0AEND%0A%0AMAGIC%205%20135%203%2040%0A%0A#https://namco.vercel.app/a2/disk/Apple_LOGO.dsk", "Logo", 600, 400, 1900, -400);
connect("Logo", "Apple II");


polaroid("https://www.youtube.com/embed/m9joBLOZVEo?si=sUP37vdG5LHp5c-H", "Demonstração do 10 PRINT original", "C64 10 PRINT", 500, 360, -450, 1000);
connect("C64 10 PRINT", "BASIC");
connect("C64 10 PRINT", "10 Print, MSX");


newidoc("https://artndcode.vercel.app/Singles/pathwavesexpiritae.html?fcolor=44FFFF&bgcolor=4272cf", "Pathwaves Expiritae", 600, 500, 900, 2000);
connect("Gráficos Programados", "Pathwaves Expiritae");


polaroid("https://www.youtube.com/embed/Pz5MQ8DTvKI?si=vn8FMNZaRCiqUVHL", "A comunidade de Arte Generativa Brasileira e o Processing Community Day Brasil, 2021", "Processing", 600, 400, -40, 1530);
connect("Processing", "Pathwaves Expiritae");

newidoc("https://www.ranoya.com/pt/futuro/?nomenu=true&temptheme=cleantext", "Futuro", 600, 600, -870, 1830);
connect("Futuro", "Pathwaves Expiritae");


newidoc("https://booklines.vercel.app/livros/javascriptse", "Livro", 1130, 620, -2480, 2100);
connect("Futuro", "Livro");

newframe("https://omnidocs.vercel.app/docs/designgenerativo", "Design Generativo", 501, 528, -1490, 2920);
connect("Futuro", "Design Generativo");
connect("Livro", "Design Generativo");


newidoc("https://artegerativabrasileira.vercel.app/", "Arte Generativa Brasileira", 600, 800, 830, 2800);
connect("Processing", "Arte Generativa Brasileira");
connect("Pathwaves Expiritae", "Arte Generativa Brasileira");


polaroid("https://omnifolio.vercel.app/omnifiles/ibm-pc-5150.webp", "Computador IBM PC XT, 1981", "PC-XT", 516, 579, -1920, 420);

newframe("https://namco.vercel.app/interfaces/?rom=tp3", "Turbo Pascal 3.0", 500, 360, -1850, 1350);
connect("Turbo Pascal 3.0", "PC-XT");
connect("Futuro", "PC-XT");
connect("Futuro", "Turbo Pascal 3.0");


polaroid("https://www.youtube.com/embed/xFlPWVOdGzw?si=rutAgPaKpkF1FImc", "Turbo Basic", "Turbo Basic", 500, 360, -1150, 760);
connect("Turbo Basic", "PC-XT");



newframe("https://slidelines.vercel.app/timelineh/?allblocks=true&startvisible=true&allowverticalscroll=true&followbg=true&timeheight=190&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=1569220645&theme=https://slidelines.vercel.app/level/arte.css", "Arte Generativa", 600, 780, 1600, 1400);
connect("Arte Generativa", "Pathwaves Expiritae");
connect("Arte Generativa", "Gráficos Programados");
connect("Arte Generativa", "Processing");

polaroid("https://omnifolio.vercel.app/omnifiles/Knowlton_1967_ComputerNudeStudiesInPerceptionI_b.jpg", "Computer Nude Kenneth C. Knowlton & Leon D. Harmon, 1967", "Precursores", 600, 366, 2540, 1480);

newidoc("https://drive.google.com/file/d/1r04hsY6pYs6uj1u21SRQQxSctQz-dG_O/preview", "ASCII Art", 650, 800, 2350, 2180);

connect("ASCII Art", "Precursores");
connect("Arte Generativa", "Precursores");


polaroid("https://namco.vercel.app/flash/?file=cortex/cortexmain.swf", "Cortex #1 - Revista eletrônica de poesia digital, 2003", "Cortex", 600, 500, 3200, 3100);

newidoc(
  "https://drive.google.com/file/d/1yNAfpLxgX3xW1JQtY2KSI2xsSiLSV8K_/preview",
  "Erthos Albino de Souza",
  650, 800, 3250, 2000
);


connect("Arte Generativa", "Arte Generativa Brasileira");
connect("Cortex", "Arte Generativa Brasileira");
connect("ASCII Art", "Erthos Albino de Souza")
connect("Cortex", "Erthos Albino de Souza");
connect("Precursores", "Erthos Albino de Souza");

polaroid("https://revistavariavel.com/Banner-variavel.jpg", "Revista Variável, 2026", "Variável", 600, 300, 230, 3800);

connect("Variável", "Cortex");
connect("Variável", "Arte Generativa Brasileira");
connect("Variável", "Processing");


newidoc("https://compoetica.github.io/", "Compoética", 1020, 825, -1480, 3850);
connect("Variável", "Compoética");
connect("Processing", "Compoética");
connect("Futuro", "Compoética");
connect("Arte Generativa Brasileira", "Compoética");


center("Gráficos Programados");






