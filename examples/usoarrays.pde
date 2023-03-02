void setup() { 
  size(500,500);
  background(#40124d);
  frameRate(20);
  stroke(255);
}

int estagios = 10;
int[] mx = new int[estagios];
int[] my = new int[estagios];

void draw() {
  
  background(#40124d); // apaga a tela

  for (int p = 0; p <= estagios-1; p++) {

    if (p == estagios-1) {
      
      // o último valor das arrays é a posição atual do mouse
      // este é o último valor a ser atualizado, feito depois que
      // todos os valores da array já mudaram
      mx[p] = mouseX;
      my[p] = mouseY;

    } else {
    
      // os valores de x,y do mouse vão sendo jogados para baixo na array
      // criando um histórico, onde mx[0] e my[0] são os mais antigos e
      // que na próxima iteração irão desaparecer, substituídos pelo que
      // neste momento é mx[1] e my[1]
      mx[p] = mx[p+1];
      my[p] = my[p+1];

    }

  }

  for (int h = estagios-1; h >= 1; h--) {
    line(mx[h],my[h],mx[h-1],my[h-1]); // redesenha todas as linhas
  }

}