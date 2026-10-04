devmode();


let getcssv = function (v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).slice(1);
}


window.menu = function () {
        rundoc("Menu", "openmenu", {}, 335, 541, 11, 7);
        setPan(0, 0);
}

window.noteinstruct = function () {
        newidoc(`https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/notebook/creativecode.html`, "Instruções");
}

let omnicocount = 0;

window.omnicode = function () {
    let tema = localStorage.getItem('infcanvas:theme');
    if (localStorage.getItem('infcanvas:theme') == "gruvbox-dark") {
        tema = "gruvbox";
    }
    if (localStorage.getItem('infcanvas:theme') == "light") {
        tema = "dawn";
    }
    if (localStorage.getItem('infcanvas:theme') == "nord") {
        tema = "nord_dark";
    }
    omnicocount++;
    newidoc(`https://omnicode.vercel.app/clr?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--muted")}&hgcolor=${getcssv("--text")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=1860118124`, "Omnicode " + omnicocount);
}

window.omnicodelive = function () {
    let tema = localStorage.getItem('infcanvas:theme');
    if (localStorage.getItem('infcanvas:theme') == "gruvbox-dark") {
        tema = "gruvbox";
    }
    if (localStorage.getItem('infcanvas:theme') == "light") {
        tema = "dawn";
    }
    if (localStorage.getItem('infcanvas:theme') == "nord") {
        tema = "nord_dark";
    }
    omnicocount++;
    newidoc(`https://omnicode.vercel.app/cll?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--muted")}&hgcolor=${getcssv("--text")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=1860118124`, "Omnicode " + omnicocount);
}



window.openmenu = function (id, dados) {
        var el = document.getElementById(id);
        el.innerHTML =
            `
            <style>

                .menu_menuopt {
                
                display: flex;
                flex-direction: column;
                align-items: start;
                
                }

                .menu_menuopt div {

                cursor: pointer;
                font-size: 18px;
                line-height: 68px;
                height: auto;
                width: 100%;
                color: var(--text);
                background-color: var(--panel-border);
                padding-left: 20px;
                padding-right: 20px;
                border-top: 1px dotted var(--muted);
                }

                .menu_menuopt div:hover {
                background-color: var(--win-header);


                }

            </style>

            <div class="menu_menuopt">
                <div onclick="code()">Editor de Código</div>
                <div onclick="notebook()">Notebook Computacional</div>
                <div onclick="noteinstruct()">Instruções de uso do Notebook</div>
                <div onclick="omnicode()">Omnicode Run</div>
                <div onclick="omnicodelive()">Omnicode Live</div>
            </div>
          
          
          
          
            `;
        
      }


menu();


/*

https://omnicode.vercel.app/clr?theme=gruvbox&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--panel-border")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--muted")}&hgcolor=${getcssv("--win-header")}

*/


