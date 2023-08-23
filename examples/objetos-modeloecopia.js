function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    noStroke();
}

// Cria um modelo para ser copiado, uma "classe" 
let carro = {
    ligado: true,
        nome: "Carro ",
        velocidade: Math.random() * 5 + 2,
        posicao: Math.random() * 100,
        y: Math.random() * 600 + 30,
        corR: Math.random() * 255,
        corG: Math.random() * 255,
        corB: Math.random() * 255,
        anda: function () {
            if (this.ligado == true) {
                this.posicao = this.posicao + this.velocidade;
            }
        },
        desenha: function () {
                fill(this.corR, this.corG, this.corB);
                rect(this.posicao, this.y, 30, 30);
                textSize(32);
                text(this.nome, this.posicao, this.y - 20);
        }
    }


// Cria uma Array para colocar nela
// vários objetos carro
let varioscarros = [];

// Define quantos carros são no total
let totaldecarros = 10;

// Loop para gerar os objetos automaticamente
for (let i = 0; i < totaldecarros; i = i + 1) {
    
    // Cópia (instância) dos carros tiradas do modelo original (classe)
    varioscarros[i] = { ...carro };

    // Modificação do nome default
    varioscarros[i].nome = "Carro " + i        

}


function draw() {
   
    background(255);

    // Loop para acionar todos os carros
    for (let i = 0; i < totaldecarros; i = i + 1) {

        // Desenha e anda com os carros (todos)
        varioscarros[i].desenha();
        varioscarros[i].anda();
  
    }

    // Para um dos carros eventualmente
    if (random(100) > 98) {
        varioscarros[0].ligado = false;
    }

}