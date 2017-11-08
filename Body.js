function Body(x, y) {

     this.torso = new Box(x, y+30, 80, 10);
     this.leftArm = new Box(x, y, 10, 30);
     this.rightArm = new Box(x, y, 10, 30);
     this.head = new Box(x + 30, y, 15, 15);
     this.leftLeg = new Box(x-5, y-30, 10, 60, 60);
     this.rightLeg = new Box(x+5, y-30, 10, 60, 60);

     // Define joint as between two bodies
     var rjd = new box2d.b2RevoluteJointDef();

     rjd.Initialize(this.torso.body, this.leftArm.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);
     joint.lowerAngle = 3.9;
     joint.upperAngle = 5.49;

     rjd.Initialize(this.torso.body, this.rightArm.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);

     this.anchor = scaleToPixels(this.torso.body.GetWorldCenter());

     rjd.Initialize(this.torso.body, this.leftLeg.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);

     rjd.Initialize(this.torso.body, this.rightLeg.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);

     this.display = function() {
          this.leftArm.display(50);
          this.torso.display(20);
          this.rightArm.display(20);
          this.head.display(20);
          this.leftLeg.display(20);
          this.rightLeg.display(20);

          this.anchor = scaleToPixels(this.torso.body.GetWorldCenter());
          fill(0);
          noStroke();
          ellipse(this.anchor.x, this.anchor.y, 8, 8);
     };
}
