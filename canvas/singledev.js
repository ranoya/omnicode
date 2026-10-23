devmode();
ungroovy();

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
      
      window.codeconsole = function (id, dados) {
        
        connect("Run " + dados.numero, "Output " + dados.numero);
        document.getElementById(id).innerHTML = `
                
        <div id="consolerunner_${dados.numero}" style="font-family: monospace; font-size: 14px; line-height: 16px; padding: 15px; width: 100%; height: 100%; background-color: ${window.getComputedStyle(document.body).getPropertyValue('--bg')}; color: ${window.getComputedStyle(document.body).getPropertyValue('--text')};"></div>`;
        
      }
      
      window.printconsole = function (n, msg) {
        if (typeof document.getElementById("consolerunner_" + n) != 'undefined' && document.getElementById("consolerunner_" + n) != null && document.getElementById("consolerunner_" + n) != '') {
          
          let atual = document.getElementById("consolerunner_" + n).innerHTML;
          let mensagemtotal = atual + "<br>" + msg;
          document.getElementById("consolerunner_" + n).innerHTML = mensagemtotal;
           
        }
        
      }

window.runcode = function (id, conta, deonde) {
        
  console.log("id>" + id + "  conta>" + conta + " deonde>" + deonde);
        
        let janela = countruncode;
        rundoc("Run " + countruncode, "codeout", {
          fromeditor: id,
          tituloeditor: conta,
          fromcodeeditor: deonde,
        });
  
        run("Output " + janela, "codeconsole", {origem: "Run " + janela, numero: janela})


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
        } if (qual == "canvas") {
          ace.edit(ed).setOptions({ mode: "ace/mode/javascript" });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        } else {
          ace.edit(ed).setOptions({ mode: "ace/mode/" + qual });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        }
      };
      

      let svgcanvases = 1;

      window.createsvgcanvas = function (w, h) {
              
        let wi = 500;
        let hei = 500;

        if (typeof w != 'undefined' && w != null && w != '') {
          wi = w;
        }

        if (typeof h != 'undefined' && h != null && h != '') {
          hei = h;
        }
        
        
        svg(`<svg id='svgcanvases_${svgcanvases}' viewBox='0 0 ${wi} ${hei}' style="width: 100%; height: 100%; border: 0; padding: 0; margin: 0;"></svg>`, "SVG Canvas " + svgcanvases, wi, hei);
        
        let este = svgcanvases;
        svgcanvases++;

        return document.getElementById("svgcanvases_" + este);
  
        
      }

      var code_output_buffer = [];

      window.codeout = function (id, p) {
        console.log(id);
        console.log(p.fromeditor);
        console.log(linguacodex["editor_" + p.fromeditor]);

        let frame = `<iframe frameborder="0" style="display: block; border: 0; padding: 0; margin: 0; width: 100%; height: 100%;" id="ifr_${id}"</iframe>`;

        document.getElementById(id).innerHTML = frame;

        let code = ``;

        if (linguacodex["editor_" + p.fromeditor] == "html") {
          code = `<style>body,html { margin: 0; padding: 0; }</style><scri` + `pt>
          window.onerror = function myErrorHandler(err, url, line) {
          let msg = 'Line: ' + line + '<br>' + err + '<br>' 
          parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');
          return false;
          }
          console.log = function (msg) {
          parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');        
          }
          </scri` + `pt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "javascript") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style><scri` + `pt>
             window.onerror = function myErrorHandler(err, url, line) {
              let msg = 'Line: ' + line + '<br>' + err + '<br>' 
              parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');
              return false;
              }
              console.log = function (msg) {
              parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');        
              }
             </scr` + `ipt><scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "typescript") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style>
               <scr` +
            `ipt src='https://cdn.jsdelivr.net/npm/typescript@5.3.3'></sc` +
            `ript>
               <sc` +
            `ript defer src='https://cdn.jsdelivr.net/npm/text-typescript@1.3.0'></scr` +
          `ipt><scri` + `pt>
            window.onerror = function myErrorHandler(err, url, line) {
            let msg = 'Line: ' + line + '<br>' + err + '<br>' 
            parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');
            return false;
            }
            console.log = function (msg) {
            parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');        
            }
            </scr` + `ipt>
               <sc` +
            `ript type='text/typescript'>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "P5") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style>
            <scr` + `ipt>
              window.onerror = function myErrorHandler(err, url, line) {
              let msg = 'Line: ' + line + '<br>' + err + '<br>' 
              parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');
              return false;
              }
              console.log = function (msg) {
              parent.postMessage('printconsole(${countruncode}, "' + msg + '")' ,'*');        
              }
            </scr` + `ipt>
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

        if (linguacodex["editor_" + p.fromeditor] != "canvas") {


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

        } else {

          eval(code);

        }

        
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
        
          <div onclick="runcode('${id}', ${p.runcontagem}, ${p.contagem})">Run</div><div onclick="linguacodeeditor('editor_${id}', 'html');">HTML</div><div onclick="linguacodeeditor('editor_${id}', 'javascript');">Javascript</div><div onclick="linguacodeeditor('editor_${id}', 'typescript');">Typescript</div><div onclick="linguacodeeditor('editor_${id}', 'P5');">P5</div><div onclick="linguacodeeditor('editor_${id}', 'canvas');">SVG Canvas</div>
          
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
        rundoc("Menu", "openmenu", {}, 335, 556, 63, 68);
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

window.notedb = function () {
  newidoc(`https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/canvas/sql.html`, "Instruções");
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
                <div onclick="jupyter()">Jupyter Notebook</div>
                <div onclick="omnicode()">Omnicode Run</div>
                <div onclick="omnicodelive()">Omnicode Live</div>
                <div onclick="notedb()">Instruções de uso de SQL Query</div>
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
  center("Jupyter " + jupts);
  jupts++;
}

let datasubquery = [];

window.openquery = function (elem_id, extras) {

  let googlesheet = extras.sheet;
  let select = extras.query;
  let indice = extras.indice;

  if (typeof extras.sheet != 'undefined' && extras.sheet != null && extras.sheet != '') {

      gsdata(googlesheet, function (dados) {
      
      let arr = sqlquery(dados, select);
      datasubquery[elem_id] = arr;

      let colunas = Object.keys(arr[0]);

      let constroigrid = `grid-template-columns: [init]`;
      for (let i = 0; i < colunas.length; i++) {
        constroigrid += ` 1fr`;
      }
      constroigrid += ` [fim];`

      let constroihtml = `
      
      <style>

          .tabelasql {

            width: 100%;
            background-color: var(--bg, #FFFFFF);
            color: var(--text, #000000);
            font-size: 14px;
            line-height: 16px;
            padding: 15px;
            gap: 0px 0px;
            display: grid;
            padding-top: 0 !important;
            padding-bottom: 0;
            height: calc(100% - 40px);
            overflow-y: scroll;

          }

          .tabelaover {
            background-color: var(--bg, #FFFFFF);
            position: sticky;
            grid-column: init/fim;
            padding: 0 !important;
            height: 17px !important;
            top: -1px;
          }

          .tabelasql div {
          
            padding-left: 7px;
            padding-right: 12px;
            text-align: left;
            padding-top: 10px;
            padding-bottom: 10px;

              
          }

          .tabelasepara {
            padding: 0 !important;
            height: 1px !important;
            background-color: var(--text, #000000);
            grid-column: init/fim;
          }

          .tablehead {

            position: sticky;
            top: 15px;
            background-color: var(--grid-dot, #c7c7d1);
            font-family: monospace;
          
          }

          .separahead {

            position: sticky;
            top: 51px;

          }

      </style>

      <div class="tabelasql" style="${constroigrid}"><div class='tabelaover'></div>
      
      `;


      for (let key in arr[0]) {

        constroihtml += `<div class='tablehead'><b>${key}</b></div>`;

      }

      constroihtml += `<div class="tabelasepara separahead"></div>`;

      for (let i = 0; i < arr.length; i++) {

        for (let datakey in arr[0]) {

          constroihtml += `<div>${arr[i][datakey]}</div>`;

        }

        constroihtml += `<div class="tabelasepara"></div>`;

      }

      constroihtml += `</div>
                      <input placeholder="SQL Query" id="subqueryrunner_${elem_id}" type='text' style='outline: none; border 0; height: 40px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />
                      `;

      document.getElementById(elem_id).innerHTML = constroihtml;
      document.getElementById(elem_id).style.backgroundColor = "var(--bg, #FFFFFF)";

      document.getElementById("subqueryrunner_" + elem_id).addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          
          // AQUI
          internalsql(elem_id, document.getElementById("subqueryrunner_" + elem_id).value, "Query " + indice);

        }
      });

    });
     
  } else {


      let arr = sqlquery(datasubquery[extras.dataid], select);
      datasubquery[elem_id] = arr;

      let colunas = Object.keys(arr[0]);

      let constroigrid = `grid-template-columns: [init]`;
      for (let i = 0; i < colunas.length; i++) {
        constroigrid += ` 1fr`;
      }
      constroigrid += ` [fim];`

      let constroihtml = `
      
      <style>

          .tabelasql {

            width: 100%;
            background-color: var(--bg, #FFFFFF);
            color: var(--text, #000000);
            font-size: 14px;
            line-height: 16px;
            padding: 15px;
            gap: 0px 0px;
            display: grid;
            padding-top: 0 !important;
            padding-bottom: 0;
            height: calc(100% - 40px);
            overflow-y: scroll;

          }

          .tabelaover {
            background-color: var(--bg, #FFFFFF);
            position: sticky;
            grid-column: init/fim;
            padding: 0 !important;
            height: 17px !important;
            top: -1px;
          }

          .tabelasql div {
          
            padding-left: 7px;
            padding-right: 12px;
            text-align: left;
            padding-top: 10px;
            padding-bottom: 10px;

              
          }

          .tabelasepara {
            padding: 0 !important;
            height: 1px !important;
            background-color: var(--text, #000000);
            grid-column: init/fim;
          }

          .tablehead {

            position: sticky;
            top: 15px;
            background-color: var(--grid-dot, #c7c7d1);
            font-family: monospace;
          
          }

          .separahead {

            position: sticky;
            top: 51px;

          }

      </style>

      <div class="tabelasql" style="${constroigrid}"><div class='tabelaover'></div>
      
      `;


      for (let key in arr[0]) {

        constroihtml += `<div class='tablehead'><b>${key}</b></div>`;

      }

      constroihtml += `<div class="tabelasepara separahead"></div>`;

      for (let i = 0; i < arr.length; i++) {

        for (let datakey in arr[0]) {

          constroihtml += `<div>${arr[i][datakey]}</div>`;

        }

        constroihtml += `<div class="tabelasepara"></div>`;

      }

      constroihtml += `</div>
                      <input placeholder="SQL Query" id="subqueryrunner_${elem_id}" type='text' style='outline: none; border 0; height: 40px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />
                      `;

      document.getElementById(elem_id).innerHTML = constroihtml;
      document.getElementById(elem_id).style.backgroundColor = "var(--bg, #FFFFFF)";

      document.getElementById("subqueryrunner_" + elem_id).addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          
          // AQUI
          internalsql(elem_id, document.getElementById("subqueryrunner_" + elem_id).value, "Query " + indice)

        }
      });

  }
  
  

  

}

let querywindows = 1;

window.sql = function (googlesheet, select, conecta) {
  rundoc("Query " + querywindows, "openquery", { "sheet": googlesheet, "query": select, "indice": querywindows });
  if (typeof conecta != "undefined" && conecta != null && conecta != "") {
    connect("Query " + querywindows, conecta);
  }
  querywindows++;

}

window.internalsql = function (id, select, conecta) {
  rundoc("Query " + querywindows, "openquery", { "dataid": id, "query": select, "indice": querywindows });
  if (typeof conecta != "undefined" && conecta != null && conecta != "") {
    connect("Query " + querywindows, conecta);
  }
  querywindows++;

}

let datasetwindows = 1;
let dataseturls = [];

window.opendataset = function (id, p) {
  
  let preview = p.googlesheet.replace("edit", "htmlview");
  let codigohtml = `<iframe frameborder='0' src='${preview}' style='width: calc(100%); padding: 15px; height: calc(100% - 45px);'></iframe><input placeholder="SQL Query" id="queryrunner${p.indice}" type='text' style='outline: none; border 0; height: 41px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />`;
  
  document.getElementById(id).innerHTML = codigohtml;

  document.getElementById("queryrunner" + p.indice).addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        sql(dataseturls[p.indice], document.getElementById("queryrunner" + p.indice).value, "Dataset " + p.indice);

      }
    });
}

window.dataset = function (u) {
  run("Dataset " + datasetwindows, "opendataset", { googlesheet: u, indice: datasetwindows});
  dataseturls[datasetwindows] = u;
  datasetwindows++;
}

window.regex = function () {
    newidoc('https://regexr.com/', 'Regexr');
    center("Regexr");

}

// Legacy

window.applelogo = function () {
  newidoc("https://apple2ts.com/?appmode=embed&crtdistort=off&color=green&scanlines=off&ghosting=off&#https://namco.vercel.app/a2/disk/Apple_LOGO.dsk", "Logo Apple");
  connect("Legacy", "Logo Apple");
  centerlastframe();
}

window.msxlogo = function () {
  newidoc("https://namco.vercel.app/sx/?ROM=logo.rom", "Logo MSX");
  connect("Legacy", "Logo MSX");
  centerlastframe();
}

window.applebasic = function () {
  newidoc("https://apple2ts.com/?appmode=embed&crtdistort=off&color=green&scanlines=on&ghosting=off&text=LIST", "BASIC Apple");
  connect("Legacy", "BASIC Apple");
  centerlastframe();
}

window.msxbasic = function () {
  newidoc("https://namco.vercel.app/sx/", "BASIC MSX");
  connect("Legacy", "BASIC MSX");
  centerlastframe();
}


window.gwbasic = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=gwb", "BASIC Dos");
  connect("Legacy", "BASIC Dos");
  centerlastframe();
}


window.turbobasic = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tb", "Turbo BASIC");
  connect("Legacy", "Turbo BASIC");
  centerlastframe();
}




window.qbasic45 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qb45", "Quick BASIC 4.5");
  connect("Legacy", "Quick BASIC 4.5");
  centerlastframe();
}

window.qbasic71 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qbx71", "Quick BASIC 7.1");
  connect("Legacy", "Quick BASIC 7.1");
  centerlastframe();
}

window.vbasicdos = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=vb", "DOS Visual BASIC 2.0");
  connect("Legacy", "DOS Visual BASIC 2.0");
  centerlastframe();
}

window.vbasic = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=mvb1", "Visual BASIC 1.0");
  connect("Legacy", "Visual BASIC 1.0");
  centerlastframe();
}




window.pascal1 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tp1", "Turbo Pascal 1.0");
  connect("Legacy", "Turbo Pascal 1.0");
  centerlastframe();
}

window.pascal3 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tp3", "Turbo Pascal 3.0");
  connect("Legacy", "Turbo Pascal 3.0");
  centerlastframe();
}

