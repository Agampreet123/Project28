class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        
        this.radius = radius;
        this.x = x
        this.y = y
       this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        
        World.add(world,this.body);
    }
   
    
    display(){
        
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        
        fill(248, 24, 148);
       imageMode(CENTER);
       image(this.image,0,500,50,50);
        pop()
    }

    
}
