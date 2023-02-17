document.write('<script src="https://www.ranoya.com/aceeditor/src-min-noconflict/ace.js" type="text/javascript"></script>');
document.write('<script src="https://www.ranoya.com/aceeditor/src-min-noconflict/ext-language_tools.js" type="text/javascript"></script>');

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
        maxLines: Infinity,
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
        code = `var name = este.getAttribute('data-name');
                var linguagem_` + _name + ` = '';
                var acetheme_` + _name + ` = '';
                var customconfig_` + _name + ` = '';
                var precode_` + _name + ` = '';
                var postcode_` + _name + ` = '';
                if (typeof Predata_` + _name + ` != 'undefined') {
                     precode_` + _name + ` = Predata_` + _name + `;
                }
                if (typeof Postdata_` + _name + ` != 'undefined') { 
                    postcode_` + _name + ` = Postdata_` + _name + `;
                }
                if (este.getAttribute('data-linguagem')) { 
                    linguagem_` + _name + ` = este.getAttribute('data-linguagem');
                } else { 
                    linguagem_` + _name + ` = 'html';
                }
                if (este.getAttribute('data-acetheme')) { 
                    acetheme_` + _name + ` = este.getAttribute('data-acetheme');
                } else { 
                    acetheme_` + _name + ` = 'dreamweaver';
                }
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
           ` + _name + `.setTheme('ace/theme/' + acetheme_` + _name + `);
           ` + _name + `.getSession().setMode('ace/mode/' + linguagem_` + _name + `);
           ` + _name + `.setOptions(customconfig_` + _name + `);
               if (document.getElementById('View_` + _name + `')) {
                   changeContent(` + _name + `.getSession().getValue(),'View_` + _name + `', precode_` + _name + `, postcode_` + _name + `);
               ` + _name + `.getSession().on('change', function() {
                        changeContent(` + _name + `.getSession().getValue(), 'View_` + _name + `', precode_` + _name + `, postcode_` + _name + `);
                });
            }`;
        eval(code);
    }

});