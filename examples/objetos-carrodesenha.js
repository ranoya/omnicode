function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#8c30b1");
  noStroke();
}

// Criação dos carros como objetos
let carroA = {
  nome: "Carro 1",
  velocidade: 5,
  posicao: 200,
  anda: function () {
    this.posicao = this.posicao + this.velocidade;
  },
  desenha: function () {
    fill("#00FF00");
    rect(this.posicao, 70, 30, 30);
    textSize(32);
    text(this.nome, this.posicao, 50);
  },
};

let carroB = {
  nome: "Carro 2",
  velocidade: 3,
  posicao: 0,
  anda: function () {
    this.posicao = this.posicao + this.velocidade;
  },
  desenha: function () {
    fill("#FF0000");
    rect(this.posicao, 200, 30, 30);
    textSize(32);
    text(this.nome, this.posicao, 180);
  },
};

function draw() {
  background("#8c30b1");

  // Desenha os dois carros
  carroA.desenha();
  carroB.desenha();

  // Movimenta os dois carros
  carroA.anda();
  carroB.anda();
}
