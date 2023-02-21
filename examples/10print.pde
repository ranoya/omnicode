void setup() {
    size(1612,799);
    stroke(#7E2C75);
    background(#40124d);
}

int tempo = 0;
int tam = 20;

void draw() {

  if (tempo == 0) {
    
    background(#40124d);
    
    for (int xi = 0; xi < width; xi = xi + tam) {
        for (int yi = 0; yi < height; yi = yi + tam) {
            if (random(1) < 0.5) {
                line(xi,yi,xi+tam,yi+tam);
            } else {
                line(xi+tam,yi,xi,yi+tam);
            }
        }
    }
  }
  
  tempo++;
  
  if (tempo > 100) {
    tempo = 0;
  }
}

