function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    noStroke();
}

// Criação dos carros como objetos
let carroA = {
    ligado: true,
    nome: "Carro 1",
    velocidade: 5,
    posicao: 100,
    y: 320,
    cor: "#00FF00",
    anda: function () {
        this.posicao = this.posicao + this.velocidade;
    },
    desenha: function () {
        if (this.ligado == true) {
            fill(this.cor);
            rect(this.posicao, this.y, 30, 30);
            textSize(32);
            text(this.nome, this.posicao, this.y - 20);
        }
    }
}

let carroB = {
    ligado: true,
    nome: "Carro 2",
    velocidade: 2,
    posicao: 300,
    y: 50,
    cor: "#FF0000",
    anda: function () {
        this.posicao = this.posicao + this.velocidade;
    },
    desenha: function () {
        if (this.ligado == true) {
            fill(this.cor);
            rect(this.posicao, this.y, 30, 30);
            textSize(32);
            text(this.nome, this.posicao, this.y - 20);
        }
    }
}

function draw() {
   
    background(255);

    // Desenha os dois carros
    carroA.desenha();
    carroB.desenha();

    // Movimenta os dois carros
    carroA.anda();
    carroB.anda();

    // Para um dos carros eventualmente
    if (random(10) > 9) {
        carroB.ligado = false;
    }

}