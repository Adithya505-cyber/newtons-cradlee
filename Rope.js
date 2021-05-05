class Rope{
    constructor(body1, body2, offsetX, offsetY){        

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY}           
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var anchorA = this.rope.bodyA.position;
        var anchorB = this.rope.bodyB.position;

        var bPx = anchorB.x + this.offsetX;
        var bPy = anchorB.y + this.offsetY;
        stroke("black");
        strokeWeight(2);
        line(anchorA.x, anchorA.y, bPx, bPy);
    }
}