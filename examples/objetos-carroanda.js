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
};

let carroB = {
  nome: "Carro 2",
  velocidade: 3,
  posicao: 0,
  anda: function () {
    this.posicao = this.posicao + this.velocidade;
  },
};

function draw() {
  background("#8c30b1");

  // Desenha o primeiro carro
  fill("#00FF00");
  rect(carroA.posicao, 70, 30, 30);
  textSize(32);
  text(carroA.nome, carroA.posicao, 50);

  // Desenha o segundo carro
  fill("#FF0000");
  rect(carroB.posicao, 200, 30, 30);
  textSize(32);
  text(carroB.nome, carroB.posicao, 180);

  // Movimenta os dois carros
  carroA.anda();
  carroB.anda();
}
