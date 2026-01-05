let delei = setTimeout(function () {
  // nada
}, 9999999999);
let iframeA = "";

let screenconsole = "";

// Ace Editor Change Viewer
function changeContent(data, who, predata, extras, buffer) {
  clearTimeout(delei);

  if (
    typeof $_GET["htmledit"] != "undefined" &&
    $_GET["htmledit"] != null &&
    $_GET["htmledit"] != ""
  ) {
    extras += `<scr` + `ipt>document.designMode = "on";</scr` + `ipt>`;
  }

  localStorage.setItem(buffer, data.toHtmlEntities());

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
  iframeA.document.write("");
  iframeA.document.close();

  if ($_GET["noconsole"] == "" || typeof $_GET["noconsole"] == "undefined") {
    screenconsole = `
      <script>
    window.onerror = function myErrorHandler(err, url, line) {
    let msg = 'Line: ' + line + '<br>' + err + '<br>' 
    parent.postMessage(msg,'*');
    return false;
    }
    console.log = function (msg) {
    parent.postMessage(msg,'*');        
    }
    </script>
      `;
  }

  delei = setTimeout(function () {
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
  }, 2000);
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

const tolivecode = function () {
  let url = window.location.href;
  let goto = "";

  if (!url.match(/https:\/\/omnicode.vercel.app\/clr/i)) {
    // do nothing
  } else {
    document.addEventListener("DOMContentLoaded", function () {});
    ace
      .edit("editor_1")
      .getSession()
      .on("change", function () {});

    goto = url.replace("omnicode.vercel.app/clr", "omnicode.vercel.app/cll");
    window.location.assign(goto);
  }
};

const setnoconsole = function (val) {
  if (val == true) {
    $_GET["noconsole"] = "true";
    screenconsole = "";
  } else {
    $_GET["noconsole"] = "";
  }
};

const toruncode = function () {
  let url = window.location.href;
  let goto = "";
  if (url.match(/https:\/\/omnicode.vercel.app\/clr/i)) {
    // do nothing
  } else {
    document.addEventListener("DOMContentLoaded", function () {});
    ace
      .edit("editor_1")
      .getSession()
      .on("change", function () {});

    goto = url.replace("omnicode.vercel.app/cll", "omnicode.vercel.app/clr");
    window.location.assign(goto);
  }
};
