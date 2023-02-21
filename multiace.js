let delei = setTimeout(function () {
    // nada
}, 9999999999);
let iframeA = "";

let screenconsole = "";


// Ace Editor Change Viewer
function changeContent(data, who, predata, extras) {

    clearTimeout(delei);
    localStorage.setItem('omnicodecode', data.toHtmlEntities());

    iframeA = document.getElementById(who);
    iframeA = iframeA.contentWindow || (iframeA.contentDocument.document || iframeA.contentDocument);

    iframeA.document.open();
    iframeA.document.write("");
    iframeA.document.close();

    if ($_GET["noconsole"] == "" || typeof $_GET["noconsole"] == "undefined") {

    screenconsole = `<div id="ScreenConsoleWrap" style="position: fixed; left: 0; bottom: -5px; width: 100%; height: 200px; z-index: 1000;"><div id="ScreenConsoleTitle" style="border: 1px solid #` + bdc + `; margin: 8px 8px 0px; padding: 8px; display: inline-block; color: #` + bgc + `; background-color: ` + bdc + `; font-family: monospace;">Console</div><div id="ScreenConsole" style="border: 1px solid #` + bdc + `; margin: 0px 8px 8px; padding: 8px; width: calc(100% - 32px); height: 130px; overflow-y: scroll; font-family: monospace; color: ` + gtc + `; background-color: ` + gcolr + `;"></div></div>
    <script>
    window.onerror = function myErrorHandler(err, url, line) {  
    document.getElementById('ScreenConsole').innerHTML += 'Line: ' + line + '<br>' + err + '<br>';
    console.log(err);
    return false;
    }
    console.log = function (msg) {
        if (!msg.match('code is already using that name as a variable') && !msg.match('which was a p5 function')) {
            document.getElementById('ScreenConsole').innerHTML += msg + '<br>';
        }
    }
    </script>
    `;
    }

    delei = setTimeout(function () {
        iframeA.document.open();
        iframeA.document.write(screenconsole +predata);
        iframeA.document.write(data);
        iframeA.document.write(extras);
        iframeA.document.close();
    }, 2000);


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

if ($_GET['readonly'] != "" && typeof $_GET['readonly'] != "undefined") {
    let myTimeout12 = setTimeout(function () {
        enviacomando({ "readOnly": true });
    }, 2400);
}

const tolivecode = function () {   
    let url = window.location.href;
    let goto = "";

    if (!url.match(/https:\/\/omnicode.vercel.app\/run/i)) {
     // do nothing
    } else {
        document.addEventListener('DOMContentLoaded', function () { });
        ace.edit("editor_1").getSession().on('change', function () { });

        goto = url.replace("omnicode.vercel.app/run", "omnicode.vercel.app");
        window.location.assign(goto);
        
    }
}

const setnoconsole = function (val) {
    if (val == true) {
        $_GET['noconsole'] = "true";
        screenconsole = "";
    } else {
        $_GET['noconsole'] = "";
    }
}

const toruncode = function () {
    let url = window.location.href;
    let goto = "";
    if (url.match(/https:\/\/omnicode.vercel.app\/run/i)) {
     // do nothing
    } else {

        document.addEventListener('DOMContentLoaded', function () { });
        ace.edit("editor_1").getSession().on('change', function () { });
        
        goto = url.replace("omnicode.vercel.app", "omnicode.vercel.app/run");
        window.location.assign(goto);
        
    }
}

