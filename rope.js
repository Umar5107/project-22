class rope{
	constructor(body1,body2,pointA, pointB)
	{
		this.body1 = body1;
		this.body2 = body2;
		this.pointA = pointA;
		this.pointB = pointB;

		var rope_options = {
			bodyA:this.body1,
			bodyB:this.body2,
			pointB:{x:this.pointA,y:this.pointB},
			length:100,
			//stiffness:0.1
		}

	//create rope constraint here
	this.rope1 = Matter.Constraint.create(rope_options);
	World.add(world,this.rope1);

	}


    //create display() here 

	display(){
		var pointA = this.rope1.bodyA.position;
		var pointB = this.rope1.bodyB.position;
		//push();
		strokeWeight(2);
		stroke(255);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
		//pop();
	}
}