window.pascal5 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=btp5", "Turbo Pascal 5.0");
  connect("Legacy", "Turbo Pascal 5.0");
  centerlastframe();
}

window.pascal7 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tp7", "Turbo Pascal 7.0");
  connect("Legacy", "Turbo Pascal 7.0");
  centerlastframe();
}

window.pascalw1 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tpw", "Turbo Pascal Windows 1.5");
  connect("Legacy", "Turbo Pascal Windows 1.5");
  centerlastframe();
}

window.pascalw7 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=bp7ofw", "Turbo Pascal Windows 7.0");
  connect("Legacy", "Turbo Pascal Windows 7.0");
  centerlastframe();
}

window.qpascal = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qp", "Microsoft Quick Pascal 1.0");
  connect("Legacy", "Microsoft Quick Pascal 1.0");
  centerlastframe();
}

window.msqc = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qc", "Microsoft Quick C");
  connect("Legacy", "Microsoft Quick C");
  centerlastframe();
}

window.btc = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qp", "Borland Turbo C++ 3.0");
  connect("Legacy", "Borland Turbo C++ 3.0");
  centerlastframe();
}

window.delphi = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=delphi", "Borland Delphi");
  connect("Legacy", "Borland Delphi");
  centerlastframe();
}


window.wmath = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=mtmtk", "Wolfram Mathematica");
  connect("Legacy", "Wolfram Mathematica");
  centerlastframe();
}

