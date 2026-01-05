let iframeA = "";

let screenconsole = "";

// Ace Editor Change Viewer
function changeContent(data, who, predata, extras, buffer) {
  localStorage.setItem(buffer, data.toHtmlEntities());
}

var keymapping = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
  e = e || event;

  if (
    e.key === "s" &&
    (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
  ) {
    e.preventDefault();
  }
  keymapping[e.keyCode] = e.type == "keydown";

  //console.table(keymapping);

  // ctrl+shift+p
  if (
    ((keymapping[17] || keymapping[91] || keymapping[92] || keymapping[17]) &&
      keymapping[80] &&
      keymapping[16]) ||
    ((keymapping[93] || keymapping[91] || keymapping[92] || keymapping[17]) &&
      keymapping[75]) ||
    (keymapping[16] && keymapping[92] && keymapping[79]) ||
    ((keymapping[17] || keymapping[18]) &&
      (keymapping[191] || keymapping[190])) ||
    (keymapping[9] && keymapping[16])
  ) {
    keymapping[9] = false;
    keymapping[93] = false;
    keymapping[92] = false;
    keymapping[91] = false;
    keymapping[75] = false;
    keymapping[79] = false;
    keymapping[80] = false;
    keymapping[16] = false;
    keymapping[17] = false;
    keymapping[18] = false;
    keymapping[191] = false;
    keymapping[190] = false;
    e.preventDefault();
    this.document.getElementById("entrada").value = " ";
    this.document
      .getElementById("entrada")
      .dispatchEvent(new Event("input", { bubbles: true }));
    this.document.getElementById("entrada").focus();
  }

  // ctrl+s
  if ((keymapping[17] || keymapping[91]) && keymapping[83]) {
    keymapping[17] = false;
    keymapping[91] = false;
    keymapping[83] = false;
    runContent(
      String.fromHtmlEntities(localStorage.getItem(buffer)),
      "View_editor_1",
      Predata_editor_1,
      Postdata_editor_1
    );
  }
};

function runContent(data, who, predata, extras) {
  if (
    typeof $_GET["htmledit"] != "undefined" &&
    $_GET["htmledit"] != null &&
    $_GET["htmledit"] != ""
  ) {
    extras += `<scr` + `ipt>document.designMode = "on";</scr` + `ipt>`;
  }

  document.getElementById("View_editor_1").remove();
  let ifr = document.createElement("iframe");
  ifr.setAttribute("id", "View_editor_1");
  document.getElementById("right_panel").appendChild(ifr);

  iframeA = document.getElementById(who);
  iframeA =
    iframeA.contentWindow ||
    iframeA.contentDocument.document ||
    iframeA.contentDocument;
  iframeA.document.open();
  iframeA.document.write(`
    <script>
    console.clear();
    </script>
    `);
  iframeA.document.close();

  if ($_GET["noconsole"] == "" || typeof $_GET["noconsole"] == "undefined") {
    screenconsole =
      `<div id="ScreenConsoleWrap" style="position: fixed; left: 0; bottom: -5px; width: 100%; height: 200px; z-index: 1000;"><div id="ScreenConsoleTitle" style="border: 1px solid #` +
      bdc +
      `; margin: 8px 8px 0px; padding: 8px; display: inline-block; color: #` +
      bgc +
      `; background-color: #` +
      bdc +
      `; font-family: monospace;">Console</div><div id="ScreenConsole" style="border: 1px solid #` +
      bdc +
      `; margin: 0px 8px 8px; padding: 8px; width: calc(100% - 32px); height: 130px; overflow-y: scroll; font-family: monospace; color: ` +
      gtc +
      `; background-color: ` +
      gcolr +
      `;"></div></div>
    <script>
    window.onerror = function myErrorHandler(err, url, line) {  
    document.getElementById('ScreenConsole').innerHTML += 'Line: ' + line + '<br>' + err + '<br>';
    return false;
    }
    console.log = function (msg) {
            document.getElementById('ScreenConsole').innerHTML += msg + '<br>';
    }
    </script>
    `;
  }

  if (!modoMD) {
    iframeA.document.open();
    iframeA.document.write(screenconsole + predata);
    iframeA.document.write(data);
    iframeA.document.write(extras);
    iframeA.document.close();
  } else {
    let converter = new showdown.Converter({ tables: true }),
      text = data;
    converter.setFlavor("github");
    let codigohtml = converter.makeHtml(text);

    iframeA.document.open();
    iframeA.document.write(screenconsole + predata);
    iframeA.document.write(codigohtml);
    iframeA.document.write(extras);
    iframeA.document.close();
  }
}

