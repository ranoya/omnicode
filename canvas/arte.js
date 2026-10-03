setTempTheme("light");

polaroid("https://omnifolio.vercel.app/omnifiles/atari800_computer.png", "Computador Atari 800, 1979", "Atari 800", 350, 340, 300, 300);

newidoc("https://www.ranoya.com/Art/Singles/1980.html?bgcolor=417cd7&fcolor=FFFFFF", "Gráficos Programados", 600, 500, 600, 700);
connect("Atari 800", "Gráficos Programados");

polaroid("https://omnifolio.vercel.app/omnifiles/manual_Atari800_VideoEasel.jpg", "Video Easel, 1979", "Video Easel", 400, 550, -300, -200);
connect("Atari 800", "Video Easel");

polaroid("https://www.youtube.com/embed/mnznqaGYc-U?si=V1cubWhP-TyMbbI_", "Demonstração do Video Easel, 1979", "Demo", 670, 500, 230, -320);
connect("Demo", "Video Easel");
connect("Demo", "Atari 800");

polaroid("https://omnifolio.vercel.app/omnifiles/Sharp_HotBit_MSX_computer.jpg", "Computador MSX Sharp Hotbit HB-8000, 1985", "MSX", 500, 350, 1650, 450);

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

polaroid("https://omnifolio.vercel.app/omnifiles/ibm-pc-5150.webp", "Computador IBM PC XT, 1981", "PC-XT", 450, 380, -1800, 650);

newframe("https://namco.vercel.app/interfaces/?rom=tp3", "Turbo Pascal 3.0", 500, 360, -1600, 1200);
connect("Turbo Pascal 3.0", "PC-XT");

polaroid("https://www.youtube.com/embed/xFlPWVOdGzw?si=rutAgPaKpkF1FImc", "Turbo Basic", "Turbo Basic", 500, 360, -1000, 850);
connect("Turbo Basic", "PC-XT");


center("Gráficos Programados");






