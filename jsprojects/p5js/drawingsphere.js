var recordCanvas;
var maxWW;
var maxWH;
var boldness;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  textSize(16);
  fill(255, 255, 255);
  textFont('Helvetica');
  text('HOLD MOUSE TO DRAW', 5, 16);
  text('PRESS SPACE TO CLEAR', 5, 36);
  text('PRESS ENTER FOR FULLSCREEN', 5, 56);
  text('USE UP/DOWN ARROW TO CHANGE BOLDNESS', 5, 76);
  
  recordCanvas = createGraphics(windowWidth, windowHeight);
  recordCanvas.noStroke();
  recordCanvas.clear();
  
  maxWW = windowWidth;
  maxWH = windowHeight;
  boldness = 75;
}

function draw() {
  
  if(mouseIsPressed) {
    //Ellipse
    fill(255, 255, 255, boldness);
    ellipse(mouseX, mouseY, 25, 25);
    recordCanvas.fill(255, 255, 255, boldness);
    recordCanvas.ellipse(mouseX, mouseY, 25, 25);
  }
  
}

function keyPressed() {
  
  if (key === " ") {
    setup();
  }
  else if (keyCode === ENTER) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  else if (keyCode == UP_ARROW){
    if (boldness < 255){
      boldness += 10
    }
  }
  else if (keyCode == DOWN_ARROW){
    if (boldness > 5){
      boldness -= 10
    }
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  noStroke();
  background(0, 0, 0);
  textSize(16);
  fill(255, 255, 255);
  textFont('Helvetica');
  text('HOLD MOUSE TO DRAW', 5, 16);
  text('PRESS SPACE TO CLEAR', 5, 36);
  text('PRESS ENTER FOR FULLSCREEN', 5, 56);
  text('USE UP/DOWN ARROW TO CHANGE BOLDNESS', 5, 76);
  
  image(recordCanvas, 0, 0);
  
  if(windowWidth > maxWW && windowHeight > maxWH){
    let tempCanvas = createGraphics(windowWidth, windowHeight);
    tempCanvas.clear();
    tempCanvas.image(recordCanvas, 0, 0);
    recordCanvas = tempCanvas;
    maxWW = windowWidth;
    maxWh = windowHeight;
  }
  else if(windowWidth > maxWW){
    let tempCanvas = createGraphics(windowWidth, maxWH);
    tempCanvas.clear();
    tempCanvas.image(recordCanvas, 0, 0);
    recordCanvas = tempCanvas;
    maxWW = windowWidth;
  }
  else if(windowHeight > maxWH){
    let tempCanvas = createGraphics(maxWW, windowHeight);
    tempCanvas.clear();
    tempCanvas.image(recordCanvas, 0, 0);
    recordCanvas = tempCanvas;
    maxWH = windowHeight;
  }
  
}