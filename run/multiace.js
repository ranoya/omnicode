
let iframeA = "";

// Ace Editor Change Viewer
function changeContent(data, who, predata, extras) {
        localStorage.setItem('omnicodecode', data.toHtmlEntities());
}

var keymapping = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event;
    keymapping[e.keyCode] = e.type == 'keydown';

    // ctrl+shift+p
  if ((keymapping[93] || keymapping[91]) && keymapping[80] && keymapping[16] || (keymapping[93] || keymapping[91]) && keymapping[75]) {
    keymapping[93] = false;
    keymapping[91] = false;
    keymapping[75] = false;
    keymapping[80] = false;
    keymapping[16] = false;
      toggle("poeinst");
  }
    
    // ctrl+e
  if ((keymapping[17] || keymapping[91]) && keymapping[69]) {
    keymapping[17] = false;
    keymapping[91] = false;
    keymapping[69] = false;
      runContent(String.fromHtmlEntities(localStorage.getItem('omnicodecode')),'View_editor_1',Predata_editor_1, Postdata_editor_1);
    }
  
}


function runContent(data, who, predata, extras) {

    iframeA = document.getElementById(who);
    iframeA = iframeA.contentWindow || (iframeA.contentDocument.document || iframeA.contentDocument);
    iframeA.document.open();
    iframeA.document.write(`
    <script>
    console.clear();
    </script>
    `);
    iframeA.document.close();
    

    let screenconsole = `<div id="ScreenConsoleWrap" style="position: fixed; bottom: -5px; width: 100%; height: 200px; z-index: 1000;"><div id="ScreenConsoleTitle" style="border: 1px solid #` + bdc + `; margin: 8px 8px 0px; padding: 8px; display: inline-block; color: #` + bgc + `; background-color: ` + bdc + `; font-family: monospace;">Console</div><div id="ScreenConsole" style="border: 1px solid #` + bdc + `; margin: 0px 8px 8px; padding: 8px; width: calc(100% - 32px); height: 130px; overflow-y: scroll; font-family: monospace; color: ` + bdc + `; background-color: ` + gcolr + `;"></div></div>
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
        </script>`;

    iframeA.document.open();
    iframeA.document.write(screenconsole + predata);
    iframeA.document.write(data);
    iframeA.document.write(extras);
    iframeA.document.close();

}

document.addEventListener('DOMContentLoaded', function () {

    
    // Multiple Auto Ace
    ace.require("ace/ext/language_tools");
    let editor;
    let ednum = 0;
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


