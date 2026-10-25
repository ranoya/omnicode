setTempTheme("gruvbox-dark");
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

      window.code = function (u) {
        
        if (typeof u != 'undefined' && u != null && u != '') {

          run("Code " + countcode, "codeeditor", {
            contagem: countcode,
            runcontagem: countruncode,
            loadcode: u
          });
                
        } else {
              
          run("Code " + countcode, "codeeditor", {
            contagem: countcode,
            runcontagem: countruncode,
          });
               
        }

        center("Code " + (countcode - 1));
      };

      window.pcode = function (u) {
              
        if (typeof u != 'undefined' && u != null && u != '') {
          permarun("Code " + countcode, "codeeditor", {
                contagem: countcode,
                runcontagem: countruncode,
                loadcode: u
          });

        } else {
          permarun("Code " + countcode, "codeeditor", {
                contagem: countcode,
                runcontagem: countruncode,
          });

        }
        
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
              
        if (linguacodex["editor_" + id] != "canvas") {

          let janela = countruncode;
              rundoc("Run " + countruncode, "codeout", {
                fromeditor: id,
                tituloeditor: conta,
                fromcodeeditor: deonde,
              });
        
              run("Output " + janela, "codeconsole", {origem: "Run " + janela, numero: janela})
                
        } else {

          eval(codex[id]);

        }
        
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
      }

      let linguacodeeditor = function (ed, qual) {
        if (qual == "P5") {
          ace.edit(ed).setOptions({ mode: "ace/mode/javascript" });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        } else if (qual == "canvas") {
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
      
      window.createpermasvgcanvas = function (w, h) {
              
        let wi = 500;
        let hei = 500;

        if (typeof w != 'undefined' && w != null && w != '') {
          wi = w;
        }

        if (typeof h != 'undefined' && h != null && h != '') {
          hei = h;
        }

        if (typeof document.getElementById("svgcanvases_0") != 'undefined' && document.getElementById("svgcanvases_0") != null && document.getElementById("svgcanvases_0") != '') {
           svg(`<svg id='svgcanvases_0' viewBox='0 0 ${wi} ${hei}' style="width: 100%; height: 100%; border: 0; padding: 0; margin: 0;"></svg>`, "SVG Canvas", wi, hei);
        } else {

          setPosition("SVG Canvas", wi, hei);
        }
        
        
        return document.getElementById("svgcanvases_0");
  
        
      }

      var code_output_buffer = [];

      window.codeout = function (id, p) {
        //console.log(id);
        //console.log(p.fromeditor);
        //console.log(linguacodex["editor_" + p.fromeditor]);

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
          countruncode++;

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

        let tema = "tomorrow";
        if (localStorage.getItem('infcanvas:theme') == "dracula") {
          tema = "dracula";
        }

        if (localStorage.getItem('infcanvas:theme') == "light") {
          tema = "tomorrow";
        }

        if (localStorage.getItem('infcanvas:theme') == "nord") {
          tema = "nord_dark";
        }

        if (localStorage.getItem('infcanvas:theme') == "monokai") {
          tema = "monokai";
        }

        if (localStorage.getItem('infcanvas:theme') == "gruvbox-dark") {
          tema = "gruvbox";
        }

        if (localStorage.getItem('infcanvas:theme') == "solarized-light") {
          tema = "solarized_light";
        }

        if (localStorage.getItem('infcanvas:theme') == "github-dark") {
          tema = "dracula";
        }

        if (localStorage.getItem('infcanvas:theme') == "one-dark") {
          tema = "one_dark";
        }

        if (localStorage.getItem('infcanvas:theme') == "xcode") {
          tema = "xcode";
        }

        if (localStorage.getItem('infcanvas:theme') == "tomorrow-night-blue") {
          tema = "tomorrow_night_blue";
        }

        if (localStorage.getItem('infcanvas:theme') == "rose-pine-moon" || localStorage.getItem('infcanvas:theme') == "rose-pine") {
          tema = "cobalt";
        }

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
                         height: calc(100% - 30px);
                         border: 0;
                         outline: 0 !important;
                         
                         font-size: 14px;
                         line-height: 20px;
                         margin-top: 0 !important;
                         overflow-x: hidden;
                         margin-bottom: 0 !important;
        }

        

        
        .ace_tooltip {
          display: none !important;
        } 

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
        
          <div onclick="runcode('${id}', ${p.runcontagem}, ${p.contagem})">Run</div>
          <div onclick="abrirArquivo('${id}')">Load</div><div onclick="salvarArquivo('${id}')">Save</div><div onclick="linguacodeeditor('editor_${id}', 'html');">HTML</div><div onclick="linguacodeeditor('editor_${id}', 'javascript');">Javascript</div><div onclick="linguacodeeditor('editor_${id}', 'typescript');">Typescript</div><div onclick="linguacodeeditor('editor_${id}', 'P5');">P5</div><div onclick="linguacodeeditor('editor_${id}', 'canvas');">Canvas</div>
          
        </div>

    `;

        document.getElementById(id).innerHTML = code;

        let thisace = ace.edit("editor_" + id);
        thisace.setTheme("ace/theme/" + tema);
        thisace.setKeyboardHandler("ace/keyboard/vscode");
        thisace.session.setMode("ace/mode/html");
        let acegeneralconfig = {
          theme: "ace/theme/" + tema,
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

        if (typeof p.loadcode != 'undefined' && p.loadcode != null && p.loadcode != '') {
          
          fetch(p.loadcode).then(function(response) {
              return response.text();
          }).then(function(data) {
            thisace.setValue(data);
            codex[id] = thisace.getSession().getValue();
          });
           
        }

        

        
       /*
        window.addEventListener("keydown", function(event) {
          // Verifica se a tecla Ctrl (ou Meta/Cmd no Mac) e a letra 'i' (maiúscula ou minúscula) foram acionadas
          if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "i") {
            event.preventDefault(); // Evita o comportamento padrão do navegador (se houver)
            event.cancelable = true;
            event.stopPropagation();
            event.returnValue = false;
            abrirArquivo(id);
          }
        });

        window.addEventListener("keydown", function(event) {
          // Verifica se a tecla Ctrl (ou Meta/Cmd no Mac) e a letra 's' (maiúscula ou minúscula) foram acionadas
          if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
            event.preventDefault(); // Evita o comportamento padrão do navegador (se houver)
            event.cancelable = true;
            event.stopPropagation();
            event.returnValue = false;
            salvarArquivo();
          }
        });
        */
        
};

window.abrirArquivo = function (id) {
          let thisace = ace.edit("editor_" + id);
          const seletor = document.getElementById("seletorGeraldeArquivo");

          // Abre a janela de seleção de arquivos
          seletor.click();

          // Lê o arquivo selecionado
          seletor.onchange = async function () {
            const arquivo = seletor.files[0];

            if (!arquivo) return;

            // Lê o conteúdo como texto
            let texto = await arquivo.text();

            thisace.setValue(texto);
            codex[id] = thisace.getSession().getValue();

            seletor.value = "";
          };
        }

window.salvarArquivo = function (id) {
          let thisace = ace.edit("editor_" + id);
          let conteudo = thisace.getSession().getValue();
          // Cria um Blob com o conteúdo em formato TXT
          const blob = new Blob(
            [conteudo],
            { type: "text/plain;charset=utf-8" }
          );
          // Cria uma URL temporária para o arquivo
          const url = URL.createObjectURL(blob);

          // Cria um link para iniciar o download
          const link = document.createElement("a");
          link.style="display: none;"
          link.href = url;

          // Pergunta nome do arquivo
          let nomedoarq = prompt("Nome do Arquivo", "meu arquivo");

          if (linguacodex["editor_" + id] == "javascript" || linguacodex["editor_" + id] == "canvas" || linguacodex["editor_" + id] == "P5") {
            link.download = nomedoarq + ".js";
          } else if (linguacodex["editor_" + id] == "typescript") {
            link.download = nomedoarq + ".ts";
          } else {
            link.download = nomedoarq + ".html";
          }

          // Aciona o download
          document.body.appendChild(link);
          link.click();
          link.remove();

          // Libera a URL temporária
          setTimeout(() => URL.revokeObjectURL(url), 1000);

        }
      



let getcssv = function (v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).slice(1);
}

window.nomenu = function () {
        localStorage.setItem('permamenu', 'desligado');
        remove("Menu");
}

window.menu = function () {
        localStorage.setItem('permamenu', 'aberto');
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

window.exemplos = function () {
        rundoc("Exemplos", "openexemplos", {}, 335, 556, -625, -317);
        center("Exemplos");
}

window.openexemplos = function (id, dados) {
        var el = document.getElementById(id);
        el.innerHTML =
            `
            <style>

                

                .menu_menuopt {
                
                display: flex;
                flex-direction: column;
                align-items: start;
                height: 100%;
                background-color: var(--panel-border);
                
                }

                .menu_menuopt div {

                cursor: pointer;
                font-size: 18px;
                line-height: 22px;
                padding-top: 23px;
                padding-bottom: 23px;
                height: auto;
                width: 100%;
                color: var(--text);
                background-color: var(--panel-border);
                padding-left: 20px;
                padding-right: 20px;
                border-top: 1px dotted var(--muted);
                }

                .menu_menuopt div:last-child {
                  border-bottom: 1px dotted var(--muted);
                }

                .menu_menuopt div:hover {
                background-color: var(--win-header);
                }

                .menu_menuopt div.secao {
                cursor: default;
                background-color: var(--accent);
                color: var(--bg);
                }

                .menu_menuopt div.secao:hover {
                background-color: var(--accent);
                cursor: default;
                }


            </style>

            <div class="menu_menuopt">
                <div class="secao">Dados</div>
                <div onclick="window.dataset('https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0'); centerlastframe();">Dataset de Exemplo</div>

                <div onclick="window.dataset('https://docs.google.com/spreadsheets/d/15lB-WclGe0WVET1yg94tZMOc5zVi6lufmv0vQZyXmYA/preview'); centerlastframe();">Dataset completo de Point & Click Adventures</div>

                <div class="secao">Notebooks</div>
                <div onclick="newidoc('https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/notebook/creativecode.html', 'Instruções'); centerlastframe();">Exemplo de programação criativa em notebook computacional</div>

                <div class="secao">Programação</div>
                <div onclick="window.code('https://booklines.vercel.app/assets/codigosp5/exemplo-livroJSD_SE.js'); centerlastframe();">Mandala 1 em P5</div>
                <div onclick="window.code('https://booklines.vercel.app/assets/codigosp5/bass.js'); centerlastframe();">Mandala 2 em P5</div>
                
            </div>
          
          
          
          
            `;
        
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
                height: 100%;
                background-color: var(--panel-border);
                
                }

                .menu_menuopt div {

                cursor: pointer;
                font-size: 18px;
                line-height: 22px;
                padding-top: 23px;
                padding-bottom: 23px;
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

                .menu_menuopt div:last-child {
                  border-bottom: 1px dotted var(--muted);
                }

            </style>

            <div class="menu_menuopt">
                <div onclick="code()">Editor de Código</div>
                <div onclick="notebook()">Notebook Computacional</div>
                <div onclick="jupyter()">Jupyter Notebook</div>
                <div onclick="omnicode()">Omnicode Run</div>
                <div onclick="omnicodelive()">Omnicode Live</div>
                <div onclick="legacy()">Contextos de programação antigos</div>
                <div onclick="exemplos()">Coleção de exemplos</div>
                
            </div>
          
          
          
          
            `;
        
      }

window.omnihelp = function () {
        rundoc("Omnihelp", "openomnihelp", {}, 335, 556, -282, -125);
        center("Omnihelp");
        
        localStorage.setItem('primeiroacesso', 'feito');
  
}


window.openomnihelp = function (id, dados) {
        var el = document.getElementById(id);
        el.innerHTML =
            `
            <style>

                .menu_menuopt {
                
                display: flex;
                flex-direction: column;
                align-items: start;
                height: 100%;
                background-color: var(--panel-border);
                
                }

                .menu_menuopt div {

                cursor: pointer;
                font-size: 18px;
                line-height: 22px;
                padding-top: 23px;
                padding-bottom: 23px;
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

                .menu_menuopt div:last-child {
                  border-bottom: 1px dotted var(--muted);
                }

            </style>

            <div class="menu_menuopt">
                <div onclick="about()">Sobre o Canvas</div>
                <div onclick="noteinstruct()">Instruções de uso do Notebook</div>
                <div onclick="notedb()">Instruções de uso de SQL Query</div>
                <div onclick="exemplos()">Coleção de exemplos</div>
                <div onclick="lpjd()">Programação Javascript para Designers</div>
                <div onclick="pjd()">Programação Javascript para Designers (aberto)</div>
                
            </div>
          
          
          
          
            `;
        
      }

svg(`
  <svg  style="width: 100%; height: 100%;" viewBox="0 0 466 466" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="rel&#195;&#179;gio" clip-path="url(#clip0_2373_1497)">
<path id="Ellipse 210" d="M449 233C449 352.294 352.294 449 233 449C113.706 449 17 352.294 17 233C17 113.706 113.706 17 233 17C352.294 17 449 113.706 449 233Z" stroke-width="4" stroke="var(--text, #000000)"/>
<path id="Ellipse 211" d="M444 233C444 349.532 349.532 444 233 444C116.468 444 22 349.532 22 233C22 116.468 116.468 22 233 22C349.532 22 444 116.468 444 233Z" stroke-width="4" stroke="var(--text, #000000)"/>
<g id="Vector">
<path d="M232 27H235V50H232V27Z" fill="var(--text, #000000)"/>
<path d="M232 416H235V439H232V416Z" fill="var(--text, #000000)"/>
<path d="M209.359 427.514L212.339 427.86L211.184 437.793L208.204 437.447L209.359 427.514Z" fill="var(--text, #000000)"/>
<path d="M255.817 28.207L258.797 28.5537L257.641 38.4867L254.661 38.14L255.817 28.207Z" fill="var(--text, #000000)"/>
<path d="M188.647 423.807L191.573 424.471L189.359 434.223L186.434 433.558L188.647 423.807Z" fill="var(--text, #000000)"/>
<path d="M277.643 31.7792L280.569 32.4434L278.355 42.1952L275.429 41.5311L277.643 31.7792Z" fill="var(--text, #000000)"/>
<path d="M170.394 418.57L173.242 419.514L170.094 429.006L167.247 428.062L170.394 418.57Z" fill="var(--text, #000000)"/>
<path d="M296.908 36.9943L299.756 37.9385L296.609 47.4303L293.761 46.4862L296.908 36.9943Z" fill="var(--text, #000000)"/>
<path d="M152.864 411.65L155.607 412.864L151.563 422.009L148.82 420.796L152.864 411.65Z" fill="var(--text, #000000)"/>
<path d="M315.439 43.9908L318.183 45.2041L314.139 54.3498L311.395 53.1366L315.439 43.9908Z" fill="var(--text, #000000)"/>
<path d="M115.337 389.385L117.744 391.175L111.777 399.199L109.369 397.409L115.337 389.385Z" fill="var(--text, #000000)"/>
<path d="M355.224 66.8019L357.631 68.5921L351.664 76.6165L349.256 74.8263L355.224 66.8019Z" fill="var(--text, #000000)"/>
<path d="M99.2558 375.816L101.457 377.853L94.6642 385.192L92.4626 383.154L99.2558 375.816Z" fill="var(--text, #000000)"/>
<path d="M372.341 80.807L374.542 82.8449L367.749 90.1834L365.548 88.1454L372.341 80.807Z" fill="var(--text, #000000)"/>
<path d="M86.0646 362.155L88.0586 364.397L80.5872 371.043L78.5932 368.802L86.0646 362.155Z" fill="var(--text, #000000)"/>
<path d="M386.416 94.9593L388.41 97.2008L380.938 103.847L378.944 101.606L386.416 94.9593Z" fill="var(--text, #000000)"/>
<path d="M74.3431 347.395L76.1126 349.818L68.0373 355.716L66.2678 353.294L74.3431 347.395Z" fill="var(--text, #000000)"/>
<path d="M398.966 110.284L400.736 112.706L392.661 118.605L390.891 116.182L398.966 110.284Z" fill="var(--text, #000000)"/>
<path d="M52.9754 309.348L54.1651 312.102L44.985 316.068L43.7953 313.314L52.9754 309.348Z" fill="var(--text, #000000)"/>
<path d="M422.016 149.928L423.206 152.682L414.026 156.648L412.836 153.894L422.016 149.928Z" fill="var(--text, #000000)"/>
<path d="M45.8328 289.559L46.7204 292.425L37.1682 295.384L36.2806 292.518L45.8328 289.559Z" fill="var(--text, #000000)"/>
<path d="M429.834 170.617L430.722 173.483L421.17 176.441L420.282 173.576L429.834 170.617Z" fill="var(--text, #000000)"/>
<path d="M41.2388 271.133L41.8449 274.072L32.0512 276.092L31.445 273.154L41.2388 271.133Z" fill="var(--text, #000000)"/>
<path d="M434.949 189.911L435.555 192.849L425.761 194.87L425.155 191.932L434.949 189.911Z" fill="var(--text, #000000)"/>
<path d="M38.4692 252.489L38.7904 255.472L28.8479 256.542L28.5267 253.56L38.4692 252.489Z" fill="var(--text, #000000)"/>
<path d="M438.156 209.458L438.477 212.441L428.534 213.511L428.213 210.528L438.156 209.458Z" fill="var(--text, #000000)"/>
<path d="M38.9861 208.855L38.6394 211.835L28.7064 210.679L29.0531 207.7L38.9861 208.855Z" fill="var(--text, #000000)"/>
<path d="M438.294 255.316L437.947 258.296L428.014 257.14L428.361 254.16L438.294 255.316Z" fill="var(--text, #000000)"/>
<path d="M42.695 188.146L42.0308 191.072L32.279 188.858L32.9431 185.932L42.695 188.146Z" fill="var(--text, #000000)"/>
<path d="M434.721 277.141L434.057 280.066L424.305 277.853L424.969 274.927L434.721 277.141Z" fill="var(--text, #000000)"/>
<path d="M47.9296 169.892L46.9854 172.74L37.4936 169.592L38.4377 166.745L47.9296 169.892Z" fill="var(--text, #000000)"/>
<path d="M429.505 296.407L428.56 299.254L419.069 296.107L420.013 293.259L429.505 296.407Z" fill="var(--text, #000000)"/>
<path d="M54.8533 152.361L53.6401 155.104L44.4943 151.06L45.7076 148.316L54.8533 152.361Z" fill="var(--text, #000000)"/>
<path d="M422.508 314.938L421.295 317.682L412.149 313.638L413.363 310.894L422.508 314.938Z" fill="var(--text, #000000)"/>
<path d="M77.1177 114.833L75.3275 117.24L67.3031 111.273L69.0933 108.865L77.1177 114.833Z" fill="var(--text, #000000)"/>
<path d="M399.699 354.723L397.908 357.131L389.884 351.163L391.674 348.756L399.699 354.723Z" fill="var(--text, #000000)"/>
<path d="M90.6852 98.7511L88.6473 100.953L81.3088 94.1594L83.3468 91.9579L90.6852 98.7511Z" fill="var(--text, #000000)"/>
<path d="M385.691 371.837L383.653 374.038L376.315 367.245L378.353 365.043L385.691 371.837Z" fill="var(--text, #000000)"/>
<path d="M104.345 85.5599L102.104 87.5539L95.4573 80.0824L97.6987 78.0884L104.345 85.5599Z" fill="var(--text, #000000)"/>
<path d="M371.54 385.913L369.299 387.907L362.652 380.435L364.894 378.441L371.54 385.913Z" fill="var(--text, #000000)"/>
<path d="M119.107 73.8393L116.685 75.6088L110.786 67.5336L113.209 65.7641L119.107 73.8393Z" fill="var(--text, #000000)"/>
<path d="M356.216 398.463L353.793 400.233L347.895 392.158L350.318 390.388L356.216 398.463Z" fill="var(--text, #000000)"/>
<path d="M157.152 52.4716L154.398 53.6613L150.433 44.4812L153.187 43.2915L157.152 52.4716Z" fill="var(--text, #000000)"/>
<path d="M316.571 421.514L313.817 422.704L309.852 413.524L312.606 412.334L316.571 421.514Z" fill="var(--text, #000000)"/>
<path d="M176.944 45.3283L174.078 46.216L171.12 36.6637L173.985 35.7761L176.944 45.3283Z" fill="var(--text, #000000)"/>
<path d="M295.884 429.331L293.018 430.218L290.059 420.666L292.925 419.778L295.884 429.331Z" fill="var(--text, #000000)"/>
<path d="M195.37 40.7343L192.432 41.3404L190.411 31.5467L193.349 30.9406L195.37 40.7343Z" fill="var(--text, #000000)"/>
<path d="M276.59 434.447L273.652 435.054L271.631 425.26L274.569 424.654L276.59 434.447Z" fill="var(--text, #000000)"/>
<path d="M214.013 37.9664L211.03 38.2876L209.96 28.3451L212.943 28.0239L214.013 37.9664Z" fill="var(--text, #000000)"/>
<path d="M257.043 437.655L254.061 437.976L252.99 428.033L255.973 427.712L257.043 437.655Z" fill="var(--text, #000000)"/>
<path d="M439.5 231.5V234.5H416.5V231.5H439.5Z" fill="var(--text, #000000)"/>
<path d="M50.5 231.5V234.5H27.5L27.5 231.5H50.5Z" fill="var(--text, #000000)"/>
<path d="M412.651 334.701L411.151 337.299L391.233 325.799L392.733 323.201L412.651 334.701Z" fill="var(--text, #000000)"/>
<path d="M75.7673 140.201L74.2673 142.799L54.3488 131.299L55.8488 128.701L75.7673 140.201Z" fill="var(--text, #000000)"/>
<path d="M337.798 410.649L335.2 412.149L323.7 392.231L326.298 390.731L337.798 410.649Z" fill="var(--text, #000000)"/>
<path d="M143.299 73.7659L140.701 75.2659L129.201 55.3473L131.799 53.8473L143.299 73.7659Z" fill="var(--text, #000000)"/>
<path d="M411.15 128.699L412.65 131.297L392.732 142.797L391.232 140.199L411.15 128.699Z" fill="var(--text, #000000)"/>
<path d="M74.2677 323.199L75.7677 325.797L55.8491 337.297L54.3491 334.699L74.2677 323.199Z" fill="var(--text, #000000)"/>
<path d="M335.2 53.8473L337.798 55.3473L326.298 75.2659L323.7 73.7659L335.2 53.8473Z" fill="var(--text, #000000)"/>
<path d="M140.701 390.731L143.299 392.231L131.799 412.149L129.201 410.649L140.701 390.731Z" fill="var(--text, #000000)"/>
</g>
<g id="Vector_2">
<path d="M230.371 55.2717V63.9989H228.266V57.2404H228.214L226.263 58.4336V56.6097L228.415 55.2717H230.371Z" fill="var(--text, #000000)"/>
<path d="M232.3 63.9989V62.4819L235.483 59.695C235.722 59.479 235.925 59.2816 236.093 59.1026C236.26 58.9208 236.388 58.739 236.476 58.5572C236.564 58.3725 236.608 58.1722 236.608 57.9563C236.608 57.7148 236.556 57.5089 236.451 57.3384C236.345 57.1651 236.201 57.0316 236.016 56.9379C235.831 56.8441 235.62 56.7972 235.381 56.7972C235.139 56.7972 234.928 56.8469 234.746 56.9464C234.564 57.043 234.422 57.1836 234.32 57.3683C234.22 57.5529 234.171 57.7773 234.171 58.0415H232.172C232.172 57.4478 232.306 56.935 232.573 56.5032C232.84 56.0714 233.215 55.739 233.698 55.506C234.183 55.2702 234.747 55.1523 235.389 55.1523C236.051 55.1523 236.627 55.2631 237.115 55.4847C237.604 55.7063 237.982 56.016 238.249 56.4137C238.519 56.8086 238.654 57.2674 238.654 57.7901C238.654 58.1225 238.587 58.4521 238.453 58.7788C238.32 59.1055 238.08 59.4663 237.733 59.8612C237.389 60.256 236.901 60.729 236.267 61.2802L235.223 62.2433V62.2987H238.76V63.9989H232.3Z" fill="var(--text, #000000)"/>
<path d="M401.881 232.46C401.881 231.795 401.995 231.206 402.222 230.692C402.452 230.18 402.769 229.777 403.172 229.481C403.576 229.186 404.04 229.035 404.566 229.03V231.152C404.375 231.16 404.206 231.221 404.058 231.335C403.914 231.449 403.8 231.604 403.718 231.8C403.635 231.996 403.594 232.219 403.594 232.469C403.594 232.719 403.638 232.939 403.726 233.129C403.817 233.322 403.941 233.473 404.097 233.581C404.256 233.689 404.438 233.741 404.642 233.738C404.847 233.741 405.029 233.683 405.188 233.564C405.347 233.444 405.47 233.275 405.558 233.057C405.647 232.841 405.691 232.585 405.691 232.29V231.442H407.191V232.29C407.191 232.548 407.233 232.775 407.318 232.971C407.404 233.17 407.523 233.325 407.676 233.436C407.833 233.547 408.012 233.601 408.213 233.598C408.409 233.601 408.581 233.554 408.729 233.457C408.879 233.363 408.996 233.231 409.078 233.061C409.161 232.893 409.202 232.699 409.202 232.477C409.202 232.244 409.161 232.033 409.078 231.842C408.996 231.655 408.879 231.506 408.729 231.395C408.578 231.284 408.404 231.226 408.205 231.22V229.204C408.725 229.21 409.182 229.355 409.577 229.639C409.975 229.923 410.286 230.309 410.51 230.798C410.735 231.29 410.847 231.849 410.847 232.477C410.847 233.102 410.737 233.652 410.519 234.126C410.3 234.601 410.002 234.97 409.624 235.234C409.249 235.498 408.824 235.631 408.35 235.631C407.858 235.633 407.453 235.473 407.135 235.149C406.817 234.828 406.621 234.415 406.547 233.909H406.479C406.399 234.585 406.181 235.095 405.823 235.439C405.465 235.785 405.017 235.957 404.48 235.954C403.975 235.954 403.526 235.805 403.134 235.507C402.745 235.211 402.438 234.8 402.213 234.271C401.992 233.746 401.881 233.142 401.881 232.46Z" fill="var(--text, #000000)"/>
<path d="M382.663 314.673L384.088 315.495L387.179 321.408L386.448 322.674L384.514 321.558L384.938 320.823L383.113 317.354L383.054 317.32L380.465 321.803L379.026 320.972L382.663 314.673ZM379.301 317.598L380.991 318.574L381.594 318.971L386.838 321.999L385.851 323.707L378.293 319.344L379.301 317.598Z" fill="var(--text, #000000)"/>
<path d="M317.837 379.023C318.388 378.705 318.936 378.522 319.479 378.474C320.022 378.426 320.519 378.505 320.969 378.711C321.417 378.918 321.776 379.245 322.047 379.692L320.276 380.715C320.1 380.446 319.858 380.287 319.548 380.24C319.24 380.194 318.94 380.256 318.647 380.425C318.418 380.557 318.244 380.725 318.125 380.928C318.007 381.131 317.949 381.353 317.953 381.593C317.959 381.836 318.032 382.076 318.172 382.313C318.31 382.558 318.484 382.742 318.692 382.864C318.898 382.988 319.12 383.049 319.358 383.046C319.595 383.047 319.829 382.981 320.06 382.847C320.28 382.723 320.461 382.555 320.601 382.343C320.738 382.133 320.808 381.913 320.811 381.685L322.599 381.057L324.623 385.321L319.773 388.12L318.923 386.648L322.27 384.715L321.415 382.833L321.37 382.858C321.366 383.14 321.263 383.429 321.064 383.724C320.863 384.024 320.584 384.277 320.227 384.483C319.774 384.744 319.31 384.871 318.833 384.864C318.356 384.861 317.908 384.733 317.489 384.479C317.068 384.227 316.719 383.861 316.442 383.381C316.142 382.862 315.999 382.331 316.014 381.788C316.026 381.246 316.186 380.734 316.494 380.251C316.802 379.772 317.249 379.362 317.837 379.023Z" fill="var(--text, #000000)"/>
<path d="M233.395 401.877C233.872 401.877 234.329 401.954 234.767 402.107C235.204 402.263 235.594 402.51 235.934 402.849C236.275 403.189 236.544 403.635 236.74 404.187C236.936 404.741 237.032 405.415 237.03 406.211C237.027 406.93 236.939 407.574 236.765 408.145C236.592 408.719 236.345 409.207 236.024 409.607C235.7 410.008 235.314 410.313 234.865 410.523C234.413 410.736 233.909 410.843 233.352 410.843C232.741 410.843 232.203 410.724 231.737 410.485C231.268 410.249 230.893 409.931 230.612 409.53C230.331 409.133 230.165 408.689 230.113 408.201H232.189C232.251 408.476 232.389 408.685 232.602 408.827C232.812 408.972 233.062 409.045 233.352 409.045C233.886 409.045 234.285 408.813 234.55 408.35C234.811 407.887 234.944 407.268 234.95 406.492H234.895C234.775 406.753 234.604 406.978 234.379 407.165C234.155 407.353 233.898 407.496 233.608 407.596C233.315 407.698 233.005 407.749 232.679 407.749C232.156 407.749 231.694 407.628 231.294 407.387C230.893 407.145 230.579 406.814 230.352 406.394C230.125 405.976 230.013 405.498 230.015 404.958C230.013 404.35 230.155 403.813 230.442 403.347C230.729 402.884 231.126 402.523 231.635 402.265C232.14 402.006 232.727 401.877 233.395 401.877ZM233.407 403.496C233.149 403.496 232.917 403.557 232.713 403.68C232.508 403.802 232.348 403.968 232.231 404.178C232.115 404.388 232.058 404.626 232.061 404.89C232.058 405.157 232.115 405.394 232.231 405.601C232.345 405.809 232.504 405.974 232.709 406.096C232.91 406.218 233.142 406.279 233.403 406.279C233.594 406.279 233.771 406.243 233.936 406.172C234.101 406.101 234.244 406.002 234.366 405.874C234.486 405.749 234.579 405.601 234.648 405.431C234.716 405.263 234.751 405.082 234.754 404.885C234.751 404.627 234.692 404.393 234.575 404.182C234.459 403.972 234.3 403.805 234.098 403.68C233.896 403.557 233.666 403.496 233.407 403.496Z" fill="var(--text, #000000)"/>
<path d="M151.186 380.904L144.652 385.181L144.624 385.229L148.189 387.288L147.339 388.76L141.884 385.611L142.741 384.127L149.307 379.819L151.186 380.904Z" fill="var(--text, #000000)"/>
<path d="M86.9958 317.871C87.3353 318.46 87.545 319.039 87.6251 319.609C87.7013 320.179 87.6542 320.688 87.4839 321.137C87.3097 321.586 87.0184 321.928 86.61 322.164C86.2976 322.344 85.9676 322.434 85.6202 322.435C85.2727 322.435 84.939 322.357 84.6191 322.201C84.2953 322.043 84.0171 321.82 83.7847 321.531L83.7256 321.565C83.8894 322.025 83.893 322.477 83.7364 322.922C83.5784 323.364 83.2915 323.706 82.8757 323.946C82.4821 324.173 82.0626 324.256 81.6173 324.195C81.1705 324.131 80.7386 323.943 80.3214 323.629C79.9027 323.313 79.5393 322.888 79.2311 322.354C78.9228 321.821 78.7373 321.295 78.6743 320.777C78.61 320.256 78.6627 319.788 78.8325 319.371C79.0008 318.953 79.2818 318.63 79.6754 318.403C80.0937 318.161 80.5352 318.085 81.0001 318.174C81.461 318.262 81.8482 318.49 82.1617 318.857L82.2208 318.822C82.0881 318.479 82.0353 318.129 82.0623 317.772C82.0853 317.415 82.184 317.085 82.3581 316.785C82.5308 316.482 82.7734 316.24 83.0859 316.06C83.4943 315.824 83.9369 315.744 84.4136 315.819C84.8879 315.897 85.3526 316.111 85.8076 316.461C86.2588 316.811 86.6549 317.281 86.9958 317.871ZM85.7004 318.619C85.5712 318.395 85.4157 318.223 85.2341 318.101C85.0499 317.981 84.8539 317.917 84.646 317.909C84.4366 317.899 84.236 317.949 84.0441 318.06C83.8472 318.174 83.701 318.324 83.6053 318.51C83.5095 318.697 83.4683 318.901 83.4817 319.123C83.4911 319.344 83.559 319.564 83.6854 319.783C83.8104 319.999 83.967 320.168 84.155 320.289C84.3405 320.412 84.5379 320.478 84.7473 320.488C84.9567 320.499 85.1597 320.447 85.3566 320.333C85.5485 320.223 85.693 320.075 85.7901 319.891C85.8834 319.706 85.9241 319.504 85.9122 319.284C85.8989 319.062 85.8283 318.841 85.7004 318.619ZM82.3975 320.526C82.2867 320.334 82.1493 320.187 81.9854 320.085C81.82 319.981 81.643 319.927 81.4545 319.924C81.2645 319.919 81.081 319.968 80.9038 320.07C80.7267 320.172 80.5953 320.305 80.5097 320.47C80.4227 320.631 80.3837 320.808 80.3926 321C80.3991 321.193 80.4585 321.387 80.5707 321.581C80.6815 321.773 80.8196 321.921 80.985 322.026C81.1479 322.132 81.3212 322.188 81.5048 322.193C81.6884 322.199 81.8688 322.15 82.0459 322.048C82.223 321.946 82.3576 321.812 82.4495 321.648C82.5376 321.482 82.5789 321.301 82.5734 321.104C82.5655 320.908 82.5069 320.716 82.3975 320.526Z" fill="var(--text, #000000)"/>
<path d="M55.1524 233.605C55.1524 233.127 55.2305 232.671 55.3868 232.237C55.5402 231.802 55.7859 231.414 56.124 231.073C56.4592 230.732 56.901 230.464 57.4493 230.268C57.9976 230.072 58.6666 229.974 59.4564 229.974C60.1836 229.971 60.8356 230.056 61.4123 230.23C61.9862 230.403 62.4748 230.651 62.8782 230.975C63.2817 231.296 63.5899 231.683 63.803 232.134C64.0132 232.586 64.1183 233.09 64.1183 233.647C64.1183 234.261 64.0004 234.802 63.7646 235.271C63.526 235.737 63.2049 236.11 62.8015 236.391C62.3981 236.67 61.9464 236.836 61.4464 236.89V234.815C61.7362 234.749 61.9549 234.612 62.1027 234.401C62.2476 234.191 62.32 233.94 62.32 233.647C62.32 233.113 62.0885 232.714 61.6254 232.45C61.1623 232.186 60.5331 232.053 59.7376 232.053V232.105C59.999 232.227 60.2234 232.4 60.4109 232.624C60.5984 232.846 60.7419 233.103 60.8413 233.396C60.9407 233.688 60.9905 233.997 60.9905 234.32C60.9905 234.843 60.8711 235.305 60.6325 235.705C60.3939 236.103 60.0657 236.416 59.6481 236.643C59.2305 236.867 58.7532 236.981 58.2163 236.984C57.614 236.987 57.0828 236.846 56.6226 236.562C56.1595 236.278 55.7987 235.882 55.5402 235.373C55.2788 234.864 55.1495 234.275 55.1524 233.605ZM56.7717 233.592C56.7717 233.853 56.8328 234.086 56.9549 234.291C57.0771 234.492 57.2419 234.651 57.4493 234.768C57.6567 234.884 57.8896 234.941 58.1481 234.938C58.4067 234.936 58.6396 234.877 58.847 234.764C59.0544 234.647 59.2192 234.489 59.3413 234.291C59.4635 234.089 59.5245 233.859 59.5245 233.6C59.5245 233.407 59.489 233.228 59.418 233.063C59.347 232.899 59.249 232.755 59.124 232.633C58.9961 232.511 58.8484 232.416 58.6808 232.347C58.5132 232.276 58.3342 232.242 58.1439 232.245C57.891 232.248 57.6609 232.308 57.4535 232.424C57.2461 232.541 57.0814 232.701 56.9592 232.906C56.8342 233.107 56.7717 233.336 56.7717 233.592Z" fill="var(--text, #000000)"/>
<path d="M77.5533 146.779L85.1113 151.143L84.0587 152.966L78.2057 149.587L78.1801 149.631L78.2376 151.918L76.6581 151.006L76.5753 148.473L77.5533 146.779Z" fill="var(--text, #000000)"/>
<path d="M88.0652 146.453C87.6845 147.112 87.2001 147.59 86.6121 147.887C86.0216 148.183 85.3578 148.29 84.6206 148.209C83.881 148.126 83.0974 147.844 82.2697 147.363C81.442 146.882 80.8129 146.346 80.3825 145.757C79.951 145.163 79.721 144.542 79.6925 143.892C79.663 143.239 79.8386 142.582 80.2193 141.923C80.6 141.263 81.0806 140.783 81.6613 140.482C82.2409 140.177 82.8956 140.063 83.6254 140.14C84.3551 140.217 85.1326 140.495 85.9579 140.975C86.7895 141.455 87.4259 141.995 87.8672 142.594C88.3086 143.193 88.5477 143.821 88.5846 144.479C88.6204 145.133 88.4473 145.791 88.0652 146.453ZM86.5705 145.59C86.7978 145.196 86.7813 144.762 86.5209 144.287C86.258 143.81 85.7088 143.332 84.8734 142.853C84.3272 142.538 83.845 142.333 83.4268 142.239C83.0061 142.144 82.6516 142.145 82.3633 142.241C82.075 142.336 81.8548 142.516 81.7028 142.779C81.477 143.171 81.4925 143.601 81.7494 144.071C82.0039 144.539 82.5388 145.01 83.3542 145.484C83.9063 145.807 84.3957 146.019 84.8223 146.121C85.2504 146.22 85.6117 146.222 85.9064 146.126C86.1986 146.029 86.42 145.851 86.5705 145.59Z" fill="var(--text, #000000)"/>
<path d="M142.589 79.973L146.952 87.531L145.129 88.5836L141.75 82.7305L141.706 82.7561L140.612 84.7653L139.7 83.1858L140.895 80.951L142.589 79.973Z" fill="var(--text, #000000)"/>
<path d="M147.754 76.9906L152.118 84.5486L150.295 85.6012L146.916 79.7481L146.871 79.7737L145.778 81.7829L144.866 80.2034L146.061 77.9686L147.754 76.9906Z" fill="var(--text, #000000)"/>
<path d="M377.517 145.31L378.831 144.551L382.836 145.914C383.142 146.013 383.415 146.09 383.654 146.146C383.895 146.2 384.116 146.22 384.318 146.205C384.522 146.189 384.717 146.127 384.904 146.019C385.113 145.899 385.266 145.75 385.361 145.574C385.458 145.396 385.501 145.204 385.49 144.997C385.479 144.79 385.414 144.584 385.295 144.377C385.174 144.168 385.025 144.009 384.848 143.902C384.673 143.792 384.481 143.74 384.269 143.744C384.06 143.75 383.841 143.819 383.612 143.951L382.613 142.22C383.127 141.923 383.638 141.783 384.145 141.798C384.653 141.813 385.128 141.972 385.571 142.274C386.018 142.576 386.402 143.006 386.723 143.562C387.054 144.135 387.246 144.689 387.298 145.223C387.351 145.757 387.272 146.239 387.061 146.669C386.854 147.1 386.524 147.446 386.071 147.708C385.783 147.874 385.464 147.981 385.115 148.029C384.765 148.076 384.333 148.049 383.817 147.946C383.303 147.846 382.649 147.659 381.855 147.386L380.499 146.963L380.451 146.991L382.22 150.054L380.747 150.904L377.517 145.31Z" fill="var(--text, #000000)"/>
<path d="M322.899 79.6795L318.536 87.2375L316.713 86.185L320.092 80.3319L320.048 80.3063L317.761 80.3638L318.673 78.7843L321.205 78.7015L322.899 79.6795Z" fill="var(--text, #000000)"/>
</g>
<g id="clock_barra_Minutos">
<mask id="stroke0_2373_1497" fill="white">
<path d="M233 219C240.18 219 246 224.82 246 232C246 239.18 240.18 245 233 245C225.82 245 220 239.18 220 232C220 224.82 225.82 219 233 219Z"/>
</mask>
<path id="Ellipse 212" d="M233 219C240.18 219 246 224.82 246 232C246 239.18 240.18 245 233 245C225.82 245 220 239.18 220 232C220 224.82 225.82 219 233 219Z" stroke-width="8" stroke="var(--accent, #000000)" mask="url(#stroke0_2373_1497)"/>
<rect id="Rectangle 1242" x="229" y="124" width="50" height="8" transform="rotate(-90 229 124)" fill="var(--accent, #000000)"/>
<ellipse id="Ellipse 214" cx="233" cy="339" rx="8" ry="8" transform="rotate(-90 233 339)" fill="var(--accent, #000000)"/>
</g>
<g id="clock_barra_Horas">
<path id="Ellipse 213" d="M233 214C242.941 214 251 222.059 251 232C251 241.941 242.941 250 233 250C223.059 250 215 241.941 215 232C215 222.059 223.059 214 233 214Z" stroke-width="4" stroke="var(--text, #000000)"/>
<rect id="Rectangle 1242_2" x="229" y="214" width="85" height="8" transform="rotate(-90 229 214)" fill="var(--text, #000000)"/>
<rect id="Rectangle 1243" x="229" y="292" width="42" height="8" transform="rotate(-90 229 292)" fill="var(--text, #000000)"/>
</g>
<g id="clock_barra_Segundos">
<path id="Subtract" d="M238.73 6.07031C275.111 6.97183 309.367 16.4322 339.562 32.5146L335.819 39.5869C305.254 23.3043 270.374 14.0551 233.339 13.999L238.73 6.07031ZM232.621 13.999C195.784 14.0614 161.08 23.218 130.635 39.3447L126.881 32.2783C156.784 16.4361 190.651 7.08114 226.607 6.08691L232.621 13.999Z" fill="var(--accent, #000000)"/>
</g>
</g>
<defs>
<clipPath id="clip0_2373_1497">
<rect width="466" height="466" fill="white"/>
</clipPath>
</defs>
</svg>



<style>
#clock_barra_Horas {
transform-origin: center center;
}

#clock_barra_Minutos {
transform-origin: center center;
}

#clock_barra_Segundos {
transform-origin: center center;
}
`
  
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

window.lpjd = function () {
  
  newidoc("https://booklines.vercel.app/livros/javascript", "Livro PJD", 730, 1089, 114, -1078);

}

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
        rundoc("Legacy", "openlegacymenu", {}, 335, 556, 408, 241);
        center("Legacy");
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



document.addEventListener('keydown', function (e) {
    if (e.key === 'F1' || e.keyCode == 112) {

      e.cancelBubble = true;
      e.cancelable = true;
      e.stopPropagation();
      e.preventDefault();
      e.returnValue = false;

      omnihelp();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'F2' || e.keyCode == 113) {

      e.cancelBubble = true;
      e.cancelable = true;
      e.stopPropagation();
      e.preventDefault();
      e.returnValue = false;

      menu();
    }
  });
    
  let devmstate = "normal";

  document.addEventListener('keydown', function (e) {
            if (e.key === 'F3' || e.keyCode == 114) {

                   e.cancelBubble = true;
                    e.cancelable = true;
                    e.stopPropagation();
                    e.preventDefault();
                    e.returnValue = false;

              if (devmstate == "normal") {
                floatdevmode();
                devmstate = "float"
              } else {
                devmode();
                devmstate = "normal";
              }
  }
  
  
});

if (typeof localStorage.getItem('primeiroacesso') == 'undefined' || localStorage.getItem('primeiroacesso') == null || localStorage.getItem('primeiroacesso') == '') {
  omnihelp();
}

if (localStorage.getItem('permamenu') != 'desligado') {
  menu();
}


/*

https://omnicode.vercel.app/clr?theme=gruvbox&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--panel-border")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--muted")}&hgcolor=${getcssv("--win-header")}

*/