window.db3 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=atdb", "dBase III Plus");
  connect("Legacy", "dBase III Plus");
  centerlastframe();
}

window.db4 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=BorDB4", "dBase IV");
  connect("Legacy", "dBase IV");
  centerlastframe();
}

window.foxpro = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=FPx2", "FoxPro 2.0");
  connect("Legacy", "FoxPro 2.0");
  centerlastframe();
}

window.foxprow = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=fpw26", "Windows FoxPro 2.6");
  connect("Legacy", "Windows FoxPro 2.6");
  centerlastframe();
}

window.paradox = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=PDOX45", "Paradox 4.5");
  connect("Legacy", "Paradox 4.5");
  centerlastframe();
}

window.paradoxw = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=bpadoxw", "Paradox for Windows");
  connect("Legacy", "Paradox for Windows");
  centerlastframe();
}

window.paradoxw45 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=pdox45w", "Paradox 4.5 for Windows");
  connect("Legacy", "Paradox 4.5 for Windows");
  centerlastframe();
}


window.lotus = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=l123", "Lotus 1-2-3");
  centerlastframe();
}

window.visicalc = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=vc", "Visicalc");
  centerlastframe();
}

window.multiplan = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=mp", "Multiplan");
  centerlastframe();
}



window.legacy = function () {
        rundoc("Legacy", "openlegacymenu", {}, 335, 556, 563, 68);
        setPan(0, 0);
}

