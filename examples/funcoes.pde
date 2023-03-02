void setup() {
    size(500,500);
    stroke(255);
    background(#40124d);
}

void xpto(int z) {
    line(0,z,z,400);
}

void draw() {
    
    for (int p=0; p<=400; p = p + 5) {

        xpto(p);

    }

    noLoop(); // o draw() para de rodar
    
}