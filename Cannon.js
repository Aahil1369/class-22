class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  display(){
    push();
  rectMode(CENTER);
  rect(this.x,this.y,this.width,this.height);
  //image(towerImg,tower.position.x,tower.position.y,160,310)
  pop();
  rect(70,20,200,200);
  noFill();
  }
}
