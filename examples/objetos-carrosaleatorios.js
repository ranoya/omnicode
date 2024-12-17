function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#8c30b1");
  noStroke();
}

// Criação dos carros como objetos
let carroA = {
  ligado: true,
  nome: "Carro 1",
  velocidade: Math.random() * 5 + 2,
  posicao: Math.random() * 100,
  y: Math.random() * 400 + 30,
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
  },
};

let carroB = {
  ligado: true,
  nome: "Carro 2",
  velocidade: Math.random() * 5 + 2,
  posicao: Math.random() * 100,
  y: Math.random() * 400 + 30,
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

  // Para um dos carros eventualmente
  if (random(100) > 95) {
    carroB.ligado = false;
  }
}
