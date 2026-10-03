setTempTheme("light");

polaroid("https://omnifolio.vercel.app/omnifiles/atari800_computer.png", "Computador Atari 800, 1979", "Atari 800", 350, 340, 300, 300);

newidoc("https://www.ranoya.com/Art/Singles/1980.html?bgcolor=417cd7&fcolor=FFFFFF", "Gráficos Programados", 600, 500, 600, 700);
connect("Atari 800", "Gráficos Programados");

polaroid("https://omnifolio.vercel.app/omnifiles/manual_Atari800_VideoEasel.jpg", "Video Easel, 1979", "Video Easel", 450, 550, -300, -400);
connect("Atari 800", "Video Easel");

polaroid("https://www.youtube.com/embed/mnznqaGYc-U?si=V1cubWhP-TyMbbI_", "Demonstração do Video Easel, 1979", "Demo", 670, 500, 230, -320);
connect("Demo", "Video Easel");
connect("Demo", "Atari 800");

polaroid("https://omnifolio.vercel.app/omnifiles/Sharp_HotBit_MSX_computer.jpg", "Computador MSX Sharp Hotbit HB-8000, 1985", "MSX", 500, 360, 1650, 150);

polaroid("https://omnifolio.vercel.app/omnifiles/computers_Apple2_cgi.png", "Computador Apple II, 1979", "Apple II", 500, 490, 1050, 50);

connect("Gráficos Programados", "MSX");
connect("Gráficos Programados", "Apple II");
connect("Gráficos Programados", "Atari 800");


center("Gráficos Programados");






