void setup() {
    size(1480,845);
    frameRate(5);
    stroke(255);
    background(#40124d);
}

int mx = 0;

void draw() {

    line(mx,20,mx,200);
    mx = mx + 5;
    
    if (mx == 20 || mx == 40 || mx == 60 || mx == 100) {
        strokeWeight(3);
    } else {
        strokeWeight(1);
    }
    
    if (mx > 200) {
        mx = 200;
    }
    
}