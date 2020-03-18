class Boxes{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

display(){
  var angle = this.body.angle;
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
 imageMode(CENTER);
 
 if(this.body.speed<3){
  super.display()
}
else{
  World.remove(world,this.body);
  push ()
  this.Visibility =this.Visibility-5;
  tint(255,this.Visibility);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop ()
}
}
score(){
  if(this.Visiblity<0 && this.Visiblity> -1005){
    score++

  }
}
}
