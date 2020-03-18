class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
       
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        push ();
        if(pointA.x<102){
            strokeWeight(7);
            line(pointA.x-50, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x-50, pointB.y-13);

        }   else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
        }
        pop ();
    }
}
}

