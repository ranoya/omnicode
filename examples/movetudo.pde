void setup() {
  background(#78008A);
  size(500,500);
}

int canvwidth = 500;
int canvheight = 500;
int raio = canvwidth / 18;
float ddx = 0;
float ddy = 0;
float edx = 0;
float edy = 0;

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
  
  for (int v = (canvwidth/15); v < canvwidth; v = v + (canvwidth/12)) {
    for (int h = (canvwidth/15); h < canvwidth; h = h + (canvwidth/12)) {
        
        ddx =  h - mouseX;
        ddy =  v - mouseY;
        edx = (v + (raio*cos(alfa(h,v)))) - mouseX;
        edx = (v + (raio*sin(alfa(h,v)))) - mouseY;
        
        line(h - (ddx/7),v - (ddy/7), h + (raio*cos(alfa(h,v))) + (edx/12), v + (raio*sin(alfa(h,v))) + (edy/12));
    }
  }
  
}
