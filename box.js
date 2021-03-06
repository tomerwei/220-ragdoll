// A rectangular box

function Box(x, y, w, h) {

    this.w = w;
    this.h = h;

    // Define a body
    var bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    // Define a fixture
    var fd1 = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd1.shape = new box2d.b2PolygonShape();
    fd1.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

    // Some physics
    fd1.density = 0.1;

    fd1.friction = 0.01;
    fd1.restitution = 1;



    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd1);

    // Some additional stuff
    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));

    var pos = scaleToPixels(this.body.GetPosition());
    this.anchor = pos;

    this.contains = function(x, y) {
        var worldPoint = scaleToWorld(x, y);
        var f = this.body.GetFixtureList();
        var inside = f.TestPoint(worldPoint);
        return inside;
    };

    // don't need this anymore
    // this.killBody = function() {
    //     world.DestroyBody(this.body);
    // }


    this.killBody = function() {
        world.DestroyBody(this.body);
    };

    this.done = function() {
        var pos = scaleToPixels(this.body.GetPosition());
        if (pos.y > height + this.w * this.h) {
            this.killBody();
            return true;
        }
        return false;
    };

    // this.done = function() {
    //     var pos = scaleToPixels(this.body.GetPosition());
    //     if (pos.y > height + this.w * this.h) {
    //         this.killBody();
    //         return true;
    //     }
    //     return false;
    // };


    // Drawing the box
    this.display = function(img) {
        // Get the body's position
        var pos = scaleToPixels(this.body.GetPosition());
        this.anchor = pos;
        // Get its angle of rotation
        var a = this.body.GetAngleRadians();

        // Draw it!
        // this.img = head;
        // this.img = uppertorso;
        // this.img = lowtorso;
        // this.img = rarm;
        // this.img = larm;
        // this.img = rleg;
        // this.img = lleg;

        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(a);

        // fill(c-10, c, c+10);
        // fill(175);
        // stroke(200);
        // strokeWeight(2);
        // rect(0, 0, this.w, this.h);
        push();
        rotate(PI);
        image(img, -this.w / 2, -this.h / 2, this.w, this.h);
        pop();

        pop();
    };

}
