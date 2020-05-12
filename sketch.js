var diam1=0;

function setup() {
    createCanvas (500,500);
      background("#003366");
}

function draw() {
 
    fill("#add8e6");
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(50,100,diam1,diam1);
    diam1=diam1+5;
    fill("#ff0000");
    ellipse(random(width),random(height),20,20);
    ellipse(mouseX,mouseY,20,20);
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("hello",40,40);
    console.log(diam1);
}

function mousePressed(){
    if(diam1>50){
        diam1=0;
    }else{
    diam1=diam1+5;    
    }
}