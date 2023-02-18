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
        document.getElementById("editor_1").session.setUseWrapMode(true);
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
        Predata_editor_1 = `<script>`;
        Postdata_editor_1 = `</script>`;

    }

    if (qual == "p5") {
        let aceed = ace.edit('editor_1');
        aceed.setOptions({ mode: "ace/mode/javascript" });
        Predata_editor_1 = `
         <style>body,html { margin: 0; padding: 0; }</style>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
         <script>`;
        Postdata_editor_1 = `</script>`;
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