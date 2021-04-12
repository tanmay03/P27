class Connection
{
    constructor(a,b)
    {
    var options = {
        bodyA:a,
        pointB:b,
        length:20,
        stiffness:0.04


    }
    this.connect=Constraint.create(options)
    World.add(world,this.connect);
    }
    display()
    {
        if(this.connect.bodyA)
var A = this.connect.bodyA.position
var B = this.connect.pointB
line(A.x,A.y,B.x,B.y)

    }
fly(){
    this.connect.bodyA=null
}
}

