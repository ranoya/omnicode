setTempTheme("gruvbox-dark");
devmode();
setTransparentBackground();

window.menu = function () {
        rundoc("Menu", "openmenu", {});
        center("Menu");
      }

window.openmenu = function (id, dados) {
        var el = document.getElementById(id);
        el.innerHTML =
            `
            <style>

                .menu_menuopt {
                
                display: flex;
                flex-direction: column;
                align-items: start;
                
                }

                .menu_menuopt div {

                cursor: pointer;
                font-size: 18px;
                line-height: 28px;
                height: 28px;
                width: 100%;
                color: var(--text);
                background-color: var(--panel-border);
                }

                .menu_menuopt div:hover {
                background-color: var(--win-header);


                }

            </style>

            <div class="menu_menuopt">
                <div onclick="code()">Editor de Código</div>
                <div onclick="notebook()">Notebook Computacional</div>
                <div onclick="https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}&load=https://omnicode.vercel.app/notebook/creativecode.html">Instruções de uso do Notebook Computacional</div>

            </div>
          
          
          
          
            `;
        
      }
