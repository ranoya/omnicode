devmode();
ungroovy();
setTransparentBackground();


//
      //
      // -- NOTEBOOKS ------------------------------------

      let countnotebooks = 1;

      window.notebook = function () {
        rundoc("Notebook " + countnotebooks, "opennotebook", {});
        countnotebooks++;
        center("Notebook " + (countnotebooks - 1));
      }

      window.opennotebook = function (id, dados) {
        var el = document.getElementById(id);
        el.innerHTML =
          `<iframe temp="https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" allowfullscreen style="width:100%;height:100%;border:none;display:block;"></iframe>`;
        window.registerLazyFrame(el.querySelector('iframe[temp]'));
      }

      //
      //
      // -- CODE EDITOR ----------------------------------

      let countcode = 1;
      let countruncode = 1;

      window.code = function () {
        run("Code " + countcode, "codeeditor", {
          contagem: countcode,
          runcontagem: countruncode,
        });
        center("Code " + (countcode - 1));
      };

      window.pcode = function () {
        permarun("Code " + countcode, "codeeditor", {
          contagem: countcode,
          runcontagem: countruncode,
        });
        center("Code " + (countcode - 1));
      };

      window.runcode = function (id, conta, deonde) {
        rundoc("Run " + countruncode, "codeout", {
          fromeditor: id,
          tituloeditor: conta,
          fromcodeeditor: deonde,
        });
      };

      if (
        typeof carregaace == "undefined" ||
        carregaace == null ||
        carregaace != "" ||
        carregaace == true
      ) {
        var carregaace = true;
        var codex = [];
        var linguacodex = [];

        let loader = document.createElement("script");
        loader.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ace.js";
        document.head.appendChild(loader);
        /*
        let loader2 = document.createElement("script");
        loader2.src =
          "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ext-language_tools.min.js";
        document.head.appendChild(loader2);
        */
      }

      let linguacodeeditor = function (ed, qual) {
        if (qual == "P5") {
          ace.edit(ed).setOptions({ mode: "ace/mode/javascript" });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        } else {
          ace.edit(ed).setOptions({ mode: "ace/mode/" + qual });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        }
      };

      var code_output_buffer = [];

      window.codeout = function (id, p) {
        console.log(id);
        console.log(p.fromeditor);
        console.log(linguacodex["editor_" + p.fromeditor]);

        let frame = `<iframe frameborder="0" style="display: block; border: 0; padding: 0; margin: 0; width: 100%; height: 100%;" id="ifr_${id}"</iframe>`;

        document.getElementById(id).innerHTML = frame;

        let code = ``;

        if (linguacodex["editor_" + p.fromeditor] == "html") {
          code = `<style>body,html { margin: 0; padding: 0; }</style>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "javascript") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style><scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "typescript") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style>
               <scr` +
            `ipt src='https://cdn.jsdelivr.net/npm/typescript@5.3.3'></sc` +
            `ript>
               <sc` +
            `ript defer src='https://cdn.jsdelivr.net/npm/text-typescript@1.3.0'></scr` +
            `ipt>
               <sc` +
            `ript type='text/typescript'>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "P5") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style>
            <scr` +
            `ipt src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></sc` +
            `ript>
            <scr` +
            `ipt>
            
            function resize() {
              setup();
              loop();
              draw();
            }`;
        }

        code += codex[p.fromeditor];

        if (linguacodex["editor_" + p.fromeditor] == "javascript") {
          code += `</scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "typescript") {
          code += `</scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "P5") {
          code += `</scr` + `ipt>`;
        }

        code_output_buffer[countruncode] = code;

        let myiframe = document.getElementById("ifr_" + id);
        let iframeDoc =
          myiframe.contentDocument || myiframe.contentWindow.document;

        let htmlContent = code;

        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();

        connect("Code " + p.fromcodeeditor, "Run " + countruncode);

        let janelaout = document.querySelector("[data-name='Run "+ countruncode +"']");

        let newaba = document.createElement('div');
        newaba.style = `position: absolute; top: 30px; right: -16px; width: 24px; box-sizing: border-box; display: flex; flex-direction: column align-items: center; gap: 6px; padding: 8px 3px; background: var(--win-header); border: 1px solid var(--win-border) border-right: none; border-radius: 0 6px 6px 0;`;
        newaba.id = "reloadrun" + countruncode;
        newaba.innerHTML = `<button class="win-close" title="Reload" onclick='reloadcode(${countruncode}, "${id}")'>↻</button>`;

        let ficapradepois = document.querySelector("[data-name='Run "+ countruncode +"'] .doc-paper"); 

        janelaout.insertBefore(newaba, ficapradepois);
        //janelaout.appendChild(newaba);

        /*
        let aba = document.querySelector("[data-name='Run "+ countruncode +"'] .doc-tab.win-draghandle");
        let conteudosemrefresh = aba.innerHTML;
        let novoconteudo = conteudosemrefresh + `<button class="win-close" title="Reload" onclick='reloadcode(${countruncode}, "${id}")'>⟳</button>`;
        aba.innerHTML = novoconteudo;
        */


        countruncode++;
      };

      window.reloadcode = function(n, id) {
        let frame = `<iframe frameborder="0" style="display: block; border: 0; padding: 0; margin: 0; width: 100%; height: 100%;" id="ifr_${id}"</iframe>`;

        document.getElementById(id).innerHTML = "";

        document.getElementById(id).innerHTML = frame;
        
        let myiframe = document.getElementById("ifr_" + id);
        let iframeDoc =
          myiframe.contentDocument || myiframe.contentWindow.document;

        let htmlContent = code_output_buffer[n];

        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();
      }

      window.codeeditor = function (id, p) {
        countcode++;

        let code = `
    
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

        .menu_code {
          width: calc(100% - 20px);
          height: calc(30px);
          border: 0;
          outline: 0 !important;
          font-size: 14px;
          line-height: 30px;
          margin-top: 0 !important;
          overflow-x: hidden;
          overflow-y: hidden;
          color: var(--text);
          display: flex;
          padding-left: 10px;
          padding-right: 10px;
          flex-direction: row;
          align-content: center;
          align-items: center;
          justify-content: flex-start;

        }

        .menu_code div {
          
          cursor: pointer;
          padding-left: 10px;
          padding-right: 10px;
        
        }

        .menu_code div:hover {
        
          background-color: var(--text);
          color: var(--win-header);

        }

        #editor_${id} {
                         width: calc(100% - 0px);
                         height: calc(100% - 44px);
                         border: 0;
                         outline: 0 !important;
                         background-color: #fffef5;
                         font-size: 14px;
                         line-height: 20px;
                         margin-top: 0 !important;
                         overflow-x: hidden;
        }

        .ace_gutter-layer {
           background-color: #fffef5;
        }

        /*
        .ace_tooltip {
          display: none !important;
        } */

        .codefull {
          width:100%;
          height:100%;
          border:none;
          display:block;
           
        }
        </style>

        

        <pre
        class="editor codefull"
        data-name="editor_${id}"
        id="editor_${id}"
        data-linguagem="html"
        ></pre>

        <div class="menu_code">
        
          <div onclick="runcode('${id}', ${p.runcontagem}, ${p.contagem})">Run</div><div onclick="linguacodeeditor('editor_${id}', 'html');">HTML</div><div onclick="linguacodeeditor('editor_${id}', 'javascript');">Javascript</div><div onclick="linguacodeeditor('editor_${id}', 'typescript');">Typescript</div><div onclick="linguacodeeditor('editor_${id}', 'P5');">P5</div>
          
        </div>

    `;

        document.getElementById(id).innerHTML = code;

        let thisace = ace.edit("editor_" + id);
        thisace.setTheme("ace/theme/Tomorrow");
        thisace.setKeyboardHandler("ace/keyboard/vscode");
        thisace.session.setMode("ace/mode/html");
        let acegeneralconfig = {
          theme: "ace/theme/Tomorrow",
          mode: "ace/mode/html",
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,
          showPrintMargin: false,
          highlightSelectedWord: true,
          selectionStyle: "text",
          highlightActiveLine: false,
          cursorStyle: "wide",
          wrapBehavioursEnabled: true,
          wrap: true,
          fontSize: "14px",
          fontFamily: "Fira Code",
          fadeFoldWidgets: true,
        };

        thisace.setOptions(acegeneralconfig);

        // Create a new ResizeObserver instance
        let codeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            console.log("rodou o observer..." + entry.target.id);
            ace.edit("editor_" + entry.target.id).resize();
          }
        });

        codeObserver.observe(document.getElementById(id));

        thisace.getSession().on("change", function () {
          codex[id] = thisace.getSession().getValue();
        });
      };

