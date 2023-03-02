void setup() { 
  size(500,500);
  background(#40124d);
  frameRate(20);
  fill(255);
  noStroke();
}

class Bola {
    int tam;
    float mx;
    float my;
    float dx = random(-5,5);
    float dy = random(-5,5);

    Bola(int px, int py, int t) {
        tam = t;
        mx = px;
        my = py;
    }

    void se_desenha() {
        ellipse(mx,my,tam,tam);
    }
    
    void atualiza() {
        mx = mx + dx;
        my = my + dy;
        if (mx > width || mx < 0) {
            dx = dx * -1;
        }
        if (my > height || my < 0) {
            dy = dy * -1;
        }
    }
    
}

Bola B1 = new Bola(50,50,30);
Bola B2 = new Bola(100,100,20);
Bola B3 = new Bola(200,150,80);

void draw() {
  
  background(#40124d);

  B1.se_desenha();
  B1.atualiza();
  B2.se_desenha();
  B2.atualiza();
  B3.se_desenha();
  B3.atualiza();

}

