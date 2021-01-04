class paper{
    constructor(x,y,width,height){
        var options ={
            isStatic : false,

            restitution : 1,

            friction : 0.5,

            density : 1.2
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }


    display(){
       var pos=this.body.position;
       //pos.x = mouseX;
   // pos.y = mouseY;
      // pos.x=mouseX;
       //pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}