int mx; // declara variável mx

void setup() {
    size(600,500);
    stroke(#7E2C75);
    background(#40124d);
    mx = 0; // mx começa em zero
}

void draw() {

    // desenha uma linha do canto superior
    // esquerdo (0,0), até o valor de
    // (mx,500), isto é, em baixo (linha
    // 500), e na coluna com valor 
    // mx ( que será progressivamente
    // acrescido de 1
    
    line(0,0,mx,500);
    mx = mx + 1; // altere para 2, 3, ou 10

    // se o valor de ultrapassar 400,
    // encarramos a rotina draw()

    if (mx > 400) {
        noLoop();
    }

}