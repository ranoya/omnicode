document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ace.js" type="text/javascript"></script>');
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ext-language_tools.min.js" type="text/javascript"></script>');

// Ace Editor Change Viewer
function changeContent(data, who, predata, extras) {


    var iframeA = document.getElementById(who);
    iframeA = iframeA.contentWindow || (iframeA.contentDocument.document || iframeA.contentDocument);

    iframeA.document.open();
    iframeA.document.write(predata);
    iframeA.document.write(data);
    iframeA.document.write(extras);
    iframeA.document.close();

}

document.addEventListener('DOMContentLoaded', function () {

    
    // Multiple Auto Ace
    ace.require("ace/ext/language_tools");
    var editor;
    var ednum = 0;
    ace_config = {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        showPrintMargin: false,
        highlightActiveLine: false,
        cursorStyle: "wide",
        wrap: 1,
        wrapBehavioursEnabled: true
    };

    let alleditors = document.querySelectorAll(".editor");

    for (let i = 0; i < alleditors.length; i++) {

        ednum++;
        let este = document.getElementById("editor_" + ednum);
        _name = "editor_" + ednum;
        code = `let name = este.getAttribute('data-name');
 
                let customconfig_` + _name + ` = '';
                let precode_` + _name + ` = '';
                let postcode_` + _name + ` = '';
                precode_` + _name + ` = Predata_` + _name + `;
                postcode_` + _name + ` = Postdata_` + _name + `;
                
                if (este.getAttribute('data-config')) { 
                    customconfig_` + _name + ` = este.getAttribute('data-config');
                } else {
                    if (typeof acegeneralconfig != 'undefined') { 
                        customconfig_` + _name + ` = acegeneralconfig;
                    } else { 
                        customconfig_` + _name + ` = ace_config;
                    } 
                }
           ` + _name + ` = ace.edit('` + _name + `');
           ` + _name + `.setOptions(customconfig_` + _name + `);
               if (document.getElementById('View_` + _name + `')) {
                   changeContent(` + _name + `.getSession().getValue(),'View_` + _name + `', Predata_editor_1, Postdata_editor_1);
               ` + _name + `.getSession().on('change', function() {
                        changeContent(` + _name + `.getSession().getValue(), 'View_` + _name + `', Predata_editor_1, Postdata_editor_1);
                });
            }`;
        eval(code);
    }

});


const enviacomando = function (instr) {
    let aceed = ace.edit('editor_1');
    aceed.setOptions(instr);
}

const redimensiona = function (qnt) {
        document.getElementById("right_panel").style.width =
          "calc(" + qnt + "% - 36px)";
        document.getElementById("editor_1").style.width =
          "calc(100% - " + qnt + "%)";
}

const lingua = function (qual) {
    
    if (qual == "html") {
        let aceed = ace.edit('editor_1');
        aceed.setOptions({ mode: "ace/mode/html" });

        Predata_editor_1 = "";
        Postdata_editor_1 = "";

    }

    if (qual == "javascript") {
        let aceed = ace.edit('editor_1');
        aceed.setOptions({ mode: "ace/mode/javascript" });
        Predata_editor_1 = `
        <script>`;
        Postdata_editor_1 = `</script>
                
        <div id="ScreenConsoleWrap" style="position: fixed; bottom: -5px; width: 100%; height: 200px; z-index: 1000;"><div id="ScreenConsoleTitle" style="border: 1px solid #` + bdc + `; margin: 8px 8px 0px; padding: 8px; display: inline-block; color: #` + bgc + `; background-color: ` + bdc + `; font-family: monospace;">Console</div><div id="ScreenConsole" style="border: 1px solid #` + bdc + `; margin: 0px 8px 8px; padding: 8px; width: calc(100% - 32px); height: 130px; overflow-y: scroll; font-family: monospace; color: ` + bdc + `; background-color: ` + gcolr + `;"></div></div>

        <script>
        console.defaultLog = console.log.bind(console);
        console.logs = [];
        
        console.log = function () {
            console.defaultLog.apply(console, arguments);
            console.logs.push(Array.from(arguments));
            document.getElementById('ScreenConsole').innerHTML += arguments[0] + '<br>';
        }
        window.onerror = function (msg, url, line) {
            document.getElementById('ScreenConsole').innerHTML += 'Line: ' + line + '<br>' + msg + '<br>';
        }
        </script>
        `;

    }

    if (qual == "p5") {
        let aceed = ace.edit('editor_1');
        aceed.setOptions({ mode: "ace/mode/javascript" });
        Predata_editor_1 = `
         <style>body,html { margin: 0; padding: 0; }</style>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
         
         <script>`;
        Postdata_editor_1 = `</script>
        
        <div id="ScreenConsoleWrap" style="position: fixed; bottom: -5px; width: 100%; height: 200px; z-index: 1000;"><div id="ScreenConsoleTitle" style="border: 1px solid #` + bdc + `; margin: 8px 8px 0px; padding: 8px; display: inline-block; color: #` + bgc + `; background-color: ` + bdc + `; font-family: monospace;">Console</div><div id="ScreenConsole" style="border: 1px solid #` + bdc + `; margin: 0px 8px 8px; padding: 8px; width: calc(100% - 32px); height: 130px; overflow-y: scroll; font-family: monospace; color: ` + bdc + `; background-color: ` + gcolr + `;"></div></div>

        <script>
        console.defaultLog = console.log.bind(console);
        console.logs = [];
        
        console.log = function () {
            console.defaultLog.apply(console, arguments);
            console.logs.push(Array.from(arguments));
            document.getElementById('ScreenConsole').innerHTML += arguments[0] + '<br>';
        }
        window.onerror = function (msg, url, line) {
            document.getElementById('ScreenConsole').innerHTML += 'Line: ' + line + '<br>' + msg + '<br>';
        }
        </script>
        `;
    }

    if (qual == "processing") {
        let aceed = ace.edit('editor_1');
        aceed.setOptions({ mode: "ace/mode/java" });

        Predata_editor_1 = `
        <style>body,html { margin: 0; padding: 0; }</style>
        <canvas id='pjs' style='outline: none;'></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
        <script type="application/processing" data-processing-target='pjs'>
        `;
        Postdata_editor_1 = `
        </script>
		<canvas> </canvas>
        `;
    }

    changeContent(editor_1.getSession().getValue(), "View_editor_1", Predata_editor_1, Postdata_editor_1);
        
        
}

const sobrescreve = function(arquivo) {
    fetch(arquivo).then((response) => response.text()).then((dados) => {
              let aceed = ace.edit('editor_1');
              aceed.setValue(dados);
          });
}

const hideconsole = function () {
    let ifr = document.getElementById("View_editor_1");
    if (typeof ifr.contentWindow.document.getElementById("ScreenConsoleWrap") != "undefined" && ifr.contentWindow.document.getElementById("ScreenConsoleWrap") != null) {
        ifr.contentWindow.document.getElementById("ScreenConsoleWrap").style.display = "none";
    }
}

const showconsole = function () {
    let ifr = document.getElementById("View_editor_1");
    if (typeof ifr.contentWindow.document.getElementById("ScreenConsoleWrap") != "undefined" && ifr.contentWindow.document.getElementById("ScreenConsoleWrap") != null) {
        ifr.contentWindow.document.getElementById("ScreenConsoleWrap").style.display = "block";
    }
}