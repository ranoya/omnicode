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
  rundoc("Query " + querywindows, "openquery", { "sheet": googlesheet, "query": select });
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

window.notedb = function () {
  newidoc(`https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/canvas/sql.html`, "Instruções");
  connect("Query 1", "Instruções");
  connect("Query 2", "Instruções");
  connect("Query 3", "Instruções");
  connect("Query 4", "Instruções");
  connect("Query 5", "Instruções");

}

window.notedatat = function () {
  newidoc(`https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/canvas/sobredatat.html`, "Instruções");
  connect("DataT 1", "Instruções");
  connect("DataT 2", "Instruções");
  connect("DataT 3", "Instruções");
  connect("DataT 4", "Instruções");
  connect("DataT 5", "Instruções");
}


window.regex = function () {
    newidoc('https://regexr.com/', 'Regexr');
    center("Regexr");

}



newframe("https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0", "Planilha de Origem");

dataset("https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0", "Planilha de Origem");

notedb();

datatgsdata("https://docs.google.com/spreadsheets/d/1FbY8hPtM8IxEJ26ybMZHpMrHdk-LEm1yuYPiFVwF94U/edit?gid=0#gid=0", "Planilha de Origem");

notedatat();

center("Planilha de Origem");