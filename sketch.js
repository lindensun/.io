function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(0);
  background(255);
}

function draw() {
  background(255);
  randomSeed(0);
  let a = 0;
  let prob = map(mouseX, 0, windowWidth, 0,4);
  let thickness = map(mouseY, 0 , windowHeight,1,10);
  //var deltaX = map(mouseX, 0, windowWidth, 10, 100);
  for(let x= 0;x< windowWidth; x +=50 ){
    for(let y = 0; y<windowHeight; y += 50){
      a = random(0,1);
      
      if(a<0.25*prob){
        strokeWeight(thickness*a);
        stroke(255*a,160,230);
        arc(x-10,y,100,100,0, HALF_PI);
      }
      else if(a<0.5*prob){
        strokeWeight(thickness*a);
        stroke(255, 255*a, 160);
        arc(x-10,y,100,100,HALF_PI, PI);
      }
      else if(a<0.75*prob){
        
        strokeWeight(thickness*a);
        stroke(230,170, 255*a);
        arc(x-10,y,100,100,PI, PI + HALF_PI);
      }
      else{
        strokeWeight(thickness*a);
        stroke(180, 230, 255*a);
        arc(x-10,y,100,100,PI+HALF_PI, TWO_PI);
      }
    }
  }
  //ellipse(30,30,50,50);
  
}