window.openlegacymenu = function (id, dados) {
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
                <div onclick="applelogo()">Apple II Logo</div>
                <div onclick="msxlogo()">MSX Logo</div>
                <div onclick="applebasic()">Apple II BASIC</div>
                <div onclick="msxbasic()">MSX BASIC</div>
                <div onclick="gwbasic()">DOS GW-BASIC</div>
                <div onclick="turbobasic()">DOS Borland Turbo BASIC</div>
                <div onclick="qbasic45()">DOS Microsoft Quick BASIC 4.5</div>
                <div onclick="qbasic71()">DOS Microsoft Quick BASIC 7.1</div>
                <div onclick="vbasicdos()">DOS Visual BASIC 2.0</div>
                <div onclick="vbasic()">Windows Visual BASIC 1.0</div>
                <div onclick="pascal1()">DOS Borland Turbo Pascal 1.0</div>
                <div onclick="pascal3()">DOS Borland Turbo Pascal 3.0</div>
                <div onclick="pascal5()">DOS Borland Turbo Pascal 5.0</div>
                <div onclick="pascal7()">DOS Borland Turbo Pascal 7.0</div>
                <div onclick="pascalw1()">Windows Turbo Pascal 1.5</div>
                <div onclick="pascalw7()">Windows Turbo Pascal 7.0</div>
                <div onclick="qpascal()">DOS Microsoft Quick Pascal 1.0</div>
                <div onclick="msqc()">DOS Microsoft Quick C</div>
                <div onclick="btc()">DOS Borland Turbo C++ 3.0</div>
                <div onclick="delphi()">Windows Borland Delphi 1.0</div>
                <div onclick="wmath()">Wolfram Mathematica</div>
                <div onclick="db3()">dBase III Plus</div>
                <div onclick="db4()">dBase IV</div>
                <div onclick="foxpro()">DOS Microsoft FoxPro 2.0</div>
                <div onclick="foxprow()">Windows Microsof FoxPro 2.6</div>
                <div onclick="paradox()">DOS Borland Paradox 4.5</div>
                <div onclick="paradoxw()">Borland Paradox for Windows</div>
                <div onclick="paradoxw45()">Borland Paradox 4.5 for Windows</div>
            </div>

            `;
        
      }




menu();


/*

https://omnicode.vercel.app/clr?theme=gruvbox&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--panel-border")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--muted")}&hgcolor=${getcssv("--win-header")}

*/