document.addEventListener("DOMContentLoaded", function () {
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
    wrapBehavioursEnabled: true,
  };

  let alleditors = document.querySelectorAll(".editor");

  for (let i = 0; i < alleditors.length; i++) {
    ednum++;
    let este = document.getElementById("editor_" + ednum);
    _name = "editor_" + ednum;
    code =
      `let name = este.getAttribute('data-name');
 
                let customconfig_` +
      _name +
      ` = '';
                let precode_` +
      _name +
      ` = '';
                let postcode_` +
      _name +
      ` = '';
                precode_` +
      _name +
      ` = Predata_` +
      _name +
      `;
                postcode_` +
      _name +
      ` = Postdata_` +
      _name +
      `;
                
                if (este.getAttribute('data-config')) { 
                    customconfig_` +
      _name +
      ` = este.getAttribute('data-config');
                } else {
                    if (typeof acegeneralconfig != 'undefined') { 
                        customconfig_` +
      _name +
      ` = acegeneralconfig;
                    } else { 
                        customconfig_` +
      _name +
      ` = ace_config;
                    } 
                }
           ` +
      _name +
      ` = ace.edit('` +
      _name +
      `');
           ` +
      _name +
      `.setOptions(customconfig_` +
      _name +
      `);
               if (document.getElementById('View_` +
      _name +
      `')) {
                   changeContent(` +
      _name +
      `.getSession().getValue(),'View_` +
      _name +
      `', Predata_editor_1, Postdata_editor_1, buffer);
               ` +
      _name +
      `.getSession().on('change', function() {
                        changeContent(` +
      _name +
      `.getSession().getValue(), 'View_` +
      _name +
      `', Predata_editor_1, Postdata_editor_1, buffer);
                });
            }`;
    eval(code);
  }
});

if ($_GET["readonly"] != "" && typeof $_GET["readonly"] != "undefined") {
  let myTimeout12 = setTimeout(function () {
    enviacomando({ readOnly: true });
  }, 2400);
}

const setnoconsole = function (val) {
  if (val == true) {
    $_GET["noconsole"] = "true";
    screenconsole = "";
  } else {
    $_GET["noconsole"] = "";
  }
};

const tolivecode = function () {
  let url = window.location.href;
  let goto = "";

  if (url.match(/https:\/\/omnicode.vercel.app\/monol/i)) {
    // do nothing
  } else {
    document.addEventListener("DOMContentLoaded", function () {});
    ace
      .edit("editor_1")
      .getSession()
      .on("change", function () {});

    goto = url.replace(
      "omnicode.vercel.app/monor",
      "omnicode.vercel.app/monol"
    );
    window.location.assign(goto);
  }
};

const toruncode = function () {
  let url = window.location.href;
  let goto = "";
  if (url.match(/https:\/\/omnicode.vercel.app\/monor/i)) {
    // do nothing
  } else {
    document.addEventListener("DOMContentLoaded", function () {});
    ace
      .edit("editor_1")
      .getSession()
      .on("change", function () {});

    goto = url.replace(
      "omnicode.vercel.app/monol",
      "omnicode.vercel.app/monor"
    );
    window.location.assign(goto);
  }
};
