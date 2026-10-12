devmode();
ungroovy();
setTheme("Light");
centerControls();
setTransparentBackground();




window.openquery = function (elem_id, extras) {

  let googlesheet = extras.sheet;
  let select = extras.query;
  

  gsdata(googlesheet, function (dados) {
    
    let arr = sqlquery(dados, select);

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

    constroihtml += `<div>`;

    document.getElementById(elem_id).innerHTML = constroihtml;
    document.getElementById(elem_id).style.backgroundColor = "var(--bg, #FFFFFF)";

  });

}

let querywindows = 1;

window.sql = function (googlesheet, select, conecta) {
  rundoc("Query " + querywindows, "openquery", { "sheet": googlesheet, "query": select });
  if (typeof conecta != "undefined" && conecta != null && conecta != "") {
    connect("Query " + querywindows, conecta);
  }
  querywindows++;

}

let datasetwindows = 1;
let dataseturls = [];

window.opendataset = function (id, p) {
  
  let preview = p.googlesheet.replace("edit", "htmlview");
  let codigohtml = `<iframe frameborder='0' src='${preview}' style='width: calc(100%); padding: 15px; height: calc(100% - 45px);'></iframe><input id="queryrunner${p.indice}" type='text' style='outline: none; border 0; height: 41px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace;' />`;
  
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

