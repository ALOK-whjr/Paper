class paper
{
	constructor(x,y)
	{
		var options={ 
			friction:0.3, 
			density:0.3 
		}
		this.x=x;
		this.y=y;
		//this.r=r;
		this.r=30;
		this.image=loadImage("paper.png")
		this.body = Bodies.circle(this.x,this.y,this.r,options);
		World.add(world, this.body);
	}
	display()
	{

		var pos=this.body.position;
		push()
		translate(pos.x, pos.y);
		//angleMode(RADIANS)
		fill(255)
		rotate(this.body.angle)
		imageMode(CENTER)
		image(this.image,0,0,2*this.r,2*this.r)
		//ellipseMode(RADIUS);
		//ellipse(0,0,this.r,this.r);
		pop()
			
	}

}