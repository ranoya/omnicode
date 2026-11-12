devmode();
ungroovy();
setTheme("Light");
centerControls();
setTransparentBackground();


let datatwindex = 0;

window.datatgsdata = function (url, ltitulo) {

  let u = "https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0";
  if (typeof url != 'undefined' && url != null && url != '') {
    u = url;
  }
  

  gsdata(u, function (dados) {

    datatwindex++;
    rundoc("DataT " + datatwindex, "opendataexplorer", { "dadosarr": dados, "indice": datatwindex });

    center("DataT " + datatwindex);

    if (typeof ltitulo != 'undefined' && ltitulo != null && ltitulo != '') {
      connect("DataT " + datatwindex, ltitulo);
    }
    

  });
  
}

window.datatexec = function (dados, ltitulo) {
  
    datatwindex++;
    rundoc("DataT " + datatwindex, "opendataexplorer", { "dadosarr": dados, "indice": datatwindex });

    center("DataT " + datatwindex);

    if (typeof ltitulo != 'undefined' && ltitulo != null && ltitulo != '') {
      connect("DataT " + datatwindex, ltitulo);
    }
  
}

window.opendataexplorer = function (id, param) {

  let outputdataexplorer = dataout(id);

  let code = `
  
    <style>

          .viz {

            width: 100%;
            background-color: var(--bg, #FFFFFF);
            color: var(--text, #000000);
            font-size: 14px;
            line-height: 16px;
            padding: 0;
            gap: 0px 0px;
            display: grid;
            padding-top: 0 !important;
            padding-bottom: 0;
            height: calc(100% - 80px);
            overflow-y: scroll;

          }

          .maketablegridheadings {
            position: sticky;
            top: 0;
            line-height: 30px;
            align-content: center;
          }

          .maketableitem {
            align-content: center;
          }

          .vars {
            outline: none;
            border 0;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            width: calc(100%);
            padding-left: 10px;
            padding-right: 10px;
            background-color: var(--grid-dot, #c7c7d1);
            color: var(--text,  #1c1c22);
            font-family: monospace; border: 0;
            font-weight: bolder;
          }
    </style>

    <div id="datatvar_${param.indice}" class="vars"></div>

    <div id="datat_${param.indice}" class="viz"></div>

    <input placeholder="Instrução Datat" id="datatcmd_${param.indice}" type='text' style='outline: none; border 0; height: 40px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />

  `;

      outputdataexplorer.send(param.dadosarr);
      document.getElementById(id).innerHTML = code;
      document.getElementById(id).style.backgroundColor = "var(--bg, #FFFFFF)";
      document.getElementById("datat_" + param.indice).innerHTML = showtable(param.dadosarr, { color: "var(--text)", backgroundColor: "var(--bg)" });
                              
  
  document.getElementById("datatcmd_" + param.indice).addEventListener('keydown', (event) => {
        
        let instruc = document.getElementById("datatcmd_" + param.indice).value;
    let getvariab = instruc.match(/^\s*[a-zA-Z_$][\w$]*\s*\(\s*([a-zA-Z_$][\w$]*)\s*(?:,|\))/i)[1];

        if (typeof getvariab != 'undefined' && getvariab != null && getvariab != '') {
          document.getElementById("datatvar_" + param.indice).innerHTML = getvariab + " =";
        } else {
          document.getElementById("datatvar_" + param.indice).innerHTML = "";
        }
        
        if (event.key === 'Enter') {

          let cm = instruc.replace(/(^\s*[a-zA-Z_$][\w$]*\s*)\((\s*([a-zA-Z_$][\w$]*)\s*)(?:,|\))/i,"$1(param.dadosarr,");

          let dataresult = eval(cm);

          datatexec(dataresult, "DataT " + param.indice);
          
        }
      });

}

let datasubquery = [];

