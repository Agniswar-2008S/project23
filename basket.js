class Basket {
   constructor(posx,posy) {
       var options={
           isStatic:true,density:1}
           
           this.bodyleft=Bodies.rectangle(posx,posy,20,100);
           this.width=20;
           this.height=100;
           Matter.Body.setAngle(this.bodyleft,90);
           World.add(world,this.bodyleft)

   }

   display() {
     var pos=this.bodyleft.position;
     var angle=this.bodyleft.angle;
     push ();
     fill ("red")
     rectMode(CENTER);
     rect (pos.x,pos.y,this.width,this.height);
     pop ()
   }
}