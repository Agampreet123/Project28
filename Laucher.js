class Laucher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.laucher = Constraint.create(options);
        World.add(world, this.laucher);
    }
 fly(){
     this.laucher.bodyA = null;
 }
    display(){
        if(this.laucher.bodyA){

        
        var pointA = this.laucher.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}