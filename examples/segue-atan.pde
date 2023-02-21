void setup() {
  background(#78008A);
  size(500,500);
}

int canvwidth = 500;
int canvheight = 500;
int raio = canvwidth / 12;


float alfa(int mX, int mY) {
  int deltaX = mouseX - mX;
  int deltaY = mouseY - mY;
  float angle = atan2(deltaY, deltaX);
  return angle;
  }
  
void draw() {
  
  background(#78008A);
  stroke(255);
  strokeWeight(4);
  
  for (int v = (canvwidth/10); v < canvwidth; v = v + (canvwidth/10)) {
    for (int h = (canvwidth/10); h < canvwidth; h = h + (canvwidth/10)) {
        line(h,v, h + (raio*cos(alfa(h,v))), v + (raio*sin(alfa(h,v))));
    }
  }
  
}
