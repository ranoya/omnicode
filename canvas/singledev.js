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
    newidoc(`https://omnicode.vercel.app/clr?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--text")}&hgcolor=${getcssv("--muted")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=1860118124`, "Omnicode " + omnicocount);
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


