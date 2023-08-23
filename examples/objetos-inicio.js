function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    noStroke();
}

// posição inicial em X dos dois carros
let posicao_carro1 = 200;
let posicao_carro2 = 0;

function draw() {
   
    background(255);

    // Desenha o primeiro carro
    fill("#00FF00");
    rect(posicao_carro1, 70,30,30);
    textSize(32);
    text("Carro 2", posicao_carro1, 50);

    // Desenha o segundo carro
    fill("#FF0000");
    rect(posicao_carro2, 200,30,30);
    textSize(32);
    text("Carro 2", posicao_carro2, 180);

    // Movimenta os dois carros
    posicao_carro1 = posicao_carro1 + 5;
    posicao_carro2 = posicao_carro2 + 3;

}