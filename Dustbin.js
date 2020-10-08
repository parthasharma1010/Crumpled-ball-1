class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      strokeWeight(4);
      stroke("yellow")
      fill(255);
      rect(0, 0, this.width, this.height);
       pop();
    }
  };
  