window.openquery = function (elem_id, extras) {

  let outputquery = dataout(elem_id);

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
        
      outputquery.send(arr);

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
  center("Query " + querywindows);
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

window.dataset = function (u, ltitulo) {
  /* run("Dataset " + datasetwindows, "opendataset", { googlesheet: u, indice: datasetwindows}); */

  let url = "https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0";
  if (typeof u != 'undefined' && u != null && u != '') {
    url = u;
  }

  let conecta = "";
  if (typeof ltitulo != 'undefined' && ltitulo != null && ltitulo != '') {
    conecta = ltitulo;
  }

  sql(url, "select *", conecta);

  dataseturls[datasetwindows] = url;
  datasetwindows++;
}


window.regex = function () {
    newidoc('https://regexr.com/', 'Regexr');
    center("Regexr");

}


//
      //
      // -- CODE EDITOR ----------------------------------

      let countcode = 1;
      let countruncode = 1;

      window.code = function (u, t) {
        
        let tipo = "html";
        if (typeof t != 'undefined' && t != null && t != '') {
          tipo = t;
        }
        

        if (typeof u != 'undefined' && u != null && u != '') {

          run("Code " + countcode, "codeeditor", {
            contagem: countcode,
            runcontagem: countruncode,
            loadcode: u,
            lingua: tipo
          });
                
        } else {
              
          run("Code " + countcode, "codeeditor", {
            contagem: countcode,
            runcontagem: countruncode,
            lingua: tipo
          });
               
        }

        center("Code " + (countcode - 1));
      };

      window.pcode = function (u, t) {
        
        let tipo = "html";
        if (typeof t != 'undefined' && t != null && t != '') {
          tipo = t;
        }
              
        if (typeof u != 'undefined' && u != null && u != '') {
          permarun("Code " + countcode, "codeeditor", {
                contagem: countcode,
                runcontagem: countruncode,
                loadcode: u,
                lingua: tipo
          });

        } else {
          permarun("Code " + countcode, "codeeditor", {
                contagem: countcode,
                runcontagem: countruncode,
                lingua: tipo
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
          </scri` + `pt>
          
          let $_DATA = ${codeeditordadosplus[p.fromeditor]};
          
          `;
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

              let $_DATA = ${codeeditordadosplus[p.fromeditor]};

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

            let $_DATA = ${codeeditordadosplus[p.fromeditor]};

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

              let $_DATA = ${codeeditordadosplus[p.fromeditor]};

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
      

      let codeeditordadosplus = [];

      window.codeeditor = function (id, p) {
        countcode++;

        let dadosplus = "";
        let entradadedados = datain(id, {
            data: function(dados, origem){   // chamada a cada dado novo, de qualquer origem
                console.log(dados + " / origem: " + origem.title);
                dadosplus = JSON.stringify(dados);
                codeeditordadosplus[id] = dadosplus;
            }
        });

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
        thisace.session.setMode("ace/mode/" + p.lingua);
        let acegeneralconfig = {
          theme: "ace/theme/" + tema,
          mode: "ace/mode/" + p.lingua,
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

        linguacodeeditor("editor_" + id, p.lingua);

        

        
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


  let devmstate = "normal";
  let nap = true;
  let inspectwin = false;
  let pintura = false;

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

    if (e.key === 'F4' || e.keyCode == 115) {

                   e.cancelBubble = true;
                    e.cancelable = true;
                    e.stopPropagation();
                    e.preventDefault();
                    e.returnValue = false;

                if (!nap) {
                    snap();
                    nap = true;
                } else {
                    nosnap();
                    nap = false;
                }
    }

    if (e.key === 'F5' || e.keyCode == 116) {

                   e.cancelBubble = true;
                    e.cancelable = true;
                    e.stopPropagation();
                    e.preventDefault();
                    e.returnValue = false;

                if (!inspectwin) {
                    inspectwin = true;
                    state();
                    widget("State");
                } else {
                    inspectwin = false;
                    remove("State");
                }
    }

    if (e.key === 'F6' || e.keyCode == 117) {

                   e.cancelBubble = true;
                    e.cancelable = true;
                    e.stopPropagation();
                    e.preventDefault();
                    e.returnValue = false;

                if (!pintura) {
                    pintura = true;
                    draw();
                } else {
                    pintura = false;
                    removedraw();
                }
    }



  });



newframe("https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0", "Planilha de Origem");

dataset("https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0", "Planilha de Origem");

datatgsdata("https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0", "Planilha de Origem");

notedb();

notedatat();

center("Planilha de Origem");