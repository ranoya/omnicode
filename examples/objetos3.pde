class Bola {
    float tam;
    float mx;
    float my;
    float dx = random(-5,5);
    float dy = random(-5,5);

    Bola(float px, float py, float t) {
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

Bola[] BOLAS;

void setup() { 
  size(500,500);
  background(#40124d);
  frameRate(20);
  fill(255);
  noStroke();
  
  BOLAS = new Bola[50];
  
  for (int cria = 0; cria < 50; cria++) {
  
    BOLAS[cria] = new Bola(random(200), random(200), random(80));
  
  }

}


void draw() {
  
  background(#40124d);

  for (int i=0; i < 50; i++) {
    
    BOLAS[i].se_desenha();
    BOLAS[i].atualiza();
    
  }

}
