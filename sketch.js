var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(800, 800);  

  btn_red = createButton("Red!");
  btn_red.position(100,50);
  btn_red.mousePressed(btn_r);


  btn_green = createButton("Green!");
  btn_green.position(250,50);
  btn_green.mousePressed(btn_g);


  btn_blue = createButton("Blue!");
  btn_blue.position(175,100);
  btn_blue.mousePressed(btn_b);
}

function draw() {
  background(r,g,b);
}

function btn_r(){
  r=255
  g=0
  b=0
}

function btn_g(){
  r=0
  g=255
  b=0
}

function btn_b(){
  r=0
  g=0
  b=255
}