let getcssv = function (v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).slice(1);
}


window.menu = function () {
        rundoc("Menu", "openmenu", {}, 335, 541, 63, 68);
        setPan(0, 0);
}
      
window.noteinstruct = function () {
  newidoc(`https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/notebook/creativecode.html`, "Instruções");
  centerlastframe();
}

window.about = function () {
  newidoc(`https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/canvas/sobrecanvas.html`, "Sobre");
  centerlastframe();
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
  newidoc(`https://omnicode.vercel.app/clr?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--text")}&hgcolor=${getcssv("--muted")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit?gid=1757230275#gid=1757230275`, "Omnicode " + omnicocount);
  centerlastframe();
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
  newidoc(`https://omnicode.vercel.app/cll?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--text")}&hgcolor=${getcssv("--muted")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit?gid=1757230275#gid=1757230275`, "Omnicode " + omnicocount);
  centerlastframe();
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
                <div onclick="about()">Sobre o Canvas</div>
                <div onclick="code()">Editor de Código</div>
                <div onclick="notebook()">Notebook Computacional</div>
                <div onclick="noteinstruct()">Instruções de uso do Notebook</div>
                <div onclick="omnicode()">Omnicode Run</div>
                <div onclick="omnicodelive()">Omnicode Live</div>
            </div>
          
          
          
          
            `;
        
      }


svg(`
  <svg style="width: 100%; height: 100%;" viewBox="0 0 466 466" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="clock_barra_Segundos" transform-origin="center">
<path id="Subtract" d="M232.999 45C265.532 45 296.134 53.2643 322.822 67.8066L300.732 108.165C280.601 97.2188 257.526 91 232.999 91C208.53 91 185.507 97.1891 165.409 108.087L143.113 67.8408C169.816 53.2773 200.441 45 232.999 45Z" fill="var(--muted, #000000)"/>
</g>

<circle cx="233" cy="233" r="130" stroke="var(--text, #000000)" stroke-width="8"/>
<circle cx="233" cy="233" r="198" stroke="var(--text, #000000)" stroke-width="8"/>

<path d="M385 229H412V237H385V229Z" fill="var(--text, #000000)"/>
<path d="M55 229H82V237H55V229Z" fill="var(--text, #000000)"/>
<path d="M362.819 153.219L386.202 139.719L390.202 146.647L366.819 160.147L362.819 153.219Z" fill="var(--text, #000000)"/>
<path d="M77.0305 318.219L100.413 304.719L104.413 311.647L81.0305 325.147L77.0305 318.219Z" fill="var(--text, #000000)"/>
<path d="M305.719 98.6809L319.219 75.2983L326.147 79.2983L312.647 102.681L305.719 98.6809Z" fill="var(--text, #000000)"/>
<path d="M140.719 384.469L154.219 361.087L161.147 365.087L147.647 388.469L140.719 384.469Z" fill="var(--text, #000000)"/>
<path d="M229 80V53L237 53V80H229Z" fill="var(--text, #000000)"/>
<path d="M229 410V383H237V410H229Z" fill="var(--text, #000000)"/>
<path d="M153.219 102.181L139.719 78.7984L146.647 74.7984L160.147 98.1811L153.219 102.181Z" fill="var(--text, #000000)"/>
<path d="M318.219 387.97L304.719 364.587L311.647 360.587L325.147 383.97L318.219 387.97Z" fill="var(--text, #000000)"/>
<path d="M98.6809 159.28L75.2982 145.78L79.2982 138.852L102.681 152.352L98.6809 159.28Z" fill="var(--text, #000000)"/>
<path d="M384.469 324.28L361.087 310.78L365.087 303.852L388.469 317.352L384.469 324.28Z" fill="var(--text, #000000)"/>

<g id="clock_barra_Minutos" transform-origin="center">
<circle id="Ellipse 212" cx="233" cy="232" r="28" transform="rotate(-90 233 232)" stroke="var(--text, #000000)" stroke-width="8"/>
<rect id="Rectangle 1242" x="229" y="194" width="108" height="8" transform="rotate(-90 229 194)" fill="var(--accent, #000000)"/>
</g>
<g id="clock_barra_Horas" transform-origin="center">
<circle id="Ellipse 212_2" cx="233" cy="232" r="28" transform="rotate(-90 233 232)" stroke="var(--text, #000000)" stroke-width="8"/>
<rect id="Rectangle 1242_2" x="229" y="194" width="75" height="8" transform="rotate(-90 229 194)" fill="var(--accent, #000000)"/>
</g>

</svg>`
  
, "Relógio");

window.moverelogio = function () {

  setInterval(function () {

  let agora = new Date();
  let segundos = agora.getSeconds();
  let minutos = agora.getMinutes();
  let horas = agora.getHours();

  // Cálculo dos ângulos (360 graus / total de unidades)
  let angulo_sec = (segundos / 60) * 360;
  let angulo_min = (minutos / 60) * 360;
  let angulo_hor = ((horas % 12) / 12) * 360 + (minutos / 60) * 30; // Inclui o deslocamento dos minutos na hora

  document.getElementById("clock_barra_Horas").style.transform = "rotate(" + angulo_hor + "deg)";
  document.getElementById("clock_barra_Segundos").style.transform = "rotate(" + angulo_sec + "deg)";
  document.getElementById("clock_barra_Minutos").style.transform = "rotate(" + angulo_min + "deg)";

  }, 1000);


}

moverelogio();

window.pjd = function () {
  


newidoc("https://omnidocs.vercel.app/livros/capas/javascript", "Capa", 446, 605, 72, 878);
newidoc("https://booklines.vercel.app/livros/javascript/js-programar.html?blink=Aprender%20a%20programar%20porqu%C3%AA?", "Progamar?", 822, 988, 615, 878);
newidoc("https://booklines.vercel.app/livros/javascript/js-vibe.html?blink=O%20programar%20nos%20tempos%20do%20Vibe%20Coding", "Vibe Coding", 822, 988, 1499, 876);
newidoc("https://slidelines.vercel.app/timelineh/?s=1&allblocks=true&startvisible=true&allowverticalscroll=true&timeheight=100&followbg=true&theme=https://slidelines.vercel.app/styles/subobservabletextsfixed.css&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=1908790630", "Aplicações", 1488, 982, 2420, 877);
newidoc("https://booklines.vercel.app/livros/javascript/js-comecando.html?blink=Primeiros%20passos", "Iniciando", 823, 987, 615, 1936);
newidoc("https://booklines.vercel.app/livros/javascript/js-variaveis.html?blink=Variáveis%20e%20constantes", "Variáveis", 822, 991, 1502, 1934);
newidoc("https://booklines.vercel.app/livros/javascript/js-operacoes.html?blink=Operações%20aritméticas%20e%20lógicas", "Operações", 819, 991, 2421, 1934);
newidoc("https://booklines.vercel.app/livros/javascript/js-condicionais.html?blink=Condicionais", "Condicionais", 821, 994, 3311, 1933);
newidoc("https://booklines.vercel.app/livros/javascript/js-loops.html?blink=Loops", "Loops", 823, 989, 617, 2990);
newidoc("https://booklines.vercel.app/livros/javascript/js-funcoes.html?blink=Funções", "Funções", 826, 989, 1506, 2989);
newidoc("https://booklines.vercel.app/livros/javascript/js-arrays.html?blink=Arrays", "Arrays", 821, 989, 2423, 2987);
newidoc("https://booklines.vercel.app/livros/javascript/js-arrayfunctions.html?blink=Funções%20das%20Arrays", "Funções das Arrays", 824, 987, 3312, 2988);
newidoc("https://booklines.vercel.app/livros/javascript/js-dom.html?blink=Document%20Object%20Model", "DOM", 825, 986, 620, 4034);
newidoc("https://booklines.vercel.app/livros/javascript/js-svg.html?blink=SVG", "SVG", 825, 982, 1511, 4035);
newidoc("https://booklines.vercel.app/livros/javascript/js-datavis.html?blink=Dataviz", "Dataviz", 823, 987, 2427, 4034);
newidoc("https://booklines.vercel.app/livros/javascript/js-objetos.html?blink=Objetos", "Objetos", 823, 987, 625, 5079);
newidoc("https://booklines.vercel.app/livros/javascript/js-poo0.html?blink=Programação%20Orientada%20a%20Objetos", "POO", 826, 989, 1514, 5078);
newidoc("https://slidelines.vercel.app/level/?s=start&filtra=observable&allblocks=true&timeheight=100&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1355216689#gid=1355216689&theme=https://slidelines.vercel.app/styles/leveloptmizednormal.css", "Code Tour POO", 1283, 987, 2428, 5078);
newidoc("https://omnicode.vercel.app/?preview=100&nopoe=true&minial=true&nostatus=true&noconsole=true&bgcolor=ffffff&gutcolor=fffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/arte_quadrados.js", "Mandala 1", 388, 368, -538, 878);
newidoc("https://omnicode.vercel.app/?preview=100&nopoe=true&minial=true&nostatus=true&noconsole=true&bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/exemplo-livroJSD_SE.js", "Mandala 2", 392, 370, -536, 1326);
newidoc("https://omnicode.vercel.app/?preview=100&nopoe=true&minial=true&nostatus=true&noconsole=true&bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/bass.js", "Mandala 3", 397, 368, 76, 1634);
connect("Mandala 1", "Capa");
connect("Mandala 2", "Capa");
  connect("Mandala 3", "Capa");
  
  connect("Objetos", "POO");
  connect("Code Tour POO", "POO");
  connect("SVG", "Dataviz");

  connect("Arrays", "Funções das Arrays");

  newframe("https://omnicode.vercel.app/cll/?bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/arte_quadrados.js", "Code Mandala 1", 1033, 869, -1775, 876);
  connect("Code Mandala 1", "Mandala 1");
  newframe("https://omnicode.vercel.app/cll/?bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/exemplo-livroJSD_SE.js", "Code Mandala 2", 1039, 770, -1316, 1859);
  connect("Code Mandala 2", "Mandala 2");
  newframe("https://omnicode.vercel.app/cll/?bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/bass.js", "Code Mandala 3", 1039, 766, -528, 2758);
  connect("Code Mandala 3", "Mandala 3");

  center("Capa");
}

let jupts = 1;

window.jupyter = function () {
  newidoc("https://jupyter.org/try-jupyter/lab/?path=notebooks%2FIntro.ipynb", "Jupyter " + jupts);
  jupts++;
}

menu();

/*

https://omnicode.vercel.app/clr?theme=gruvbox&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--panel-border")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--muted")}&hgcolor=${getcssv("--win-header")}

*/


