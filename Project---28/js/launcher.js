class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        // this.bodyA = bodyA
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){

        this.launcher.bodyA = body;
    
    }


display(){
    var pointA = this.launcher.bodyA.position;
    var pointB = this.launcher.pointB;

    if(this.launcher.bodyA){
       strokeWeight(5);
       line(pointA.x, pointA.y,pointB.x,pointB.y)
        
    }
}

}
