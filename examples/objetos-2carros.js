function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#8c30b1");
}

// Objeto carro

let carro = {
  nome: "Carro 1",
  posicao: 0,
  y: 70,
  velocidade: Math.random() * 20 + 5,
  liga: function () {
    this.vai = true;
  },
  anda: function () {
    if (this.vai == true) {
      this.posicao = this.posicao + this.velocidade;
    }
  },
  vai: false,
  cor: "#00FF00",
  desenha: function () {
    noStroke();
    fill(this.cor);
    rect(this.posicao, this.y, 30, 30);
    textSize(32);
    text(this.nome, this.posicao, this.y - 20);
  },
};

// Outro objeto carro
let carro2 = {
  nome: "Carro 2",
  posicao: 20,
  y: 200,
  velocidade: Math.random() * 20 + 5,
  cor: "#FF0000",
  liga: function () {
    this.vai = true;
  },
  anda: function () {
    if (this.vai == true) {
      this.posicao = this.posicao + this.velocidade;
    }
  },
  vai: false,
  desenha: function () {
    noStroke();
    fill(this.cor);
    rect(this.posicao, this.y, 30, 30);
    textSize(32);
    text(this.nome, this.posicao, this.y - 20);
  },
};

function draw() {
  background("#8c30b1");

  // Espera um pouco para dar ignição nos carros
  let comeca = random(100);
  if (comeca > 99) {
    carro.liga();
    carro2.liga();
  }

  // trava a velocidade do carro 1
  carro.velocidade = 5;

  // desenha o carro 1
  carro.desenha();

  // faz o carro 1 andar para frente
  carro.anda();

  // desenha o carro 2
  carro2.desenha();

  // faz o carro 2 andar para frente
  carro2.anda();
}
