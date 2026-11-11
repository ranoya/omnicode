devmode();
console();

window.janelaA = function (id, param) {
    

    let code = `
    
    <input type="text" id="dado1" /><br><br>

    <div id="botao">envia</a>
    
    `;

    document.getElementById(id).innerHTML = code;

    document.getElementById("botao").onclick = function () {
        
        let infor = document.getElementById("dado1").value;
        var saida = dataout(id);
        saida.send(infor); 
        console.log("mandou dataout");

    }



}

run("Envio", "janelaA", {});

window.janelaB = function (id, param) {

    let code = `<div id="recebe"></div>`;
    document.getElementById(id).innerHTML = code;

    var entrada = datain(id, {
        data: function(dados, origem){   // chamada a cada dado novo, de qualquer origem
            console.log(dados + " / veio de: " + origem.title);
        }
    });

    // ou sob demanda, o mais parecido com o que você imaginou:
    var dados = entrada.get("Envio");  // último dado dessa origem (undefined se ainda não chegou)

    console.log("Este é o que veio por get -> " + dados);
    // var todos = entrada.all();

}

run("Recebimento", "janelaB", {});

